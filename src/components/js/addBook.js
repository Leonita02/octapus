import '../css/addBook.css';
import Nav from './nav';
function addBook(){
 return(
    <>
    
<div class="addBook">
      
      <div class="titulli">
        <h1>SHTO LIBRIN</h1>
        <hr id ='firstHr'></hr>
      </div>
    <div >
      <div>
        <form action="">
        <div>
            <label for="">ISBN :</label>
            <input type="number" name="isbn"></input>
          </div>
          <div>
            <label for="">Titulli:</label>
            <input type="text" name="Titulli"></input>
          </div>
          <div>
            <label for="">Autori:</label>
            <input type="text" name="Autori"></input>
          </div>
          <div>
            <label for="">Viti Botimit:</label>
            <input type="number" name="vitiBotimit"></input>
          </div>
          <div>
            <label for="">Shtepia Botimit:</label>
            <input type="text" name="shtepiaBotimit"></input>
          </div>
          <div>
            <label for="">Numri Kopjeve :</label>
            <input type="number" name="nrKopjeve"></input>
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
            <input type="text" name="Zhanri"></input>
          </div>
          <div>
            <label for="">Rafti:</label>
            <input type="number" name="Rafti"></input>
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