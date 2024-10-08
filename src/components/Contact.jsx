//React...
import { useState } from 'react';

//EmailJS...
import { sendForm } from '@emailjs/browser';

//React icons...
import { RiErrorWarningFill } from "react-icons/ri";

// styles...
import '../styles/ContactComp.scss'


const ContactForm = () => {

    //State that lets user know their email is invalid...
    let [emailIsInvalid, setEmailIsInvalid] = useState('')

    const [formData, setFormData] = useState({
      from_name: '',
      from_email: '',
      message: ''
    });

    //Showcases the progress of their form once they submit the contact form...
    const [loading, setLoading] = useState('Submit');


    //Handles the change of the form...
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      });
    };

    //Regular expression for email from user...
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    //Function that runs when the user presses 'submit' on their form...
    const handleSubmitCheck = async (e) => {
      e.preventDefault();

      setLoading("Loading...");

      if(formData.from_email && formData.from_name && formData.message) {

        //Displays an error msg letting user know email is invalid...
        if(!emailPattern.test(formData.from_email)) {
          setEmailIsInvalid('Invalid Email');
          return;
        }

        try {
          sendEmail(e);
          setEmailIsInvalid('');
          setFormData({
            from_name: '',
            from_email: '',
            message: ''
          });
          setLoading('Sent!')

        } 
        catch (error) {
          setEmailIsInvalid('Error Occured!')
        } 
      }




      setTimeout(() => {
        setLoading('Submit')
      }, 8000)

    };

    //Part of EmailJS in which it calls their API
    const sendEmail = async (e) => {
      try {
        await sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          e.target,
          import.meta.env.VITE_EMAILJS_USER_ID
        );
        console.log('Email sent successfully');
      }
      catch (error) {
        setEmailIsInvalid("Error! Something Went Wrong")
        console.error('Error sending email:', error);
      }
    };



  return (
    <section className='contact-form-container'>
        <div className="form-left">
            <h1>Need a bike or want to donate one?</h1>
            <p>If you have any questions about our project, or would like to get involved, please feel free to reach out.  We are running this out of our garage at the moment,  but would like to turn it into something bigger -- to reach even more kids! </p>
        </div>
        <form
            onSubmit={handleSubmitCheck}
        >
            <div>
                {emailIsInvalid &&
                  <span className='error-msg'>
                    <RiErrorWarningFill/>
                    {emailIsInvalid}
                  </span>
                } 
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  maxLength={25}
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">
                {loading}
            </button>
        </form>
    </section>
  );
};

export default ContactForm;
