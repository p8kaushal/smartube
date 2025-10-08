import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { id } = event.context.params
  const content = await prisma.content.findUnique({
    where: { id: parseInt(id) },
  })
  return content
})
