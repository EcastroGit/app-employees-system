import jwt from "jsonwebtoken";

const verifyAuth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ Error: "Authentication required" });
    } else {
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) return res.json({ Error: "Wrong token" });
        req.role = decoded.role;
        req.id = decoded.id;
        next();
      });
    }
  };

  export default verifyAuth;