// 小组件的样式也写在这里，避免过度设计

import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width: 960px;
    margin:0 auto;


`


export const HomeLeft = styled.div`
    float:left;
    margin-left:15px;
    padding-top:30px;
    width: 625px;
    .banner-image{
        width: 625px;
        height: 270px;
    }
`

export const HomeRight = styled.div`
    width:240px;
    float:right;
`

// Topic组件
export const TopicWrapper= styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;


`

export const TopicItem = styled.div`
    float:left;
    height: 32px;
    line-height: 32px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:18px;
    background:#f7f7f7;
    font-size:14px;
    color: #000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    img{
        /* float:left; */
        vertical-align:top;
        width: 32px;
        height: 32px;
        margin-right:10px
    }

`

// List组件样式

export const ListItem = styled.div`
    padding:20px 0 ;
    overflow: hidden;
    border-bottom:1px solid #dcdcdc;
    img{
        width: 125px;
        height: 100px;
        display: block;
        float:right;
    }
`

