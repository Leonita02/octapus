import "bootstrap/dist/css/bootstrap.min.css";
// import Row from './row';
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";


function WLdashboard() {
    const [wishList, setWishList] = useState([])
    const [cookies] = useCookies(['userId', 'roleId']);


    useEffect(() => {
        axios.get('http://localhost:8081/wishD')
            .then(res => setWishList(res.data))
            .catch(err => console.log(err));

    }
    )
    const isAuthorized = (allowedRoles) => {
        const userRole = cookies.roleId;
        return allowedRoles.includes(userRole);
      };
    
      if (!isAuthorized([ '2'])) {
        return (
          <div>
            <h1>Unauthorized Access</h1>
            {/* Additional unauthorized access handling */}
          </div>
        );
      }

    const handleDeleteW = async (Wish_ID) => {
        try {
            await axios.delete('http://localhost:8081/wishList/' + Wish_ID)
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }
   

    // Access the user ID and role ID from cookies
   
   
    return (
    <>
     <div className="container mx-auto">
        <div className="row">
            <div className="col-md-12 mt-5">
                <h1 className="text-center">Kerkesat e lexuesve (wishList)</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <Link to='/wishList' className="btn btn-success">Add new </Link>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Titulli</th>
                            <th>Autori</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {wishList.map((data, i) => { // me i printu qato te dhena
                            return (<tr key={i}>
                                <td>{data.Titulli}</td>
                                <td>{data.Autori}</td>
                                
                                <td>
                                    <button className='btn btn-danger' onClick={e => handleDeleteW(data.Wish_ID)}>Delete</button>
                                </td>
                            </tr>)
                        })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    </div>
    </>
    );
}

export default WLdashboard;