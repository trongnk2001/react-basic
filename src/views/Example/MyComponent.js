import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component{

    state = {
        jobList: [
            {jobID: 'id1', title: 'dev', salary: '500'},
            {jobID: 'id2', title: 'tester', salary: '300'},
            {jobID: 'id3', title: 'project manager', salary: '1000'},
        ]
    };
    addJob = (job) =>{
        this.setState({
            jobList : [...this.state.jobList,job]
        })
    }
    
    deleteJob = (job) =>{
        let currentJob = this.state.jobList;
        currentJob = currentJob.filter(item => item.jobID !== job.jobID);
        this.setState({
            jobList : currentJob
        })
    }
    render() {
        return (

            <>
                <AddComponent addJob={this.addJob}/>
                
                <ChildComponent 
                    job={this.state.jobList}
                    deleteJob = {this.deleteJob}
                />
            </>
        )
    }

}

export default MyComponent;