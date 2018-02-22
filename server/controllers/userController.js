module.exports = {
  getUser:(req, res) => {
    // return res.status(403).json({message:"hi"})
    res.json({ user: req.session.user });
  },
  logout:(req, res) => {
    req.session.destroy();
    res.send();
  }
}