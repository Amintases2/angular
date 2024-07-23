import { BrowserModule } from '@angular/platform-browser';
import { isDevMode, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore, StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'Angular NgRx Store',
      logOnly: true,
    }),
    EffectsModule.forRoot([]),
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
