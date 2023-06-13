import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { BellFill } from 'react-bootstrap-icons';

const PopupPuntori = () => {
    const [show, setShow] = useState(false);
    const [statusi, setStatusi] = useState('');
    const [notifications, setNotifications] = useState([]);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cookies] = useCookies(['userId', 'roleId']);
    const userId = cookies.userId;
    
    useEffect(() => {
        axios
            .get(`http://localhost:8081/popupPun?userId=${userId}`)
            .then(res => {
                setStatusi(res.data.status);
                console.log(statusi);
                console.log(res.data.status)
                const newNotifications = [];
            }
            )
            .catch(err => console.log(err));
    }, [userId,statusi]);

    const getStatusClasses = () => {
        if (statusi === 'Aprovuar') {
          return 'text-success bg-light';
        } else if (statusi === 'Refuzuar') {
          return 'text-danger bg-light';
        } else {
          return '';
        }
      };
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
                        {(() => {
                            if (statusi === 'Pending') {
                                return (
                                    <li className="list-group-item">
                                        <b>Kerkesa juaj eshte ne shqyrtim</b>
                                    </li>
                                );
                            } else if (statusi !== null && statusi !== undefined && statusi !== 'Pending') {
                                return (
                                        <li className={`list-group-item ${getStatusClasses()}`}>
                                        <b>Kerkesa juaj per pushim eshte: {statusi}</b>
                                    </li>
                                );
                            } else {
                                return (
                                    <li className="list-group-item">Nuk e keni aplikuar per pushim.</li>
                                );
                            }
                        })()}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ backgroundColor: '#013C4D' }} onClick={handleClose}>
                        Mbylle
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default PopupPuntori;