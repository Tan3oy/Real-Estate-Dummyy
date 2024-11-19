import Blogs_data from "../Models/Blogs_data.js";
console.log(Blogs_data);
export const getAllBlogs = async (req, res)=>{
    try{
        const blogs = await Blogs_data.find();
        res.status(201).json(blogs)
    } catch (error){
        res
        .status(500)
        .json({messeage:error.message})
    }
    
};
//Post A New Blog
export const CreateBlogs = async (req, res)=> {
    try {
       const { name, ...rest } = req.body;
       let newBlogs = new Blogs_data({ name, ...rest});
       newBlogs =await new newBlogs.save();
       res.status(201).json(newBlogs);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};