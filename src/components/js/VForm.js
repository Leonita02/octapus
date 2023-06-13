// import '../css/VForm.css';
import {useState} from 'react';
import { FaUser, FaIdCard, FaBuilding, FaCalendarAlt, FaRegCalendarAlt, FaPen } from 'react-icons/fa';
import { useCookies } from 'react-cookie';
import axios from 'axios';




function VF() {
    const [dataFillimit, setDataFillimit] = useState(0)
    const [dataMbarimit, setDataMbarimit] = useState(0)
    const [arsyeja, setArsyeja] = useState("")
    const [cookies] = useCookies(['userId', 'roleId']);

    // Access the user ID and role ID from cookies
    const userId = cookies.userId;
    const isAuthorized = (allowedRoles) => {
      const userRole = cookies.roleId;
      return allowedRoles.includes(userRole);
    };
  
    if (!isAuthorized(['2', '3'])) {
      return (
        <div>
          <h1>Unauthorized Access</h1>
          {/* Additional unauthorized access handling */}
        </div>
      );
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("userId from cookie:", userId);
        axios.post("http://localhost:8081/menaxhimiP", { dataFillimit, dataMbarimit,arsyeja, userId })
          .then(res => {
            console.log(res);
            
          })
          .catch(err => console.error(err));
      }
    return (
        <>
        <br></br>
            <br></br>
            <br></br>
            <div className="container py-5" >
      <div className="row justify-content-center" >
        <div className="col-lg-6" style={{backgroundColor:"#f8f9fa" , border:"1px solid gray"}}>
          <div className="vacation-request" >
            <br></br>
            <h1 className="text-center">Kërkesë për pushime</h1>
            <hr className="my-4" />
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label htmlFor="startDate">
                  <FaCalendarAlt /> Data e fillimit
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dataFillimit"
                  value={dataFillimit}
                  onChange={(e) => setDataFillimit(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="endDate">
                  <FaRegCalendarAlt /> Data Mbarimit
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dataMbarimit"
                  value={dataMbarimit}
                  onChange={(e) => setDataMbarimit(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="reason">
                  <FaPen /> Arsyeja
                </label>
                <textarea
                  className="form-control"
                  id="arsyeja"
                  rows="3"
                  value={arsyeja}
                  onChange={(e) => setArsyeja(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                   Dërgo kërkesën
                </button>
                <br></br>   
                <br></br>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  
  
  
  


        </>
    )
}
export default VF;