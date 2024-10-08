//React...
import React, {useState, useEffect} from 'react';

//React router...
import { useLocation } from 'react-router-dom';

//EmailJS...
import { sendForm } from '@emailjs/browser';

//Firebase...
import { collection, query, getDocs, where } from 'firebase/firestore';
import { database } from '../firebase';

//Styles...
import '../styles/MoreInfo.scss'

const MoreInfoPage = () => {

    const location = useLocation();

    //The bike object itself in state...
    const [product, setProduct] = useState({});

    const [loading, setLoading] = useState('Request Bike!');

    //The leftmost biggest image of the product...
    const [mainImage, setMainImage] = useState(null)

    //State holdings the users info when they input it...
    const [requestForm, setRequestForm] = useState({
        requested_date: new Date().toLocaleDateString(),
        from_name: '',
        from_email: '',
        from_message: '',
        bike_model: ''
    })


    const getProductDetails = async () => {
        const productId = location.pathname.split("/")[2];

        try {
            const bikesCollectionRef = collection(database, 'bikesInventory');
            const q = query(bikesCollectionRef, where('id', '==', Number(productId)));
            const querySnapshot = await getDocs(q);
          
            if (!querySnapshot.empty) {
              setProduct(querySnapshot.docs[0].data())
              setMainImage(querySnapshot.docs[0].data().images[0])
            } 
            else {
              console.log('No bike found with the given id field');
              return null;
            }
        } 
        catch (error) {
            console.error('Error fetching bike by id field:', error);
        }
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

        setLoading('Sending...')

        if(requestForm.from_email && requestForm.from_name && requestForm.from_message) {
  
            try {
                sendEmail(e);
                setLoading('Sent!')
                setRequestForm({
                    requested_date: new Date().toLocaleDateString(),
                    from_name: '',
                    from_email: '',
                    from_message: '',
                    bike_model: product.model
                }); 
            } 
            catch (error) {
                setLoading('Error!')
                console.log("error sending request for bike", error)
            }
        }

        setTimeout(() => {
            setLoading('Request Bike')
        }, 8000)
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


    const handleImageClick = (image) => {
        setMainImage(image)
    }


    useEffect(() => {
        getProductDetails()
    }, [])



    return (
        <div className='moreInfo-page'>
            <div className="image-holder">
                <div className="main-image-holder">
                    {mainImage &&
                        <img src={mainImage} alt="" />
                    }
                </div>
                <div className="thumbnail-holders">
                    {product.images && 
                        product.images.map((img, i) => {
                            return (
                                <img 
                                    key={i}
                                    src={img}
                                    onClick={() => handleImageClick(img)}
                                    alt="image of bike product" 
                                />
                            )
                        })
                    }
                  
                </div>
            </div>
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
                    <button>
                        {loading}
                    </button>
                </form>
            </div> 
        </div>
    );
};

export default MoreInfoPage;