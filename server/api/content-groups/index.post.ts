


export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const contentGroup = await prisma.contentGroup.create({
    data: body,
  })
  return contentGroup
})
