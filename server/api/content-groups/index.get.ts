import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const contentGroups = await prisma.contentGroup.findMany()
  return contentGroups
})
