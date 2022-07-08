import React, { useState, useEffect } from 'react'
import './signup.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faCreditCard } from "@fortawesome/free-solid-svg-icons";
function SecurityQuestion() {
    const [values, setValues] = useState({
        SecurityQuestion: '',
        SecurityAnswer: ''
    });

    const [error, setError] = useState({
        SecurityQuestion: '',
        SecurityAnswer: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }
     
    
    const validate = (values) => {
        const error = {};   
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.SecurityQuestion) {
            error.SecurityQuestion = 'Security Question is required';
        }
        if (!values.SecurityAnswer) {
            error.SecurityAnswer = 'Security Answer is required';
        }
        
        return error;
    }
    

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const handleCheckbox = () => {
        setChecked(!checked);
    }
    const [checked, setChecked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setError(validate(values));
    }

    useEffect(() => {
        if (Object.keys(error).length === 0 && submitted);  
    }, [error]);

  return (
    <div className='password-view'>
                <div className='password-view-left'>
                    <div className='signup-view-left-top'>
                        <Link to='/Home'>
                            <img src="/images/Group114(1).png" alt="Scam Trust" />

                        </Link>
                    </div>
                    <div className='cardContainerPassword'>
                    <div className='Security-view-left-bottom-text'>
                    Security Question
                    </div>
                    <FontAwesomeIcon className='creditIcon' icon={faCreditCard} />

                    <div className="form password">
                    <div className='field'>
                                <h4 className='form-textSecurity secShift'>Security questions add an extra layer of security to your account; It is to verify if the account really belongs to you.</h4>

                            </div>
                      {/*   <pre>{
                            JSON.stringify(values, null, 2)
                            }</pre> */}
                        <form className='secShift1' autoComplete='off' onSubmit={handleSubmit}>
                            <div className="input-field">
                                <label className='form-text'>Security Question</label>
                                <select className="inputBox" name='SecurityQuestion' onChange={handleChange} value={values.SecurityQuestion}>
                                    <option value="">Choose a security question</option>
                                    <option value="What is your favorite color?">What is your favorite color?</option>
                                    <option value="What is your favorite food?">What is your favorite food?</option>
                                    <option value="What is your favorite movie?">What is your favorite movie?</option>
                                    <option value="What is your favorite book?">What is your favorite book?</option>
                                    <option value="What is your favorite sport?">What is your favorite sport?</option>
                                    <option value="What is your favorite game?">What is your favorite game?</option>
                                    <option value="What is your favorite band?">What is your favorite band?</option>
                                    <option value="What is your favorite artist?">What is your favorite artist?</option>
                                    <option value="What is your favorite teacher?">What is your favorite teacher?</option>
                                    <option value="What is your favorite teacher?">What is your favorite teacher?</option>
                                    <option value="What is your favorite teacher?">What is your favorite teacher?</option>
                                    <option value="What is your favorite teacher?">What is your favorite teacher?</option>
                                </select>
                            
                               
                             
                                
                            </div>
                            {submitted && error.SecurityQuestion && <span className='error shift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.SecurityQuestion}</span>}


                            <div className="input-field">
                                <label className='form-text'>Your Answer</label>
                                <input onChange={handleChange} value={values.SecurityAnswer} className="inputBox" name='SecurityAnswer' placeholder="" type="text" />
                               
                                
                            </div>
                            {submitted && error.SecurityAnswer && <span className='error shift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.SecurityAnswer}</span>}

                            

                            {submitted ? <button className='password-button secShift2 yesGreen' type='submit' > Continue </button> : <button className='password-button secShift2 noGreen' type='submit' > Continue </button>}
                            
                        </form>
                    </div>
                    <div className='field-bottom-password'> Secured by <img className='field-bottom-img' src="/images/Group114(1).png" alt="Scam Trust" /> </div>
                    </div>
                </div>
            </div>
  )
}

export default SecurityQuestion