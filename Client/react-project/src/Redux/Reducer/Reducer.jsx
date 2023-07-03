import { ActionTypes } from "../Action_Types"

const initialSate={
    error:null,
    data:[],
    isLoading:false
}

const Reducer=(state=initialSate,actions)=>{
    switch(actions.type){
        case ActionTypes.ADD_REQUEST:
            return{
                ...state,isLoading:true
            }
        case ActionTypes.ADD_SUCCESS:
            return{
                ...state,isLoading:false,data:actions.payload
            }
        case ActionTypes.ADD_FAIL:
            return{
                ...state,isLoading:false,error:actions.payload
            }
            
        default:
            return state
    }
}
export default Reducer
       