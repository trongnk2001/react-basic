import React from 'react';
import ChildComponent from './ChildComponent';
class MyComponent extends React.Component{

    state = {
        firstName: '',
        lastName: '',
        jobList: [
            {jobID: 'id1', title: 'dev', salary: '$500'},
            {jobID: 'id2', title: 'tester', salary: '$300'},
            {jobID: 'id3', title: 'project manager', salary: '$1000'},
        ]
        // name: 'Eric',
        // channel:'None'
    };
    // handleNameChange = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
    // handleClickButton = () => {
    //     alert('Click button')
    // }
    handleChangeFirstName = (event) => {
        this.setState({ 
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            // Dùng className="" thay vì class
            // Muốn không dùng thẻ div để bọc ngoài thì dùng 1 thẻ React.Fragment
            // state là cái mà không cần load lại trang vẫn cập nhật dữ liệu, ví dụ thay đổi name trong state thì JSX không load lại trang
            // vẫn thay đổi được tên

            <>
                <div>
                    <form>
                        <label htmlFor="fname">First name:</label><br/>
                        <input 
                            type="text" 
                            value={this.state.firstName}
                            onChange={(event)=>this.handleChangeFirstName(event)}
                        /><br/>
                        <label htmlFor="lname">Last name:</label><br/>
                        <input 
                            type="text" 
                            value={this.state.lastName}
                            onChange={(event)=>this.handleChangeLastName(event)}
                        /><br/><br/>
                        <input 
                            type="submit" 
                            onClick={(event)=>this.handleSubmit(event)}
                            value="Submit"
                        />
                    </form> 
                </div> 
                <ChildComponent 
                    name={this.state.firstName}
                    age={'25'}
                    job={this.state.jobList}
                />
                    {/* <div className="first">
                        <input value={this.state.name} type="text" onChange={(event)=>this.handleNameChange(event)} 
                        ></input>
                        My name is {this.state.name}
                    </div>
                    <div className="second">Channel : {this.state.channel}</div>
                    <div className="third">
                        <button onClick={()=>this.handleClickButton()}>Click me</button>
                    </div> */}
            </>
        )
    }

}

export default MyComponent;