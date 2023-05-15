import './index.css';
import Arama from "./components/Arama/Search"
import Arkaplan from "./components/Arkaplan/Index"
import Sonuc from "./components/Sonuc/Result"
import { useState } from 'react';


function App() {
  const [havaDurumu, setHavaDurumu] = useState({})
  return (
    <section className="uygulama">
      {/* havadurumu.weather içinde bilgi varsa weather[0].main parametresini gönder */}
     <Arkaplan background={havaDurumu.weather && havaDurumu.weather[0].main} />
     <div id='baslik'> Hava Durumu
     </div>
     <Arama setHavaDurumu={setHavaDurumu} />
     <Sonuc hava={havaDurumu} />
     
    </section>
  );
}

export default App;
