const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = () => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader.statrsWith("Bearer")) {
    return resizeBy.status(403).json({});
  }

  //Split the word bearer + token and get only token
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded.userId) {
      req.userId = decoded.userId;
      next();
    }
  } catch (error) {
    return resizeBy.status(403).json({});
  }
};

export default authMiddleware;

//daily-code-web.vercel.app/tracks/oAjvkeRNZThPMxZf4aX5/GJhoyrUXxMtRwifTjQIu
