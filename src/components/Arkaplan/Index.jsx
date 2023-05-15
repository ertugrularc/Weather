import React from 'react'
import ResimCek from './ResimCek'
function Index({background}) {
  return (
    <div className='arkaplan'>
        <div className="overlay">
            <ResimCek durum={background} />
        </div>
    </div>
  )
}

export default Index