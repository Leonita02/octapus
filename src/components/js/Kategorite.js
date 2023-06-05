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

// import axios from 'axios';
// import { useState, } from 'react';
// export default function Kategorite() {

//   return (
//     <>
//       <div className="mt-5 kategorite">
//         <ul className="d-flex" style={{ listStyleType: 'none', justifyContent: 'center', columnGap: '20px' }}>
//           <li><button onClick={() => handleCategoryClick('Romance')} style={{ textDecoration: 'none', color: 'grey', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>Romance</button></li>
//           <li><button onClick={() => handleCategoryClick('Drama')} style={{ textDecoration: 'none', color: 'grey', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>Drama</button></li>
//           <li><button onClick={() => handleCategoryClick('Aksion')} style={{ textDecoration: 'none', color: 'grey', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>Aksion</button></li>
//           <li><button onClick={() => handleCategoryClick('Fantazi')} style={{ textDecoration: 'none', color: 'grey', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>Fantazi</button></li>
//           <li><button onClick={() => handleCategoryClick('Krim')} style={{ textDecoration: 'none', color: 'grey', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>Krim</button></li>
//           <li><button onClick={() => handleCategoryClick('Bestseller')} style={{ textDecoration: 'none', color: 'grey', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>Bestseller</button></li>
//           <li><button onClick={() => handleCategoryClick('Klasike')} style={{ textDecoration: 'none', color: 'grey', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>Klasikë</button></li>
//         </ul>
//       </div>

//       {/* Render books */}
//       {libri.map((data, i) => (
//         <div key={i} className="flip-card" onClick={() => navigateToBook(data.Isbn)}> 
//           <div className="flip-card-inner">
//             <div className="flip-card-front">
//                <img src={require(`../ImagesOfProject/${data.Url}`)} alt="Libri" /> 
//             </div>
//             <div className="flip-card-back">
//               <h1>{data.Titulli}</h1>
//               <p>{data.Autori}</p>
//               <p>{data.Pershkrimi}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }