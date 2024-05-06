import React from 'react'

const Map = ({cityName}) => {
  return (
    <div className='flex justify-center absolute bottom-40 left-1/2 h-1/2'>
              <iframe
                
                id="gmap_canvas"
                src={`https://maps.google.com/maps?q=${cityName}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                
              ></iframe>
            </div>
  )
}

export default Map;