import React from 'react';

const Contato = () => {

  // const [nome, setNome] = React.useState('');
  // const [sobrenome, setSobrenome] = React.useState('');
  // const [email, setEmail] = React.useState('');
  // const [celular, setCelular] = React.useState('');
  // const [assunto, setAssunto] = React.useState('');


    

 function handleEvent (){
    window.location.pathname = '/'

  }


  return (
    <div className="container py-sm-6 py-4">
      


      <div className="row rounded shadow p-4">
        <div className="col">
        <h1>SOLICITAR ORÇAMENTO</h1>
        <form onSubmit={handleEvent} action = "https://dev.us10.list-manage.com/subscribe/post?u=7be0dd65ca351019069992978&amp;id=0a9348f331&amp;f_id=007fdde5f0"  method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self">
          <div className="mb-3">
            <label htmlFor="mce-EMAIL" className="form-label">
              Nome
            </label>
            <input
            // onChange={({target})=> setNome(target.value)}
            name="FNAME"
              type="text"
              className="form-control"
              id="nome"
              aria-describedby="nomeHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mce-EMAIL" className="form-label">
              Sobrenome
            </label>
            <input
            // onChange={({target})=> setSobrenome(target.value)}
            name="LNAME"
              type="text"
              className="form-control"
              id="sobrenome"
              aria-describedby="sobrenomeHelp"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Email
            </label>
            <input
            placeholder='exemplo@email.com'
            name='EMAIL'
            // onChange={({target})=> setEmail(target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label  className="form-label" >
              Celular
            </label>
            <input
            placeholder='11 9999-99999'
            name='PHONE'

            // onChange={({target})=> setCelular(target.value)}
              type="text"
              className="form-control"
              id="exampleInputcelular1"
              aria-describedby="celularHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Assunto
            </label>
            <input
            name='ASSUNTO'

            // onChange={({target})=> setAssunto(target.value)}
            placeholder='Descreva o que precisa...'
              type="textarea"
              className="form-control"
              id="assunto"
              aria-describedby="assuntoHelp"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Solicitar Orçamento
          </button>
        </form>
        </div>
        
      </div>
    </div>


  );
};

export default Contato;
