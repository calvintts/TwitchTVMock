import React from 'react'
import {connect} from "react-redux";
import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component{
    componentDidMount() {
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:"73230922765-q5o4aghh0956qbtukk2vj67ionejgs91.apps.googleusercontent.com",
                scope:"email",
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    handleAuthentication = () => {
        this.props.isSignedIn?this.auth.signOut():this.auth.signIn()
    }

    onAuthChange = (isSignedIn) => {
        isSignedIn?this.props.signIn(this.auth.currentUser.get().getId()):this.props.signOut()
    }

    renderAuthButton(){
        console.log(this.props)
        if(this.props.isSignedIn === null)
            return this.props.isSignedIn
        else if(this.props.isSignedIn) {
            return (
                <button onClick={this.handleAuthentication} className="ui google red button">
                    <i className="google icon"/>Sign Out
                </button>
            )
        }
        else {
            return (
                <button onClick={this.handleAuthentication} className="ui google green button">
                     <i className="google icon"/>Sign In with Google
                </button>
            )
        }
    }

    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth)
