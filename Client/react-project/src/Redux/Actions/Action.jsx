
import {ActionTypes } from "../Action_Types";
import axios from 'axios'

const Action=() => {
    
    return  async function (dispatch){
        dispatch({type:ActionTypes.ADD_REQUEST})
        
        const res=await axios.get("")
        if(res){
            dispatch({
                type:ActionTypes.ADD_SUCCESS,
                payload:res.data
            })
        }
        else{
            dispatch({
                type:ActionTypes.ADD_FAIL,
                payload:res.error
            })
        }
        
    }
}
export default BlogActions