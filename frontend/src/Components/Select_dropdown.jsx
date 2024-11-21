import React from 'react'
import { useState } from "react"
import { IoMdArrowDropdown , IoMdArrowDropup } from "react-icons/io"
import Select, {components} from 'react-select'

const Dropdown = ({placeholder,options}) => {
    const [IsOpen,setIsOpen] = useState(null);
    const customIndicator = (props) => {
        return(
            <components.DropdownIndicator {...props}>
                <span className='text-black '>
                    { IsOpen ? <IoMdArrowDropup/>:<IoMdArrowDropdown/>}
                </span>
            </components.DropdownIndicator>
        )       
    }

    const customStyles = {
        container: (basestyles) => ({
        ...basestyles,
        width: '100%', // Set the width
        height: '100%', // Set the height
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 9999, // Ensure dropdown is on top
        }),
        menuPortal: (base) => ({
            ...base,
            zIndex: 9999
        }),
        control : (basestyles) => ({
        ...basestyles,
        height: '100%', // Set the height
        cursor: 'pointer',
        border: 'none',
        boxShadow: 'none',
        padding: '0px 8px',
        }),
        option: (styles, { isFocused, isSelected }) => ({
            ...styles,
            cursor: 'pointer',
            backgroundColor: isFocused ? '#27AE60' : isSelected ? 'lightgray' : undefined,
            color: isFocused ? 'white' : 'black',
        })
        
    };
    const customTheme = (theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
        ...theme.colors,
        primary25: "#27AE60", // Background color of options on hover
        primary50: "#27AE60",
        primary: "#27AE60"
        },
    });

    return (
    <div className="relative text-lg w-full sm:w-auto border border-slate-400"  >
        <Select          
            options={options}
            defaultValue={placeholder}
            placeholder={placeholder}           
            components={{DropdownIndicator:customIndicator, IndicatorSeparator:()=> null}}
            onMenuOpen={() => setIsOpen(true)} // Trigger when menu opens
            onMenuClose={() => setIsOpen(false)} // Trigger when menu closes           
            styles={customStyles}
            theme={customTheme}
        />
    </div>
    )
}

export default Dropdown