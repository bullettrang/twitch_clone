import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

const pageOne = ()=>{
    return(
        <div>
            PAGE ONE
        </div>
    )
}

const pageTwo = ()=>{
    return(
        <div>
            PAGE TWO
            <button>CLICK ME?!</button>
        </div>
    )
}

const App =()=>{
    return <div>
        <BrowserRouter>
        <div>
            <Route exact path="/" component={pageOne}/>
            <Route  path="/pagetwo" component={pageTwo}/>
        </div>
        </BrowserRouter>
    </div>
}

export default App;