import React from 'react';
import './App.css';
import Books from './Books/Books'

class App extends React.Component {

    state = {
        books: [
            {
                name: 'JavaScript',
                price: 20,
                id: 1,
            },
            {
                name: 'Java',
                price: 30,
                id: 2,
            },
            {
                name: 'PHP',
                price: 40,
                id: 3,
            }, 
            {
                name: 'React',
                price: 50,
                id: 4,
            }
        ]
    }

    deleteHandler = (id) => {
        let newBook = this.state.books.filter(books => books.id != id)
        this.setState({
            books: newBook
        })
    }

    changeHandler = (name, id) => {
        let newBook = this.state.books.map(book => {
            if(id == book.id){
                return {
                    ...book,
                    name
                }
            }
            return book
        })
        this.setState({
            books: newBook
        })
    }

    render (){
        return (
            <div className="App">
                <Books 
                    changeHandler={ this.changeHandler.bind(this) }
                    deleteHandler={ this.deleteHandler.bind(this) } 
                    books={ this.state.books }
                />
            </div>
        );
    }
}

export default App;
