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
            }); 
        });   //use window since this is available on window scope
    }

    renderAuthButton(){
        if(this.state.isSignedIn===null){
            return <div>NO CLUE IF YOU ARE SIGNED IN</div>
        }
        else if (this.state.isSignedIn===true){
            return<div>You're signed in </div>
        }
        else{
            return <div>NOT SIGNED IN</div>
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