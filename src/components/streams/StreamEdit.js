import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchStream,editStream} from "../../actions";
import StreamForm from "./StreamForm";
import _ from 'lodash'

class StreamEdit extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.stream.id,formValues)
    }
    renderForm = () => {
        if(!this.props.stream) {
            return(
                <div className="ui segment">
                    <div className="ui active loader"></div>
                    <p></p>
                </div>)
        }
        else{
            return (
            <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream, "title","description")}/>
        )
    }
    }

    render(){
        return(
            <div className="ui container">
                <h2>Edit Stream</h2>
                {this.renderForm()}
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
