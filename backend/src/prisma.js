const { PrismaClient } = require('../prisma/node_modules/@prisma/client');
const prisma = new PrismaClient();
module.exports = prisma;
