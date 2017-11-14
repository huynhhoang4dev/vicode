import * as TradeGoodActions from '../actions/TradeGood.action';
import { TradeGoodModel } from '../models/TradeGood';

export interface State {
    isFetching: boolean,
    isSuccess: boolean,
    data: TradeGoodModel[],
    selectedTradeGood: TradeGoodModel
};

export const initialState: State = {
    isFetching: false,
    isSuccess: false,
    data: [],
    selectedTradeGood: null
};

export function reducer(state = initialState, action: TradeGoodActions.Actions): State {
    switch (action.type) {
        case TradeGoodActions.TradeGood_Get_Request: {
            return Object.assign({}, state, { isFetching: true, isSuccess: false, data: [] })
        }

        case TradeGoodActions.TradeGood_Get_Failure: {
            return Object.assign({}, state, { isFetching: false, isSuccess: false, data: [] })
        }

        case TradeGoodActions.TradeGood_Get_Success: {
            return Object.assign({}, state, { isFetching: false, isSuccess: false, data: action.payload })
        }

        case TradeGoodActions.TradeGood_GetById_Request: {
            return Object.assign({}, state, { selectedTradeGood: null })
        }

        case TradeGoodActions.TradeGood_GetById_Failure: {
            return Object.assign({}, state, { selectedTradeGood: null })
        }

        case TradeGoodActions.TradeGood_GetById_Success: {
            return Object.assign({}, state, { selectedTradeGood: action.payload })
        }

        case TradeGoodActions.TradeGood_PostByModel_Request: {
            return Object.assign({}, state, { isFetching: true, isSuccses: false})
        }

        case TradeGoodActions.TradeGood_PostByModel_Failure: {
            return Object.assign({}, state, { isFetching: false, isSuccses: false})
        }

        case TradeGoodActions.TradeGood_PostByModel_Success: {
            return Object.assign({}, state, { isFetching: true, isSuccses: false, data: action.payload })
        }

        case TradeGoodActions.TradeGood_DeleteById_Request: {
            return Object.assign({}, state, { isFetching: true, isSuccses: false})
        }

        case TradeGoodActions.TradeGood_DeleteById_Failure: {
            return Object.assign({}, state, { isFetching: false, isSuccses: false})
        }

        case TradeGoodActions.TradeGood_DeleteById_Success: {
            return Object.assign({}, state, { isFetching: true, isSuccses: false, data: action.payload })
        }

        case TradeGoodActions.TradeGood_PutById_Request: {
            return Object.assign({}, state, { isFetching: true, isSuccses: false})
        }

        case TradeGoodActions.TradeGood_PutById_Failure: {
            return Object.assign({}, state, { isFetching: true, isSuccses: false})
        }

        case TradeGoodActions.TradeGood_PutById_Success: {
            return Object.assign({}, state, { isFetching: true, isSuccses: false, data: action.payload })
        }

        default: 
            return state
    }
}









