import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchStream} from '../../actions'

class StreamShow extends Component{

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderStream = () => {
        if(!this.props.stream){
            return (
                <div className="ui segment">
                    <div className="ui active loader">
                    </div>
                    <p></p>
                    <p></p>
                </div>
            )
        }
        const {title, description} = this.props.stream

        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }

    render(){
    return (
        <div>
            {this.renderStream()}
        </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return ({
        stream: state.streams[ownProps.match.params.id]
    })
}

export default connect(mapStateToProps,{fetchStream})(StreamShow)
