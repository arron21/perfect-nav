import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgPerfectNavComponent } from './ng-perfect-nav/ng-perfect-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NgPerfectNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) { }

  // ngDoBootstrap() {
  //   // using createCustomElement from angular package it will convert angular component to stander web component
  //   const el = createCustomElement(NgPerfectNavComponent, {
  //     injector: this.injector
  //   });
  //   // using built in the browser to create your own custome element name
  //   customElements.define('perfect-nav', el);
  // }
}
