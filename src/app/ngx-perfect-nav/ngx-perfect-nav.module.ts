import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgPerfectNavComponent } from './ng-perfect-nav/ng-perfect-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NgPerfectNavComponent],
  exports: [NgPerfectNavComponent],
  entryComponents: [NgPerfectNavComponent]
})
export class NgxPerfectNavModule {
  static forRoot(): ModuleWithProviders<NgxPerfectNavModule> {
    return { ngModule: NgxPerfectNavModule, providers: [] };
  }
 }
