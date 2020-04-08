import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import history from '../history'

class Modal extends Component{

    handlePopupClick = (e) => {
        e.stopPropagation()
    }

    render(){
        return( ReactDOM.createPortal(
            <div onClick={this.props.onDismiss}
                 className="ui dimmer modals visible return active">
                <div
                    onClick={this.handlePopupClick}
                    className="ui standard modal visible active">
                    <div className="content">{this.props.content()}</div>
                    <div className="actions">{this.props.actions()}</div>
                </div>
            </div>,
                document.querySelector("#modal")
            )
        )
    }
}


export default Modal
