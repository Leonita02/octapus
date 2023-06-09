import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function PasswordChangeForm() {
    const [cookies] = useCookies(['userId']);
    const userId = cookies.userId;
    const navigate = useNavigate();
    const [values, setValues] = useState({
        password: '',
        changePassword: '',
        confirm_password: '',
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        let error = null;

        // Regex validation
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


        switch (name) {
            case 'password':
                if (!value.trim()) {
                    error = 'Fusha nuk duhet te jete e zbrazet!';
                }
                break;
            case 'changePassword':
                if (!value.trim()) {
                    error = 'Fusha nuk duhet te jete e zbrazet!';
                }
                else if (!passwordRegex.test(value)) {
                    error = 'Fjalëkalim jo valid!';
                }
                break;
            case 'confirm_password':
                if (!value.trim()) {
                    error = 'Fusha nuk duhet te jete e zbrazet!';
                } else if (!passwordRegex.test(value)) {
                    error = 'Fjalëkalim jo valid!';
                } else if (value !== values.changePassword) {
                    error = 'Fjalëkalimi nuk përkon!';
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

        if (values.password === '' || values.changePassword === '' || values.confirm_password === '') {
            alert('Ju lutem plotësoni fushat!');
            return;
        }
        
        // Checking if there are any errors
        const hasErrors = Object.values(errors).some((error) => error !== null);

        if (hasErrors) {
            console.log('Form contains errors:', errors);
            return;
        }

        axios
            .get(`http://localhost:8081/passwordChange/${userId}`)
            .then((res) => {
                const dbPassword = res.data.password;
                if (values.password !== dbPassword) {
                    alert('Fjalëkalimi aktual është i gabuar!.');
                    return;
                }

                axios
                    .put(`http://localhost:8081/passwordChange/${userId}`, {
                        password: values.password,
                        changePassword: values.changePassword,
                        confirm_Password: values.confirm_password,
                    })
                    .then((res) => {
                        console.log('Its coming here');
                        alert(res.data.message);
                        navigate('/profilePage');
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            })
            .catch((err) => {
                console.error(err);
            });
    };


    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Ndërro Fjalëkalimin!</h2>
                        <form className="needs-validation" noValidate>
                            <div className="form-group">
                                <label htmlFor="password">Fjalëkalimi</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    id="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleInput}
                                    required
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="changePassword">Ndërro fjalëkalimin</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.changePassword ? 'is-invalid' : ''}`}
                                    id="changePassword"
                                    name="changePassword"
                                    value={values.changePassword}
                                    onChange={handleInput}
                                    required
                                />
                                {errors.changePassword && <div className="invalid-feedback">{errors.changePassword}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm_password">Konfirmo fjalëkalimin</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.confirm_password ? 'is-invalid' : ''}`}
                                    id="confirm_password"
                                    name="confirm_password"
                                    value={values.confirm_password}
                                    onChange={handleInput}
                                    required
                                />
                                {errors.confirm_password && <div className="invalid-feedback">{errors.confirm_password}</div>}
                            </div>
                            <br />
                            <button className="btn btn-primary btn-lg btn-block custom-button pb-5 col-3" type="submit" onClick={handleSubmitP}>
                                Kliko
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
