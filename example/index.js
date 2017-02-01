require('./public.less');
import  _render from '../src/index.js';
// import  _render from 'react-redux-config';

import React,{Component,PropTypes} from 'react';

var reducer=function(state,action){
	return Object.assign({},state,action);
};
var action=()=>(dispatch,getState)=>{
		debugger;
		return dispatch({type:'test'})
	};

class Container extends Component{
	render(){
		debugger;
		return (<div onClick={()=>{
						alert('clicked');
						debugger;
						this.props.action.apply(this);
					}}>
					测试react-react管理的事件
					{this.props.type}
			</div>)
}
};

let config = {
	react:{
		root:document.getElementById('root'),
		Container:Container
	},
	redux:{
      	reducers:reducer,
     	actions:{
		  action
	  	},
	 	middleware:[]
 	},
 	'react-redux':{
		stateToProps:(state)=>state
 	}
}

_render(config);
