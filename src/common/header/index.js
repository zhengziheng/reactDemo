import React,{Component} from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
} from './style.js'

import { CSSTransition } from 'react-transition-group';






// const Header = (props) => {
//     return (
//         <HeaderWrapper>
//             <Logo></Logo>
//             <Nav>
//                 <NavItem className="left active">首页</NavItem>
//                 <NavItem className="left">下载APP</NavItem>
//                 <NavItem className="right">登录</NavItem>
//                 <NavItem className="right" >
//                     <i className="iconfont">&#xe636;</i>
//                 </NavItem>
//                 <SearchWrapper>
//                     <CSSTransition
//                         timeout={500}//动画时长
//                         in={props.focused}//boolean 控制进出动画
//                         classNames="slide"//动画类名
//                     >
//                         <NavSearch
//                             className={props.focused ? 'focused' : ' '}
//                             onFocus={props.handleInputFocus}
//                             onBlur={props.handleInputBlur}
//                         ></NavSearch>
//                     </CSSTransition>
//                     <i className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe6dd;</i>
//                     {getListArea(props.focused)}
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className="writting">
//                     <i className="iconfont">&#xe608;</i>
//                     写文章
//     </Button>
//                 <Button className="reg">注册</Button>
//             </Addition>
//         </HeaderWrapper>
//     )
// }



class Header extends Component {
     getListArea = (show) => {
         const pageList = [];
         const newList = this.props.list.toJS();//immutable转js数组
         if(newList.length){
            for (let i =(this.props.page-1)*10; i < this.props.page*10.; i++) {
                pageList.push(
                   <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
                
            }
         }
         
        if (show) {
            return (
                <SearchInfo 
                onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}
                
                >
                    <SearchInfoTitle>
                        热门搜索
                            <SearchInfoSwitch onClick={()=>this.props.handleChnagePage(this.props.page,this.props.totalPage,this.spinIcon)}>
                                <i ref={(icon)=>{this.spinIcon=icon}}  className="iconfont spin">&#xe600;</i>
                                换一批
                            </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
    
        } else {
            return null
        }
    }


    render() {
        return (
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right" >
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={500}//动画时长
                            in={this.props.focused}//boolean 控制进出动画
                            classNames="slide"//动画类名
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ' '}
                                onFocus={(list)=>this.props.handleInputFocus(this.props.list)}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe6dd;</i>
                        {this.getListArea(this.props.focused ||this.props.mouseIn)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont">&#xe608;</i>
                        写文章
                </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // store里面的数据映射到组件
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list:state.getIn(['header', 'list']),
        page:state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // thunk帮助我们把异步请求放到action里面
            if(list.size===0){
                dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            const action = actionCreators.searchBlur()
            dispatch(action)
        },
        handleMouseEnter(){
            // console.log(123)
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChnagePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            if(originAngle){
                originAngle = parseInt(originAngle,10)
            }else{
                originAngle = 0
            }
            originAngle+=360
            let angel = originAngle+360
            spin.style.transform = `rotate(${angel}deg)`
            console.log(spin)
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)