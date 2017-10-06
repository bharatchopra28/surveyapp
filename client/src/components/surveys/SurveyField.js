import React from "react";

const SurveyField = ({ input, label, meta: { touched, error } }) => {
	return (
		<div>
			<div>{label}</div>
			<input {...input} style={{ marginBottom: "5px" }} />
			<div className="red-text" style={{ marginBottom: "20px" }}>
				{touched && error}
			</div>
		</div>
	);
};

export default SurveyField;
