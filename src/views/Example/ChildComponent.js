import React from 'react';

class ChildComponent extends React.Component{

    state = {
        firstName: '',
        lastName: ''
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
        let {name, age, job} = this.props;
        return (
            // Dùng className="" thay vì class
            // Muốn không dùng thẻ div để bọc ngoài thì dùng 1 thẻ React.Fragment
            // state là cái mà không cần load lại trang vẫn cập nhật dữ liệu, ví dụ thay đổi name trong state thì JSX không load lại trang
            // vẫn thay đổi được tên
            <>
                <div>
                    ChildComponent: {name} - {age};
                </div>
                <div className="job">
                    {
                        job.map((item, index) => {
                            return (
                                <div key={item.jobID}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                        
                    }
                </div> 
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

export default ChildComponent;