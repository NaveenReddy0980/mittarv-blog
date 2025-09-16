// src/test-prisma.js
import { PrismaClient } from '@prisma/client';

console.log('Attempting to initialize Prisma Client');
try {
  const prisma = new PrismaClient();
  console.log('Prisma Client initialized');
  prisma.$connect()
    .then(() => console.log('Database connected'))
    .catch((err) => console.error('Database connection error:', err))
    .finally(() => prisma.$disconnect());
} catch (error) {
  console.error('Prisma initialization error:', error);
}