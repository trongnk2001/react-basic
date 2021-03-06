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
        ],
        editTodo:{}
    }

    addNewTodo = (todo) =>{
        this.setState({
            listTodo:[...this.state.listTodo,todo]
        })
        toast.success("Thêm thành công!");
    }
    handleDeleteTodo = (todo) =>{
        let currentTodo = this.state.listTodo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodo: currentTodo
        })
        toast.success("Xoá thành công!");
    }
    handleEditTodo = (todo) =>{
        let {listTodo,editTodo} =this.state;
        let isEmptyObj = Object.keys(editTodo).length ===0;
        
        if(isEmptyObj === false &&  editTodo.id === todo.id){
            let listTodoCopy = [...listTodo]
            let objIndex = listTodoCopy.findIndex((obj => obj.id === todo.id));
            listTodoCopy[objIndex].title = editTodo.title
            this.setState({
                listTodo: listTodoCopy,
                editTodo:''
            })
            toast.success("Sửa thành công!");
            return;
        }
        this.setState({
            editTodo: todo
        })
    }
    handleChangeTodo = (event) =>{
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let {listTodo,editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length ===0;
        return (
            <>
             <p>
                TODO App
            </p>
                <div className="list-todo-container">
                    <AddTodo 
                        addNewTodo={this.addNewTodo}/>
                    <div className="list-todo-content">
                            {listTodo && listTodo.length > 0 && listTodo.map((item,index)=>{
                                return(
                                    <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ? 
                                        <span>{index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>{index + 1} - <input value={editTodo.title}
                                                    onChange={(event) => this.handleChangeTodo(event)}
                                                    /> </span>
                                                :
                                                    <span>{index + 1} - {item.title} </span>
                                                }
                                                
                                            </>
                                    }
                                        <button type="button" className="edit"
                                        onClick={() =>this.handleEditTodo(item)}
                                        >
                                        {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                        </button>
                                        <button type="button" className="delete"
                                        onClick={()=>{this.handleDeleteTodo(item)}}
                                        >
                                        Delete
                                        </button>
                                    </div>
                                )
                            })
                            }
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </>
        )
    }
}
export default ListTodo;