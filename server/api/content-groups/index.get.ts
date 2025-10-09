


export default defineEventHandler(async (event) => {
  const contentGroups = await prisma.contentGroup.findMany()
  return contentGroups
})
