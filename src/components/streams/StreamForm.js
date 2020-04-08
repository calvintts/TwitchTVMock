import React,{Component} from 'react'
import {Field, reduxForm} from 'redux-form'

class StreamForm extends Component{
    onError = (meta) => {
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

    render(){
        console.log(this.props)
        return(
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
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

export default reduxForm(
    {
        form: 'streamCreate',
        validate
    }
)(StreamForm)

