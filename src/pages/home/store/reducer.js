// import  {actionTypes} from './index'
import {fromJS} from 'immutable';


const defaultState =fromJS({
    topicList:[
        {
        id:1,
        title:"社会热点",
        imgUrl:"//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
        id:2,
        title:"社会热点",
        imgUrl:"//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
        id:3,
        title:"社会热点",
        imgUrl:"//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
        id:4,
        title:"社会热点",
        imgUrl:"//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
        id:5,
        title:"社会热点",
        imgUrl:"//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
]
}) 
export default (state = defaultState, action) => {
    
    
    return state
}