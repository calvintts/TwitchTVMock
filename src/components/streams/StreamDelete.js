import React,{Component} from 'react'
import Modal from '../Modal'
import history from '../../history'
import {deleteStream,fetchStream} from "../../actions";
import {connect} from 'react-redux'

class StreamDelete extends Component {

    handleCancel = () => {
        history.goBack()
    }

    handleDelete = () => {
        this.props.deleteStream(this.props.match.params.id)
    }

    renderActions = () => (
        <>
            <button onClick={this.handleDelete} className="ui negative button">Delete</button>
            <button onClick={this.handleCancel} className="ui button">Cancel</button>
        </>
    )

    renderDetails = () => {
        if(!this.props.stream){
            this.props.fetchStream(this.props.match.params.id)
            return(
                "Are you sure you want to delete this stream?"
            )
        }
        else{
            return(
                `Are you sure you want to delete the stream: ${this.props.stream.title}`
            )
        }
    }

    render() {
        return (
            <>
                Delete Stream
                <Modal
                    onDismiss={this.handleCancel}
                    header="Delete Stream"
                    content={this.renderDetails}
                    actions={this.renderActions}
                >
                </Modal>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{deleteStream,fetchStream})(StreamDelete)
