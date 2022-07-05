import React from 'react'

export default function ECard({event}) {
  return (
   <div className='card-container'>
       <div className='card'>
          <img src={event?.fields.image} alt="poster" />
          <div className='card-element'>
              <h2>{event.fields.title}</h2>
              <h5>{event.fields.description}</h5>
              <p>{event.fields.free_text}</p>
          </div>
      </div>
   </div>
  )
}



// <h1>{event.fields.title}</h1>
// <h5>{event.fields.address}</h5>
// <span>{event.fields.description}</span>
// <img src={ event?.fields.image} alt="poster" />
