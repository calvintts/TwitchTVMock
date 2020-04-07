import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field} from 'redux-form'
import {fetchStream,editStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
        // console.log(this.props)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.stream.id,formValues)
    }

    render(){
        console.log(this.props)
        return(
            <div className="ui container">
                <h2>Edit Stream</h2>
                <StreamForm onSubmit={this.onSubmit} initialValues={this.props.stream}/>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return({
        stream:state.streams[ownProps.match.params.id],
    })
}


export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit)
