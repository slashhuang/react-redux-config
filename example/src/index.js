require('../public.less');
import  _render from '../../src/index.js';
import React,{Component,PropTypes} from 'react';

var reducer=function(state,action){
	return Object.assign({},state,action);
};
var action=()=>{
	return {type:'test'}
}
class Container extends Component{
	render(){
		return (<div onClick={()=>{
						alert('clicked');
						this.props.action.apply(this);
					}}>
			测试react-react管理的事件
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
