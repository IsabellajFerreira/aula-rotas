import { Link } from "react-router-dom"
import { listaProdutos } from "../../components/ListaProdutos";


export default function Aparelhos(){

    return(
    <div className="aparelhos">
      <h1>Nossos Aparelhos</h1>
      <div className="aparelhos-list">

        
        {listaProdutos.map((aparelho) => (
          <div className="aparelho-card" key={aparelho.id}>
            <h2>{aparelho.nome}</h2>
            <p>Preço: R${aparelho.preco.toFixed(2)}</p>
            <button>Ver Mais</button>
          </div>
        ))}
        
      </div>
    </div>
  );
};

