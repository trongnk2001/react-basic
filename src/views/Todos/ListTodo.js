import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import {toast} from 'react-toastify';
class ListTodo extends React.Component {
    state = {
        listTodo:[
            {id: '1', title: 'Play game'},
            {id: '2', title: 'Making videos'},
            {id: '3', title: 'Fixing bugs'},
        ]
    }

    addNewTodo = (todo) =>{
        this.setState({
            listTodo:[...this.state.listTodo,todo]
        })
        toast.success("Thêm thành công!");
    }
    render() {
        let {listTodo} = this.state;
        return (
            <div className="list-todo-container">
                <AddTodo 
                    addNewTodo={this.addNewTodo}/>
                <div className="list-todo-content">
                        {listTodo && listTodo.length > 0 && listTodo.map((item,index)=>{
                            return(
                                <div className="todo-child" key={item.id}>
                                    <span>{index + 1} - {item.title} </span>
                                    <button type="button" className="edit">Edit</button>
                                    <button type="button" className="delete">Delete</button>
                                </div>
                            )
                          })
                        }
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}
export default ListTodo;