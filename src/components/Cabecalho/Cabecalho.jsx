import { Link } from "react-router-dom";
import './Cabecalho.css'

export default function Cabecalho() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to='/aparelhos'>APARELHOS</Link></li>
                </ul>
            </nav>
        </header>
    )
}