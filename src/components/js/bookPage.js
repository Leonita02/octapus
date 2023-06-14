import Nav from './nav';
import Footer from './footer';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
function BookPage() {
  const { id } = useParams();
  const [libri, setLibri] = useState(null);
  const [isInterested, setIsInterested] = useState(false);
  const [cookies] = useCookies(['userId', 'roleId']);
 

  // Access the user ID and role ID from cookies
  const userId = cookies.userId;

  
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/bookPage/${id}`);
        const bookData = response.data;
        setLibri(bookData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBook();
  }, [id]);

  if (libri === null) {
    return <div>Loading...</div>;
  }

  // const handleButtonClick = (event) => {
  //   setIsInterested(true);
  //   event.preventDefault();
  //   console.log("userId from cookie:", userId);
  //   axios.post("http://localhost:8081/bookPage", {userId ,id })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => console.error(err));
  // }

  const handleButtonClick2 = (event) => {
    setIsInterested(true);
    event.preventDefault();
    console.log("userId from cookie:", userId);
    axios.post("http://localhost:8081/bookPage", { userId, id })
    .then(res => {
      console.log(res);
      window.alert("Rezervimi juaj u ruajt!");
    })
    .catch(err => console.error(err));
  }
  
  const isAuthorized = (allowedRoles) => {
    const userRole = cookies.roleId;
    return allowedRoles.includes(userRole);
  };

  if (!isAuthorized(['1','2','3','4'])) {
    return (
      <div>
        <h1>Unauthorized Access</h1>
        {/* Additional unauthorized access handling */}
      </div>
    );
  }

     return(
        <>
       
      <Nav></Nav>

       <br/>
       <br/>
       <br/>
       <br/>
       <div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="foto text-center">
        <img src={require(`../ImagesOfProject/${libri.Url}`)} id="fotoja" alt="foto" className="img-fluid rounded" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="info">
        <h1 id="bookName">{libri.Titulli}</h1>
        <h3 id="authorName">{libri.Autori}</h3>
        <h4>{libri.Isbn}</h4>
        <h4 id="pubYear">{libri.Viti_Publikimit}</h4>
        <h3>Në dispozicion: {libri.Nr_Kopjeve}</h3>
        <button
          type="button"
          id="reserve"
          className={`btn ${isInterested ? 'btn-success' : 'btn-primary'}`}
          onClick={handleButtonClick2}
        >
          {isInterested ? 'U rezervua' : 'Rezervo'}
        </button>
        <hr />
        <br/>
        <br/>
        <div className="desc">
          <h2>Përshkrimi</h2>
          <p id="description">{libri.Pershkrimi}</p>
        </div>
      </div>
    </div>
  </div>
</div>




            <br/>
            <br/>
            <br/>
        <Footer></Footer>
     


      
        
        
        
        </>





    )




}
export default BookPage;