import React from "react";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
	{ label: "Survey Title", name: "title" },
	{ label: "Subject Line", name: "subject" },
	{ label: "Email Body", name: "body" },
	{ label: "Recipients List", name: "emails" }
];

class SurveyForm extends React.Component {
	renderFields() {
		return _.map(FIELDS, ({ name, label }) => {
			return (
				<Field
					key={name}
					type="text"
					component={SurveyField}
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<form
					onSubmit={this.props.handleSubmit(values =>
						console.log(values)
					)}
				>
					{this.renderFields()}
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
					</Link>
					<button
						type="submit"
						className="teal btn-flat right white-text"
					>
						Next
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.emails = validateEmails(values.emails || "");

	_.map(FIELDS, ({ name }) => {
		if (!values[name]) {
			errors[name] = "You must provide a value.";
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: "surveyForm"
})(SurveyForm);
