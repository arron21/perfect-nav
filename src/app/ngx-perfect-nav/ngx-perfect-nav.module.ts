import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgPerfectNavComponent } from '../ng-perfect-nav/ng-perfect-nav.component';



@NgModule({
  declarations: [NgPerfectNavComponent],
  exports: [NgPerfectNavComponent]
})
export class NgxPerfectNavModule {
  static forRoot(): ModuleWithProviders<NgxPerfectNavModule> {
    return { ngModule: NgxPerfectNavModule, providers: [] };
  }
 }
