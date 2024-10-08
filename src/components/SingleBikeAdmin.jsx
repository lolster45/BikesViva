//React...
import React from 'react';

//React icons...
import { MdDelete } from "react-icons/md";

//Firebase...
import { collection, where, query, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { database } from '../firebase';


const SingleBikeAdmin = ({id, img, model, overlay, setOverlay, bikeInventory, setBikeInventory, handleOverlayChange}) => {

    async function deleteDocumentByProperty(idValue) {
        try {
          // Create a query to find the document(s) with the specific ID property
          const q = query(collection(database, 'bikesInventory'), where('id', '==', idValue));
          
          // Get matching documents
          const querySnapshot = await getDocs(q);
          
          // Loop through matching documents and delete them
          querySnapshot.forEach(async (document) => {
            await deleteDoc(doc(database, 'bikesInventory', document.id));
            console.log(`Document with Firestore ID ${document.id} and ID property ${idValue} deleted.`);
          });


          const newArr = bikeInventory.filter(bike => bike.id !== id);

          setBikeInventory(newArr)

        } 
        catch (error) {
          console.error('Error deleting document: ', error);
        }
    }


    const handleDelete = () => {
        handleOverlayChange();
        deleteDocumentByProperty(id)
    }
   

    return (
        <div className="bike">
            <span className='id'>{id}</span>
            <span className='img'>
                <img src={img} alt="" />
            </span>
            <span className='model'>{model}</span>
            <span className='options'>
                <MdDelete onClick={() => handleOverlayChange(id)}/>
            </span>
            <div className={`options-wrap ${overlay === id ? 'active' : ''}`}>
                <div className="delete-wrap">
                    <div>Are you sure you want to delete this?</div>
                    <button onClick={() => setOverlay(false)}>Cancel</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>  
        
    );
};

export default SingleBikeAdmin;