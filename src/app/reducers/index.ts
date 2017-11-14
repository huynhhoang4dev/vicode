import { ActionReducer, combineReducers } from '@ngrx/store';
//import { compose } from '@ngrx/core/compose';

import * as TradeGoods from './TradeGood.reducer';

export interface State {
    tradegoods: TradeGoods.State
}

const reducers = {
    tradegoods: TradeGoods.reducer
}

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}