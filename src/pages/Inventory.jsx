import { useEffect, useState } from 'react';


//Inventory...
import bikeInventory from '../Bikes';

//React icons...
import { IoFilterSharp } from "react-icons/io5";


//Styles...
import '../styles/Inventory.scss'
import SidebarFilters from '../components/SidebarFilters';


const Inventory = () => {

    const [filteredItems, setFilteredItems] = useState([...bikeInventory]);

    //Determines if sidebar filters are active/showing on page...
    const [activeSide, setActiveSide] = useState(true);

    //State for showing sort by menu and changing it...
    const [sortByActiveFilter, setSortByActiveFilter] = useState(false);
    const [sortByFilter, setSortByFilter] = useState('');

    // This state is for showing what filter you are on and the number of items in this filter...
    const [sideFilter, setSideFilter] = useState('');


    //Filters for main data...
    const filters = {
        brands: [
            'Trek',
            'Specialized',
            'Cannondale',
            'Giant',
            'Santa Cruz',
            'Yeti',
            'Scott',
            'Canyon',
            'Bianchi',
            'Orbea',
            'Cube',
            'Merida',
            'Pinarello',
            'Cervelo',
            'Kona',
            'Fuji',
            'Surly',
            'Raleigh',
            'Diamondback',
            'Ghost'
        ],
        types: [
            'Road',
            'Mountain',
            'Electric Mountain',
            'Cyclocross',
            'Gravel'
        ],
        years: [
            2022,
            2023,
            2021,
            2020
        ],
        sizes: ['S', 'M', 'L'],
        prices: ['$50-$100', '$101-$200']
    };


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
        prices: ''
    });


    const handleFilterChange = (name, value) => {
        // Track all active filters in state
        setSideFilter(value);            

        console.log(name)

        setSelectedFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };


    useEffect(() => {
        // Create a copy of the bike inventory to apply filters cumulatively
        let filtered = bikeInventory;


        
        // Apply all filters based on currently selected values
        if (selectedFilters.brands) {
            console.log('changing brands...')
          filtered = filtered.filter((product) => product.brand === selectedFilters.brands);
        }
        if (selectedFilters.types) {
          filtered = filtered.filter((product) => product.type === selectedFilters.types);
        }
        if (selectedFilters.sizes) {
          filtered = filtered.filter((product) => product.size === selectedFilters.sizes);
        }
        if (selectedFilters.prices) {
          filtered = filtered.filter((product) => product.price === selectedFilters.prices);
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
                        <div onClick={handleSortByFilter}>Price (ascending)</div>
                        <div onClick={handleSortByFilter}>Price (descending)</div>
                        <div onClick={handleSortByFilter}>Year (older)</div>
                        <div onClick={handleSortByFilter}>Year (newest)</div>
                    </div> 
                </div>
                    
            </div>


            

            {/* <div className={`inventory-bottom ${activeSide ? 'active' : ''}`}>

                <SidebarFilters 
                    filters={filters} 
                    handleFilterChange={handleFilterChange} 
                    setActiveSide={setActiveSide}
                />




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
            </div> */}

            <div className='inventory-bottom'>

                <SidebarFilters 
                    filters={filters} 
                    handleFilterChange={handleFilterChange} 
                    activeSlide={`${activeSide ? 'active' : ''}`}
                    setActiveSide={setActiveSide}
                />




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



        </div>
    );
};

export default Inventory;


  {/* <input 
                    type="text"  
                    placeholder='Search...'
                    onChange={handleInputChange}
                /> */}