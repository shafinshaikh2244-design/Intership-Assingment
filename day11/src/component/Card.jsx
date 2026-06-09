import React from 'react'
import useToggle from '../hooks/useToggle'

const Card = () => {
  const [liked, toggleLiked] = useToggle(false)

  return (
    <div className="card">
      <h3>Card</h3>
      <p>Status: {liked ? 'Liked' : 'Not liked'}</p>
      <button onClick={toggleLiked}>{liked ? 'Unlike' : 'Like'}</button>
    </div>
  )
}

export default Card