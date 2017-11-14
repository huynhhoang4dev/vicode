import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { of } from 'rxjs/observable/of';

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
//import { TradeGoodService } from '../services/TradeGood.service';
import { Observable } from 'rxjs/Observable';

//url
import { TradeGood_API_PATH } from '../configs/config';

//const action
import * as TradeGoodActions from '../actions/TradeGood.action';

@Injectable()
export class TradeGoodEffect {
    constructor(private http: Http, private action$: Actions){}//, private tradeGoodService: TradeGoodService) {}

    @Effect()
    get$: Observable<Action> = this.action$
        .ofType(TradeGoodActions.TradeGood_Get_Request)
        .switchMap(
            () => (
                this.http.get(TradeGood_API_PATH)
            )
            .map(res => new TradeGoodActions.TradeGoodGetSuccess(res.json().Data))//({type: TradeGoodActions.FETCH_TRADE_GOOD_SUCCESS, payload: res.json().Data}))
            .catch(err => of(new TradeGoodActions.TradeGoodGetFailure(err)))
        )

    @Effect()
    getById$: Observable<Action> = this.action$
        .ofType(TradeGoodActions.TradeGood_GetById_Request)
        .map((action: TradeGoodActions.TradeGoodGetByIdRequest) => action.payload)
        .mergeMap(
            tradeGoodId => (
                this.http.get(TradeGood_API_PATH, tradeGoodId)
                .map(() => new TradeGoodActions.TradeGoodGetByIdSuccess(tradeGoodId))
                .catch(() => of(new TradeGoodActions.TradeGoodGetByIdFailure(tradeGoodId)))
            )
        )

    @Effect() 
    postTradeGood$: Observable<Action> = this.action$
        .ofType(TradeGoodActions.TradeGood_PostByModel_Request)
        .map((action: TradeGoodActions.TradeGoodPostByModelRequest) => action.payload)
        .mergeMap(
            tradeGood => (
                this.http.post(TradeGood_API_PATH, tradeGood)
                .map(() => new TradeGoodActions.TradeGoodPostByModelSuccess(tradeGood))
                .catch(() => of(new TradeGoodActions.TradeGoodPostByModelFailure(tradeGood)))
            )
        )
    @Effect()
    deleteById$: Observable<Action> = this.action$
        .ofType(TradeGoodActions.TradeGood_DeleteById_Request)
        .map((action: TradeGoodActions.TradeGoodDeleteByIdRequest) => action.payload)
        .mergeMap(
            tradeGoodId => (
                this.http.delete(TradeGood_API_PATH, tradeGoodId)
                .map(() => new TradeGoodActions.TradeGoodDeleteByIdSuccess(tradeGoodId))
                .catch(() => of(new TradeGoodActions.TradeGoodDeleteByIdFailure(tradeGoodId)))
            )
        )
    @Effect()
    putById$: Observable<Action> = this.action$
        .ofType(TradeGoodActions.TradeGood_PutById_Request)
        .map((action: TradeGoodActions.TradeGoodPutByIdRequest) => action.payload)
        .mergeMap(
            tradeGood => (
                this.http.put(TradeGood_API_PATH, tradeGood)
                .map(() => new TradeGoodActions.TradeGoodPutByIdSuccess(tradeGood))
                .catch(() => of(new TradeGoodActions.TradeGoodPutByIdFailure(tradeGood)))
            )
        )
}










