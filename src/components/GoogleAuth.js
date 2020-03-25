import React from 'react'

class GoogleAuth extends React.Component{
    state = {isSignedIn: null}

    componentDidMount() {
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:"73230922765-q5o4aghh0956qbtukk2vj67ionejgs91.apps.googleusercontent.com",
                scope:"email",
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange()
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    handleAuthentication = () => {
        this.state.isSignedIn?this.auth.signOut():this.auth.signIn()
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null)
            return this.state.isSignedIn
        else if(this.state.isSignedIn) {
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

export default GoogleAuth
