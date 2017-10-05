const mongoose = require("mongoose");

const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Survey = mongoose.model("survey");

module.exports = app => {
	app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
		const { title, from, subject, body, recipients } = req.body;

		const survey = new Survey({
			title,
			from,
			subject,
			body,
			recipients: recipients
				.split(",")
				.map(email => ({ email: email.trim() }))
		});
	});
};