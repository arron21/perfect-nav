import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxPerfectNavComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgxPerfectNavComponent, "lib-ngx-perfect-nav", never, { "hoverReveal": "hoverReveal"; "squircle": "squircle"; "showCategories": "showCategories"; "time": "time"; "links": "links"; "iconMode": "iconMode"; "hideIcons": "hideIcons"; "iconPosition": "iconPosition"; "border": "border"; "title": "title"; "name": "name"; "caption": "caption"; "avtar": "avtar"; "image": "image"; }, { "likeNotify": "likeNotify"; "shareNotify": "shareNotify"; "commentNotify": "commentNotify"; }, never, ["*"]>;
}

//# sourceMappingURL=ngx-perfect-nav.component.d.ts.map