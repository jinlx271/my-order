import React,{Component}from 'react';
import './App.css';
import Header from './../header/';
import OrderList from './../orderList/';

/*
*订单页面 大致划分为 头 列表部分 每一个产品部分  即header组件  list组件 product组件
*/

/*
*商品显示组件
*/

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <OrderList></OrderList>
      </div>
        
    );
  }
}

export default App;
