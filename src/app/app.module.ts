import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule, Http } from '@angular/http';

//Store state management
import { StoreModule } from '@ngrx/store';
//reducer
import { reducer } from './reducers';

//Auth, checking login by session
import { AuthGuard } from './app-auth.module';
//effects
import { EffectsModule } from '@ngrx/effects';
import { TradeGoodEffect } from './effects/TradeGoods.effect';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,

    StoreModule.provideStore(reducer),

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
