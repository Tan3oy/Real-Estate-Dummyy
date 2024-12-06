import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Dropdown from "../../../../Components/Select_dropdown"
import { IoSearch } from "react-icons/io5";
import { propertyTypeOptions,locationOptions,propertyPurpose } from "../../../../Constants/Menu_data"



const Property_select = () => {
      // State to store filter inputs
    const [ filters, setFilters ] = useState({
        keyword: "",
        location: "",        
        propertyType: "",        
        propertyPurpose: "",
    });

      // State to store filtered properties
    const [ filteredProperties, setFilteredProperties ] = useState([]);

      // Handle form input changes
    const handleInputChange = (e) => {    
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleDropdownChange = (name, value) => {
        setFilters({ ...filters, [name]: value });
    };

      // Fetch and filter data
      const fetchFilteredProperties = async () => {
          try {
                  // Fetch all properties from the backend
                  const response = await axios.get("http://localhost:5000/api/allproperties");
                  const allProperties = response.data;

                // Filter the data based on selected filters
                const filtered = allProperties.filter((property) => {

                    const matchesKeyword =
                    filters.keyword === "" ||
                    property.label.some((label) =>
                      label.toLowerCase().includes(filters.keyword.toLowerCase())
                    );

                    const matchesLocation =
                    filters.location === "" ||
                    property.address.toLowerCase().includes(filters.location.toLowerCase());

                    const matchesPropertyType =
                    filters.propertyType === "" || property.propertyType === filters.propertyType;
                  
                    const matchesPropertyPurpose =
                      filters.propertyPurpose === "" || property.speciality.toLowerCase().includes(filters.propertyPurpose.toLowerCase());
            
                    return matchesKeyword && matchesLocation && matchesPropertyType && matchesPropertyPurpose;
                  });
                  console.log("Filtered Properties:", filtered); // Debug log
                  setFilteredProperties(filtered);
              }
          catch (error) {
                  console.error("Error fetching filtered properties:", error);
              }
      };

    // Fetch data when the user clicks "Search"
    const handleSearch = (e) => {
        e.preventDefault();
        fetchFilteredProperties();
    };

  return (
    <div className='hidden md:block xl:w-[28%]'>
        <div className="bg-[#0B2C3D] text-white font-bold p-4 flex items-center justify-between">
            <p className='text-lg'>Find Your Property</p>
            <span><IoSearch className='text-xl'/></span>
        </div>
        <form className='flex flex-col gap-3 p-4  border shadow-[0px_0px_8px_0px_#97999db8]' onSubmit={handleSearch} >
            {/* Keyword Input */}
            <div className="flex flex-col gap-2">
                <p className='font-bold text-lg'>Keyword</p>
                <input
                    type="text"
                    placeholder='Type...'
                    name="keyword"
                    value={filters.keyword}
                    onChange={handleInputChange}
                    className='p-2 outline-none border border-[#919191]'
                />
            </div>
            {/* Location Dropdown */}
            <div className="flex flex-col gap-2">
                <p className='font-bold text-lg'>Location</p>
                <Dropdown
                    options={locationOptions}
                    placeholder='Location'
                    onChange={(value) => handleDropdownChange("location", value)}
                />              
            </div>
            {/* Property Type Dropdown */}
            <div className="flex flex-col gap-2">
                <p className='font-bold text-lg'>Property Type</p>
                <Dropdown
                    options={propertyTypeOptions}
                    placeholder='Property Type'
                    onChange={(value) => handleDropdownChange("propertyType", value)}
                />
            </div>
            {/* Property Purpose Dropdown */}
            <div className="flex flex-col gap-2">
                <p className='font-bold text-lg'>Property Purpose</p>
                <Dropdown
                    options={propertyPurpose}
                    placeholder='Any'
                    onChange={(value) => handleDropdownChange("propertyPurpose", value)}
                />
            </div>
            {/* Search Button */}
            <div>
                <button
                    type="submit" 
                    className='
                            mx-auto w-full h-11
                            bg-[#27ae60] text-white font-medium text-[17px]
                            relative
                            z-[1] overflow-hidden

                            before:transition-all before:duration-500 before:ease-in-out
                            before:content-[" "]
                            before:absolute
                            before:top-0 before:left-0
                            before:bg-[#093B55]
                            before:h-full before:w-0
                            before:z-[-1] 
                            before:opacity-0

                            hover:before:w-full
                            hover:before:opacity-100'
                >
                    Search
                </button>            
            </div>
        </form>

        {/* Render Filtered Properties */}
        <div className="mt-4">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property._id} className="p-4 border shadow-md mb-4">
              <img src={property.imgUrl} alt={property.label.join(", ")} className="w-full h-40 object-cover mb-2" />
              <h3 className="font-bold">{property.label.join(", ")}</h3>
              <p>Price: ${property.price}</p>
              <p>Type: {property.propertyType}</p>
              <p>Location: {property.address}</p>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  )
}

export default Property_select