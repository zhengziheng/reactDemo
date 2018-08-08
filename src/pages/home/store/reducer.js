// import  {actionTypes} from './index'
import {fromJS} from 'immutable';
import {actionTypes} from './index'

const defaultState =fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
}) 
export default (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.CHANGE_HOME_DATA:
        return state.merge({
            topicList:fromJS(action.topicList),
            articleList:fromJS(action.articleList),
            recommendList:fromJS(action.recommendList),
        })
        break;
    }
    
    return state
}