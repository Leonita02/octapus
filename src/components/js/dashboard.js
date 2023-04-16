import "bootstrap/dist/css/bootstrap.min.css";
import Row from './row';
function dashboard(){
    return <div className="container mx-auto">
    <div className="row">
      <div className="col-md-12 mt-5">
        <h1 className="text-center">Tabela e punetoreve</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <a href="add.php" className="btn btn-primary">Add New</a>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Emri</th>
              <th>Mbiemri</th>
              <th>Email</th>
              <th>Datelindja</th>
              <th>Qyteti</th>
              <th>Paga</th>
              <th>Nr_Tel</th>
              <th>Qendra</th>
            </tr>
          </thead>
          <Row></Row>
        </table>
      </div>
    </div>
  </div>
}

export default dashboard;