import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { submitSurvey } from "../../actions";
import formFields from "./formFields";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your entries</h5>
			{reviewFields}
			<button className="yellow darken-3 btn-flat" onClick={onCancel}>
				Back
			</button>
			<button
				className="green right btn-flat white-text"
				onClick={() => submitSurvey(formValues, history)}
			>
				Submit Survey
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
};

const mapStateToProps = state => {
	return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, { submitSurvey })(
	withRouter(SurveyFormReview)
);
