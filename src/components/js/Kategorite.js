import { Link } from "react-router-dom";
import '../css/Kategorite.css'
import { useLocation } from "react-router-dom";

export default function Kategorite() {
  const location = useLocation();

  return (
    <>
  <div className="mt-5 kategorite">
          <ul className="d-flex" style={{ listStyleType: 'none', justifyContent: 'center' }}>
            <li>
              <Link to="/Feed" style={{ textDecoration: 'none', color: 'grey' }}>
                Të Gjitha
              </Link>
            </li>
            <li>
              <Link to="/Romance" style={{ textDecoration: 'none', color: 'grey' }}>
                Romance
              </Link>
            </li>
            <li>
              <Link to="/Drame" style={{ textDecoration: 'none', color: 'grey' }}>
                Drame
              </Link>
            </li>
            <li>
              <Link to="/Fantazi" style={{ textDecoration: 'none', color: 'grey' }}>
                Fantazi
              </Link>
            </li>
            <li>
              <Link to="/Krim" style={{ textDecoration: 'none', color: 'grey' }}>
                Krim
              </Link>
            </li>
            <li>
              <Link to="/Bestseller" style={{ textDecoration: 'none', color: 'grey' }}>
                Bestseller
              </Link>
            </li>
            <li>
              <Link to="/Klasike" style={{ textDecoration: 'none', color: 'grey' }}>
                Klasikë
              </Link>
            </li>
          </ul>
        </div>
</>
  );
}

