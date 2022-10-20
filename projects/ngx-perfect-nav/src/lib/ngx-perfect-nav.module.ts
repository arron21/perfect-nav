import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPerfectNavComponent } from './ngx-perfect-nav.component';



@NgModule({
  declarations: [NgxPerfectNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NgxPerfectNavComponent]
})
export class NgxPerfectNavModule { }
