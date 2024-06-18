import jwt from "jsonwebtoken";

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }

    const loggedId = decoded.id.toString();
    const requiredId = req.params.id;
    const correctUser = loggedId === requiredId;

    if (correctUser) {
      req.role = decoded.role;
      req.id = decoded.id;
      next();
    } else {
      return res.status(403).json({ error: "Unauthorized access" });
    }
  });
};

export default verifyUser;
