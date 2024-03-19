const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({});
  }

  //split and get only bearer
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.userId = decoded.userId;

    next();
  } catch (err) {
    return res.status(403).json({});
  }
};

module.exports = {
  authMiddleware,
};

//daily-code-web.vercel.app/tracks/oAjvkeRNZThPMxZf4aX5/GJhoyrUXxMtRwifTjQIu
