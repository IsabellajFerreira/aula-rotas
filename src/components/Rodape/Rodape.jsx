import './Rodape.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export default function Rodape() {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div className="footer-info">
          <p>&copy; 2023 iBella Digital Devices. </p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
