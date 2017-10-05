const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Recipient = require("./Recipient");

const surveySchema = new Schema({
	title: String,
	from: String,
	subject: String,
	body: String,
	recipients: [Recipient],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	_user: { type: Schema.Types.ObjectId, ref: "User" },
	dateSent: Date,
	lastResponded: Date
});

mongoose.model("survey", surveySchema);
