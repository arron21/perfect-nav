import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-perfect-nav',
  templateUrl: './ng-perfect-nav.component.html',
  styleUrls: ['./ng-perfect-nav.component.scss'],
})
export class NgPerfectNavComponent {

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
