


import style from "./stars.module.css"; // Importa los estilos correctamente
import React from 'react';

const Stars = () => {
  return (
    <div className={style.cont}>
    <div className={style.stars}> {/* Usar className en lugar de class */}
      <div className={style.star}></div>
   
     
    </div>
    <div className={style.stars}> {" "}
      <div className={style.star}></div>
      {" "}
      <div className={style.star}></div>
    </div>
    <div className={style.stars}> {/* Usar className en lugar de class */}
     
   
      <div className={style.star}></div>
    </div>
    <div className={style.stars}> 
        {" "}{" "}
      <div className={style.star}></div>
    </div>
    {" "}{" "}
    <div className={style.stars}> 
    {" "}{" "}
      <div className={style.star}></div>
    </div>
    {" "}{" "}{" "}{" "}
    <div className={style.stars}> 
    {" "}{" "}
      <div className={style.star}></div>
    </div>
    </div>
  );
}

export default Stars;
