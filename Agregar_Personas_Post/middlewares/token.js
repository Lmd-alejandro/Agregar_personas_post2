const validarToken = (req, res, next) => {
    const { token } = req.body;
    if (!token) {
      return res.status(403).json({ msg: "No se proporciona el token" });
    }
    next();
  };
  
  module.exports = validarToken;
  