export default async function getListRealEstates (context: any) {
  const result: any = await context.$axios.$get()
  result.data.unshift({
    id: '43141',
    attributes: {
      name: 'Mis favoritos en cero',
      real_estate_ids: []
    }
  })
  return result
}
