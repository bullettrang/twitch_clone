import React,{Component} from 'react';

class GoogleAuth extends Component{

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'372540513011-octip6laqocc36hlkjoi2fv4ccou7ok7.apps.googleusercontent.com',
                scope:'email'
            })
        });   //use window since this is available on window scope
    }
    render(){
        return(
            <div>
                GoogleAuth
            </div>
        )
    }
}

export default GoogleAuth;