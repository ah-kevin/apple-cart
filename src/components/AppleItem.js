/**
 * Created by dg_lennon on 16/6/2.
 */
import React, {
  Component,
  PropTypes
} from 'react';
require('styles/appleItem.scss');
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class AppleItem extends Component {
  constructor (){
    super();
    this.state={
      gray:{
        background:'#7f7f7f'
      },
      white:{
        background:'#fff'
      }
    };
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.state !== this.props.state;
  }
  render () {
    console.log('重新渲染列表啦');
    let {state,actions,index}=this.props;
    console.log(state);
    return (
      <div className="appleItem" style={state.get('isEaten')?this.state.gray:this.state.white}>
        <div className="apple"><img src="../images/apple.png" alt=""/></div>
        <div className="info">
          <div className="name">红苹果 - {state.get('id')}号</div>
          <div className="weight">{state.get('weight')}克</div>
        </div>
        <div className="btn-div"><button onClick={()=>actions.eatApple(index)}>吃掉</button></div>
      </div>
    );
  }
}

AppleItem.propTypes = {};
AppleItem.defaultProps = {};

export default AppleItem;
