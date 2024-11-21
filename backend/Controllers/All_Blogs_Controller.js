import All_Blogs_data from "../Models/All_Blogs_data.js";   
console.log(All_Blogs_data);

export const getAllBlogs = async (req, res)=>{
    try{
        const blogs = await All_Blogs_data.find();
        res.status(201).json(blogs)
    } catch (error){
        res
        .status(500)
        .json({messeage:error.message})
    }
    
};
// AllBlog Updated
export const updateBlog = async (req, res) => {
    try {
      const { id }= req.params;
      const updatedBlog = await Blogs_data.findByIdAndUpdate(req.params.id, updatedBlog);
      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
