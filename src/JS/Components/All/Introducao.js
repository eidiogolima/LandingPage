import React from 'react';
import Video from '../../../assets/Video/video.mp4';
const Introducao = () => {
  // const [days, setDays] = React.useState('');
  const [hours, setHours] = React.useState('');
  const [mins, setMins] = React.useState('');
  const [seconds, setSeconds] = React.useState('');

  const video = document.body.querySelector('video');

  function play() {
    video.play();
  }

  const countDown = () => {
    const newYear = '29 dec 2022';
    const objective = new Date(newYear);
    const currenteDate = new Date();
    const totalSeconds = (objective - currenteDate) / 1000;
    // eslint-disable-next-line no-unused-vars
    // setDays(Math.floor(totalSeconds / 3600 / 24));
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
    <section className="cor-b-11" id = "home">
      <div className="container-lg py-sm-6 py-4">
        <div className="col">
          <div className="d-grid justify-content-center mb-4">
            <span className="text-secondary-l cor-5">Promoção de fim de ano</span>
            <h1 className="border-bottom border-black">
              {/* <span className="cor-p2" id="days">
                {days} Dias{' '}
              </span> */}
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

          <h1 className="text-center cor-2 mb-4">
            Aumente suas vendas com um site que funciona.
          </h1>
          <p className="text-center cor-4">
            De um tempo pra cá é impossível não reconhecer o tamanho da internet
            e se seu foco for vendas você precisa estar nela. Com um site você
            tem uma vitrine disponível para todo o mundo e um espaço para captar
            mais clientes através de um site bem otimizado e que posiciona bem
            no google.
          </p>

          <video
            onClick={play}
            className="mb-4 shadow rounded"
            src={Video}
            width="100%"
          ></video>

          <div className='text-center mb-4 c'>
            <a className=" cor-1 btn btn-primary" target="_blank"rel="noreferrer noopener" href="https://wa.me/5511915647291">
            ENTRAR EM CONTATO
            </a>
          </div>

          <div class="hstack gap-3 flex-wrap text-center d-flex justify-content-center">
            <div className="">
              <h1 className="cor-2">50+</h1>
              <p className="cor-3">Projetos realizados</p>
            </div>

            <div className="d-sm-block d-none vr "></div>

            <div className="">
              <h1 className="cor-2">50+</h1>
              <p className="cor-3">Clientes Satisfeitos </p>
            </div>

            <div className="d-sm-block d-none vr "></div>

            <div className="">
              <h1 className="cor-2">40+</h1>
              <p className="cor-3">Gerando o dobro de receita </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introducao;
