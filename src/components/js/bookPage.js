 import Nav from './nav';
 import '../css/bookPage.css';
import Foto from '../ImagesOfProject/crimeP.jpg';
import Footer from './footer';
function bookPage(){
    return(
        <>
       
      <Nav></Nav>
   
   
   
           
                <div className="komplet">
                <div className="foto">
                <img src ={Foto}  id ="fotoja" alt='foto'></img>
                </div>
                <div className="info">
                    <h1 id='bookName'>Titulli</h1>
                    <h3 id='authorName'>Autori</h3>
                    <h4>ISBN:</h4>
                        <h4 id="pubYear">Viti Publikimit:</h4>
                    <h3>Në dispozicion :</h3>
                    <input  type="button" id="reserve" value="Rezervo librin"></input>
                    
                        <hr></hr>
                        
                       
                    </div>
                </div>
                <div className='desc'>
                    <h2>Përshkrimi</h2>
                    <p id='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
      
              
            
        <Footer></Footer>
     


      
        
        
        
        </>





    )




}
export default bookPage;