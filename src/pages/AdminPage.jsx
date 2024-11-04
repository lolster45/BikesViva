//React...
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

//Components...
import SingleBikeAdmin from '../components/SingleBikeAdmin';

//Firebase...
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, database, storage } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

//Styles...
import '../styles/AdminPage.scss'

const AdminPage = () => {

    const [user] = useAuthState(auth)


    //Error states...
    const [imageError, setImageError] = useState('');

    //Overlay displaying if you want to delete the bicycle selected...
    const [overlay, setOverlay] = useState(false);


    //State that holds the info that the client want to insert into database...
    const [bikeForm, setBikeForm] = useState({
        id: Math.floor(Math.random() * 100000),
        brand: '',
        model: '',
        type: '',
        year: '',
        size: '',
        description: ''
    })

    //Holds the actual image files the client is going to upload...
    const [filesToUpload, setFilesToUpload] = useState([]);

    //State that holds the preview of images client is going to upload...
    const [selectedImages, setSelectedImages] = useState([]);


    const handleImageChange = (e) => {
        const files = Array.from(e.target.files); // Get the selected files
    
        // Create a FileReader instance to show a preview of each image
        const imagePreviews = files.map((file) => {
          const reader = new FileReader();
          return new Promise((resolve) => {
            reader.onload = (event) => {
              resolve(event.target.result);
            };
            reader.readAsDataURL(file);
          });
        });
    
        // Update state with selected images' preview URLs
        Promise.all(imagePreviews).then((previews) => {
          setSelectedImages(prev => [...prev, ...previews]);
        });

        setFilesToUpload(prev => [...prev, ...files])

    };


    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setBikeForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleOverlayChange = (id) => {
        setOverlay(prev => (prev === id ? null : id));
    }


      // Handle file upload
    const handleUpload = async (e) => {
        e.preventDefault();

        if(filesToUpload.length === 0) {
            setImageError('You must upload atleast 1 image');
            return;
        }

        const urls = [];

        if(bikeForm.model && bikeForm.description && bikeForm.size && bikeForm.year && bikeForm.type && filesToUpload.length >= 1) {

            try {
                // Loop through each file
                for (let i = 0; i < filesToUpload.length; i++) {
                    const file = filesToUpload[i];
                    const storageRef = ref(storage, `images/${file.name}`);
    
                    // Upload the file to Firebase Storage
                    const snapshot = await uploadBytes(storageRef, file);
    
                    // Get the download URL
                    const url = await getDownloadURL(snapshot.ref);
                    urls.push(url);
                }
    
                // Save the URLs to Firestore (or another database)
                await addDoc(collection(database, 'bikesInventory'), {
                    id: Math.floor(Math.random() * 100000),
                    images: urls,
                    brand: bikeForm.brand,
                    model: bikeForm.model,
                    type: bikeForm.type,
                    year: bikeForm.year,
                    inStock: true,
                    size: bikeForm.size,
                    description: bikeForm.description
                });

                //Resets the add bike form...
                setBikeForm({
                    id: Math.floor(Math.random() * 100000),
                    brand: '',
                    model: '',
                    type: '',
                    year: null,
                    size: '',
                    description: ''
                })

                //Resets the preview images...
                setSelectedImages([])
                setImageError('')
    
            } 
            catch (error) {
                console.error('Error uploading files:', error);
            }


        }
    };


    const navigate = useNavigate();
    const userSignOut = async () => {
        await signOut(auth)
        navigate('/')
    }


    const [bikeInventory, setBikeInventory] = useState([]);


    const getBikesInventory = async () => {
        const bikesCollection = collection(database, 'bikesInventory');

        const bikesSnapshot = await getDocs(bikesCollection);

        const bikesList = bikesSnapshot.docs.map(doc => ({ ...doc.data() }));
        setBikeInventory(bikesList)
    }

    useEffect(() => {
        getBikesInventory()
    }, [])

   
    return (
        <div className='admin-page'>
            <img src={user?.photoURL} alt="admin user profile picture" />
            <h1>Welcome Back {user?.displayName}</h1>
            <div className="bike-info-container">
                <div className="bike">
                    <span className='id'>Id</span>
                    <span className='img'>Img</span>
                    <span className='model'>Name</span>
                    <span className='options'>Delete</span>
                </div>
                <div className="bikes-container">
                    {bikeInventory &&
                        bikeInventory.map(bike => {
                            return (
                                <SingleBikeAdmin
                                    key={bike.id}
                                    id={bike.id}
                                    img={bike.images[0]}
                                    model={bike.model}
                                    overlay={overlay}
                                    setOverlay={setOverlay}
                                    bikeInventory={bikeInventory}
                                    setBikeInventory={setBikeInventory}
                                    handleOverlayChange={handleOverlayChange}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <h2>Add A bike?</h2>
            <section className='form-wrap'>
                <form onSubmit={handleUpload}>
                    <label className='file-chooser'>
                        Upload Images
                        <input 
                            type="file"
                            multiple 
                            onChange={handleImageChange} 
                        />
                        <span>{imageError}</span>
                    </label>
                    <label>
                        Brand:
                        <input 
                            name='brand'
                            value={bikeForm.brand}
                            onChange={handleFormChange}
                            type="text"
                        />
                    </label>
                    <label>
                        Name:
                        <input 
                            name='model'
                            value={bikeForm.model}
                            onChange={handleFormChange}
                            type="text"
                        />
                    </label>
                    <label>
                        Type:
                        <select 
                            name="type" 
                            value={bikeForm.type} 
                            onChange={handleFormChange}
                        >
                            <option value="" disabled>Select Type</option>
                            <option value="mountain">Mountain</option>
                            <option value="road">Road</option>
                            <option value="hybrid">Hybrid</option>
                            <option value="BMX">BMX</option>
                            <option value="cruiser">Cruiser</option>
                            <option value="electric">Electric</option>
                            <option value="kids">Kids' bike</option>
                            <option value="tandem">Tandem</option>
                            <option value="folding">Folding</option>
                        </select>
                    </label>
                    <label>
                        Description:
                        <textarea 
                            type="text"
                            name='description'
                            value={bikeForm.description}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label>
                        Date:
                        <input 
                            type="number" 
                            min={1950} 
                            max={2030} 
                            placeholder='YYYY'
                            name='year'
                            value={bikeForm.year}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label>
                        Size
                        <select 
                            name="size" 
                            value={bikeForm.size} 
                            onChange={handleFormChange}
                        >
                            <option value="" disabled>Select size</option>
                            <option value="12">12"</option>
                            <option value="14">14"</option>
                            <option value="16">16"</option>
                            <option value="18">18"</option>
                            <option value="20">20"</option>
                            <option value="24">24"</option>
                            <option value="26">26"</option>
                        </select>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <div className="preview-images">
                    {
                        selectedImages.map((img, i) => {
                            return (
                                <img 
                                    key={i}
                                    src={img} 
                                    alt='image preview of what you plan to upload'
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section className="logout-section">
                <h2>Logout?</h2>
                <button onClick={userSignOut}>Log Out</button>
            </section>
        </div>
    );
};

export default AdminPage;