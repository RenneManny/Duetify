import dotenv from "dotenv";
dotenv.config();
const SECRET = process.env.JWT_SECRET;
import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(403).json({ message: "Please Login" });

    // if token is received
    const decodedData = jwt.verify(token, SECRET);
    if (!decodedData)
      return res.status(403).json({ message: "token expired!" });
    req.user = await User.findById(decodedData.id);
    next();
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Please Login!" ,error});
  }
};
export default isAuth;
