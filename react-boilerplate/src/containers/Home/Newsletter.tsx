import "./Newsletter.css";
import { JSX } from "react";

export const Newsletter = (): JSX.Element => {
  return (
    <div className="newsletter-frame">
      <div className="newsletter-group">
        {/* Título */}
        <p className="newsletter-title">
          <span className="text-wrapper">Cadastre-se na nossa </span>
          <span className="highlight">newsletter</span>
        </p>

        {/* Formulário */}
        <div className="newsletter-form">
          {/* Nome */}
          <div className="input-wrapper">
            <div className="input-container">
              <input
                type="text"
                className="newsletter-input"
                placeholder="Digite seu nome"
              />
            </div>
          </div>

          {/* E-mail */}
          <div className="input-wrapper">
            <div className="input-container">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Digite seu e-mail"
              />
            </div>
          </div>

          {/* Política de Privacidade */}
          <div className="privacy-wrapper">
            <div className="privacy-policy">
              <input type="checkbox" id="privacy" className="checkbox" />
              <label htmlFor="privacy" className="privacy-label">
                Estou de acordo com a <span className="highlight">Política de Privacidade</span>
              </label>
            </div>
          </div>

          {/* Botão */}
          <div className="button-wrapper">
            <button className="button-large-instance">Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
