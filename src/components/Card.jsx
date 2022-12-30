import React from 'react'
import '../css/Card.css'


export default function Card(prop) {
  console.log(prop)

  let badgetext
  if (prop.card.openSpots === 0) {
    badgetext = 'Sold out'
  } else if (prop.card.location === "Online") {
    badgetext = "ONLINE"
  }

  return (
    
    <div className='card'>
     {badgetext && <div className='card--badge'>{badgetext}</div>}
      <img className="card--img" src={`/assets/${prop.card.coverImg}`} alt="Katie Zaferes"/>
      <div className="card--stats">
        <img className='card--star' src="/assets/Star 1.png" />
        <span>{prop.card.stats.rating}</span>
        <span className='gray'>({prop.card.stats.reviewCount}) • </span>
        <span className='gray'>{prop.card.location}</span>
      </div>
      <p>{prop.card.title}</p>
      <p className='card--price'><span className="bold">From ${prop.card.price}</span> / person</p>
    </div>
  )
}
