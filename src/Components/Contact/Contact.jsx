import React,{useRef, useState,useContext,useEffect} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import ScrollingContext from '../ScrollingContext';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Loader } from 'react-feather';
function Contact() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    const { contactRef } = useContext(ScrollingContext);
    const form = useRef();
    const [errorMessage,setErrorMessage] = useState("");
    const [sendButtonDisabled,setSendButtonDisabled] = useState(false);
    const [isProcessing,setIsProcessing] = useState(false);
    const [formData,setFormData] = useState({
        name:'',
        phone:'',
        email:'',
        message:''
    });
    const handleChange = (e) => {
        const { name,value} = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]:value,
        }));
    };
    
    const validatePhoneNumber = ((input_str) =>{
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
      
        return re.test(input_str);
      });
    const validateForm=()=>{
        if(!formData.name||!formData.email||!formData.message||!formData.phone){
            setErrorMessage('!Please fill in all fields');
            return false;
        }
        if(!validatePhoneNumber(formData.phone)){
            setErrorMessage('!Please enter valid phone number')
            return false;
        }
        setErrorMessage('');
        return true;
    }

    const sendEmail = (e) => {
        setIsProcessing(true);
        e.preventDefault();
        if(validateForm()){
        setSendButtonDisabled(true);
        emailjs.sendForm('service_hpsv3ua', 'template_w5ouvrk', form.current, 'VyNNNOYUIwEMUdeaX')
        .then((result) => {
            setErrorMessage("Thankyou! I'll contact you soon");
            setSendButtonDisabled(false);
            setIsProcessing(false);
            setFormData({
                name:'',
                phone:'',
                email:'',
                message:''
            });
            }, (error) => {
                setSendButtonDisabled(false);
                setErrorMessage(error.text);
            });
        };
    };
    
  return (
    <div className='contact' ref={contactRef}>
        <div className='line'></div>
        <div className='c-container'>
            <div className='left'>
                <div data-aos='fade-up' className='span'>
                    <span>Get in touch</span>
                    <span>Contact me</span>
                </div>
            </div>
            <div className='right'>
                <form data-aos='fade-up' ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' value={formData.name} className='user' placeholder='Enter your name' onChange={handleChange}/>
                    <input type='text' name='phone' value={formData.phone} className='user' placeholder='Enter your phone ' onChange={handleChange}/>
                    <input type='email' name='email' value={formData.email} className='user' placeholder='Enter your mail' onChange={handleChange}/>
                    <textarea name='message' value={formData.message} className='user' placeholder='Enter message' cols="30" rows="5" onChange={handleChange}></textarea>
                    <button type="submit" className={sendButtonDisabled ? "disable button":" enable button"} >Send</button>
                </form>
            </div>
        </div>
        {isProcessing && <Loader className='loader'/>}
        <div className='error'>{errorMessage}</div>
    </div>
  )
}

export default Contact;