


export default defineEventHandler(async (event) => {
  const contents = await prisma.content.findMany()
  return contents
})
