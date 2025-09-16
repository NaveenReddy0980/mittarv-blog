import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Check if default user exists, else create one
  let defaultUser = await prisma.user.findFirst({
    where: { email: "default@example.com" },
  });

  if (!defaultUser) {
    defaultUser = await prisma.user.create({
      data: {
        id: "author-1",
        name: "Default Author",
        email: "default@example.com",
        password: "hashedpassword", // replace with actual hashed password
      },
    });
  }

  const posts = [
    {
      title: "Learn React in 2025",
      slug: "learn-react-2025",
      content: "React is a powerful library for building UI...",
      excerpt: "A quick intro to React in 2025",
      tags: "react,javascript,frontend",
      published: true,
    },
    {
      title: "Getting Started with Node.js",
      slug: "getting-started-nodejs",
      content: "Node.js allows you to run JavaScript on the server...",
      excerpt: "Introduction to Node.js",
      tags: "nodejs,javascript,backend",
      published: true,
    },
    {
      title: "Understanding Prisma ORM",
      slug: "understanding-prisma-orm",
      content: "Prisma is an amazing ORM for modern databases...",
      excerpt: "Learn how to use Prisma",
      tags: "prisma,orm,database",
      published: true,
    },
    {
      title: "CSS Grid vs Flexbox",
      slug: "css-grid-vs-flexbox",
      content: "Both CSS Grid and Flexbox are powerful layout tools...",
      excerpt: "Compare CSS Grid and Flexbox",
      tags: "css,frontend,design",
      published: true,
    },
    {
      title: "Introduction to TypeScript",
      slug: "introduction-typescript",
      content: "TypeScript adds types to JavaScript for better reliability...",
      excerpt: "Learn TypeScript basics",
      tags: "typescript,javascript,frontend",
      published: true,
    },
    {
      title: "Building REST APIs with Express",
      slug: "building-rest-apis-express",
      content: "Express is a minimalist Node.js framework for APIs...",
      excerpt: "Learn Express basics",
      tags: "express,nodejs,backend",
      published: true,
    },
    {
      title: "React Hooks Deep Dive",
      slug: "react-hooks-deep-dive",
      content: "Hooks like useState, useEffect, and useReducer are essential...",
      excerpt: "Master React Hooks",
      tags: "react,javascript,frontend",
      published: true,
    },
    {
      title: "Deploying Apps on Vercel",
      slug: "deploying-apps-vercel",
      content: "Vercel makes deploying frontend apps super easy...",
      excerpt: "Learn Vercel deployment",
      tags: "vercel,frontend,deployment",
      published: true,
    },
    {
      title: "State Management with Redux Toolkit",
      slug: "state-management-redux-toolkit",
      content: "Redux Toolkit simplifies state management in React...",
      excerpt: "Learn Redux Toolkit",
      tags: "redux,react,frontend",
      published: true,
    },
    {
      title: "SEO Tips for React Apps",
      slug: "seo-tips-react-apps",
      content: "Learn how to make your React apps SEO-friendly...",
      excerpt: "Improve SEO in React",
      tags: "seo,react,frontend",
      published: true,
    },
  ];

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: { ...post, authorId: defaultUser.id },
    });
    console.log(`Seeded post: ${post.title}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
