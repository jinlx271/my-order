/*
* z这里的{Component 表示对象的申明  可以直接用Component 不用React.Componet}
*/
import React,{Component}from 'react';
import "./style.css";
/*
*头组件
*/
class Hearder extends Component{
  render(){
    return (
      <div className="orderHeader">
      <h3>我的订单</h3>
      </div>
    );
  }
}
export default Hearder;