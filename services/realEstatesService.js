export default async function getListRealEstates (context) {
  const result = await context.$axios.$get()
  // mock service whit 0 register
  /* result.data.unshift({
    id: '43141',
    attributes: {
      name: 'Mis favoritos en cero',
      real_estate_ids: []
    }
  }) */
  return result
}
