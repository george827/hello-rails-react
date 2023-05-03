import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchGreeting } from '../store/greetingReducer'

export default function greetings() {
  const dispatch = useDispatch()
  const {loading, error, greeting} = useSelector(state => state.greeting)
  useEffect(() => {
    dispatch(fetchGreeting())
  }, [dispatch])
  const handler = () => {
    dispatch(fetchGreeting())
  }

  return (
    <div className='greeting-container'>
      {loading && <div className='loader'></div>}
      {error && <p>Error!</p>}
      <h1>{!loading && greeting}</h1>
      {!loading && <button className="button-1" onClick={handler}>Refresh</button>}
    </div>
  )
}