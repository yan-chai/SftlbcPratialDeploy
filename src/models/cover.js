import { getCover } from './service.js';

export default {
  namespace: 'cover',
  state: [],
  reducers: {
    getCover(state, { payload }) {
      if (payload == null || payload.length == 0) {
        return state;
      }
      let newState = state;
      newState.push(payload);
      return newState;
    },
  },
  effects: {
    *getRemote(action, { select, call, put }) {
      const curr = yield select((state) => state);
      let data = null;
      if (curr.cover.length == 0) {
        data = yield call(getCover);
        yield put({
          type: 'getCover',
          payload: data,
        });
      } else {
        yield put({
          type: 'getCover',
          payload: data,
        });
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'getRemote',
          });
        }
      });
    },
  },
};
