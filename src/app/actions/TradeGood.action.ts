import { Action } from '@ngrx/store';
import { TradeGoodModel } from '../models/TradeGood';

export const TradeGood_Get_Request = '[TradeGood] Get Request';
export const TradeGood_Get_Failure = '[TradeGood] Get Failure';
export const TradeGood_Get_Success = '[TradeGood] Get Success';

export class TradeGoodGetRequest implements Action {
	readonly type = TradeGood_Get_Request
	constructor() {}
}
export class TradeGoodGetFailure implements Action {
	readonly type = TradeGood_Get_Failure
	constructor(public payload: any) {}
}
export class TradeGoodGetSuccess implements Action {
	readonly type = TradeGood_Get_Success
	constructor(public payload: TradeGoodModel[]) {}
}

export const TradeGood_GetById_Request = '[TradeGood] GetById Request';
export const TradeGood_GetById_Failure = '[TradeGood] GetById Failure';
export const TradeGood_GetById_Success = '[TradeGood] GetById Success';

export class TradeGoodGetByIdRequest implements Action {
	readonly type = TradeGood_GetById_Request
	constructor(public payload: number) {}
}
export class TradeGoodGetByIdFailure implements Action {
	readonly type = TradeGood_GetById_Failure
	constructor(public payload: any) {}
}
export class TradeGoodGetByIdSuccess implements Action {
	readonly type = TradeGood_GetById_Success
	constructor(public payload: number) {}
}

export const TradeGood_PostByModel_Request = '[TradeGood] Post Request';
export const TradeGood_PostByModel_Failure = '[TradeGood] Post Failure';
export const TradeGood_PostByModel_Success = '[TradeGood] Post Success';

export class TradeGoodPostByModelRequest implements Action {
	readonly type = TradeGood_PostByModel_Request
	constructor(public payload: TradeGoodModel) {}
}
export class TradeGoodPostByModelFailure implements Action {
	readonly type = TradeGood_PostByModel_Failure
	constructor(public payload: any) {}
}
export class TradeGoodPostByModelSuccess implements Action {
	readonly type = TradeGood_PostByModel_Success
	constructor(public payload: TradeGoodModel) {}
}

export const TradeGood_DeleteById_Request = '[TradeGood] DeleteById Request';
export const TradeGood_DeleteById_Failure = '[TradeGood] DeleteById Failure';
export const TradeGood_DeleteById_Success = '[TradeGood] DeleteById Success';

export class TradeGoodDeleteByIdRequest implements Action {
	readonly type = TradeGood_DeleteById_Request
	constructor(public payload: number) {}
}
export class TradeGoodDeleteByIdFailure implements Action {
	readonly type = TradeGood_DeleteById_Failure
	constructor(public payload: number) {}
}
export class TradeGoodDeleteByIdSuccess implements Action {
	readonly type = TradeGood_DeleteById_Success
	constructor(public payload: number) {}
}

export const TradeGood_PutById_Request = '[TradeGood] PutById Request';
export const TradeGood_PutById_Failure = '[TradeGood] PutById Failure';
export const TradeGood_PutById_Success = '[TradeGood] PutById Success';

export class TradeGoodPutByIdRequest implements Action {
	readonly type = TradeGood_PutById_Request
	constructor(public payload: TradeGoodModel) {}
}
export class TradeGoodPutByIdFailure implements Action {
	readonly type = TradeGood_PutById_Failure
	constructor(public payload: TradeGoodModel) {}
}
export class TradeGoodPutByIdSuccess implements Action {
	readonly type = TradeGood_PutById_Success
	constructor(public payload: TradeGoodModel) {}
}


export type Actions 
	= TradeGoodGetRequest
	| TradeGoodGetFailure
	| TradeGoodGetSuccess
	| TradeGoodGetByIdRequest
	| TradeGoodGetByIdFailure
	| TradeGoodGetByIdSuccess
	| TradeGoodPostByModelRequest
	| TradeGoodPostByModelFailure
	| TradeGoodPostByModelSuccess
	| TradeGoodDeleteByIdRequest
	| TradeGoodDeleteByIdFailure
	| TradeGoodDeleteByIdSuccess
	| TradeGoodPutByIdRequest
	| TradeGoodPutByIdFailure
	| TradeGoodPutByIdSuccess