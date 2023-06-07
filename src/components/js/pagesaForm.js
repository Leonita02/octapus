import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function PagesaForm() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        qyteti: '',
        email: '',
        shuma: '10€',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (successMessage === 'Pagesa u krye me sukses') {
            navigate('/sideBar');
        }
    }, [successMessage, navigate]);

    const handleInput = (event) => {
        const { name, value } = event.target;
        let error = null;

        // Regex validation
        const regexQyteti = /^[A-Za-z]+$/;
        const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        switch (name) {
            case 'email':
                if (!value.trim()) {
                    error = 'Email nuk duhet te jete e zbrazet!'
                }
                else if (!regexEmail.test(value)) {
                    error = 'Emaili jo valid!';
                }
                break;
            case 'qyteti':
                if (!value.trim()) {
                    error = 'Qyteti nuk duhet te jete zbrazet!'
                }
                else if (!regexQyteti.test(value)) {
                    error = 'Vlera e qytetit jo valide!';
                }
                break;
            default:
                break;
        }

        setValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: error }));
    };


    const handleSubmitP = (event) => {

        event.preventDefault();

        if (values.email == '' || values.qyteti == '') {
            alert('Please fill the required fields!');
            return;
        }

        // Checking if there are any errors for the validation with regex
        const hasErrors = Object.values(errors).some((error) => error !== null);

        if (hasErrors) {
            console.log('Form contains errors:', errors);
            return;
        }

        axios.post(`http://localhost:8081/pagesat/personat/${values.email}`, {
            qyteti: values.qyteti,
            shuma:values.shuma
        })
            .then((res) => {
                alert(res.data.message);
                console.log({ res })
            })
            .catch((err) => {
                console.error(err)
            })
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Paguaj Kesh</h2>
                            <form className="needs-validation" noValidate>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleInput}
                                        required
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="qyteti">Qyteti</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.qyteti ? 'is-invalid' : ''}`}
                                        id="qyteti"
                                        name="qyteti"
                                        value={values.qyteti}
                                        onChange={handleInput}
                                        required
                                    />
                                    {errors.qyteti && <div className="invalid-feedback">{errors.qyteti}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="shuma">Shuma</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="shuma"
                                        name="shuma"
                                        value={values.shuma}
                                        readOnly 
                                    />
                                </div>
                                <br />
                                <button className="btn btn-primary btn-lg btn-block custom-button" type="submit" onClick={handleSubmitP}>
                                    Paguaj
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
