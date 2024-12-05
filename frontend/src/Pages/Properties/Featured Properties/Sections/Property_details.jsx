import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link, useParams, useLocation } from 'react-router-dom';
// import {Property_Cards_data} from '../../../../Constants/All_Properties_data'
import { CiLocationOn } from "react-icons/ci";
import { RiHotelBedLine } from "react-icons/ri"
import { FaShower } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';


const Property_details = ({relatedData}) => {
    const {_id} = useParams()
    const [propertyData, setPropertyData]= useState(null)
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/allproperties/${_id}`)
        .then((res)=>setPropertyData(res.data))
        .catch((err)=>console.log(err))
    },[_id])
    console.log(propertyData);

    // stick to current url, like, (all for all, featured for featured, top for top, urgent for urgent), while clicking to related properties
    const location = useLocation();
    console.log("location::::",location);
    const [all_featured_top_urgent, setall_featured_top_urgent] = useState("");
    useEffect(() => {
        if (location.pathname.includes("all")) {
            setall_featured_top_urgent("all");
        }
        else if (location.pathname.includes("featured")) {
            setall_featured_top_urgent("featured");
        }
        else if (location.pathname.includes("top")) {
            setall_featured_top_urgent("top");
        }
        else if (location.pathname.includes("urgent")) {
            setall_featured_top_urgent("urgent");
        }
    }, [all_featured_top_urgent]);

    

    const [preShuffleData, setpreShuffleData] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    // useEffect(() => {
    //   axios
    //     .get(`http://localhost:5000/api/allproperties`)
    //     .then((res) => {
    //         setpreShuffleData(res.data);
    //         // Randomly select cards as soon as data is fetched
    //         selectRandomCards(res.data, 2); // Choose 2 cards for example
    //     })
    //     .catch((err) => console.log(err));
    // }, []);
    // console.log("preShuffleData::::",preShuffleData);

      useEffect(() => {
        setpreShuffleData(relatedData);
        selectRandomCards(relatedData, 2);
      }, [relatedData]);
      console.log("preShuffleData::::",preShuffleData);
      
      // Function to shuffle and select a subset of cards
      const selectRandomCards = (data, numberOfCards) => {
          const shuffleArray = (array) => {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
              const randomIndex = Math.floor(Math.random() * (i + 1));
              [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
            }
            return shuffled;
          };     
          // Shuffle and slice the array
          const randomCards = shuffleArray(data).slice(0, numberOfCards);
          setSelectedCards(randomCards);
        };
// test        
console.log("selectedCards::::,,",selectedCards);
return (
    <div>
        {
            propertyData?(
            <>
                <div>
                    <section id='hero_Property' style={{backgroundImage: `url(${propertyData.propertyHero_Image})`}}  className={`bg-no-repeat bg-cover bg-center [border-image:linear-gradient(#0b2c3d70,#0b2c3d70)_fill_1]`}>
                        <div className=" pt-40 pb-44 w-full ">
                        <h1 className='text-4xl font-bold text-white text-center mb-6'>Properties</h1>
                        <h2 className='text-xl font-medium text-white text-center'>Home - Properties -{propertyData.speciality}</h2>
                    </div>      
                    </section>
                    <div className="flex flex-col-reverse gap-y-6 lg:flex-row mx-auto my-28 px-8 md:px-24 lg:px-8 xl:px-24 gap-x-6 sm:w-[576px] md:w-[768px] lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
                        <div className="Property-details-left flex flex-col gap-8 w-full lg:w-[40%] xl:w-[40%] 2xl:w-[31%]">
                            <div className="property_contact p-4 w-full h-fit rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">
                                <div className="contractor_details bg-[#27ae60] flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 p-4 rounded-t-xl text-white">
                                    <div className='w-[72px] h-[72px] rounded-[50%] overflow-hidden'>
                                        <img src='https://demo.websolutionus.com/findestate/uploads/website-images/earl-newell-2021-10-07-08-20-15-5266.jpg' className='w-full h-full object-cover' />
                                    </div>
                                    <div>
                                        <p className='font-bold text-xl'>John Doe</p>
                                        <div className='flex gap-1'>
                                            <p className='text-[20px] font-normal'><FontAwesomeIcon icon={faEnvelope} /></p>
                                            <div className='pt-[1.9px]'><p className='text-lg font-normal break-words'>admin@gmail.com</p></div>
                                        </div>
                                    </div>
                                </div>
                                <form className='flex flex-col gap-5'>
                                    <div className=" flex flex-col gap-1 mt-7">
                                        <p className='font-medium text-[#093B55]'>Name</p>
                                        <input type="text" className='p-4 border border-solid outline-none border-[#eee] w-full rounded-[5px] [box-shadow:rgba(0,_0,_0,_0.1)_0px_1px_3px_0px,_rgba(0,_0,_0,_0.06)_0px_1px_2px_0px]' />
                                    </div>
                                    <div className=" flex flex-col gap-1">
                                        <p className='font-medium text-[#093B55]'>Email</p>
                                        <input type="text" className='p-4 border border-solid outline-none border-[#eee] w-full rounded-[5px] [box-shadow:rgba(0,_0,_0,_0.1)_0px_1px_3px_0px,_rgba(0,_0,_0,_0.06)_0px_1px_2px_0px]' />
                                    </div>
                                    <div className=" flex flex-col gap-1">
                                        <p className='font-medium text-[#093B55]'>Phone</p>
                                        <input type="text" className='p-4 border border-solid outline-none border-[#eee] w-full rounded-[5px] [box-shadow:rgba(0,_0,_0,_0.1)_0px_1px_3px_0px,_rgba(0,_0,_0,_0.06)_0px_1px_2px_0px]' />
                                    </div>
                                    <div className=" flex flex-col gap-1">
                                        <p className='font-medium text-[#093B55]'>Description</p>
                                        <textarea name="" id="" cols="5" rows="5" className='p-4 border border-solid outline-none border-[#eee] w-full rounded-[5px] [box-shadow:rgba(0,_0,_0,_0.1)_0px_1px_3px_0px,_rgba(0,_0,_0,_0.06)_0px_1px_2px_0px] resize-none'></textarea>
                                    </div>
                                    <button className='mx-auto w-40 h-11 rounded-[3px]
                                                bg-[#093B55] text-white font-medium text-[17px]
                                                relative
                                                z-[1] overflow-hidden

                                                before:transition-all before:duration-500 before:ease-in-out
                                                before:content-[" "]
                                                before:absolute
                                                before:top-0 before:left-0
                                                before:bg-[#27ae60]
                                                before:h-full before:w-0
                                                before:z-[-1] 
                                                before:opacity-0

                                                hover:before:w-full
                                                hover:before:opacity-100'
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                            <div className="property_related hidden lg:block p-4 w-full h-fit rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">
                                <div className='flex justify-center items-center pt-2'>
                                    <h1 className='text-[#0a2f3d] text-xl font-medium'>Related Properties</h1>
                                </div>
                                <div>
                                {
                                    selectedCards.length > 0 ? (
                                    selectedCards.map((card) => (
                                            <Link to={`/properties/${all_featured_top_urgent}_properties/${card._id}`}>
                                            <div key={card.id} className="flex flex-col py-2">
                                                <div className="w-full h-full pt-6">
                                                        <img src={card.imgUrl} className="w-full h-full object-cover rounded-[5px] mb-2" />
                                                </div>
                                                <h3 className="text-base font-bold text-[#163f54] pt-1">{card.speciality}</h3>
                                                <div className='text-[#848385] text-sm pt-1'>{card.address}</div>
                                                <div className='text-green-600 font-bold text-xl pt-1'>${card.price}</div>
                                            </div>
                                            </Link>
                                    ))
                                    ) : (
                                    <p>Loading trending cards...</p>
                                    )
                                }
                                </div>
                            </div>
                        </div>
                        <div className="Property-details-right flex flex-col gap-8 w-full lg:w-[58%] xl:w-[58%] 2xl:w-[67%] ">
                            <div className="propert-intro h-fit p-4 rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">
                                <div className="property-labels flex gap-3">
                                    <div className="flex items-center gap-3">
                                        {
                                            propertyData.label.map((item,index)=>(
                                            <span key={index} className='px-2 py-1 rounded-md text-[#27AE60] text-xl font-bold bg-[#FEECE5] mb-4'>{item}</span>
                                        ))
                                        }
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='text-[27px] font-semibold mb-2'>{propertyData.speciality}</h1>
                                    <p className='flex items-center gap-1 text-[#838383] mb-2'>
                                        <span><CiLocationOn className='text-xl'/></span>
                                        <span className=' text-base'>{propertyData.address}</span>
                                    </p>
                                    <p className='text-[#27AE60] text-2xl font-bold mb-4'>$ {propertyData.price}</p>
                                    <div></div>
                                </div>
                                <div className='flex gap-6 text-slate-600 mb-5'>
                                    <p className='flex items-center gap-1'>
                                        <span className='border shadow-[0px_0px_5px_1px] shadow-[#dcdada] bg-[#F3F7FD] p-[4px] rounded-full text-[#093B55]'><RiHotelBedLine/></span>
                                        <span className='text-[#093B55]'>{propertyData.bedrooms} Bed</span>
                                    </p>
                                    <p className='flex items-center gap-1'>
                                        <span className='border shadow-[0px_0px_5px_1px] shadow-[#dcdada] bg-[#F3F7FD] p-[4px] rounded-full text-[#093B55]'><FaShower/></span>
                                        <span className='text-[#093B55]'>{propertyData.bathrooms} Bath</span>
                                    </p>
                                    <p className='flex items-center gap-1'>
                                        <span className='border shadow-[0px_0px_5px_1px] shadow-[#dcdada] bg-[#F3F7FD] p-[4px] rounded-full text-[#093B55]'><FaVectorSquare/></span>
                                        <span className='text-[#093B55]'>{propertyData.area} Sqft</span>
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <button
                                        className='w-44 h-11 rounded-[3px]
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
                                        <div className='flex justify-center items-center gap-1'>
                                            <p className='text-[20px] font-normal'><FontAwesomeIcon icon={faHeart} /></p>
                                            <div className='pt-[1.9px]'><p className='text-[17px] font-semibold'>Add to Wishlist</p></div>
                                        </div>
                                    </button>
                                    <div className='flex justify-between items-center gap-3'>
                                        <div className="review flex items-center h-fit gap-2 px-2 py-1 rounded-sm bg-[#EEEEEE]">
                                            <span><FaCommentDots/></span>
                                            <span className='text-sm'>Add Review</span>
                                        </div>
                                        <div className="view flex items-center h-fit gap-2 px-2 py-1 rounded-sm bg-[#EEEEEE]">
                                            <span><FaEye/></span>
                                            <span className='text-sm'>{propertyData.view}</span>
                                        </div>
                                        {
                                            propertyData.featured && (
                                            <div className="featured flex items-center h-fit gap-2 px-2 py-1 rounded-sm bg-[#447bff] text-white">
                                                <span><MdDone/></span>
                                                <span className='text-sm'>Featured</span>
                                            </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="details h-fit py-4 px-6 rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">
                                <h1 className='font-semibold text-2xl mb-4'>Details & Features</h1>
                                <p className='md:flex gap-20'>
                                    <div className="">
                                        <p className='flex items-center gap-4 mb-2 text-lg'>
                                            <span className='font-medium'>Property Type :</span>
                                            <span className='text-[#6f6f6f]'>{propertyData.propertyType}</span>
                                        </p>
                                        <p className='flex items-center gap-4 mb-2 text-lg'>
                                            <span className='font-medium'>Area :</span>
                                            <span className='text-[#6f6f6f]'>{propertyData.area}</span>
                                        </p>
                                        <p className='flex items-center gap-4 mb-2 text-lg'>
                                            <span className='font-medium'>Bedrooms :</span>
                                            <span className='text-[#6f6f6f]'>{propertyData.bedrooms}</span>
                                        </p>
                                        <p className='flex items-center gap-4 mb-2 text-lg'>
                                            <span className='font-medium'>Bathrooms :</span>
                                            <span className='text-[#6f6f6f]'>{propertyData.bathrooms}</span>
                                        </p>
                                        <p className='flex items-center gap-4 mb-2 text-lg'>
                                        <span className='font-medium'>Rooms :</span>
                                        <span className='text-[#6f6f6f]'>{propertyData.rooms}</span>
                                    </p>
                                    </div>
                                    <div className="">
                                        <p className='flex items-center gap-4 mb-2 text-lg'>
                                            <span className='font-medium'>Units :</span>
                                            <span className='text-[#6f6f6f]'>{propertyData.units}</span>
                                        </p>
                                        <p className='flex items-center gap-4 mb-2 text-lg'>
                                            <span className='font-medium'>Floors :</span>
                                            <span className='text-[#6f6f6f]'>{propertyData.floors}</span>
                                        </p>
                                        <p className='flex items-center gap-4 mb-2 text-lg'>
                                            <span className='font-medium'>Kitchens :</span>
                                            <span className='text-[#6f6f6f]'>{propertyData.kitchens}</span>
                                        </p>
                                        <p className='flex items-center gap-4 mb-2 text-lg'>
                                            <span className='font-medium'>Parking Place :</span>
                                            <span className='text-[#6f6f6f]'>{propertyData.parking}</span>
                                        </p>
                                    </div>
                                </p>
                            </div>
                            <div className='location_map h-fit py-4 px-6 rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)] overflow-hidden'>
                                {/* iframe: either width or height should be specified. both cannot be 100% */}
                                <iframe className='w-[100%] h-[300px]'
                                        
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212189.58028001108!2d-118.32092958478809!3d33.800383796747866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cae84099d759%3A0xa1003afac42a8faa!2z4Kay4KaCIOCmrOCngOCmmiwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sin!4v1732183726709!5m2!1sbn!2sin"
                                        
                                        allowfullscreen=""
                                        loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                            <div className=""></div>
                            <div className=""></div>
                        </div>
                    </div>
                </div>               
            </>):(
                <p className='pt-40'>Property Not Found</p>
            )
        }
    </div>
)
}

export default Property_details