import React, { useState } from 'react'
import './Game.css'
import { calculateWinner } from '../../helper'
import Board from '../board/Board'

export default function Game() {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
    
        // Определить был ли клик по ячейке или игра окончена
        if (winner || boardCopy[index] ) return 
    
        // Определить чей ход X ? O
        boardCopy [index] = xIsNext ? 'X' : 'O'
    
        //Обновить на стейт
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
      }

      const startNewGame = () => {
        return (
          <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))}> Очистить поле </button>
        )
      }

  return (
    <div className='wrapper'>

        { startNewGame() }
            <Board squares={board} click={handleClick}/>
        <p className='gameInfo'>
          {  winner ? 'Победитель ' + winner : "Сейчас ходит " + ( xIsNext ? 'X' : 'O')}
        </p>

    </div>
  )
}
