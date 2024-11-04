import { useEffect, useState } from 'react';

import {Link} from 'react-router-dom'



//Inventory...
import bikeInventory from '../Bikes';

//React icons...
import { IoFilterSharp } from "react-icons/io5";

//Firebase...
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../firebase';


//Styles...
import '../styles/Inventory.scss'
import SidebarFilters from '../components/SidebarFilters';


import LoadingCard from '../components/LoadingSheanComponents/LoadingCard';

const Inventory = () => {

    //State holding the bike inventory with filters placed by user...
    const [filteredItems, setFilteredItems] = useState([]);

    //Holds the original inventory without filters for reference...
    const [originalInventory, setOriginalInventory] = useState([])

    //loading state for showing the loading animations...
    const [loading, setLoading] = useState(true);

    //Determines if sidebar filters are active/showing on page...
    const [activeSide, setActiveSide] = useState(true);

    //State for showing sort by menu and changing it...
    const [sortByActiveFilter, setSortByActiveFilter] = useState(false);
    const [sortByFilter, setSortByFilter] = useState('');

    // This state is for showing what filter you are on and the number of items in this filter...
    const [sideFilter, setSideFilter] = useState('');


    //Filters for main data...
    const filters = {
        types: [
            'mountain',
            'road',
            'hybrid',
            'bmx',
            'cruiser',
            'electric',
            'kids',
            'tandem',
            'folding', 
        ],
        sizes: ['12', '14', '16', '18', '20', '24', '26'],
    };

    const getBikesInventory = async () => {
        const bikesCollection = collection(database, 'bikesInventory');

        const bikesSnapshot = await getDocs(bikesCollection);

        const bikesList = bikesSnapshot.docs.map(doc => ({ ...doc.data() }));
        setLoading(false)
        setFilteredItems(bikesList);
        setOriginalInventory(bikesList);

        //setFilteredItems(bikeInventory)
    }

    useEffect(() => {
       getBikesInventory()
    }, [])


    useEffect(() => {
        let items = [...filteredItems];

        if(sortByFilter === 'Price (ascending)') {
            items = items.sort((a,b) => a.price - b.price)
        } 
        else if(sortByFilter === 'Price (descending)') {
            items = items.sort((a, b) => b.price - a.price)
        } 
        else if(sortByFilter === 'Year (newest)') {
            items = items.sort((a, b) => b.year - a.year)
        }
        else if(sortByFilter === 'Year (older)') {
            items = items.sort((a, b) => a.year - b.year)
        }

        setFilteredItems(items);


    }, [sortByFilter])


    const handleSortByFilter = (e) => {
        const {textContent} = e.target;
        setSortByFilter(textContent)
        setSortByActiveFilter(false)
    }

  
    const [selectedFilters, setSelectedFilters] = useState({
        brands: '',
        types: '',
        sizes: '',
    });


    const handleFilterChange = (name, value) => {
        setSideFilter(value);            
        setSelectedFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };


    useEffect(() => {
        // Create a copy of the bike inventory to apply filters cumulatively
        let filtered = originalInventory;

        // Apply all filters based on currently selected values
        if (selectedFilters.types) {
          filtered = filtered.filter((product) => product.type === selectedFilters.types);
        }
        if (selectedFilters.sizes) {
          filtered = filtered.filter((product) => product.size === selectedFilters.sizes);
        }

        // Set the filtered items
        setFilteredItems(filtered);


    }, [selectedFilters])


   
    return (
        <div className='inventory-page'>
            <h1>Inventory</h1>
            <div className="input-container">

                <div className='filter-info'>Type: {sideFilter || ''} ({filteredItems.length})</div>
              

                <div className='filter-buttons'>
                    <span onClick={() => setActiveSide(prev => !prev)}>Filters</span>
                    <IoFilterSharp onClick={() => setSortByActiveFilter(prev => !prev)}/>
                    <div className={`filter-options-wrap ${sortByActiveFilter ? 'active' : ''}`}>
                        <div onClick={handleSortByFilter}>Year (older)</div>
                        <div onClick={handleSortByFilter}>Year (newest)</div>
                    </div> 
                </div>
                    
            </div>
            <div className='inventory-bottom'>
                <SidebarFilters 
                    filters={filters} 
                    handleFilterChange={handleFilterChange} 
                    activeSlide={`${activeSide ? 'active' : ''}`}
                    setActiveSide={setActiveSide}
                />
                <div className='inventory-container'>
                    {//Loading shean to show UI loading...
                        !filteredItems.length && loading &&
                        <>
                            <LoadingCard/>
                            <LoadingCard/>
                            <LoadingCard/>
                            <LoadingCard/>
                            <LoadingCard/>
                            <LoadingCard/>             
                        </>
                    }
                    {
                        filteredItems.map(bike => {
                            return (
                                <div key={bike.id} className="card">
                                    <img src={bike.images[0]} alt="" />
                                    <div className='card-bottom'>
                                        <div className='brand'>{bike.brand}</div>
                                        <Link 
                                            to={`/inventory${!bike.soldStatus ? `/${bike.id}` : ''}`} 
                                            //onClick={() => setBikeDetail(bike)}
                                        >
                                            <h2 className='model'>{bike.model.substring(0, 15)}</h2>
                                        </Link>
                                        <div className='type'>{bike.type}</div>
                                        <span className='year'>{bike.year}</span>
                                    </div>
                                    {bike.soldStatus &&
                                        <div className="sold-overlay">
                                            <h2>SOLD</h2>
                                        </div>
                                    }
                                </div>
                            )
                        })

                    } 
                    {//Dispalys to the user that their search has given zero results...
                        !loading && !filteredItems.length &&

                        <h2>No Results...</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventory;