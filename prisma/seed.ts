import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const existingLead = await prisma.user.findFirst({ where: { role: 'LEAD' } });
  if (!existingLead) {
    const hashedPassword = await bcrypt.hash('password123', 10);
    const lead = await prisma.user.create({
      data: {
        name: 'Lead User',
        email: 'lead@example.com',
        password: hashedPassword,
        role: 'LEAD',
      },
    });

    await prisma.user.createMany({
      data: [
        {
          name: 'Team Member 1',
          email: 'team1@example.com',
          password: hashedPassword,
          role: 'TEAM',
        },
        {
          name: 'Team Member 2',
          email: 'team2@example.com',
          password: hashedPassword,
          role: 'TEAM',
        },
      ],
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
