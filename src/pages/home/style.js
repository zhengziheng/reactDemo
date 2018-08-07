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
    width:280px;
    float:right;
`

// Topic组件
export const TopicWrapper= styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;


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
        border-radius:10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float:left;
    h3{
        font-size:18px;
        font-weight:bold;
        line-height:27px;
        color: #333;
    }
    p{
        font-size:13px;
        line-height:28px;
        color:#999;

    }


`


// recomend

export const RecommendWrapper = styled.div`
    margin:30px 0;
    width: 280px;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;

`

// Writer

export const WriterWrapper = styled.div`
    width: 278px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    height: 300px;
    line-height:300px;
    text-align:center;


`

