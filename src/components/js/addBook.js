import '../css/addBook.css';
import Nav from './nav';
function addBook(){
 return(
    <>
    <Nav></Nav>
    <br></br>
<div class="addBook">
      
      <div class="titulli">
        <h1>SHTO LIBRIN</h1>
        <hr id ='firstHr'></hr>
      </div>
    <div >
      <div>
        <form action="">
          <div>
            <label for="">Titulli:</label>
            <input type="text" name="Name"></input>
          </div>
          <div>
            <label for="">Autori:</label>
            <input type="text" name="Name"></input>
          </div>
          <div>
            <label for="">Viti Botimit:</label>
            <input type="date" name="Name"></input>
          </div>
          <div>
            <label for="">Shtepia Botimit:</label>
            <input type="text" name="Name"></input>
          </div>
          <div>
            <label for="">Numri Kopjeve :</label>
            <input type="number" name="Name"></input>
          </div>
          <div>
            <label for="">Kopertina url :</label>
            <input type="text" name="Photo"></input>
          </div>
          <div>
              <label for="">Pershkrimi:</label>
            <textarea name="Description" id="" cols="" rows="3" ></textarea>          
          </div>
          <div>
            <label for="">Zhanri:</label>
            <input type="text" name="Name"></input>
          </div>
          <div>
            <label for="">Rafti:</label>
            <input type="number" name="Price"></input>
          </div>
            <div>
            <button type="submit" id='add' name="submit" >SHTO!</button>
            <br></br>
            <br></br>
          </div>
        </form>
      </div>
    </div>
  </div>

    
    </>





 )


}
export default addBook;