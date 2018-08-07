import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    ListItem,
    ListInfo,
} from '../style'

class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.articleList.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img src={item.get('imgUrl')} alt="" />
                                <ListInfo>
                                    <h3>{item.get('title')}</h3>
                                    <p>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }


            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        articleList: state.getIn(['home', 'articleList'])
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List);