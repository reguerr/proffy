import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


function TeacherItem () {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/30126229?s=460&u=93ab4ea5fe6f2a59cc6fd14f0ce0839b1f67daa5&v=4" alt="Renata Guerra"/>
        <div>
          <strong>Renata Guerra</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Pessoa dura por fora mas mole por dentro.
        <br /><br />
        Apaixonada por tudo que tem botões e luzinhas, adora um eletronico e se possível tem todos que existem na face da terra. Seria uma ótima blogueirinha mas né!
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;