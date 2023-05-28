import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

// 第一个 reducer
const reducerA = createSlice({
  name: "reducerA",
  initialState: { stateA: "" },
  reducers: {
    updateStateA: (state, action) => {
      state.stateA = action.payload;
    },
  },
});

// 第二个 reducer
const reducerB = createSlice({
  name: "reducerB",
  initialState: { stateA: "" },
  reducers: {
    updateStateA: (state, action) => {
      state.stateA = action.payload;
    },
  },
});

// 创建 rootReducer，将两个 reducer 合并
const rootReducer = {
  reducerA: reducerA.reducer,
  reducerB: reducerB.reducer,
};

// 创建 store
const store = configureStore({ reducer: rootReducer });

// 定义 action creators
const { updateStateA: updateStateAInReducerA } = reducerA.actions;
const { updateStateA: updateStateAInReducerB } = reducerB.actions;

// 使用 useSelector 获取 state
const stateAInReducerA = useSelector(
  (state: RootState) => state.reducerA.stateA
);
const stateAInReducerB = useSelector(
  (state: RootState) => state.reducerB.stateA
);

// 使用 useDispatch 分发 action
const dispatch = useDispatch();
dispatch(updateStateAInReducerA("Value for stateA in reducerA"));
dispatch(updateStateAInReducerB("Value for stateA in reducerB"));

// RootState 类型定义
type RootState = {
  reducerA: { stateA: string };
  reducerB: { stateA: string };
};
