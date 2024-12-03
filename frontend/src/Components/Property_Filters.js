import axios from "axios"
import { useEffect,useState } from "react"
export const allPropertyCards = () => {
    const [allProperties,setAllProperties] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/api/allproperties")
        .then((res)=>{
            const tempData = res.data;
            setAllProperties(tempData)            
    })},[])
    return allProperties
}
export const featuredPropertyCards = () => {
    const [featuredProperties,setFeaturedProperties] = useState([])
    useEffect(()=>{
        const fetchData= async()=>{
            const res = await axios.get("http://localhost:5000/api/allproperties")
            // const tempData=res.data;
            const filtered= res.data.filter((el)=>el.featured===true)
            setFeaturedProperties(filtered)
        }
        fetchData()
    },[])
    return featuredProperties;
}
export const topPropertyCards = () => {
    const [topCards, setTopCards] = useState([])
    const [viewArr, setViewArr]=useState([])
    
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.get("http://localhost:5000/api/allproperties")
            const tempData=res.data;
            const tempArr= tempData.map((el)=>((el.view*0.25)+(el.rating*0.15)+(el.price*0.6)))
            setViewArr(tempArr)
            const topRange= Math.max(...(tempData.map((el)=>(el.view*0.2)+(el.rating*0.3)+(el.price*0.5))))
            const filtered=tempData.filter((el)=>(el.view+el.rating+el.price)>=topRange)
            // setTopScore(top)
            setTopCards(filtered)
            // return tempArr             
        }
        fetchData()

    },[])
    return topCards //topScore
    
}

export const urgentPropertyCards = () => {
    const [urgentProperties,setUrgentProperties] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/api/allproperties")
        .then((res)=>{
            const tempData = res.data;
            const urgent= tempData.filter((el)=>el.label.some((labelItems)=>labelItems.toLowerCase().includes("urgent")))
            setUrgentProperties(urgent)            
    })},[])
    return urgentProperties
}


//Query Filters

// export const queryFilter= (data)=>{
//     const [filteredCards,setFilteredCards]=useState([])
//     // const [searchParams]= useSearchParams()
//   // const balcony = searchParams.get("balcony")===true ?"balcony":""
// //   const keyword= searchParams.get("keyword")===null ? "": searchParams.get("keyword")
// //   const type= searchParams.get("type")===null ? "": searchParams.get("type")
// // //   // console.log("type", type);
// //   const price = searchParams.get("price") === null ? "" : (searchParams.get("price"))
// // //   // console.log(`price=`, price);
// //   const balcony= (searchParams.get("balcony"))==="true"?"balcony":""
// // //   console.log("balcony",balcony);
  
// //   const location = searchParams.get("location")===null ? "": searchParams.get("location")
// //   const purpose= searchParams.get("purpose")=== null || searchParams.get("purpose")=="any" ? "":  searchParams.get("purpose")
//     useEffect(()=>{
//         const filterHandle= ()=>{
//             // if (keyword.length > 0 || type.length > 0 || purpose.length > 0 || location.length >0 || price || balcony.length>0) {
//             //     const filtered = data.filter((item) =>(
//             //       item.propertyType.toLowerCase().includes(type.toLowerCase())&&
//             //       item.speciality.toLowerCase().includes(keyword.toLowerCase())&&
//             //       (item.price === Number(price) || price === "")&&
//             //       item.label.some((labelItem)=> labelItem.toLowerCase().includes(purpose.toLowerCase()))&&
//             //       item.address.toLowerCase().includes(location.toLowerCase())&&
//             //       item.aminities.some((item)=>item.toLowerCase().includes(balcony.toLowerCase()))
//             //     )
//             //     );
//             //     console.log(`filtered`, filtered);
                
//             //     setFilteredCards(filtered);
//             //   } else {
//             //     // Reset to all properties when search is empty
//             //     setFilteredCards(data);
//             //   }
//             setFilteredCards(data);
//         }
//         filterHandle()
//     },[data])
//     return filteredCards
// }

export const queryFilter=(queries,Cards)=>{
    // const [filteredData,setFilteredData]=useState([])
    const {keyword="",type="",location="",price=0}=queries
    const purpose=queries.purpose==="any"|| queries.purpose===null || queries.purpose===undefined? "":queries.purpose
    const balcony=queries.balcony===true?"balcony":""
    console.log("queries ::",purpose,price,balcony);
    if(keyword || type || location || purpose || price || balcony){
        console.log("if logic entered");     
        const filtered = Cards.filter((item) =>(
        item.speciality.toLowerCase().includes(keyword.toLowerCase())&&
        item.propertyType.toLowerCase().includes(type.toLowerCase())&&
        (item.price === Number(price) || price === "" || price === 0)&&
        item.label.some((labelItem)=> labelItem.toLowerCase().includes(purpose.toLowerCase()))&&
        item.address.toLowerCase().includes(location.toLowerCase())&&
        item.aminities.some((item)=>item.toLowerCase().includes(balcony.toLowerCase()))
        ))
        // setFilteredData(filtered);
        return filtered
    }
    else{
        console.log("else logic activated");
        const filtered=Cards
        return filtered
    }
}

//Button Filters

export const buttonFilter=(input,cards)=>{
    if(input==="views"){ return [...cards].sort((a,b)=>a.view-b.view)}  
    if (input=== "featured"){ return [...cards].filter((item)=>item.featured===true)}
    if(input==="urgent") {return [...cards].filter((item)=>item.label.some((labelItem)=>labelItem.toLowerCase().includes("urgent")))}
}
// export const setFeaturedFilter=(arr)=>{
//         const featuredCards=[...arr].filter((item)=>item.featured===true)
//         console.log(featuredCards);
//         setFilteredCards(featuredCards)
//     }