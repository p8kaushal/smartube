


export default defineEventHandler(async (event) => {
  const { id } = event.context.params
  const contentGroup = await prisma.contentGroup.findUnique({
    where: { id: parseInt(id) },
  })
  return contentGroup
})
