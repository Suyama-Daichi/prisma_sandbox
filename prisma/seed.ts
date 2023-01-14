import { prisma } from "./prismaClient";

async function main() {
  await prisma.user.createMany({
    data: {
      id: 1,
      name: "suyama-daichi",
      email: "symdit@gmail.com",
      floatColumn: 1.23,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
