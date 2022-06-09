import React from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ContactModal = ({ setCloseModal }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_fukym13', e.target, 'zhIuyDW3-KcZ6tC58')
            .then((result) => {
                toast.success('Email has been sent to the Developer');
            }, (error) => {
                console.log(error.text);
            });
        setCloseModal(false);
    }
    return (
        <div>
            <input type="checkbox" id="contact-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className=' flex flex-col items-center'>
                        <h3 className="font-bold text-4xl text-center">Email Us</h3>
                        <form className='contact-form' onSubmit={handleSubmit}>
                            <label >Name</label><br />
                            <input className='w-3/4 border-2 border-yellow-400 p-1 ' placeholder='Your Name' name='from_name' type="text" /><br />
                            <label className='mt-3'>Email</label><br />
                            <input className='w-3/4 border-2 border-yellow-400 p-1 ' placeholder='Your Email' name='from_email' type="email" /><br />
                            <label className='mt-3'>Subject</label><br />
                            <input className='w-3/4 border-2 border-yellow-400 p-1 ' placeholder='Subject' name='email_subject' type="text" /><br />
                            <label className='mt-3'>Contact Number</label><br />
                            <input className='w-3/4 border-2 border-yellow-400 p-1 ' placeholder='Contact Number' name='contact_number' type="text" /><br />
                            <label className='mt-3'>Message</label><br />
                            <textarea className='w-3/4 border-2 border-yellow-400 ' placeholder='Your Message' name="message" id="email-body"></textarea>
                            <input type={'submit'} className="btn btn-success text-white " value={'Send Email'} />
                        </form>
                    </div>
                    <div className="modal-action">
                        <label htmlFor='contact-modal' className="btn btn-error text-white ">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;