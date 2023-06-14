import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { BellFill } from 'react-bootstrap-icons';

const Popup = () => {
  const [show, setShow] = useState(false);
  const [returnDate, setReturnDate] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [notifications, setNotifications] = useState([]);

  const monthNames = {
    0: 'Janar',
    1: 'Shkurt',
    2: 'Mars',
    3: 'Prill',
    4: 'Maj',
    5: 'Qershor',
    6: 'Korrik',
    7: 'Gusht',
    8: 'Shtator',
    9: 'Tetor',
    10: 'Nentor',
    11: 'Dhjetor',
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cookies] = useCookies(['userId', 'roleId']);
  const userId = cookies.userId;

  useEffect(() => {
    axios
      .get(`http://localhost:8081/popupL?userId=${userId}`)
      .then(res => {
        const returnDate = new Date(res.data.returnDate);
        const currentDate = new Date();
        const day = returnDate.getDate();
        const month = monthNames[returnDate.getMonth()];
        const year = returnDate.getFullYear();
        const formattedReturnDate = `${day} ${month} ${year}`;
        setReturnDate(formattedReturnDate);

        const newNotifications = [];

        if (returnDate < currentDate && returnDate != null) {
          newNotifications.push('Afati ka skaduar. Ju lutemi, kthejeni librin.');
        }

        axios
          .get(`http://localhost:8081/popupP?userId=${userId}`)
          .then(res => {
            const paymentDate = new Date(res.data.paymentDate);
            const oneYearLater = new Date(
              paymentDate.getFullYear() + 1,
              paymentDate.getMonth(),
              paymentDate.getDate()
            );

            if (
              currentDate > paymentDate &&
              currentDate > oneYearLater &&
              paymentDate != null 
            ) {
              newNotifications.push(
                'Pagesa juaj ka skaduar. Ju lutemi kryeni pagesën për të vazhduar me shërbimet e bibliotekës.'
              );
            } else if (
              paymentDate === 'NaN undefined NaN' ||
              paymentDate === null ||
              paymentDate === undefined
            ) {
              newNotifications.push('Nuk e keni kryer pagesën.');
            }

            const day = paymentDate.getDate();
            const month = monthNames[paymentDate.getMonth()];
            const year = paymentDate.getFullYear();
            const formattedPaymentDate = `${day} ${month} ${year}`;
            setPaymentDate(formattedPaymentDate);

            setNotifications(newNotifications);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, [userId]);

  return (
    <div>
      <BellFill className="bi bi-bell-fill" onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b style={{ color: '#013C4D' }}>Njoftimet</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="list-group">
            {paymentDate != null && paymentDate !== 'NaN undefined NaN' ? (
              <li className="list-group-item">Data e Pagesës: {paymentDate}</li>
            ) : (
              <li className="list-group-item">Nuk e keni kryer pagesën.</li>
            )}
            {returnDate != null && returnDate !== 'NaN undefined NaN' ? (
              <li className="list-group-item">Data e kthimit të librit: {returnDate}</li>
            ) : (
              <li className="list-group-item">Nuk ka datë të kthimit te afërt.</li>
            )}
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <li className="list-group-item" key={index}>
                  <b className="text-danger">{notification}</b>
                </li>
              ))
            ) : (
              <li className="list-group-item">Nuk ka njoftime të reja.</li>
            )}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: '#013C4D' }} onClick={handleClose}>
            Mbylle
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Popup;

