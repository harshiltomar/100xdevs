function adminMiddleware(req, res, next) {
  //Implement admin auth logic
  const token = req.headers.authorization;

  //Bearer adsdsa=> ["Bearer", "asddsa"]
  const words = token.split(" ");
  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
  if (decodedValue.username) {
    next();
  } else {
    res.statud(403).json({
      msg: "You are not authenticated",
    });
  }
}

module.exports = adminMiddleware;
