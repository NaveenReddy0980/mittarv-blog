require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
