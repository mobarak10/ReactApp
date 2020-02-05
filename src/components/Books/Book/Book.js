import React from 'react'

class Book extends React.Component{
    state = {
        isEditable: false
    };

    changeKeyHandler = (event) => {
        if(event.key === 'Enter'){
            this.setState({
                isEditable: false
            })
        }
    }

    render (){
        let output = this.state.isEditable ? 
                     <input 
                        onChange={ e =>
                            this.props.changeHandler(e.target.value, this.props.book.id)
                         } 
                         onKeyPress={ this.changeKeyHandler }
                        type='text' 
                        className='form-control col-md-6' 
                        placeholder='Enter name' 
                        value={ this.props.book.name } />
                     : 
                     <p> 
                         { this.props.book.name } 
                    </p>
        return(
            <li className="list-group-item d-flex"> 
                { output }
                <span className="ml-auto"> ${ this.props.book.price } </span>

                <div className="mx-4">
                    <span style={{ padding:'5px', color:'green', cursor:'pointer' }} onClick={ () => this.setState({ isEditable: true }) }>
                        <i className="fa fa-pencil-square" aria-hidden="true"></i>
                    </span>
                    <span style={{ cursor:'pointer', color:'red' }} onClick={ () => this.props.deleteHandler(this.props.book.id) }>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </span>
                </div>
            </li>
        )
    }
}

export default Book