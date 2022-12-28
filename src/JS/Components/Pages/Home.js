import React from 'react';
import Head from '../Global/Head';
import Introducao from '../All/Introducao';
import Diferencial from '../All/Diferencial';
import Projetos from '../All/Projetos';
import Planos from '../All/Planos';

const Home = () => {
  return (

    
    <section>
      <Head
        title="Diogo Lima | Desenvovedor Web"
        description="Desenvolvedor Web & UI|UX Design, Programador de sites, Criador de sites, Desenvolvedor de sites  Aumentar as vendas, Desenvolvedor de sites profissional há masi de 1 ano desenvolvendo sites"
      />

      <Introducao/>
      <Diferencial/>
      <Projetos/>
      <Planos/>

    </section>



  );
};

export default Home;
