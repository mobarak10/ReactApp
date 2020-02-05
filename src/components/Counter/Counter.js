import React from 'react';

class Counter extends React.Component {
    
    // this.count = 0;
    state = {
        count: 0,
        color: 'black',
    }

    decrease = () => {
        this.setState({
            count: this.state.count - 1
        })

        if (this.state.count < 5){
            this.setState({
                color: 'red'
            })
        }else if (this.state.count > 15){
            this.setState({
                color: 'green'
            })
        }else{
            this.setState({
                color: 'black'
            })
        }
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <h1 style = {{ color: this.state.color }}> 
                <span onClick={ this.decrease }> - </span> 
                { this.state.count } 
                <span onClick={ this.increase }> + </span> 
            </h1>
        )
    }
}

export default Counter;