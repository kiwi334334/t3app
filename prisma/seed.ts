import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const alice = await prisma.user.upsert({
        where: { email: "alice@prisma.io" },
        update: {},
        create: {
            email: "alice@prisma.io",
            name: "alice",
            posts: {
                create: [
                    {
                        title: 'Check out Prisma with Next.js',
                        content: 'https://www.prisma.io/nextjs',
                        published: true,
                    },
                    {
                        title: "NIKEA Next Big Thing",
                        content: "'NICE' Says Nikea CEO",
                        published: true,
                    }
                ],
            },
        }
    });
    console.log({ alice })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
