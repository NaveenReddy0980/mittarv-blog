// src/prisma.js
import { PrismaClient } from '@prisma/client';
console.log('Attempting to initialize Prisma Client');
const prisma = new PrismaClient();
console.log('Prisma Client initialized');
export default prisma;