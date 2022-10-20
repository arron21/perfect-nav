import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxPerfectNavComponent {
    constructor();
    links: any;
    iconMode: boolean;
    hideIcons: boolean;
    iconPosition: string;
    hoverReveal: boolean;
    border: string;
    squircle: boolean;
    showCategories: boolean;
    title: string;
    name: string;
    time: Date;
    caption: string;
    avtar: string;
    image: string;
    likeNotify: EventEmitter<boolean>;
    shareNotify: EventEmitter<boolean>;
    commentNotify: EventEmitter<boolean>;
    likeEvent(): void;
    shareEvent(): void;
    commentEvent(): void;
    toggleChildren(link: any): void;
    static ɵfac: i0.ɵɵFactoryDef<NgxPerfectNavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NgxPerfectNavComponent, "lib-ngx-perfect-nav", never, { "links": "links"; "iconMode": "iconMode"; "hideIcons": "hideIcons"; "iconPosition": "iconPosition"; "hoverReveal": "hoverReveal"; "border": "border"; "squircle": "squircle"; "showCategories": "showCategories"; "title": "title"; "name": "name"; "time": "time"; "caption": "caption"; "avtar": "avtar"; "image": "image"; }, { "likeNotify": "likeNotify"; "shareNotify": "shareNotify"; "commentNotify": "commentNotify"; }, never, ["*"]>;
}
