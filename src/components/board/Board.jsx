import React from 'react'
import './Board.css'
import Square from '../square/Square'

export default function Board( {squares, click} ) {
  return (
    <div className='board'>
        {
            squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => click(i)} />
            ))
        }
    </div>
  )
}
