import { useCatImg } from '../hooks/useCatImg'

export const Otro = () => {
  const fact = 'Gatito'
  const { imageUrl } = useCatImg({ fact })
  return (
    <>
      <h1>Otro</h1>
      {imageUrl && <img src={imageUrl} alt='' />}
    </>
  )
}
