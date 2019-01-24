import React,{Component}from 'react';
import './style.css';
/*
*产品组件
*/
class ProductItem extends Component{
  
  render(){
    /*"name":"商品1",
    "img":"",
    "price":"1.00",
    "dec":"好吃的",
    "totalNum":"10",
    "totalFee":"10.00",
    "isEvaluate":0,//评价
    "selectReceived":0,//是否收货
    */
    var {img,imgUrl,name,price,desc,totalNum,totalFee,isEvaluate,selectReceived}=this.props.data;
    var buttonClassName="orderItem__btn";
	var buttonDesc="确认收货"; 
	console.log('selectReceived='+selectReceived+';isEvaluate='+isEvaluate);
	if(selectReceived===0&&isEvaluate===0){
		buttonDesc="确认收货";
		buttonClassName="orderItem__btn orderItem__btn--red";
	}else if(selectReceived===1&&isEvaluate===0){
		buttonDesc="评价";
		buttonClassName="orderItem__btn orderItem__btn--red";
    }else if(selectReceived===1&&isEvaluate===1){
		buttonDesc="已评价";
		buttonClassName="orderItem__btn orderItem__btn--grey";
	}
    return (
    <div className="orderItem">
      <div className="orderItem__img">
        <img src={imgUrl} alt="productImg" width="100px" height="100px"/>
      </div>
      <div className="orderItem__name">
        {name}
      </div>
      <div className="orderItem__price">
        {'￥'+price}
      </div>
      <div className="orderItem__num">
        {'x'+totalNum}
      </div>
      <div className="orderItem__fee">
        {totalFee}
      </div>
      <div>
	  
	     <button className={buttonClassName}>{buttonDesc}</button>
      </div>
    </div>
    );
  }
}
export default ProductItem;