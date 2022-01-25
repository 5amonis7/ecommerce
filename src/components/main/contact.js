import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import emailjs from "@emailjs/browser"

const Contact = () => {

    const [ form, setForm ] = useState({
        first: '',
        last:'',
        email: '',
        message: ''
    })
    const [ finished, setFinished ] = useState(false)
    const [ empty, setEmpty ] = useState(true)
    const [ sent, setSent ] = useState(false)

    function handleChange(e){
        const { name, value } = e.target
        setForm( prevState => {
             return{
                ...prevState,
                [name]: value
            };
        })
    }

    function checkInput(){
        if(form.first === '' || form.last === '' || form.email === ''){
            setEmpty(true)
        }else{
            setEmpty(false)
        }
    }

    function submit(e) {
        setFinished(!finished)
       setTimeout(() => {
        setSent(true)
        setForm({
            first: '',
            last:'',
            email: '',
            message: ''
        })
       }, 1000)
    }
    
    const details = useRef();
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_hxks1i7', 'template_nmhgabr', details.current, 'user_GigLFvn6e2yFniNFiu8ZC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


  return <div className="contact">
            <div className="contact-title">
                <h1>Contact us</h1>
            </div>
            <section className="contact-section">
                <form ref={details} onSubmit={sendEmail} className="contact-section_form" method='post'>

                    <div id="first">
                        <label htmlFor='first'>First Name</label>
                        <input onChange={handleChange} name='first' type='text' value={form.first} required disabled={sent ? true: false} />
                    </div>

                    <div id='last'>
                        <label htmlFor='last'>Last Name</label>
                        <input onChange={handleChange} name='last' type='text' value={form.last} required disabled={sent ? true: false} /> 
                    </div>

                    <div id='email'>
                        <label htmlFor='email'>Email</label>
                        <input onChange={handleChange} name='email' type='email' value={form.email} required disabled={sent ? true: false} />
                    </div>
        
                    <div id='message'>
                        <label htmlFor='message'>Message</label>
                        <textarea onChange={handleChange} name='message' type='text' value={form.message} disabled={sent ? true: false} />
                    </div>

                    <div className="button">
                        <button onMouseEnter={checkInput} onClick={empty ? null: submit} className={finished ? "submit done": "submit"}disabled={sent ? true: false}>{!sent ? 'Submit': <FontAwesomeIcon id='check' icon={faCheck} />}</button>
                    </div>
                </form>
            </section>

        </div>;
};

export default Contact;
