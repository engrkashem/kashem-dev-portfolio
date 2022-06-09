import React, { useRef } from 'react';

const ContactModal = ({ setCloseModal }) => {
    const emailRef = useRef(null)
    const messageRef = useRef(null)

    const handleSubmit = () => {
        const email = emailRef.current.value;
        const message = messageRef.current.value;
        console.log(email, message);
        setCloseModal(false);
    }
    return (
        <div>
            <input type="checkbox" id="contact-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-4xl text-center">Email Us</h3>
                    <div className=' flex flex-col items-center'>
                        <input ref={emailRef} className='w-3/4 border-2 border-yellow-400 p-2 mt-6' placeholder='Your Email' name='email' type="email" />
                        <textarea ref={messageRef} className='w-3/4 border-2 border-yellow-400 mt-3' placeholder='Your Message' name="description" id="email-body" cols="30" rows="10"></textarea>
                    </div>
                    <div className="modal-action">
                        <label onClick={handleSubmit} className="btn btn-success text-white ">Send Message</label>
                        <label htmlFor='contact-modal' className="btn btn-error text-white ">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;