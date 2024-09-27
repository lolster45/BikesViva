//React...
import React, {useState, useEffect} from 'react';

//EmailJS...
import { sendForm } from '@emailjs/browser';

//React router...
import { useLocation } from 'react-router-dom';

//Data...
import bikeInventory from '../Bikes';

//Styles...
import '../styles/MoreInfo.scss'

const MoreInfoPage = () => {

    const location = useLocation();


    const [product, setProduct] = useState({})

    const [requestForm, setRequestForm] = useState({
        requested_date: new Date().toLocaleDateString(),
        from_name: '',
        from_email: '',
        from_message: '',
        bike_model: ''
    })


    const getProductDetails = () => {
        const productId = location.pathname.split("/")[2];
        let bikeObj = bikeInventory.filter(item => item.id === Number(productId));
        setProduct(...bikeObj)
        setRequestForm(prev => ({
            ...prev,
            bike_model: bikeObj[0].model
        }))
    }


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setRequestForm(prev => ({
            ...prev,
            [name]: value
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("starting...")
  
        if(requestForm.from_email && requestForm.from_name && requestForm.from_message) {
  
            sendEmail(e);
            setRequestForm({
                requested_date: new Date().toLocaleDateString(),
                from_name: '',
                from_email: '',
                from_message: '',
                bike_model: product.model
            });
        }
    };

    const sendEmail = async (e) => {
        try {
          await sendForm(
              'service_1ucjjo5',
              'template_814waqp',
              e.target,
              "jbgrZZqFO3D2ntdg8"
          );
          console.log('Email sent successfully');
        }
        catch (error) {
          setEmailIsInvalid("Error! Something Went Wrong")
          console.error('Error sending email:', error);
        }
    };


    useEffect(() => {
        getProductDetails()
    }, [])



    return (
        <div className='moreInfo-page'>
            <img src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699" alt="" />
            <div className='product-info-wrap'>
                <h1>{product.model}</h1>
                <p>{product.description}</p>
                <div className='moreInfo-subInfo'>
                    <span>Brand: {product.brand}</span>
                    <span>Type: {product.type}</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <input 
                        className='name' 
                        name='from_name'
                        value={requestForm.from_name}
                        onChange={handleInputChange}
                        type="text"  
                        placeholder='Full Name...'
                    />
                    <input 
                        className='email' 
                        name='from_email'
                        value={requestForm.from_email}
                        onChange={handleInputChange}
                        type="email"  
                        placeholder='Email...'
                    />
                    <textarea 
                        name='from_message'
                        value={requestForm.from_message}
                        onChange={handleInputChange}
                        placeholder='Message'
                    >              
                    </textarea>
                    <button>Request bike</button>
                </form>
            </div>
        </div>
    );
};

export default MoreInfoPage;