
module.exports = (req, res) => {
	res.render('errors/404', {
    activePage: '404',
		title: '404',
	});
};
