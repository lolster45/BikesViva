import { useEffect, useState } from 'react';


//Inventory...
import bikeInventory from '../Bikes';

//React icons...
import { IoFilterSharp } from "react-icons/io5";


//Styles...
import '../styles/Inventory.scss'


const Inventory = () => {

    const [filteredItems, setFilteredItems] = useState([]);


    //State for showing filter menu and changing it...
    const [filterActive, setFilterActive] = useState(false);

    const handleFilterClick = (e) => {
        const {textContent} = e.target
        setFilterActive(false)
        setFilterChoice(textContent)
    }


    // State for user input
    const [searchTerm, setSearchTerm] = useState('');
    // Filtered items based on search term
    const [filterChoice, setFilterChoice] = useState('');

    
   
    // Handle input change
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        console.log(filterChoice)

        let items = bikeInventory.filter(item =>
            item.model.toLowerCase().includes(searchTerm.toLowerCase())
            
        )

        if(filterChoice === 'Price (ascending)') {
            items = items.sort((a,b) => a.price - b.price)
        } 
        else if(filterChoice === 'Price (descending)') {
            items = items.sort((a, b) => b.price - a.price)
        } 
        else if(filterChoice === 'Year (newest)') {
            items = items.sort((a, b) => b.year - a.year)
        }
        else if(filterChoice === 'Year (older)') {
            items = items.sort((a, b) => a.year - b.year)
        }


        setFilteredItems(items);



    }, [searchTerm, filterChoice])

    return (
        <div className='inventory-page'>
            
            <h1>Inventory</h1>

            <div className="input-container">

                <input 
                    type="text"  
                    placeholder='Search...'
                    onChange={handleInputChange}
                />

                <div className='filter-buttons'>
                    <IoFilterSharp onClick={() => setFilterActive(prev => !prev)}/>
                  
                </div>

            </div>
            <div className={`filter-options-wrap ${filterActive ? 'active' : ''}`}>
                <div onClick={handleFilterClick}>Price (ascending)</div>
                <div onClick={handleFilterClick}>Price (descending)</div>
                <div onClick={handleFilterClick}>Year (older)</div>
                <div onClick={handleFilterClick}>Year (newest)</div>
            </div>

            <div className='inventory-container'>
                {
                    filteredItems.map(bike => {
                        return (
                            <div key={bike.id} className="card">
                                <img src="/bikeImage.jpg" alt="" />
                                <div className='card-bottom'>
                                    <div className='brand'>{bike.brand}</div>
                                    <h2 className='model'>{bike.model}</h2>
                                    <div className='price'>${bike.price}</div>
                                    <span className='year'>{bike.year}</span>
                                </div>
                            </div>
                        )
                    })

                }
            </div>


        </div>
    );
};

export default Inventory;