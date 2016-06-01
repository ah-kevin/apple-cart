import {applyMiddleware, createStore, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
/**
 * Logger函数定义
 */
const logger = createLogger({
  stateTransformer: (state) => state.toJS()
});
/**
 * thunkMiddleware:允许我们 dispatch()函数
 * createLogger() //用来打印action日志
 * @param initialState
 */

export default function configureStore () {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunkMiddleware, logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  //热替换选项
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
