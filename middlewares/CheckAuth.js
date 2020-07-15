module.exports = (req, res, next) => {
	return (req.session.user ? next() : res.status(401).redirect('/auth/login'));
};
