import React from 'react';

const Introducao = () => {

  let now = new Date();
  console.log(+now);





  setInterval(()=> {
   
  }, 2000)


  let d = 5
  let m = 60;
  let s = 60;
  let h = 60;

  let timer = `${d} dias ${h}horas ${m}minutos ${s}segundos`

  

 
  return (
    <section className="container">
      <div className="col">
        <span>Promoção de fim de ano</span>

   
      
        <h1>{timer}</h1>
      </div>
    </section>
  );
};

export default Introducao;
