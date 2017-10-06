import React from "react";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

import FIELDS from "./formFields";

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
					onSubmit={this.props.handleSubmit(
						this.props.onSurveySubmit
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

	errors.recipients = validateEmails(values.recipients || "");
	errors.from = validateEmails(values.from || "");

	_.map(FIELDS, ({ name }) => {
		if (!values[name]) {
			errors[name] = "You must provide a value.";
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: "surveyForm",
	destroyOnUnmount: false
})(SurveyForm);
