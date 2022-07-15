import React from 'react';

class ChildComponent extends React.Component{

    state = {
        showJobs: false,    
    };
    handleShow = () => {
        this.setState({
            showJobs: !this.state.showJobs
        });
    }
    
    handleOnClick = (job) => {
        console.log(job);
        this.props.deleteJob(job);
    }
    render() {
        let {job} = this.props;
        let {showJobs} = this.state;
        return (
            // Dùng className="" thay vì class
            // Muốn không dùng thẻ div để bọc ngoài thì dùng 1 thẻ React.Fragment
            // state là cái mà không cần load lại trang vẫn cập nhật dữ liệu, ví dụ thay đổi name trong state thì JSX không load lại trang
            // vẫn thay đổi được tên
            <>
                {showJobs === false ? 
                        <div>
                            <button onClick={()=>this.handleShow()}>Show</button>
                        </div>
                    :
                    <>
                        <div className="job">
                            {
                                job.map((item, index) => {
                                    return (
                                        <div key={item.jobID}>
                                            {item.title} - ${item.salary} <></><span onClick={()=>this.handleOnClick(item)}>x</span>
                                        </div>
                                    )
                                })
                                
                            }
                        </div>
                        <div>
                            <button onClick={()=>this.handleShow()}>Hide</button>
                        </div>
                    </>
                }
                
                    
            </>
        )
    }

}

export default ChildComponent;