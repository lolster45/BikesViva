import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import '../styles/SideBarFilter.scss';

const SidebarFilters = ({ filters, handleFilterChange, setActiveSide, activeSlide }) => {
  // State for managing the opened filters
  const [isOpen, setIsOpen] = useState({
    brand: false,
    size: false,
    type: false,
  });

  // State for tracking selected radio buttons
  const [selected, setSelected] = useState({
    brand: '',
    type: '',
    size: '',
  });

  const toggleFilter = (filterName) => {
    setIsOpen(prev => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;


    handleFilterChange(name, value);
    setSelected(prev => ({ ...prev, [name]: value })); // Update selected state
  };

  return (
    <div className={`sidebar ${activeSlide}`}>
      <div className='scroll-wrap'>

        {Object.keys(filters).map((filterCategory) => (
          <div className="filter-category" key={filterCategory}>
            <h4 onClick={() => toggleFilter(filterCategory)}>
              {filterCategory.charAt(0).toUpperCase() + filterCategory.slice(1)}
              <IoIosArrowDown />
            </h4>
            {isOpen[filterCategory] && (
              <div className="filter-options">
                {filters[filterCategory].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name={filterCategory}
                      value={option}
                      checked={selected[filterCategory] === option} // Set checked based on state
                      onChange={handleChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mobile-buttons">
        <button onClick={() => setActiveSide(false)}>Exit</button>
        <button onClick={() => setActiveSide(false)}>Apply</button>
      </div>
    </div>
  );
};

export default SidebarFilters;






























































// import React, { useState } from 'react';


// //React icons...
// import { IoIosArrowDown } from "react-icons/io";



// //Styles...
// import '../styles/SideBarFilter.scss'

// const SidebarFilters = ({ filters, handleFilterChange,  setActiveSide, activeSlide }) => {
    
//   //Manages which items on sidebar filters are open...
//   const [isBrandOpen, setIsBrandOpen] = useState(false);
//   const [isSizeOpen, setIsSizeOpen] = useState(false);
//   const [isTypeOpen, setIsTypeOpen] = useState(false);
//   const [isPriceOpen, setIsPriceOpen] = useState(false);




//   const toggleFilter = (filterName) => {
//     switch (filterName) {
//       case 'brand':
//         setIsBrandOpen((prev) => !prev);
//         break;
//       case 'size':
//         setIsSizeOpen((prev) => !prev);
//         break;
//       case 'type':
//         setIsTypeOpen((prev) => !prev);
//         break;
//       case 'price':
//         setIsPriceOpen((prev) => !prev);
//         break;
//       default:
//         break;
//     }
//   };



//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     handleFilterChange(name, value);
//   };

//   return (
//     <div className={`sidebar ${activeSlide}`}>
//       <div className='scroll-wrap'>

//         <div className="filter-category">
//           <h4 onClick={() => toggleFilter('brand')}>
//             Brand
//             <IoIosArrowDown/>
//           </h4>
//           {isBrandOpen && (
//             <div className="filter-options">
//               {filters.brands.map((brand) => (
//                 <label key={brand}>
//                   <input
//                     type="radio"
//                     name="brand"
//                     value={brand}
//                     onChange={handleChange}
//                   />
//                   {brand}
//                 </label>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="filter-category">
//           <h4 onClick={() => toggleFilter('type')}>
//             Type
//             <IoIosArrowDown/>
//           </h4>
//           {isTypeOpen && (
//             <div className="filter-options">
//               {filters.types.map((type) => (
//                 <label key={type}>
//                   <input
//                     type="radio"
//                     name="type"
//                     value={type}
//                     onChange={handleChange}
//                   />
//                   {type}
//                 </label>
//               ))}
//             </div>
//           )}
//         </div>


//         <div className="filter-category">
//           <h4 onClick={() => toggleFilter('size')}>Size</h4>
//           {isSizeOpen && (
//             <div className="filter-options">
//               {filters.sizes.map((size) => (
//                 <label key={size}>
//                   <input
//                     type="radio"
//                     name="size"
//                     value={size}
//                     onChange={handleChange}
//                   />
//                   {size}
//                 </label>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="filter-category">
//           <h4 onClick={() => toggleFilter('price')}>Price</h4>
//           {isPriceOpen && (
//             <div className="filter-options">
//               {filters.prices.map((price) => (
//                 <label key={price}>
//                   <input
//                     type="radio"
//                     name="price"
//                     value={price}
//                     onChange={handleChange}
//                   />
//                   {price}
//                 </label>
//               ))}
//             </div>
//           )}
//         </div>

//       </div>
      
//       <div className="mobile-buttons">
//         <button onClick={() => setActiveSide(false)}>Exit</button>
//         <button onClick={() => setActiveSide(false)}>Apply</button>
//       </div>
//     </div>
//   );
// };

// export default SidebarFilters;
