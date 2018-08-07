import  {actionTypes} from './index.js'
import {fromJS} from 'immutable'
import axios from 'axios';



export const   searchFocus = ()=>({
    type:actionTypes.SEARCH_FOCUS
})

export const  searchBlur = ()=>({
    type:actionTypes.SEARCH_BLUR
})

export const mouseEnter = ()=>({
    type:actionTypes.MOUSE_ENTER
})
export const mouseLeave = ()=>({
    type:actionTypes.MOUSE_LEAVE
})
export const changePage = (page)=>({
    type:actionTypes.CHANGE_PAGE,
    page
})




const changeList = (data)=>({
    type:actionTypes.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length /10)
})


export const getList=()=>{
    //先异步请求接口，请求到数据之后再提交action更新state
    return (dispatch)=>{
        axios.get('/api/headerList.json')
        .then((res)=>{
            const data = res.data;
            const action = changeList(data.data)
            dispatch(action)
        })
        .catch(()=>{
            console.log('error')
        })
    }
}

