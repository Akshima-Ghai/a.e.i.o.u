import PostMessage from "../models/PostModal.js";
import User from "../models/UserModal.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find({ creator: req.userId }).sort("-createdAt");
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;

  const user = await User.findById(req.userId)

  if(user.streak.length === 0){
    user.streak.push({
      date: new Date().getDate(),
      month: new Date().getMonth() + 1
    })    
  } else {  
    let isUnique = true;
    user.streak.forEach(item => {
      if(item.date == new Date().getDate().toString() && item.month == new Date().getMonth() + 1){
        isUnique = false
      }
    })
    console.log(isUnique)
    if (isUnique){
      user.streak.push({
        date: new Date().getDate(),
        month: new Date().getMonth() + 1
      })
    }
  }  

  await user.save()
  
  console.log(user)
  const newPost = new PostMessage({ ...post, createdAt: new Date().toISOString(), creator: req.userId });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePosts = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No Post with that Id");
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(id, { ...post, id }, { new: true });
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No Post with that Id");
  }
  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted Successfully" });
};
