module.exports = function (req, res, next) {
  if (!req.session.user) {
    res.status(403).json({ message: 'Unauthorized' });
  }
  else {
    next();
  }  
}