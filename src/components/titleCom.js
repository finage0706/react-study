require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class titleCom extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      buyItems:[{"itemName":"milk","itemAmount":"5"},{"itemName":"bread","itemAmount":"2"},{"itemName":"apple","itemAmount":"10"}],
      message:''
    }
  }

  addItem(event){
    event.preventDefault();
    const {buyItems} = this.state;
    let itemName = this.refs.itemName.value,
        itemAmount = this.refs.itemAmount.value;
    const newItem = {"itemName":itemName,"itemAmount":itemAmount};
    var isOnTheList = false;
    for(var i=0,len=buyItems.length; i<len; i++){
      if(buyItems[i].itemName == newItem.itemName){
        isOnTheList = true;
        break;
      }
    }
    //console.log(isOnTheList);
    if(isOnTheList){
      this.setState({
        message:'This item already on the list!'
      })
    } else {
      (newItem.itemName!==''&&newItem.itemAmount!=='') && this.setState({
        buyItems:[...this.state.buyItems,newItem],
        message:''
      })
    }
    this.addForm.reset();
  }

  removeItem(item){
    const newBuyItems = this.state.buyItems.filter(buyItems=>{
        return buyItems !== item;
    });
    this.setState({
      buyItems:[...newBuyItems]
    })
    if(newBuyItems.length===0){
      this.setState({
        message:'No items on your list,please add items!'
      })
    }
  }

  clearAll(){
    this.setState({
      buyItems:[],
      message:'No items on your list,please add items!'
    })
  }

  render() {
    const {buyItems,message} = this.state;
    return (
      <div className="container">
        <div className="text-center">
          <img src={'../images/log.png'}/>
          <h1>Shoppping List</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <form ref={input=>this.addForm=input} className="form-inline" onSubmit={(event)=>{this.addItem(event)}}>
              <div className="form-group">
                <label className="sr-only" htmlFor="newItemInput">Add new Item</label>
                  <input ref="itemName" type="text" placeholder="bread" className="form-control" id="newItemInput" />
                  <input ref="itemAmount" type="text" placeholder="1" className="form-control" id="newItemInput" />
              </div>
              <button type="submit" className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
        <div className="content">
          {
            (message !== '' || buyItems.length===0) && <p className="message text-danger text-center">{message}</p>
          }
          {
            buyItems.length>0 &&
            <table className="table">
              <thead>
                <tr>
                  <th>#No.</th>
                  <th>Item</th>
                  <th>Amount</th>
                  <th className="text-right">Operation</th>
                </tr>
              </thead>
              <tbody>
                {this.state.buyItems.map(item => {
                  return <tr >
                    <th>#1</th>
                    <th>{item.itemName}</th>
                    <th>{item.itemAmount}</th>
                    <th className="text-right">
                      <button onClick={(event)=>{this.removeItem(item)}} type="button" className="btn btn-default btn-sm">
                        Remove
                      </button>
                    </th>
                  </tr>
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">&nbsp;</td>
                  <td className="text-sm-right">
                    <button onClick={(event)=>this.clearAll()} className="btn btn-default btn-sm">Clear List</button>
                  </td>
                </tr>
              </tfoot>
            </table>
          }
        </div>
      </div>

    );
  }
}

titleCom.defaultProps = {
};

export default titleCom;
