import React from 'react';
import Perfil from '../../../assets/img/perfil/perfil.png';
const Introducao = () => {
  const [days, setDays] = React.useState('');
  const [hours, setHours] = React.useState('');
  const [mins, setMins] = React.useState('');
  const [seconds, setSeconds] = React.useState('');

  const countDown = () => {
    const newYear = '01 jan 2023';
    const objective = new Date(newYear);
    const currenteDate = new Date();
    const totalSeconds = (objective - currenteDate) / 1000;
    // eslint-disable-next-line no-unused-vars
    setDays(Math.floor(totalSeconds / 3600 / 24));
    // eslint-disable-next-line no-unused-vars
    setHours(Math.floor(totalSeconds / 3600) % 24);
    // eslint-disable-next-line no-unused-vars
    setMins(Math.floor(totalSeconds / 60) % 60);
    // eslint-disable-next-line no-unused-vars
    setSeconds(Math.floor(totalSeconds) % 60);
  };

  setInterval(() => {
    countDown();
  }, 1000);

  // const formatTime = (time) => {
  //   return time < 10 ? `0${time}` : time;
  // };

  return (
    <section className="cor-b-2" id="home">
      <div className="container-lg py-sm-6 py-4 mx-auto row d-flex justify-content-center align-items-center">
        <div className="col d-none d-xxl-block">
          <img src={Perfil} alt="" />
        </div>


        <div className="col">
          <div className="d-grid justify-content-start mb-4">
            <span className="text-secondary-l cor-7 fw-semibold">
              Promoção fim de ano
            </span>
            <h1 className="border-bottom border-black">
              <span className="cor-p2" id="days">
                {days} Dias{' '}
              </span>
              <span className="cor-p2" id="hours">
                {hours} horas{' '}
              </span>
              <span className="cor-p2" id="mins">
                {mins} minutos{' '}
              </span>
              <span className="cor-p2" id="seconds">
                {seconds}s{' '}
              </span>
            </h1>
          </div>

          <h1 className="text-start cor-11 mb-4">
            Aumente suas vendas com um site que funciona.
          </h1>
          <p className="text-start cor-8 fw-semibold">
            Olá me chamo Diogo Lima e sou Desenvolvedor de sites e UX | UI Designer, trabalho mais de 1 ano no meio e venho ajudando as empresas/pessoas a expandir seus sonhos. Entre em contato para mais informações 
          </p>

          

          <div class="hstack gap-3 d-flex justify-content-start mt-4">
            <div className="">
              <h1 className="cor-10">50+</h1>
              <p className="cor-7">Projetos realizados</p>
            </div>

            <div className="d-sm-block d-none vr "></div>

            <div className="">
              <h1 className="cor-10">50+</h1>
              <p className="cor-7">Clientes Satisfeitos </p>
            </div>

            <div className="d-sm-block d-none vr "></div>

            <div className="">
              <h1 className="cor-10">40+</h1>
              <p className="cor-7">Gerando o dobro de receita </p>
            </div>
          </div>

          <div className="text-start mt-3 c">
            <a
              className=" cor-1 btn btn-primary"
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/5511915647291"
            >
              ENTRAR EM CONTATO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introducao;
