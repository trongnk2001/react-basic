import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/101313014.png";
class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    render() {
        console.log('>>> check props: ', this.props)
        return (
            <>
                <div>
                    Hello 
                </div>

                <div>
                    <img src={logo} style={{  width:'200px',height:'200px',marginTop:'20px',borderRadius:'50%' }}/>
                </div>
            </>
        )
    }
}
// export default withRouter(Home);
export default Color(Home); 