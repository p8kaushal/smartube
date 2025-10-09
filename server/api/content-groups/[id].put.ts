


export default defineEventHandler(async (event) => {
  const { id } = event.context.params
  const body = await readBody(event)
  const contentGroup = await prisma.contentGroup.update({
    where: { id: parseInt(id) },
    data: body,
  })
  return contentGroup
})
