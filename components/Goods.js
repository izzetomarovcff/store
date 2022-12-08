import React, { Component } from "react";
import "../styles.css";
import store from "../redux/store";
import GoodsItem from './GoodsItem';
import {connect} from "react-redux";
class Goods extends Component {
  
 
  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.props.goods.map(item => (
          <ul className="goods__list">
            <li className="goods__list-item" key={item.id}>
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      goods: state.goods
  }
};
export default connect(mapStateToProps,null)(Goods);