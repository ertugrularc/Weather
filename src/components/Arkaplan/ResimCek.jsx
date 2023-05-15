import React from 'react'
import yagmurlu from "../../img/rainy.jpg"
import firtinali from "../../img/storm.png"
import gunesli from "../../img/sunny.jpg"
import karli from "../../img/karli.jpg"
import sisli from "../../img/foggy.jfif"
import bulutlu from "../../img/cloud.jpg"
import gokkusagi from "../../img/rainbow-weather.jpg"
function ResimCek({durum}) {
    // SWITCH CASE bir React uygulamasında, kullanıcının bir butona tıklamasına bağlı olarak farklı işlevlerin veya bileşenlerin çalıştırılması gerekebilir. Bu durumda, onClick olayı tetiklendiğinde switch case ifadesi kullanılabilir
  switch (durum) {
    case "Rain":
        return <img className='arkaplan-resim' src={yagmurlu} alt="yağmurlu"/>
    case "Drizzle":
        return <img className='arkaplan-resim' src={yagmurlu} alt="yağmurlu"/>
    case "Clear":
        return <img className='arkaplan-resim' src={gunesli} alt="gunesli"/>
    case "Mist":
        return <img className='arkaplan-resim' src={sisli} alt="sisli"/>
    case "Snow":
        return <img className='arkaplan-resim' src={karli} alt="karli"/>
    case "Storm":
        return <img className='arkaplan-resim' src={firtinali} alt="firtinali"/>
    case "Clouds":
        return <img className='arkaplan-resim' src={bulutlu} alt="bulutlu"/>
    default:
        return <img className='arkaplan-resim' src={gokkusagi} alt="gökkuşağı"/>
  }
}

export default ResimCek