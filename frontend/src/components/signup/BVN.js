import React, { useState, useEffect } from 'react'
import './signup.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

function BVN() {
    const [values, setValues] = useState({
        fullName: '',
        DOB: '',
        BVN: '',
        phoneNumber: ''
    });

    const [error, setError] = useState({
        fullName: '',
        DOB: '',
        BVN: '',
        phoneNumber: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }


    const validate = (values) => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regex2 = /^[0-9]{11}$/;
        const regex3 = /^[a-zA-Z]{3,}$/;
        const regex4 = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

        if (!values.fullName) {
            error.fullName = 'Full Name is required';
        } else if (!regex3.test(values.fullName)) {
            error.fullName = 'Invalid Full Name';
        }
        if (!values.DOB) {
            error.DOB = 'Date of Birth is required';
        } else if (!regex4.test(values.DOB)) {
            error.DOB = 'Invalid Date of Birth (DD/MM/YYYY)';
        }
        if (!values.BVN) {
            error.BVN = 'BVN is required';
        } else if (!regex2.test(values.BVN)) {
            error.BVN = 'Invalid BVN';
        }
        if (!values.phoneNumber) {
            error.phoneNumber = 'Phone Number is required';
        } else if (!regex2.test(values.phoneNumber)) {
            error.phoneNumber = 'Invalid Phone Number';
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
        <div className='signup-view'>
            <div className='bvn-view'>
                <div className='signup-view-left-top'>
                    <Link to='/Home'>
                        <img src="/images/Group114(1).png" alt="Scam Trust" />

                    </Link>
                </div>
                <div className='cardContainer-bvn'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Bank Details</h5>

                            <div className='field'>
                                <h4 className='form-textBVN'>We use your BVN to confirm rhat your personal information provided on ScamTrust are the same as it is in your BVN.</h4>

                            </div>
                            <div className="form bvn">
                                {/*   <pre>{
                            JSON.stringify(values, null, 2)
                            }</pre> */}
                                <form onSubmit={handleSubmit}>
                                    <div className="input-field-bvn">
                                        <label className='form-text-bvn'>Full name</label>
                                        <input
                                            onChange={handleChange}
                                            value={values.fullName}
                                            className="inputBox"
                                            name='fullName'
                                            placeholder=""
                                            type="text"
                                            autoComplete='off'
                                             />


                                    </div>
                                    {submitted && error.fullName && <div className='error shift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.fullName}</div>}



                                    <div className="input-field">
                                        <label className='form-text-bvn'>Date of birth</label>
                                        <input onChange={handleChange} value={values.DOB} className="inputBox" name='DOB' placeholder="" type="text" autoComplete='off' />

                                    </div>

                                    {submitted && error.DOB && <div className='error shift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.DOB}</div>}
                                    
                                    <div className="input-field">
                                        <label className='form-text-bvn'>Phone number</label>
                                        <input onChange={handleChange} handleEmail value={values.loation} className="inputBox" name='phoneNumber' type="text" placeholder="" autoComplete='off' inputMode='numeric'
                                            maxLength="11" />

                                    </div>

                                    {submitted && error.phoneNumber && <div className='error shift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.phoneNumber}</div>}

                                    <div className="input-field">
                                        <label className='form-text-bvn'>Enter your Bank Verification Number</label>
                                        <input onChange={handleChange} value={values.BVN} className="inputBox" name='BVN' type="text" placeholder="" autoComplete='off' inputMode='numeric'
                                            maxLength="11" />

                                    </div>
                                    {submitted && error.BVN && <div className='error shift'><FontAwesomeIcon className='exIconTrans' icon={faCircleExclamation} />{error.BVN}</div>}


                                  

                                    <button className='bvn-button yes' type='submit' > Verify </button>

                                </form>
                                <div className='field-bottom-bvn'> Secured by <img className='field-bottom-img' src="/images/Group114(1).png" alt="Scam Trust" /> </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='skip-link'>
                    <Link to='/' className='text-blue'>Skip</Link>
                </div>
            </div>
        </div>
    )
}

export default BVN