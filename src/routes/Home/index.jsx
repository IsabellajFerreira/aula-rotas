import './style.css'

export default function Home(){

    return(
       
      <div className="home">
      <h1>Bem-vindo à nossa loja de Smartphones e Tablets!</h1>

      <div className="promo-card">
        <div className="promo-image">
          <img
            src="#"  
            alt="Promoção 1"
          />
        </div>
        <div className="promo-details">
          <p className="promo-description">
            Promoção especial: Smartphone de última geração por apenas R$999,99!
          </p>
          <button className="promo-button">Comprar Agora</button>
        </div>
      </div>

      <div className="promo-card">
        <div className="promo-image">
          <img
            src="#" 
            alt="Promoção 2"
          />
        </div>
        <div className="promo-details">
          <p className="promo-description">
            Oferta imperdível: Tablet com desconto de 30% por tempo limitado!
          </p>
          <button className="promo-button">Comprar Agora</button>
        </div>
      </div>
    </div>
  );
}