import '../css/VForm.css';
function VF() {
    return (
        <>

            <br></br>
            <div class="kerkesaP">

                <div class="titulli">
                    <h1>Kerkesa e Pushimeve</h1>
                    <hr id='firstHr'></hr>
                </div>
                <div >
                    <div>
                        <form action="">
                            <div>
                                <label for="">ID</label>
                                <input type="text" name="ID"></input>
                            </div>
                            <div>
                                <label for="">Emri:</label>
                                <input type="text" name="Name"></input>
                            </div>
                            <div>
                                <label for="">Mbiemri</label>
                                <input type="text" name="surname"></input>
                            </div>
                            <div>
                                <label for="">Data e Fillimit te Pushimit</label>
                                <input type="date" name="Data_Kohezgjatja"></input>
                            </div>
                            <div>
                                <label for="">Kohëzgjatja</label>
                                <input type="text" name="Data_Kohezgjatja"></input>
                            </div>
                            <div>
                                <button type="submit" id='add' name="submit" >APLIKO!</button>
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
export default VF;