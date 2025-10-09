


export default defineEventHandler(async (event) => {
  const { id } = event.context.params
  const body = await readBody(event)
  const content = await prisma.content.update({
    where: { id: parseInt(id) },
    data: body,
  })
  return content
})
