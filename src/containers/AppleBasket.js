/**
 * Created by dg_lennon on 16/6/2.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';

require('styles/AppleBasket.scss');
import AppleItem from '../components/AppleItem';
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';

import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class AppleBasket extends Component {
  render () {
    const {state,actions}=this.props;
    //对 state 做显示级别的转化
    let stats = {
      appleNow: {
        quantity: 0,
        weight: 0
      },
      appleEaten: {
        quantity: 0,
        weight: 0
      }
    };
    state.get('apples').map(apple=>{
      let selector=apple.get('isEaten')?'appleEaten':'appleNow';
      stats[selector].quantity++;
      stats[selector].weight +=apple.get('weight');
    });
    return (
      <div className="appleBusket">
        <div className="title">苹果篮子</div>

        <div className="stats">
          <div className="section">
            <div className="head">当前</div>
            <div className="content">{stats.appleNow.quantity}个苹果，{stats.appleEaten.weight}克</div>
          </div>
          <div className="section">
            <div className="head">已吃掉</div>
            <div className="content">{stats.appleEaten.quantity}个苹果，{stats.appleEaten.weight}克</div>
          </div>
        </div>

        <div className="appleList">
          {state.get('apples').map((apple,index)=><AppleItem key={index} state={apple} index={index}
                                                             actions={{eatApple:actions.eatApple}}
          />)}
        </div>

        <div className="btn-div">
          <button onClick={actions.pickAppleAction}>摘苹果</button>
        </div>

      </div>
    );
  }
}

AppleBasket.propTypes = {};
AppleBasket.defaultProps = {};

export default connect(
  state=>({
    state:state.get('appleBasket')
  }),
  dispatch=>({
    actions:bindActionCreators(actions,dispatch)
  })
)(AppleBasket);
