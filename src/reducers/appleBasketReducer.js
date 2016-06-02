import immutable from 'immutable';

const initalState = immutable.fromJS({
  isPicking: false,
  newAppleId: 1,
  apples: [
    {
      id: 0,
      weight: 235,
      isEaten: false
    }
  ]
});
// var b =initalState.deleteIn();
// console.log(b.toJS());

export default function appleBasket (state = initalState, action) {
  switch (action.type) {
    case 'BEGIN_PICK_APPLE':
      return state.set('isPicking', true);
    case 'EAT_APPLE':
      return state.setIn(['apples', action.payload,'isEaten'],true);
    case 'DONE_PICK_APPLE':
      return state.update('apples', (list)=>list.push(immutable.fromJS({
        id: state.get('newAppleId'),
        weight:action.payload,
        isEaten:false
      }))).set('isPicking',false).set('newAppleId',state.get('newAppleId')+1);
    case 'FAIL_PICK_APPLE':
      return state.set('isPicking',false);
    default:
      return state;
  }
}
