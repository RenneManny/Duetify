import jwt from "jsonwebtoken";
const generateToken = (id, res) => {
  const payload = { id };
  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secretKey, { expiresIn: "30d" });
  res.cookie("token",token,{
    maxAge:15 * 24 * 60 * 60 * 1000,
    httpOnly:true,
    sameSite:"strict"
    
  })
};
export default generateToken;
