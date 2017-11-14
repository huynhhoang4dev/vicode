// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map'
// //model
// import { TradeGood } from '../models/TradeGood';
// //url
// import { TradeGood_API_PATH } from '../configs/config';

// @Injectable()
// export class TradeGoodService {
//     private TradeGood_API_PATH: string = TradeGood_API_PATH;
//     constructor(private http: Http) { }

//     getTradeGood(): Observable<TradeGood[]> {
//         return this.http.get(this.TradeGood_API_PATH)
//             .map(res => res.json().Data);
//     }

//     getTradeGoodById(tradeGoodId: number): Observable<TradeGood> {
//         return this.http.get(this.TradeGood_API_PATH, tradeGoodId)
//             .map(res => res.json().Data || []);
//     }

//     postTradeGood(tradeGood: TradeGood): Observable<any> {
//         return this.http.post(this.TradeGood_API_PATH, tradeGood)
//     }

//     deleteTradeGoodById(tradeGoodId: number): Observable<any> {
//         return this.http.delete(this.TradeGood_API_PATH, tradeGoodId)
//     }   

//     // putTradeGoodById(tradeGoodId: number): Observable<TradeGood[]> {
//     //     return this.http.put()
//     // }

// }