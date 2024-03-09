const { Admin } = require("../db");

function adminMiddleware(req, res, next) {
  // Admin Auth Logic
  const username = req.headers.username;
  const password = req.headers.password;

  Admin.findOne({
    username: username,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({
        msg: "Admin does not exists",
      });
    }
  });
}

module.exports = adminMiddleware;
