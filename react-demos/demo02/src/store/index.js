import { createStore , applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

// redux-saga 配置
const sagaMiddleware = createSagaMiddleware(mySaga);


// redux-thunk 配置
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(
    reducer,
    enhancer
); // 创建数据管理仓库

export default store;