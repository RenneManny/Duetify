import User from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";
import TryCatch from "../utils/trycatch.js";
import bcrypt from "bcrypt";

// Register User
const registerUser = TryCatch(async (req, res) => {
  const { name, email, password } = req.body;
  
  // Check if the user already exists
  let user = await User.findOne({ email: email });
  if (user) return res.status(400).json({ message: "User already exists!" });

  // Hash the password
  const hashPassword = await bcrypt.hash(password, 10);

  // Create the new user
  user = await User.create({
    name: name,
    email: email,
    password: hashPassword,
  });

  // Generate token and send response
  generateToken(user._id, res);
  res.status(200).json({ message: `Welcome ${user.name}` });
});

// Login User
const loginUser = TryCatch(async (req, res) => {
  const { email, password } = req.body;
  
  // Find user by email
  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).json({ message: "User does not exist!" });

  // Compare the provided password with the hashed password
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword)
    return res.status(400).json({ message: "Email or password is invalid!" });

  // Generate token and send response
  generateToken(user._id, res);
  res.status(200).json({ message: `Welcome back ${user.name}` });
});

// Exporting both functions
console.log("User controller loading");

// Auth
const myProfile=TryCatch(async(req,res)=>{
  const user=await User.findById(req.user._id)
  res.json(user);
})

// Logout
const userLogout=TryCatch(async (req,res)=>{
  res.cookie("token"," ",{maxAge:0});
  res.json({message:"Logged out successfully !"})
})

export { registerUser, loginUser ,myProfile,userLogout};
