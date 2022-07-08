
import React, { useState, useEffect } from 'react'
import './signup.css'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faImage } from "@fortawesome/free-solid-svg-icons";

function ImageCapture() {
    const [values, setValues] = useState({
        BVNnumber: ''
    });

    const [error, setError] = useState({
        BVNnumber: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }


    const validate = (values) => {
        const error = {};
        if (!values.BVNnumber) {
            error.BVNnumber = 'BVN not correct';
        }

        return error;
    }


    const [submitted, setSubmitted] = useState(false);
    const handleClick = () => {
        setCliked(!clicked);
    }
    const [clicked, setCliked] = useState(false);

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
            <div className='signup-view-left'>
                <div className='signup-view-left-top'>
                    <Link to='/Home'>
                        <img src="/images/Group114(1).png" alt="Scam Trust" />

                    </Link>
                </div>
                <div className='cardContainer'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title Img'>Upload your image</h5>

                            

                            <form>
                                <div className="field1">
                                <FontAwesomeIcon className='ImgIcon' icon={faImage} /> 
                                    <input 
                                        className="form-textImg"
                                        name='BVNnumber'
                                        placeholder=""
                                        type="text" />
                                </div>
                                <span className='errorBVN'></span>
                                
                            <div onClick={handleClick}>
                            {clicked ? <button className='image-capture no' type='button'  >retake </button> : <button className='image-capture yes' type='button' > capture </button>}
                            </div>
                        
                                

                            {clicked ? <button className='image-button yes' type='submit' > Proceed to set password </button> : <button className='image-button no' type='submit' > Proceed to set password </button>}
                            <FontAwesomeIcon className='arrowIconImg' icon={faCaretRight} />
                            </form>

                            <div className='field-bottom'> Secured by <img className='field-bottom-img' src="/images/Group114(1).png" alt="Scam Trust" /> </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
  )
}

export default ImageCapture