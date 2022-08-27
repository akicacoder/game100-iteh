import React, { useState } from 'react'

export default function GamePage({ onEndGame }) {
  const [usedNumbers, setUsedNumbers] = useState([]);
  const sum = usedNumbers.reduce((acc, val) => acc + val, 0);
  const firstPlayerTurn = usedNumbers.length % 2 === 0;
  const onAddNumber = val => {
    setUsedNumbers(prev => [...prev, val]);
  }

  return (
    <div className='container'>
      <h1 className='p-2 text-center'>Game</h1>
      <div className='row'>
        <div className='col-4'>
          <h2>First player</h2>
        </div>
        <div className='col-4'>
          <h2 className='text-center'>Sum</h2>
          <div className='mt-2'>
            {
              usedNumbers.map(val => {
                return (
                  <div className='p-2' key={val}>
                    {val} +
                  </div>
                )
              })
            }
          </div>
          <div className='mt-2 sum'>
            {sum}
          </div>
        </div>
        <div className='col-4'>
          <h2 className='text-right'>Second player</h2>
        </div>
      </div>
    </div>
  )
}
