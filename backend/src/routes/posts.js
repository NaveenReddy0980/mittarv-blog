const express = require('express');
const prisma = require('../prisma');
const auth = require('../middleware/auth');
const makeSlug = require('../utils/slugify');

const router = express.Router();

// list posts
router.get('/', async (req, res) => {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    include: { author: { select: { id: true, name: true, avatarUrl: true } } },
  });
  res.json(posts);
});

// get post by slug
router.get('/:slug', async (req, res) => {
  const { slug } = req.params;
  const post = await prisma.post.findUnique({ where: { slug }, include: { author: true } });
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// create post (auth)
router.post('/', auth, async (req, res) => {
  const { title, content, excerpt, tags, coverImage, published } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'title and content required' });
  try {
    const slug = makeSlug(title);
    const post = await prisma.post.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        tags: tags ? tags.join?.(',') ?? tags : null,
        coverImage,
        published: !!published,
        authorId: req.user.id,
      }
    });
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// update post
router.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.post.findUnique({ where: { id } });
  if (!existing) return res.status(404).json({ error: 'Post not found' });
  if (existing.authorId !== req.user.id) return res.status(403).json({ error: 'Forbidden' });

  const { title, content, excerpt, tags, coverImage, published } = req.body;
  try {
    const updated = await prisma.post.update({
      where: { id },
      data: { title, content, excerpt, tags: tags ? tags.join?.(',') ?? tags : null, coverImage, published }
    });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// delete post
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.post.findUnique({ where: { id } });
  if (!existing) return res.status(404).json({ error: 'Post not found' });
  if (existing.authorId !== req.user.id) return res.status(403).json({ error: 'Forbidden' });
  await prisma.post.delete({ where: { id } });
  res.json({ success: true });
});

module.exports = router;
