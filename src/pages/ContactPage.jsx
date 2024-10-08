
//Components...
import ContactForm from '../components/Contact';

//Styles...
import '../styles/ContactPage.scss'

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <ContactForm/>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440900.25079231826!2d-98.08539811942047!3d30.307347728714074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1727316828501!5m2!1sen!2sus" 
                height="450" 
                style={{border:0, width: '100%', marginTop: '40px'}} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
    );
};

export default ContactPage;