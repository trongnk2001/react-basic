import React from 'react';

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }
    handleChangeTitle = (event) => {
        this.setState({ 
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if(!this.state.title || !this.state.salary) {
            alert("Chưa nhập đủ")
            return;
        }
        this.props.addJob({
            jobID : Math.floor(Math.random() * 1000),
            title : this.state.title,
            salary : this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return(
            <div> 
                    <form>
                        <label htmlFor="fname">Job Title :</label><br/>
                        <input 
                            type="text" 
                            value={this.state.title}
                            onChange={(event)=>this.handleChangeTitle(event)}
                        /><br/>
                        <label htmlFor="lname">Salary :</label><br/>
                        <input 
                            type="text" 
                            value={this.state.salary}
                            onChange={(event)=>this.handleChangeSalary(event)}
                        />
                        
                        <br/><br/>
                        <input 
                            type="submit" 
                            onClick={(event)=>this.handleSubmit(event)}
                            value="Submit"
                        />
                    </form> 
                </div> 
        )
    }
}
export default AddComponent;