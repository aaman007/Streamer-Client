import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderErrors({ touched, error }) {
        if (touched && error){
            return (
                <div style={{color: 'red', fontWeight: 'bold', marginTop: '5px'}}>
                    {error}
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderErrors(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
       this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Title" />
                <Field name="description" component={this.renderInput} label="Description"  />
                <button className="ui button primary"> Submit </button>
            </form>
        );
    }
}

const validate = ({ title, description }) => {
    let errors = {};

    if (!title || title.length < 5){
        errors.title = "Title must be at least of 5 characters";
    }

    if (!description || description.length < 5){
        errors.description = "Description must be at least of 5 characters";
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);