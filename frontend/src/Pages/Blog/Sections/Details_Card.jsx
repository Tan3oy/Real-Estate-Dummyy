import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import Content_Blog from "./Content_Blog";
// import Content_Blog from "./Content_Blog"
// import { BsChatSquareText } from "react-icons/bs";
// import { FaEye } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";
import {  useBlogCounter } from "../../../Components/Blogs_Catagory_Counter";
import BreadCrumbs from "../../../Components/BreadCrumbs";

const Details_Card = () => {
  const { _id } = useParams();
  const [BlogsData, setBlogsData] = useState(null);
  const CatagoryArr=["Fitness","LifeStyle","Event","Bar & Cafe","Food & Drink"]

  // test
  // console.log("Fetching blog with ID:", _id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blog/${_id}`)
      .then((res) => {
            setBlogsData(res.data);
      })
      .catch((err) => console.log(err));
  }, [_id]);

// passing an empty object to selectData first
  const [selectData, setSelectData] = useState({});
// create an anonymous function to accept name as type and take value (text written in the input field) and store the function in the variable formValueGrabber
  const formValueGrabber=(name,value)=>{
    setSelectData({...selectData, [name]: value})
    console.log("name::::",name,"value::::",value);
    console.log("selectData::::",selectData);
}
// test: updated selectData print on console.log
useEffect(() => {
console.log('selectData::::>', selectData);
}, [selectData]);

// send a query to the route in a dynamic manner
  const query= new URLSearchParams(selectData).toString()
  console.log(`query string::::${query}`);
//   console.log("filteredData num::::",filteredData.length);

const [preShuffleData, setpreShuffleData] = useState([]);
const [selectedCards, setSelectedCards] = useState([]);
useEffect(() => {
  axios
    .get(`http://localhost:5000/api/AllBlogs`)
    .then((res) => {
        setpreShuffleData(res.data);
        // Randomly select cards as soon as data is fetched
        selectRandomCards(res.data, 5); // Choose 5 cards for example
    })
    .catch((err) => console.log(err));
}, []);
console.log("preShuffleData::::",preShuffleData);

// //Catagory Counter Array
// const catagoryCounter=(ques)=>{
//       console.log("ques:::",ques);
//       // const [data, setData] = useState(0);
//             const fetchData=async()=>{ 
//             const res= await axios.get("http://localhost:5000/api/AllBlogs")
//             const tempData=res.data
//             const lifeStyleCards= [...(tempData.filter((el)=>el.categoryType===ques))].length
//             return lifeStyleCards
//       }
//       const result=  fetchData().then(res=>{return res})
//       return result


// }
const ques1=useBlogCounter("Lifestyle")
const ques2=useBlogCounter("Event")
console.log("lifestyle blogs:::",ques1,ques2);

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

// error-route set
const location = useLocation();
const navigate = useNavigate();

// Regular expression for valid paths
const validPathRegex = /^\/blog(\/[a-fA-F0-9]{24})$/;

// Redirect if the path doesn't match the regex
if (!validPathRegex.test(location.pathname)) {
  console.log("Invalid path:", location.pathname);
     navigate("/404"); // Redirect to a 404 page or another route
  }



  return (
      <>
            <section id='hero_blog' className='bg-blog-hero-image bg-no-repeat bg-cover bg-center [border-image:linear-gradient(#0b2c3d70,#0b2c3d70)_fill_1]'>
                  <div className=" pt-40 pb-44 w-full ">
                        <h1 className='text-4xl font-bold text-white text-center mb-6'>{BlogsData?.title}</h1>
                        <h2 className='flex gap-1 justify-center text-[8px] md:text-sm lg:text-lg font-medium text-white text-center'><BreadCrumbs/>-&nbsp;{BlogsData?.title}</h2>
                  </div>
            </section>
            {/* entire container of the middle section (vertically) */}
            <div className="p-24">
                  {/* the container inside the entire container of the middle section (vertically) */}
                  {
                 
                  (<div className="flex gap-6 mx-auto w-full h-fit justify-center">

                        {/* left div */}
                        <div className="flex flex-col gap-y-6 w-full h-fit lg:w-[67%]">
                              {/* upper div of the left div */}
                              <div className="mx-auto py-7 px-6 w-full h-fit rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">          
                                    <div className="h-full w-full">
                                          <img src={BlogsData?.image} className="w-full h-full object-cover rounded-[10px]" />
                                    </div>
                                    <div className="flex flex-wrap items-center justify-start gap-5 py-4 text-[#848385] font-normal text-lg" style={{ textShadow: "-0.001pt -0.001pt 0 #848385, 0.001pt -0.001pt 0 #848385, -0.001pt 0.001pt 0 #848385, 0.001pt 0.001pt 0 #848385" }} >
                                          <div className="flex items-center">
                                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                                width="21.36263736263736pt" height="18.0000000000000pt" viewBox="0 0 144.000000 123.000000"
                                                preserveAspectRatio="xMidYMid meet">
                                                      <g transform="translate(0.000000,123.000000) scale(0.100000,-0.100000)"
                                                      fill="#848385" stroke="#848385" stroke-width="15">
                                                            <path d="M457 1156 c-67 -18 -126 -62 -162 -120 -41 -68 -47 -168 -15 -245 45
                                                            -103 162 -171 273 -158 141 17 249 151 234 293 -16 161 -177 272 -330 230z
                                                            m141 -71 c76 -32 122 -102 122 -184 0 -86 -35 -142 -114 -183 -87 -44 -213 -3
                                                            -259 84 -41 80 -32 159 26 225 59 67 148 90 225 58z"/>
                                                            <path d="M1032 518 c-95 -95 -180 -185 -187 -199 -19 -36 -57 -189 -51 -205 7
                                                            -19 32 -18 134 7 l87 22 177 175 c196 194 211 217 182 277 -25 54 -80 95 -128
                                                            95 -38 0 -47 -8 -214 -172z m253 81 c19 -17 35 -36 35 -43 0 -6 -14 -26 -31
                                                            -45 l-31 -33 -44 43 -45 44 35 33 c20 17 38 32 41 32 2 0 20 -14 40 -31z
                                                            m-190 -280 c-101 -99 -123 -116 -170 -130 -30 -10 -55 -15 -55 -12 0 2 5 25
                                                            12 51 9 40 29 66 127 168 l116 122 43 -42 43 -42 -116 -115z"/>
                                                            <path d="M337 519 c-145 -34 -265 -173 -274 -319 -2 -36 1 -72 6 -80 9 -13 61
                                                            -16 335 -20 l324 -5 -1 32 -2 33 -304 0 -304 0 7 42 c17 102 74 181 168 228
                                                            61 30 62 30 233 30 170 0 173 0 230 -29 56 -28 59 -29 81 -13 13 9 24 19 24
                                                            22 0 13 -108 70 -150 79 -54 13 -320 13 -373 0z"/>
                                                      </g>
                                                </svg>
                                                &nbsp;
                                                <p>{BlogsData?.author}</p>
                                          </div>
                                          <div className="flex items-center">
                                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                                width="18.60504201680673pt" height="18.0000000000000pt" viewBox="0 0 123.000000 119.000000"
                                                preserveAspectRatio="xMidYMid meet">
                                                      <g transform="translate(0.000000,119.000000) scale(0.100000,-0.100000)"
                                                      fill="#848385" stroke="#848385" stroke-width="1">
                                                            <path d="M186 1120 c-34 -11 -63 -36 -82 -72 -21 -40 -20 -663 0 -713 26 -61
                                                            63 -75 204 -75 l123 0 -2 -89 c-2 -94 2 -111 28 -111 9 0 76 45 149 100 l134
                                                            100 162 0 c146 0 166 2 196 20 59 36 62 54 62 417 0 307 -1 330 -20 360 -42
                                                            70 -27 68 -500 70 -234 1 -438 -2 -454 -7z m882 -76 c22 -15 22 -15 22 -353 0
                                                            -302 -2 -340 -17 -352 -12 -10 -61 -15 -191 -17 l-175 -3 -104 -80 c-57 -43
                                                            -106 -79 -108 -79 -3 0 -5 29 -5 63 0 91 -5 95 -166 99 -92 2 -136 7 -147 17
                                                            -15 12 -17 50 -17 352 0 338 0 338 22 353 19 14 79 16 443 16 364 0 424 -2
                                                            443 -16z"/>
                                                            <path d="M322 728 c-19 -19 -15 -66 7 -78 11 -5 24 -10 30 -10 16 0 51 38 51
                                                            54 0 37 -61 61 -88 34z"/>
                                                            <path d="M587 719 c-29 -41 12 -92 58 -71 46 21 31 92 -20 92 -13 0 -30 -9
                                                            -38 -21z"/>
                                                            <path d="M856 724 c-21 -21 -20 -40 4 -64 24 -24 43 -25 64 -4 19 18 21 55 4
                                                            72 -17 17 -54 15 -72 -4z"/>
                                                      </g>
                                                </svg>
                                                &nbsp;
                                                <p>{BlogsData?.comments} comments</p>
                                          </div>                          
                                          <div className="flex items-center">                 
                                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                                width="26pt" height="18pt" viewBox="0 0 55.000000 34.000000"
                                                preserveAspectRatio="xMidYMid meet">
                                                      <g transform="translate(0.000000,34.000000) scale(0.100000,-0.100000)"
                                                      fill="#848385" stroke="#848385" stroke-width="1">
                                                      <path d="M210 303 c-68 -24 -139 -107 -121 -141 17 -33 87 -89 126 -102 86
                                                      -28 205 15 248 91 l21 36 -32 41 c-43 54 -103 82 -173 81 -30 0 -61 -3 -69 -6z
                                                      m124 -35 c40 -35 43 -78 11 -116 -54 -64 -149 -29 -149 55 0 70 85 108 138 61z
                                                      m-153 -26 c-44 -82 52 -176 141 -139 59 25 80 84 53 152 -5 13 7 6 34 -20 22
                                                      -21 41 -47 41 -56 0 -39 -109 -109 -170 -109 -36 0 -93 23 -125 51 -52 46 -53
                                                      64 -9 110 40 40 53 45 35 11z"/>
                                                      <path d="M275 228 c-6 -23 -27 -22 -24 -20 -18 4 -9 -29 12 -42 36 -23 75 35
                                                      47 70 -17 19 -24 18 -35 -8z"/>
                                                      </g>
                                                </svg>
                                                &nbsp;
                                                <p>{BlogsData?.views} views</p>
                                          </div>      
                                    </div>
                                    <div className="py-1">
                                          <h1 className="text-2xl font-bold text-[#163f54]">{BlogsData?.title}</h1>
                                          <p className="py-3 text-[#848385]">{BlogsData?.description}</p>
                                    </div>
                              </div>
                              {/* lower div of the left div */}
                              <div className="mx-auto py-7 px-8 flex flex-col gap-6 rounded-[10px] w-full [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">
                                    <h1 className='text-[#0a2f3d] text-2xl font-medium'>comments 0</h1>
                                    <h1 className='text-[#0a2f3d] text-2xl font-medium'>Submit a Comment</h1>
                                    <form className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
                                          <input
                                          type="text"
                                          placeholder="Name"
                                          className="w-full h-14
                                          shadow-[0px_0.4px_1px_1px_#d8d8d8] rounded-md
                                          placeholder:pb-1 focus:outline-none pl-5"
                                          />
                                          <input
                                          type="email"
                                          placeholder="email"
                                          className="w-full h-14
                                          shadow-[0px_0.4px_1px_1px_#d8d8d8] rounded-md
                                          placeholder:pb-1 focus:outline-none pl-5"
                                          />
                                          <textarea
                                          rows="4" cols="35" placeholder="Comment" className="w-full
                                          md:col-span-2
                                          shadow-[0px_0.4px_1px_1px_#d8d8d8] rounded-md
                                          focus:outline-none pl-5 pt-3 resize-none">
                                          </textarea>
                                    </form>
                                    <div className="flex justify-start">
                                          <button
                                          className='flex items-center justify-center
                                          
                                                w-32 h-11 rounded-[3px]

                                                bg-blue-900 text-white text-lg font-medium
                                                relative
                                                z-[1] overflow-hidden

                                                before:transition-all before:duration-500 before:ease-in-out
                                                before:content-[" "]
                                                before:absolute
                                                before:top-0 before:left-0
                                                before:bg-green-500
                                                before:h-full before:w-0
                                                before:z-[-1] 
                                                before:opacity-0

                                                hover:before:w-full
                                                hover:before:opacity-100'
                                          >
                                                Submit
                                                &nbsp;
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                          </button>              
                                    </div>              
                              </div>
                        </div>

                        {/* right div (invisible for small screens) */}
                        <div className="hidden lg:flex lg:flex-col gap-y-6 w-full h-fit lg:w-[31%]">
                              {/* search: upper div of the right div */}
                              <div className="mx-auto py-6 px-6 w-full h-fit rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)] flex flex-col gap-4">
                                    <h1 className='text-[#0a2f3d] text-xl font-bold'>Search</h1>
                                    <div className="flex">
                                          <div className="w-[80%] h-11 shadow-[0px_0.4px_1px_1px_#d8d8d8] rounded-s-md">
                                                <input
                                                type="text"
                                                placeholder="…Type"
                                                name="type"
                                                onChange={(e) => {console.log(e.target.name, e.target.value);formValueGrabber(e.target.name, e.target.value)}}
                                                className="w-full h-fit
                                                      placeholder:text-lg focus:outline-none pl-5 leading-[44px]"
                                                />
                                          </div>
                                          <div className="w-[20%] h-[43.45px] shadow-[0px_0.4px_1px_1px_#22c55e] hover:shadow-[0px_0.4px_1px_1px_#1e3a8a] hover:transition-all hover:delay-75 hover:duration-1000 hover:ease-in-out flex items-center justify-center rounded-e-sm">
                                                <button
                                                      className='w-full h-[43.45px] rounded-e-sm

                                                      bg-green-500 text-white text-lg font-medium
                                                      relative
                                                      z-[1] overflow-hidden

                                                      before:transition-all before:duration-500 before:ease-in-out
                                                      before:content-[" "]
                                                      before:absolute
                                                      before:top-0 before:left-0
                                                      before:bg-blue-900
                                                      before:h-full before:w-0
                                                      before:z-[-1] 
                                                      before:opacity-0

                                                      hover:before:w-full
                                                      hover:before:opacity-100'
                                                      // onClick={handleSearch}
                                                >
                                                      <Link to={`/blog?${query}`}>
                                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                      </Link>
                                                </button>
                                          </div>
                                    </div>                        
                              </div>
                              {/* category: middle div of the right div */}
                              <div className="mx-auto pt-6 px-6 w-full h-fit rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">
                                    <h1 className='text-[#0a2f3d] text-xl font-bold'>Categories</h1>
                                    <div className="flex flex-col divide-y-[1px] text-[17px] py-3">
                                          {
                                                CatagoryArr.map((el,indx)=>(
                                                <Link to={`/blog?category=${el}`}>
                                                <div className="flex justify-between items-center py-2 hover:bg-green-50 group" key={indx}>
                                                      <p className="text-[#0a2f3d] group-hover:text-green-500">{el}</p>   
                                                      <p className="text-[#848385] group-hover:text-green-500">{useBlogCounter(el)}</p>
                                                </div>
                                                </Link>
                                                ))     
                                          }
                                    </div>
                              </div>
                              {/* trending posts: lower div of the right div */}
                              <div className="flex flex-col gap-3 mx-auto py-7 px-6 w-full h-fit rounded-[10px] [box-shadow:0px_0px_10px_0px_rgba(0,_0,_0,_0.2)]">
                                    <h1 className='text-[#0a2f3d] text-xl font-bold'>Trending Posts</h1>
                                    <div className="flex flex-col divide-y-[1px]">
                                          {
                                                selectedCards.length > 0 ? (
                                                selectedCards.map((card) => (
                                                      <Link to={`/blog/${card._id}`}>
                                                      <div key={card.id} className="flex flex-col py-4">
                                                            <div className="w-full h-full">
                                                                  <img src={card.image} className="w-full h-full object-cover rounded-[10px] mb-2" />
                                                            </div>
                                                            <h3 className="text-base font-semibold text-[#163f54]">{card.title}</h3>
                                                            <div className="flex gap-1 text-[#848385] text-sm">
                                                                  <div className="flex justify-center items-center"><BsClock /></div>
                                                                  <div>{card.day}</div>
                                                                  <div>{card.year}</div>
                                                            </div>
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

                  </div>)
                  // (<div className="flex justify-center items-center"><p>Blog Not Found</p></div>) 
                  }
            </div>
      </>
  );
};

export default Details_Card;
