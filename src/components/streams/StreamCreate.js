import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {createStream} from '../../actions'

class StreamCreate extends Component{

    onSubmit = (formValues) => {
        this.props.createStream(formValues)
        this.props.reset()
    }

    onError = (meta) => {
        console.log(meta)
        if(!meta.valid && meta.touched && !meta.active && !meta.active)
            return(
                <div className="ui pointing label">
                    <p>{meta.error}</p>
                </div>
                )
    }

    renderInput = ({input, label, meta}) => {
        return (
            <div className="field">
                <label name= {input.name}>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.onError(meta)}
            </div>

            )
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter title"></Field>
                <Field name="description" component={this.renderInput} label="Enter Description"></Field>
                <button className="ui primary button">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {}
    errors.title =  !formValues.title? 'Please enter a title':null
    errors.description = !formValues.description? 'Please enter a description':null
    return errors
}

export default connect(null,{createStream})(reduxForm(
    {
        form: 'streamCreate',
        validate
    }
)(StreamCreate))
