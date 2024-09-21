//React...
import { useState } from 'react';

//import { sendForm } from '@emailjs/browser';



//React interasection observer...
//import { useInView } from 'react-intersection-observer';

//React icons...
//import { RiErrorWarningFill } from "react-icons/ri";

// styles...
import '../styles/ContactComp.scss'


const ContactForm = () => {


    //const [emailIsInvalid, setEmailIsInvalid] = useState<boolean>(false);

    const [formData, setFormData] = useState({
      from_email: '',
      from_name: '',
      message: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      });
    };

    //Regular expression for email from user...
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    const handleSubmitCheck = async (e) => {
      e.preventDefault();
      if(formData.from_email && formData.from_name && formData.message) {

        if(!emailPattern.test(formData.from_email)) {
          //setEmailIsInvalid(true);
          return;
        }
        //sendEmail(e);
        //setEmailIsInvalid(false);
         setFormData({
           from_email: '',
           from_name: '',
           message: ''
         });
      }
    };

    // const sendEmail = async (e: any) => {
    //   try {
    //     await sendForm(
    //         'service_50xi2u4',
    //         'template_m1oqvw5',
    //         e.target,
    //         "V19aGRH_RgVYiOgI_"
    //     );
    //     console.log('Email sent successfully');
    //   }
    //   catch (error) {
    //     console.error('Error sending email:', error);
    //   }
    // };



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
                  {/* {emailIsInvalid &&
                    <span>
                      Invalid
                      <RiErrorWarningFill/>
                    </span>
                  } */}

            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
        </form>
    </section>
  );
};

export default ContactForm;
