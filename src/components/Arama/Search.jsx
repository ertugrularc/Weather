import React, { useState } from 'react'

function Search({setHavaDurumu}) {
 

  const api = {
    key: "4b767348b20468813ed245215375efe8",
    base: "https://api.openweathermap.org/data/2.5/weather",
  }

  const [araParametre, setAraParametre] = useState("")

  const ara = (e) => {
    if(e.key === "Enter"){
      // fetch veri alışverişi yapmak için kullanılır
      fetch(`${api.base}?q=${araParametre}&units=metric&lang=TR&appid=${api.key}`)
      .then((veri) => veri.json())
      .then((sonuc) => {
        setAraParametre("")
        setHavaDurumu(sonuc)
        })
    }
  }
  return (
    <div className='arama'>
        <input
         className='arama-input'
          type="text"
           placeholder='Şehir'
           onChange={(e) => setAraParametre(e.target.value)}
           value={araParametre}
           onKeyPress={ara}
           />
    </div>
  )
}

export default Search