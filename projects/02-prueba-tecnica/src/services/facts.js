const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// originalmente esto se trasnformo en async await apretando ctrl+.
// return fetch(CAT_ENDPOINT_RANDOM_FACT)
// .then(res => res.json())
// .then(data => {
// // fact es una propiedad de data
//   const { fact } = data
//   return fact
// })

export const getRandomCatFact = async () => {
  // ❌ useState is not available here
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  // fact es una propiedad de data
  const { fact } = data
  return fact
}
