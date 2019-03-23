import React,{Component} from 'react';
import {signIn,signOut} from '../actions/index';
import {connect} from 'react-redux';
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

                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            }); 
        });   //use window since this is available on window scope
    }

    onAuthChange = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    }

    signOutHandler=()=>{
        this.auth.signOut();
    }

    signInHandler=()=>{
        this.auth.signIn();
    }
    
    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return null;    
        }
        else if (this.props.isSignedIn===true){
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

const mapStateToProps=(state,ownProps)=>{
    return{
        isSignedIn:state.auth.isSignedIn
    }
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);