import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { HttpModule } from '@angular/http';


//components

import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout.component';
//import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

//pages components
import { NganhHangComponent } from './pages/nganh-hang/nganh-hang.component';
//import { GridItemComponent } from './pages/nganh-hang/grid-item.component';
//nganh-hang service
//import { NganhHangService } from './pages/nganh-hang/nganh-hang.service';
//modules
import { EffectsModule } from '@ngrx/effects';
//services
//import { TradeGoodService } from '../../services/TradeGood.service';
//effects
import { TradeGoodEffect } from '../../effects/TradeGoods.effect';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    
    EffectsModule.run(TradeGoodEffect)
  ],
  declarations: [
    HeaderComponent,
    LayoutComponent,
    SidebarComponent,
    FooterComponent,

    NganhHangComponent


  ],
  providers: [
    
  ]
})
export class LayoutModule { }
