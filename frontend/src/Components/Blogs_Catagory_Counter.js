import axios from "axios";
import { useEffect,useState } from "react";

export const  useBlogCounter=(catagoryType)=>{
    const [data, setData] = useState(0);
    useEffect(()=>{
        const fetchData=async()=>{        
            const res= await axios.get("http://localhost:5000/api/AllBlogs")
            const tempData=res.data
            const counter= [...(tempData.filter((el)=>el.categoryType.toLowerCase()===catagoryType.toLowerCase()))].length
            setData(counter)
        }
        fetchData()
        },[catagoryType])
        return data
}
