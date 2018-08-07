import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    TopicWrapper,
    TopicItem,
}from '../style'


class Topic extends Component {
    render() {
        return (
          <TopicWrapper className="topicwrapper">
              {
                  this.props.topicList.map((item)=>{
                    return (
                        <TopicItem key={item.get('id')}>
                            <img src={item.get('imgUrl')} alt=""/>
                             {item.get('title')}
                        </TopicItem>
                    )
                  })
              }
          </TopicWrapper>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        topicList:state.getIn(['home','topicList'])
      
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Topic);