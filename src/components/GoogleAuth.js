import React,{Component} from 'react';

class GoogleAuth extends Component{

    state={
        isSignedIn:null
    }

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'372540513011-octip6laqocc36hlkjoi2fv4ccou7ok7.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange)
            }); 
        });   //use window since this is available on window scope
    }

    onAuthChange = ()=>{
        this.setState({isSignedIn:this.auth.isSignedIn.get()});
    }

    signOutHandler=()=>{
        this.auth.signOut();
    }

    signInHandler=()=>{
        this.auth.signIn();
    }
    
    renderAuthButton(){
        if(this.state.isSignedIn===null){
            return null;    
        }
        else if (this.state.isSignedIn===true){
            return(
                <button className="ui red button google" onClick={this.signOutHandler}>
                    <i className="google icon"/>
                    SIGN OUT 
                </button>
            )
        }
        else{
            return(
                <button className="ui green button google" onClick={this.signInHandler}>
                    <i className="google icon"/>
                    SIGN IN WITH GOOGLE
                </button>
            )
        }
    }
    render(){
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth;