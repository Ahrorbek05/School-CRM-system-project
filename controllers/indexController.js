exports.getHomePage = (req, res) => {
  res.render('home', {
    title: 'Bosh sahifa',
    user: req.session.user
  });
};
