import React from 'react'
import './Contact.css'
import contactimg from '../assets/Contact-us.svg'



const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b40208be-e0e1-481f-b6a1-24f49fdb1362");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.error("Error:", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Network error:", error);
            setResult("An error occurred. Please try again later.");
        }
    };

    // Rest of your component logic...


    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Contact Me</h1>
            </div>
            <div className="contact-form">
                <div className="contact-img">
                    <img src={contactimg} alt="contact" />
                </div>
                <form onClick={onSubmit} className="contact-details">
                    <div className="contact-name">
                        <label className='label' htmlFor="name">Name</label>
                        <input className='inp' name='name' type="text" placeholder='Enter your Full Name' required />
                    </div>
                    <div className="contact-email">
                        <label className='label' htmlFor="email">Email</label>
                        <input className='inp' name='email' type="email" placeholder='Enter your email' required />
                    </div>
                    <div className="contact-num">
                        <label className='label' htmlFor="message">Message</label>
                        <textarea className='inp textarea' name='message' type="text" placeholder='Enter your message' required />
                    </div>
                    <div className="contact-submit">
                        <button className='inp-btn' type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Contact
