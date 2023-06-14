import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaBook, FaClock } from 'react-icons/fa';
import { useCookies } from 'react-cookie';
import logo from '../ImagesOfProject/instagram_profile_image.png';

const DashboardM = () => {
  const [statistics, setStatistics] = useState({
    registeredUsers: 0,
    totalBooks: 0,
    borrowedBooks: 0,
    borrowedForBook: [],
    overdueBooks: 0,
    popularBooks: [],
    avgBorrowDuration: 0,
    activeUsers: [],
    bookCategories: [],
    employeeCount: 0,
    managerCount: 0,
    managerWishes: [],
  });

  useEffect(() => {
    // Fetch the statistics data from the backend API
    fetchStatistics();
  }, []);

  const fetchStatistics = () => {
    // Make an API call using axios to fetch the statistics data
    // Replace the API endpoint with your actual endpoint
    axios
      .get('http://localhost:8081/statistics')
      .then(response => {
        setStatistics(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const [cookies] = useCookies(['userId', 'roleId', 'username']);
  const userRole = cookies.roleId;

  if (!['1', '2', '3'].includes(userRole)) {
    return (
      <div>
        <h1>Unauthorized Access</h1>
        {/* Additional unauthorized access handling */}
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">
    <div className="col-auto">
      <img src={logo} alt="Your Logo" className="img-fluid" style={{maxWidth: '120px',borderRadius:"100%"}} />
    </div>
    <div className="col">
      <h1 className="mb-4"><b>Dashboard</b></h1>
    </div>
  </div>
<b></b>
  

      {/* Display the name of the admin or any other information */}
      <p className="mb-3">Admin: <b>{cookies.username}</b></p>

      {/* Display the overview and statistics */}
      <div className="row">
        {/* Display registered users only for role 1 */}
        {userRole === '1' && (
          <div className="col-md-3 mb-3">
            <div className="card text-center p-4">
              <div className="card-body">
                <FaUser className="dashboard-icon" />
                <h5 className="card-title">Lexues të regjistruar:</h5>
                <p className="card-text display-4">{statistics.registeredUsers}</p>
              </div>
            </div>
          </div>
        )}

        <div className="col-md-3 mb-3">
          <div className="card text-center p-4">
            <div className="card-body">
              <FaBook className="dashboard-icon" />
              <h5 className="card-title">Numri total i librave</h5>
              <p className="card-text display-4">{statistics.totalBooks}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center p-4">
            <div className="card-body">
              <FaBook className="dashboard-icon" />
              <h5 className="card-title">Numri i librave të huazuar</h5>
              <p className="card-text display-4">{statistics.borrowedBooks}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center p-4">
            <div className="card-body">
              <FaClock className="dashboard-icon" />
              <h5 className="card-title">Librat që duhet të kthehen</h5>
              <p className="card-text display-4">{statistics.overdueBooks}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Display the borrowed books for each book */}
      <div className="mt-5">
        <h2>Librat e huazuar</h2>
        <ul className="list-group">
          {statistics.borrowedForBook.map(book => (
            <li className="list-group-item" key={book.Titulli}>
              <span className="fw-bold">Titulli:</span> {book.Titulli}
              <span className="ms-3 fw-bold">Numri huazimeve:</span> {book.borrowCount}
            </li>
          ))}
        </ul>
      </div>

      {/* Display the popular books */}
      <div className="mt-5">
        <h2>Librat më të huazuar</h2>
        <ul className="list-group">
          {statistics.popularBooks.map(book => (
            <li className="list-group-item" key={book.Titulli}>
              <span className="fw-bold">Titulli:</span> {book.Titulli}
              <span className="ms-3 fw-bold">Numri huazimeve:</span> {book.borrowCount}
            </li>
          ))}
        </ul>
      </div>

      {/* Display the active users */}
      <div className="mt-5">
        <h2>Lexuesit aktivë</h2>
        <ul className="list-group">
          {statistics.activeUsers.map(user => (
            <li className="list-group-item" key={user.Emri + user.Mbiemri}>
              <span className="fw-bold">Lexuesi:</span> {user.Emri} {user.Mbiemri}
              <span className="ms-3 fw-bold">Numri huazimeve:</span> {user.borrowCount}
            </li>
          ))}
        </ul>
      </div>

      {/* Display the book categories */}
      <div className="mt-5">
        <h2>Librat sipas kategorive</h2>
        <ul className="list-group">
          {statistics.bookCategories.map(category => (
            <li className="list-group-item" key={category.zhanri}>
              <span className="fw-bold">Kategoria:</span> {category.zhanri}
              <span className="ms-3 fw-bold">Nr. librave</span> {category.bookCount}
            </li>
          ))}
        </ul>
      </div>

      {/* Display the employee and manager counts for role 1 */}
      {userRole === '1' && (
        <div className="mt-5">
          <h2>Numri i punëtorëve dhe menaxherëve</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="fw-bold">Numri i punëtorëve:</span> {statistics.employeeCount}
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Numri i menaxherëve:</span> {statistics.managerCount}
            </li>
          </ul>
        </div>
      )}

      {/* Display the manager wishes for role 2 */}
      {userRole === '2' && (
        <div className="mt-5">
          <h2>Librat e kërkuara nga lexuesit:</h2>
          <ul className="list-group">
            {statistics.managerWishes.map(wish => (
              <li className="list-group-item" key={wish.Titulli}>
                <span className="fw-bold">Titulli:</span> {wish.Titulli}
                <span className="ms-3 fw-bold">Autori:</span> {wish.Autori}
                <span className="ms-3 fw-bold">Nr. i kërkesave:</span> {wish.NumriKerkesave}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display the average borrow duration */}
      <div className="mt-5">
        <h2>Koha mesatare e huazimit</h2>
        <p>{statistics.avgBorrowDuration} ditë</p>
      </div>
    </div>
  );
};

export default DashboardM;
