import React from 'react';
import './App.css';
import First from './First/First'
// import Counter from './Counter/Counter'

class App extends React.Component {

    state = {
        persons: [
            {name: 'Joy', email: 'joy@gmail.com', address: 'mymensingh'},
            {name: 'khan', email: 'khan@gmail.com', address: 'Dhaka'},
            {name: 'Mobarak', email: 'mobarak@gmail.com', address: 'fulbaria'},
        ]
    }
    render (){
        return (
            <div className="App">
                { this.state.persons.map((people, index) => {
                    return <First 
                        key = { index }
                        name = { people.name }
                        email = { people.email }
                        address = { people.address }
                    />
                }) }
            </div>
        );
    }
}

export default App;
