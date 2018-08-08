import React, { Component } from 'react';
import { connect } from 'react-redux'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
import {acionCreators, actionCreators} from './store'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style'

class Home extends Component {
    render() {
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img className="banner-image" src="//upload.jianshu.io/admin_banners/web_images/4361/599ae85090db0f4a4cb3cca4d7aeb645f6cc91f0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
                        <Topic></Topic>
                        <List></List>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend></Recommend>
                        <Writer></Writer>
                    </HomeRight>
                </HomeWrapper>
            </div>
        );
    }
    componentDidMount() {
        this.props.changeHomeData()
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        topicList: state.getIn(['home', 'topicList']),
        articleList: state.getIn(['home', 'articleList'])
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeHomeData() {
            const action = actionCreators.getHomeInfo()
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);