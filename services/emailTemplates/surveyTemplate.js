const keys = require("../../config/keys");

module.exports = survey => {
	return `
		<html>
			<body>
				<div>
					<p>${survey.body}</p>
				</div>
			</body>
		</html>
	`;
};
