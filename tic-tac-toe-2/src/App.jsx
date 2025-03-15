import { useState } from 'react'

// function Square() {
//   return (
//     <button className='square' onClick={handleClick}>{value}</button>
//   )
// }

// export default function Board() {

//   const [value, setValue] = useState(null)

//   const handleClick = () => {
//     setValue('X')
//   }

//   return (
//     <div className='board'>
//       <button className='square' onClick={handleClick}>{value}</button>
//       <button className='square' onClick={handleClick}>{value}</button>
//       <button className='square' onClick={handleClick}>{value}</button>
//       <button className='square' onClick={handleClick}>{value}</button>
//       <button className='square' onClick={handleClick}>{value}</button>
//       <button className='square' onClick={handleClick}>{value}</button>
//       <button className='square' onClick={handleClick}>{value}</button>
//       <button className='square' onClick={handleClick}>{value}</button>
//       <button className='square' onClick={handleClick}>{value}</button>
//     </div>
//   )
// }

export default function Board () {
  
  return (
    <Square/>
  )

}

  function Square () {

    const [value, setValue] = useState(0)

    function handleClick() {
      setValue(
        x => x + 1
      )
    }
    
  return (
    <button onClick={handleClick}>Cek {value}</button>
  )
  }
