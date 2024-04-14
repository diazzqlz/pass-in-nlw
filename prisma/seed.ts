import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'dcaaba4a-ad5a-4b23-b685-125961ea8478',
      title: 'unite summit',
      slug: 'unite-summit',
      details: 'um evento para devs',
      maximumAttendees: 120
    }
  })
}

seed().then(() => {
  console.log('database seeded!')
  prisma.$disconnect()
})