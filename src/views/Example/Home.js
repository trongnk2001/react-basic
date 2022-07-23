import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/101313014.png";
import {connect} from "react-redux";
class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user)
    }
    handleCreateUser = () => {
        this.props.addUserRedux()
    }
    render() {
        let listUsers = this.props.dataRedux;
        console.log('>>> check props: ', listUsers)
        return (
            <>
                <div>
                    Hello 
                </div>

                <div>
                    <img src={logo} style={{  width:'200px',height:'200px',marginTop:'20px',borderRadius:'50%' }}/>
                </div>

                <div>
                    {listUsers && listUsers.length > 0 && 
                     listUsers.map((item, index) => {
                        return(
                            <div key={item.id}>
                                {index + 1} - {item.name} 
                                &nbsp; <span onClick={()=>this.handleDeleteUser(item)}>x</span>
                            </div>
                        )
                        
                     })
                    }
                    <button onClick={()=>this.handleCreateUser()}>Add</button>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) =>{
   return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        deleteUserRedux:(userDelete)=> dispatch({type: 'DELETE_USER',payload:userDelete}),
        addUserRedux:()=> dispatch({type: 'CREATE_USER'}),
    }
}
// export default withRouter(Home);
export default connect(mapStateToProps,mapDispatchToProps)(Color(Home)); 