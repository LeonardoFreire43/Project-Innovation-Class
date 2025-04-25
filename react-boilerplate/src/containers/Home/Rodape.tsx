import { JSX } from "react";
import "./Rodape.css";

export const Rodape = (): JSX.Element => {
  return (
    <div className="box">
      <div className="retngulo" />
      <div className="frame">
        <img className="instagram" alt="Instagram" src="/instagram.svg" />
        <img className="facebook" alt="Facebook" src="/facebook.svg" />
        <img className="youtube-logo" alt="YouTube logo" src="/Youtube.svg" />
        <img className="logo-tiktok-svgrepo" alt="TikTok logo" src="/tiktok.svg"/>
      </div>
      <div className="avanti"> <img className="avanti-logo" src="Avanti.svg" alt="" /> </div>
        <div className="label">
            <p className="institucional">
                <span className="text-wrapper">&lt;h4&gt; </span>
                <span className="span">Institucional</span>
            </p>
        </div>
        <div className="labe2">
            <p className="sobre-n-s">
                <span className="text-wrappe">&lt;h5&gt; </span>
                <span className="span">&nbsp;</span>
                <span className="text-wrapper-3">Sobre Nós
                    <br/>
                </span>
                <span className="text-wrapper">&lt;h5&gt; </span>
                <span className="span">&nbsp;</span>
                <span className="text-warpper-2">
                    Nossas Lojas
                    <br/>
                </span>
                <span className="text-wrapper">&lt;h5&gt; </span>

                <span className="text-wrapper-2">
                    Privacidade e Segurança
                    <br/>
                </span>
                <span className="text-wrapper">&lt;h5&gt; </span>

                <span className="text-wrapper-2">
                    Privacidade e Seguerança
                    <br/>
                </span>
            </p>
        </div>
        <div className="label3">
            <p className="central-de-ajuda">
                <span className="text-wrapper">&lt;h4&gt; </span>
                <span className="span1">Central De Ajuda</span>
            </p>
        </div>
        <div className="labe4">
            <p className="fale-conosco">
                <span className="text-wrappe">&lt;h5&gt; </span>
                <span className="span">&nbsp;</span>
                <span className="text-wrapper-3">Fale Conosco
                    <br/>
                </span>
                <span className="text-wrapper">&lt;h5&gt; </span>
                <span className="span">&nbsp;</span>
                <span className="text-warpper-2">
                    Frete e Entrega
                    <br/>
                </span>
                <span className="text-wrapper">&lt;h5&gt; </span>

                <span className="text-wrapper-2">
                    Troca e Devoluções
                    <br/>
                </span>
                <span className="text-wrapper">&lt;h5&gt; </span>

                <span className="text-wrapper-2">
                    Formas de Pagamento
                    <br/>
                </span>
                <span className="text-wrapper">&lt;h5&gt;</span>
                <span className="span"> FAQ</span>
            </p>
        </div>
        <div className="label3">
            <p className="hor">
                <span className="text-wrapper">&lt;h4&gt; </span>
                <span className="span2">Atendimento</span>
            </p>
        </div>
        <div className="labe4">
            <p className="horario">
                <span className="text-wrappe">&lt;h5&gt; </span>
                <span className="span">&nbsp;</span>
                <span className="text-wrapper-3"> Telefone: (00) 0000-0000
                    <br/>
                </span>
                <span className="text-wrapper">&lt;h5&gt; </span>
                <span className="span">&nbsp;</span>
                <span className="text-warpper-2">
                    E-mail: exemplo@exemplo.com.br
                    <br/>
                </span>
                <span className="text-wrapper">&lt;h5&gt; </span>

                <span className="text-wrapper-2">
                    Horário de Atendimento: 08:00 às 18:00
                    <br/>
                </span>
                <span className="text-wrapper">
                    Segunda a Sábado: 07h00 às 23h00
                    <br/>
                    Domingos e Feriados:&nsbsp;&nbsp;07h00 às 23h00
                </span>
            </p>
        </div>
        <div className="icons">
            <div className="marcas">
                <img className="amex" src="/amex.svg" alt="" />
                <img className="união32" src="/União 32.svg" alt="" />
                <img className="visa" src="/visa.svg" alt="" />
                <img className="hipercard" src="/hipercard.svg" alt="" />
                <img className="elo" src="/elo.svg" alt="" />
                <img className="emp" src="/emp.svg" alt="" />
                <img className="paypal" src="/paypal.svg" alt="" />
                <img className="união39" src="/união39.svg" alt="" />
                <img className="icon-boleto" src="/icon-boleto.svg" alt="" />
            </div>
        </div>
        <div className="Label5">
            <div className="lorem">
                <p className="lorem-impsum">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>
            </div>
            <div className="patrocinadores">
                <div className="icons-2">
                    <img className="let" src="/let.svg" alt="" />
                    <img className="vtx" src="/vtex-pci.svg" alt="" />
                    <img className="avanti2" src="/Avanti.svg" alt="" />
                    <img className="vtex" src="/VTEx.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  );
};