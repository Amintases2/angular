import { BrowserModule } from '@angular/platform-browser';
import { isDevMode, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { combineReducers, provideStore, StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/counter.effects';
import { reducers } from './reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([CounterEffects]),
    HttpClientModule,
  ],
  providers: [
    provideHttpClient(),
    // provideHttpClient(withInterceptors([authInterceptorFn])),
    provideAnimationsAsync(),
    provideStore(),
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
