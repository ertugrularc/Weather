import React from "react";

function Result({ hava }) {
  return (
    <>
      {/* oraya main dememizin sebebi gelen hava derecesi hava.mainden  */}
      {typeof hava.main != "undefined" && (
        <div className="sonuc">
          <div className="sehir">
            {hava.name}, {hava.sys.country}
          </div>
          <div className="detay">
            <div className="derece">{Math.round(hava.main.temp)} c</div>
            <div className="statu">{hava.weather[0].description}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Result;
