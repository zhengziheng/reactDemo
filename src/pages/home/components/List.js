import React, { Component } from 'react';

import {
    ListItem,
    ListInfo,
}from '../style'

class List extends Component {
    render() {
        return (
            <ListItem>
                <img src="//upload-images.jianshu.io/upload_images/10393286-12b63fe19e28946c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt=""/>
                <ListInfo>
                    <h3>杨超越们让“梦想”两字成为了一场天大的笑话。</h3>
                    <p>文章首发公众号： 是Judy小姐姐呀 一 原本准备的推文不是这篇，但手贱点开了创造101的直播现场，我忍住砸手机的冲动，跳下床打开电脑对着键盘就...</p>
                </ListInfo>
            </ListItem>
        );
    }
}

export default List;