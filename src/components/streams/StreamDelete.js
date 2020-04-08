import React,{Component} from 'react'
import Modal from '../Modal'
import history from '../../history'
import {deleteStream} from "../../actions";
import {connect} from 'react-redux'

class StreamDelete extends Component {

    handleCancel = () => {
        history.goBack()
    }

    handleDelete = () => {
        this.props.deleteStream(this.props.match.params.id)
        history.goBack()
    }

    actions = () => (
        <>
            <button onClick={this.handleDelete} className="ui negative button">Delete</button>
            <button onClick={this.handleCancel} className="ui button">Cancel</button>
        </>
    )
    render() {
        return (
            <Modal onDismiss={this.handleCancel}>
                <div className="header">Delete Stream</div>
                <div className="content">Are you sure you want to delete this stream?</div>
                <div className="actions">
                        {this.actions()}
                </div>
            </Modal>
        )
    }
}

export default connect(null,{deleteStream})(StreamDelete)
