"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var react_redux_1 = require("react-redux");
// 第一个 reducer
var reducerA = (0, toolkit_1.createSlice)({
    name: "reducerA",
    initialState: { stateA: "" },
    reducers: {
        updateStateA: function (state, action) {
            state.stateA = action.payload;
        }
    }
});
// 第二个 reducer
var reducerB = (0, toolkit_1.createSlice)({
    name: "reducerB",
    initialState: { stateA: "" },
    reducers: {
        updateStateA: function (state, action) {
            state.stateA = action.payload;
        }
    }
});
// 创建 rootReducer，将两个 reducer 合并
var rootReducer = {
    reducerA: reducerA.reducer,
    reducerB: reducerB.reducer
};
// 创建 store
var store = (0, toolkit_1.configureStore)({ reducer: rootReducer });
// 定义 action creators
var updateStateAInReducerA = reducerA.actions.updateStateA;
var updateStateAInReducerB = reducerB.actions.updateStateA;
// 使用 useSelector 获取 state
var stateAInReducerA = (0, react_redux_1.useSelector)(function (state) { return state.reducerA.stateA; });
var stateAInReducerB = (0, react_redux_1.useSelector)(function (state) { return state.reducerB.stateA; });
// 使用 useDispatch 分发 action
var dispatch = (0, react_redux_1.useDispatch)();
dispatch(updateStateAInReducerA("Value for stateA in reducerA"));
dispatch(updateStateAInReducerB("Value for stateA in reducerB"));
