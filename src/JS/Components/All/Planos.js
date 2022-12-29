import React from 'react';
import {Link} from 'react-router-dom'
import Check from '../../../assets/icons/check.svg';
import CheckBlack from '../../../assets/icons/check-black.svg';

const Planos = () => {
  return (
    <section className="cor-b-2 pb-6 pt-6">
      <div className="container">
        <h1>
          PLANOS<span className="cor-p1">.</span>
        </h1>

        <div className="row gap-5 rounded mx-2">
          {/* Card */}
          <div className="col cor-b-3 mt-4 p-0  shadow rounded text-center">
            <h2 className="text-center p-3 mb-0 cor-b-4 cor-10 ">INICIAL</h2>
            <ul className="list-item cor-b-10 cor-2 p-4 ">
              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px' className="me-2" src={Check} alt="" />
                Design único
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={Check} alt="" /> Site otimizado
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={Check} alt="" /> até 5 páginas
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={Check} alt="" /> Domínio/hospedagem
                Grátis p/1 anos
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={Check} alt="" /> Site com boa
                performance no google
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={Check} alt="" />
                Sem suporte após entrega
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={Check} alt="" />
                Não gerenciável
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="col cor-b-3 mt-4 p-0  shadow rounded text-center">
            <h2 className="text-center p-3 mb-0 cor-b-4 cor-10 ">MÉDIO</h2>
            <ul className="list-item cor-b-10 cor-2 p-4 ">
              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={Check} alt="" /> Design avançado
              </li>
              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={Check} alt="" /> Site otimizado
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={Check} alt="" /> Minímo 10 páginas
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={Check} alt="" /> Domínio/hospedagem
                Grátis p/3 anos
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={Check} alt="" /> Site com boa
                performance no google
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={Check} alt="" />
                Suporte prioritário 1 mês
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={Check} alt="" />
                Manutenção em 3 meses
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="col cor-b-3 mt-4 p-0  shadow rounded text-center">
            <h2 className="text-center p-3 mb-0 cor-b-p1 cor-2 ">AVANÇADO</h2>
            <ul className="list-item cor-b-2 cor-11 p-4 ">
              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={CheckBlack} alt="" /> Design
                planejado
              </li>
              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={CheckBlack} alt="" /> Site otimizado
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={CheckBlack} alt="" /> Minímo 15
                páginas
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={CheckBlack} alt="" />{' '}
                Domínio/hospedagem Grátis p/3 anos
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={CheckBlack} alt="" /> Site com boa
                performance no google
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={CheckBlack} alt="" />
                Suporte durante 3 meses
              </li>

              <li className="item-list mb-2 text-secondary-l">
                <img width="20px" height='17px'className="me-2" src={CheckBlack} alt="" />
                Site gerenciável
              </li>
            </ul>
          </div>
        </div>

        <div className='text-center'>
          <Link to = "/contato" className='mt-4 btn btn-primary p-3'>SOLICITAR ORÇAMENTO</Link>
        </div>
      </div>
    </section>
  );
};

export default Planos;
