import { getDailyBread } from './service.js';

export default {
  namespace: 'dailyBread',
  state: [],
  reducers: {
    getDailyBread(state, { payload }) {
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
      if (curr.card.length == 0) {
        data = yield call(getDailyBread);
        yield put({
          type: 'getDailyBread',
          payload: data,
        });
      } else {
        yield put({
          type: 'getDailyBread',
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
