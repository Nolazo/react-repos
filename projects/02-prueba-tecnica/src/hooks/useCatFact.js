import { useState, useEffect } from 'react'
import { getRandomCatFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomCatFact().then(setFact)
  }
  // para recuperar la cita al cargar la pagina
  useEffect(refreshFact, [])
  return { fact, refreshFact }
}
