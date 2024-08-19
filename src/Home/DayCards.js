import React from 'react'
var moment = require('moment');


export default function DayCards({reading}) {
   let newDate = new Date();
   const date = `${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()}`;
   const weekday = reading.dt *1000
   newDate.setTime(weekday)
      


  return (
    <div className='down'>
<h3 className='gyap'>{moment(newDate).format('dddd')}</h3>
<h7 className='gyap'>{moment(newDate).format('MMMM Do, h:mm a')}</h7>
<h2 className='gyap'>{Math.round(((reading.main.temp)-32)*5/9)}°C</h2>
<h7 className='gyap'>{date}</h7>
<h6 className='gyap'>{reading.weather[0].description}</h6>
</div>
  )
}
