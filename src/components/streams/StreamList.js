import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchStreams} from '../../actions'

class StreamList extends Component{
    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdmin = ({userId}) => {
        return this.props.currentUserId !== userId?null:(
            <div className="right floated content">
                <button className="ui button primary green">
                    EDIT
                </button>
                <button className="ui button negative">
                    DELETE
                </button>
            </div>
        )
    }

    renderStreamList = () => {
        return (this.props.streams.map(stream => {
            return (<div className="item" key={stream.id}>
                {this.renderAdmin(stream)}
                <i className="large middle aligned icon camera"/>
                <div className="content">
                    {stream.title}
                    <div className="description">{stream.description}</div>
                </div>
            </div>)
        }))
    }

    renderCreate = () => {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <Link className="ui button primary" to="/streams/new">CREATE</Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="ui container">
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderStreamList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn:state.auth.isSignedIn
    }
}


export default connect(mapStateToProps,{fetchStreams})(StreamList)
