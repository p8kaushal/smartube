


export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const content = await prisma.content.create({
    data: body,
  })
  return content
})
