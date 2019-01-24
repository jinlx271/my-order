import React,{Component}from 'react';
import ProductItem from "./../productItem/";
import $ from 'jquery';
/*
*l列表组件
*/
var orderList=[];
class OderList extends Component{
  constructor(props){
	super(props);
	this.state={
		data:[]
		}  
  }
  componentDidMount(){
	//正常情况下orderList是请求来的数据 
	var jsonUrl='/mock/orderList.json?' + new Date().getTime();
	console.log('componentDidMount jsonUrl=='+jsonUrl);
	var self=this;
	$.get(jsonUrl, function (result,status) {
      console.log('status =='+status+';result='+result[0].img);
      self.setState({
        data: result,
      });
	})
   }
  render(){
    var productItemArr=[];
	var data=this.state.data;
	data.forEach(function(value,index){
		var str=require('./../../images/'+value["img"]);
		value["imgUrl"]=str;
		orderList.push(value);	
	}.bind(this));
    orderList.forEach(function(value,index){
      productItemArr.push(<ProductItem key={'productItem'+index} data={value}></ProductItem>);
    }.bind(this));
	  //orderList.map();
    return (
      <div className='orderlist'>   
         {productItemArr}
      </div>
    );
  }
}
export default OderList;