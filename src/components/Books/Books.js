import React from 'react'
import Book from './Book/Book'

class Books extends React.Component {
    render (){
        return (
            <div>
                { this.props.books.map((book, index) => {
                    return (
                        <Book 
                        key = { index }
                        changeHandler = { this.props.changeHandler }
                        deleteHandler = { this.props.deleteHandler }                       
                        book = { book } />
                    )
                }) }
            </div>
        )
    }
}

export default Books    