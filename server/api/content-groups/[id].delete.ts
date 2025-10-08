import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { id } = event.context.params
  const contentGroup = await prisma.contentGroup.delete({
    where: { id: parseInt(id) },
  })
  return contentGroup
})
