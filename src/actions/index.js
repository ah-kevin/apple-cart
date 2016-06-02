/**
 * Created by dg_lennon on 16/6/2.
 */
import fetch from 'isomorphic-fetch'
export function eatApple (id) {
  return {
    type: 'EAT_APPLE',
    payload: id,
    meta: '吃掉苹果'
  }
}
export function beginPickApple (){
  return{
    type:'BEGIN_PICK_APPLE'
  }
}
export function donePick (weight) {
  return {
    type:'DONE_PICK_APPLE',
    payload:weight
  }
}
export function failPickApple (err) {
  return{
    type:'FAIL_PICK_APPLE',
    payload:err,
    error:true
  }
}

export function pickAppleAction () {
  return (dispatch, getState)=> {
    const isPick=getState().get('isPicking');

    //如果正在摘苹果，则结束这个thunk, 不执行摘苹果
    if(isPick){
      return
    }
    //通知开始摘苹果
    dispatch(beginPickApple());
     // return fetch('/pickApple',{method:'get'})
     //  .then(res=>res.json())
     //  .then(res=>dispatch(donePick(res.weight)))
     //  .catch(err=>dispatch(failPickApple(err)))
    return dispatch(donePick(123));
  }
}
