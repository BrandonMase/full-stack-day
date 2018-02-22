module.exports = {
  getUser:(req, res) => {
    res.json({ user: req.session.user });
  },
  destory:(req, res) => {
    req.session.destroy();
    res.send();
  }
}