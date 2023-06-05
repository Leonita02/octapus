import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function PagesaForm() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        Personi_ID: '',
        qyteti: '',
        email: '',
        emriKarteles: '',
        nrKarteles: '',
        data_pageses: ''
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
        const regexPersoni_ID = /^[A-Za-z0-9]{1,}$/;
        const regexQyteti = /^[A-Za-z]+$/;
        const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const regexEmriKarteles = /^[A-Za-z]+$/;
        const regexNrKarteles = /^[0-9]{5,}$/;
        const regexDataPageses = /^\d{4}-\d{2}-\d{2}$/;

        switch (name) {
            case 'Personi_ID':
                if (!value.trim()) {
                    error = 'Personi ID nuk duhet te jete e zbrazet!';
                } else if (!regexPersoni_ID.test(value)) {
                    error = 'Personi ID e dhene ne forme te gabuar!';
                }
                break;
            case 'email':
                if (!value.trim()) {
                    error = 'Email nuk duhet te jete e zbrazet!'
                }
                else if (!regexEmail.test(value)) {
                    error = 'Emaili jo valid!';
                }
                break;
            case 'emriKarteles':
                if (!value.trim()) {
                    error = 'Emri i Karteles nuk duhet te jete e zbrazet!'
                }
                else if (!regexEmriKarteles.test(value)) {
                    error = 'Emri i Karteles jo valid!';
                }
                break;
            case 'nrKarteles':
                if (!value.trim()) {
                    error = 'Numri i Karteles nuk duhet te jete e zbrazet!'
                }
                else if (!regexNrKarteles.test(value)) {
                    error = 'Numri i Karteles jo valid!';
                }
                break;
            case 'data_pageses':
                if (!value.trim()) {
                    error = 'Data e pageses nuk duhet te jete e zbrazet!'
                }
                else if (!regexDataPageses.test(value)) {
                    error = 'Data e Pageses jo valide!';
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
        // Checking if there are any errors for the validation with regex
        const hasErrors = Object.values(errors).some((error) => error !== null);

        if (hasErrors) {
            console.log('Form contains errors:', errors);
            return;
        }
        //Test if the person is in the database
        axios
            .get('http://localhost:8081/pagesaRepo/', {
                params: {
                    Personi_ID: values.Personi_ID,
                },
            })
            .then((res) => {
                const { exists } = res.data;

                if (exists) {
                    // Personi_ID exists in the database, proceed with form submission
                    axios
                        .post('http://localhost:8081/pagesaRepo/', values)
                        .then((res) => {
                            const responseMessage = res.data.message;
                            console.log('Response:', responseMessage);
                            alert(successMessage);
                            setSuccessMessage(responseMessage);
                        })
                        .catch((err) => console.log(err));
                } else {
                    // Personi_ID does not exist in the database, display an error message or take appropriate action
                    alert('Personi_ID does not exist in the database');
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
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
                                    <label htmlFor="Personi_ID">Personi ID</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.Personi_ID ? 'is-invalid' : ''}`}
                                        id="Personi_ID"
                                        name="Personi_ID"
                                        value={values.Personi_ID}
                                        onChange={handleInput}
                                        required
                                    />
                                    {errors.Personi_ID && <div className="invalid-feedback">{errors.Personi_ID}</div>}
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
                                    <label htmlFor="emriKarteles">Emri i Karteles</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.emriKarteles ? 'is-invalid' : ''}`}
                                        id="emriKarteles"
                                        name="emriKarteles"
                                        value={values.emriKarteles}
                                        onChange={handleInput}
                                        required
                                    />
                                    {errors.emriKarteles && <div className="invalid-feedback">{errors.emriKarteles}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nrKarteles">Numri i Karteles</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.nrKarteles ? 'is-invalid' : ''}`}
                                        id="nrKarteles"
                                        name="nrKarteles"
                                        value={values.nrKarteles}
                                        onChange={handleInput}
                                        required
                                    />
                                    {errors.nrKarteles && <div className="invalid-feedback">{errors.nrKarteles}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="data_pageses">Data e Pageses</label>
                                    <input
                                        placeholder='yyyy-mm-dd'
                                        type="text"
                                        className={`form-control ${errors.data_pageses ? 'is-invalid' : ''}`}
                                        id="data_pageses"
                                        name="data_pageses"
                                        value={values.data_pageses}
                                        onChange={handleInput}
                                        required
                                    />
                                    {errors.data_pageses && <div className="invalid-feedback">{errors.data_pageses}</div>}
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
