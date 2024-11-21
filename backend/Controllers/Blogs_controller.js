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
       const { image, year, day, title, description, comments, author, authorImage, views, catagories } = req.body;
       let newBlogs = new Blogs_data({ image, year, day, title, description, comments, author, authorImage, views, catagories });
       newBlogs =await newBlogs.save();
       res.status(201).json(newBlogs);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};
// AllBlog Updated
export const updateBlog = async (req, res) => {
    try {
      const { image, year, day, title, description, comments, author, authorImage, views, catagories } = req.body;

      let updatedBlog = new Blogs_data({ image, year, day, title, description, comments, author, authorImage, views, catagories, _id: req.params.id }); 

      updatedBlog = await Blogs_data.findByIdAndUpdate(req.params.id, updatedBlog);

      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};