//children es para extraer lo de adentro,
//updateBoard es para actualizar el estado
//index es para saber en que posicion esta
//updateBoard es para actualizar el estado
export const Square = ({children, isSelected, updateBoard, index}) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}