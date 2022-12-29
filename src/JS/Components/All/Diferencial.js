import React from 'react';

import Rapido from '../../../assets/icons/Vector.svg'
import Google from '../../../assets/icons/Vector-1.svg'
import Seguro from '../../../assets/icons/Vector-2.svg'
import Vivivel from '../../../assets/icons/Vector-3.svg'

const Diferencial = () => {
  return (
    <section className=" cor-b-1 py-sm-6 py-4">
      <div className="container">
        <h1 className="mb-4">
          DIFERENCIAL<span>.</span>
        </h1>

        <div className="  mx-2 d-grid d-sm-flex row text-center gap-3 cor-b-3 p-4 rounded position-relative z-0">
       
          <div className="col text-center">
            <img width="78px" height='54px' className= "mb-3" src={Rapido} alt="" />
            <h2 className="cor-11">Maior Desempenho</h2>
            <p>
              Sites bem otimizado trás um conforto maior ao usuário, afinal
              ninguém gosta de esperar{' '}
            </p>
          </div>
          <div className="col text-center">
            <img width="78px" height='54px' className= "mb-3" src={Google}  alt="" />
            <h2>Ranking Google</h2>
            <p>
              Desenvolver sites não é uma tarefa fácil, tem que existir um
              design único uma pesquisa de mercado para seu site gerar valor
              para o usuário{' '}
            </p>

          </div>  

          
          

          <div className="col text-center cor-b-12 shadow rounded p-2 position-relative z-3 estoura">
            <img width="78px" height='54px' className= "mb-3" src={Vivivel} alt="" />
            <h2 className='cor-2'>Funcional</h2>
            <p className='cor-4'>
              Não basta apenas ter um site, o site tem que se posicionar bem nas
              buscar do google e para isso o prestador de serviço tem que
              conhecer bem a estrutura de um site e SEO também como marketing
              digital para buscar palavras chave que ão engajar o seu negócio
              para cima das nuvens{' '}
            </p>
          </div>

         

          <div className="col text-center">
            <img width="78px" height='54px' className= "mb-3" src={Seguro} alt="" />
            <h2>Seguro</h2>
            <p>
              Sinta-se Seguro com os seus dados sem nehum tipo de vazamento,
              proteção por SSL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferencial;
