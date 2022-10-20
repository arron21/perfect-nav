import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPerfectNavModule } from 'projects/ngx-perfect-nav/src/public-api';
// import { NgxPerfectNavModule } from './ngx-perfect-nav';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPerfectNavModule
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
