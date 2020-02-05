import React from 'react';
import './App.css';

class App extends React.Component {

    render (){

        let h1 = { 
            padding:'30px 0px', 
            textAlign: "right", 
            fontFamily: 'arial', 
            fontSize: '100px' 
        }

        return (
            <div className="App">
                <h1 style= { h1 } >Hello Programmer</h1>
            </div>
        );
    }
}

export default App;
