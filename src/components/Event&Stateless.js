import React from 'react';
import './App.css';
import Example from './Example';

class App extends React.Component {

    state = {
        name: '',
    }

    clickHandler = (event) => {
        // alert('I am clicked')
        console.log(event.target);
        
    }

    inputHandaler = (event) => {
        // console.log(event.target.value);
        this.setState({
            name: event.target.value
        })
        
    }

    render (){
        return (
            <div className="App">
                <div className="container my-3">
                    <input onChange = { this.inputHandaler } value={ this.state.name } type="text" placeholder="Enter your name" />
                    <button className = "btn btn-primary" onClick = { this.clickHandler }>
                        click me
                    </button>
                    { this.state.name ? <p>Hello Mr. { this.state.name } </p> : '' }
                </div>
                <Example name='Joy'/>
            </div>
        );
    }
}

export default App;
