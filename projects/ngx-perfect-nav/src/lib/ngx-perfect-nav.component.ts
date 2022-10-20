import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-ngx-perfect-nav',
  template: `
    <div class="perfect-nav-top" class="{{iconPosition}} {{border}}"
    [ngClass]="{'icon-mode': iconMode, 'hover-reveal': hoverReveal }">
    <div class="icon-collapse" (click)="iconMode = !iconMode">&#9776;</div>
    <div class="logo-content">
        <ng-content slot="logo"></ng-content>
    </div>
</div>
<div class="perfect-nav-container" class="{{iconPosition}} {{border}}"
    [ngClass]="{'icon-mode': iconMode, 'hover-reveal': hoverReveal }">
    <ng-template [ngTemplateOutlet]="linksTemplate" [ngTemplateOutletContext]="{links: links}">
    </ng-template>
</div>
<ng-template #linksTemplate let-links="links">
    <ng-container *ngFor="let l of links">
        <div class="link" *ngIf="l.visible"
            [ngClass]="{'show-children': l.showChildren, 'link-category': l.groupCategory, 'hide-link-category': !showCategories, 'link-has-no-icon': !l.icon}">
            <ng-template [ngTemplateOutlet]="linkTemplate" [ngTemplateOutletContext]="{link: l}">
            </ng-template>
        </div>
    </ng-container>
</ng-template>
<ng-template #linkTemplate let-link="link">
    <div class="link-content">
        <div class="icon no-bg" *ngIf="!link.icon"></div>

        <i class="fas fa-chart-line"></i>
        
        <div aria-hidden="true" class="icon" *ngIf="link.faIcon" [ngClass]="{'squircle': squircle}"><i class="fas {{link.faIcon}}"></i></div>
        <div aria-hidden="true" class="icon" *ngIf="link.icon" [ngClass]="{'squircle': squircle}">{{link.icon}}</div>
        <div aria-hidden="true" class="icon" *ngIf="link.iconImg" [ngClass]="{'squircle': squircle}"><img src="{{link.iconImg}}" /></div>

        <a class="label" *ngIf="!link.disabled" [routerLink]="link.link">{{link.label}}</a>
        <div class="label label--disabled" *ngIf="link.disabled">{{link.label}}</div>
        <div class="spacer"></div>

        <button class="children-dropdown" *ngIf="link.children && link.children.length" (click)="toggleChildren(link)">
            <span></span>
        </button>
    </div>
    <ng-container *ngIf="link.children">
        <div class="child-links">
            <ng-template [ngTemplateOutlet]="linksTemplate" [ngTemplateOutletContext]="{links: link.children}">
            </ng-template>
        </div>
    </ng-container>
</ng-template>
  `,
  styleUrls: ['./ngx-perfect-nav.component.scss'],
})
export class NgxPerfectNavComponent {

  constructor() { }

  @Input() links: any;
  @Input() iconMode: boolean;
  @Input() hideIcons: boolean;

  @Input() iconPosition: string;
  @Input() hoverReveal: boolean = false;

  @Input() border: string;

  @Input() squircle: boolean = false;

  @Input() showCategories: boolean = true;


  @Input() title: string;
  @Input() name: string;
  @Input() time = new Date();
  @Input() caption: string;
  @Input() avtar: string;
  @Input() image: string;

  @Output() likeNotify = new EventEmitter<boolean>();
  @Output() shareNotify = new EventEmitter<boolean>();
  @Output() commentNotify = new EventEmitter<boolean>();

  likeEvent() {
    this.likeNotify.emit(true);
  }
  shareEvent() {
    this.shareNotify.emit(true);
  }
  commentEvent() {
    this.commentNotify.emit(true);
  }

  toggleChildren(link) {
    console.log(link)
    if (link.showChildren) {
      link.showChildren = false;
      // link.height = 44;
    } else {

      const multiplyer = link.children.length
      // link.height = 44 * (multiplyer + 1);
      link.showChildren = true;
    }
  }


}
