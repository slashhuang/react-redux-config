/**
 * Created by huangxiaogang on 16/8/5.
 */
/**
 * Created by huangxiaogang on 16/8/5.
 * react + redux 导出更加用户友好的API
 *
 *
 * {
 *  react:{
 *      root:'',
 *      Container:''
 *      },
 *  redux:{
 *      reducers:{},
 *      actions:{}
 *      middleware:[]
 *      },
 *  'react-redux':{
 *      stateToProps:fn
 *      }
 * }
 */

import thunk from 'redux-thunk';
import { createStore,applyMiddleware,combineReducers } from 'redux';
import React,{ Component,PropTypes } from "react";
import {Provider,connect} from "react-redux";
import { render } from "react-dom";

export default  (config)=>{
    let { root,  Container } =   config['react'];
    let { reducers, actions, middleware } =   config['redux'];
    let { stateToProps } = config['react-redux'];

    if(!(typeof stateToProps == 'function')){
        stateToProps = (state)=>{
        
            return state;
        }
    }
    let middleWareArr = [thunk];
    if(middleware){
        middleWareArr = middleware.concat(middleWareArr);
    }

    let finalReducers = (typeof reducers=='function')?reducers:combineReducers(reducers);

    let ConnectContainer = connect(stateToProps,actions)(Container);

    let store = applyMiddleware.apply(null,middleWareArr)(createStore)(finalReducers);
    //创建react和redux联系起来的容器
    class ModuleContainer extends Component{
        render(){
            return (<Provider store={store}>
                <ConnectContainer/>
                </Provider>)
        }
    }
    render(<ModuleContainer/>,root);
}





