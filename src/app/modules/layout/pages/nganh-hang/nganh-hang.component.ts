import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

//operators
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/every';

//model
import { TradeGoodModel } from '../../../../models/TradeGood';

//services
//import { TradeGoodService } from '../../../../services/TradeGood.service';

//actions
import * as TradeGoodActions from '../../../../actions/TradeGood.action';
//reducers
import * as fromRoot from '../../../../reducers'; 

@Component({
    templateUrl: 'nganh-hang.component.html'
})

export class NganhHangComponent implements OnInit {
    //private tradeGood$: TradeGood[]

    private tradeGoods: TradeGoodModel[]

    constructor(public router: Router, private store: Store<fromRoot.State>){//, private tradeGoodService: TradeGoodService) {
        //dispatch FETCH_TRADE_GOOD_REQUEST
        this.store.dispatch(new TradeGoodActions.TradeGoodGetRequest());
        store.select(store => store.tradegoods)
            .subscribe(
                (res) => {
                    // if (res.isFetching === true) {
                    //     console.log('isFetching')
                    //     console.log(res)
                    // }
                    // if (res.isSuccess === true) {
                    //     console.log('isSuccess')
                    //     console.log(res)
                    //     this.tradeGoods = res.data
                    // }
                    this.tradeGoods = res.data
                }
            )
    }

    deleteTradeGoodById(tradeGoodId: number) {
        console.log(`Delete ${tradeGoodId}`)
        this.store.dispatch(new TradeGoodActions.TradeGoodDeleteByIdRequest(tradeGoodId))
    }

    ngOnInit() {

    }
}
