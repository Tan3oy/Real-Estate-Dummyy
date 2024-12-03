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
       const { image, year, day, title, description, comments, author, authorImage, views, categoryType } = req.body;
       let newBlogs = new Blogs_data({ image, year, day, title, description, comments, author, authorImage, views, categoryType });
       newBlogs =await newBlogs.save();
       res.status(201).json(newBlogs);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};
// AllBlog Updated
export const updateBlog = async (req, res) => {
    try {
      const { image, year, day, title, description, comments, author, authorImage, views, categoryType } = req.body;

      let updatedBlog = new Blogs_data({ image, year, day, title, description, comments, author, authorImage, views, categoryType, _id: req.params.id }); 

      updatedBlog = await Blogs_data.findByIdAndUpdate(req.params.id, updatedBlog);

      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
//Fetch a specific Blog
export const getBlog = async (req, res) => {
    try {
      const blog = await Blogs_data.findById(req.params.id);
      res.json(blog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };