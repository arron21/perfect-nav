import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/router';

function NgxPerfectNavComponent_ng_template_6_Template(rf, ctx) { }
function NgxPerfectNavComponent_ng_template_7_ng_container_0_div_1_ng_template_1_Template(rf, ctx) { }
var _c0 = function (a0, a1, a2, a3) { return { "show-children": a0, "link-category": a1, "hide-link-category": a2, "link-has-no-icon": a3 }; };
var _c1 = function (a0) { return { link: a0 }; };
function NgxPerfectNavComponent_ng_template_7_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, NgxPerfectNavComponent_ng_template_7_ng_container_0_div_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var l_r7 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    var _r3 = ɵngcc0.ɵɵreference(10);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(3, _c0, l_r7.showChildren, l_r7.groupCategory, !ctx_r8.showCategories, !l_r7.icon));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(8, _c1, l_r7));
} }
function NgxPerfectNavComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NgxPerfectNavComponent_ng_template_7_ng_container_0_div_1_Template, 2, 10, "div", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var l_r7 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", l_r7.visible);
} }
function NgxPerfectNavComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NgxPerfectNavComponent_ng_template_7_ng_container_0_Template, 2, 1, "ng-container", 7);
} if (rf & 2) {
    var links_r5 = ctx.links;
    ɵngcc0.ɵɵproperty("ngForOf", links_r5);
} }
function NgxPerfectNavComponent_ng_template_9_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 19);
} }
var _c2 = function (a0) { return { "squircle": a0 }; };
function NgxPerfectNavComponent_ng_template_9_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵelement(1, "i");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var link_r11 = ɵngcc0.ɵɵnextContext().link;
    var ctx_r13 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(4, _c2, ctx_r13.squircle));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("fas ", link_r11.faIcon, "");
} }
function NgxPerfectNavComponent_ng_template_9_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var link_r11 = ɵngcc0.ɵɵnextContext().link;
    var ctx_r14 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c2, ctx_r14.squircle));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(link_r11.icon);
} }
function NgxPerfectNavComponent_ng_template_9_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵelement(1, "img", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var link_r11 = ɵngcc0.ɵɵnextContext().link;
    var ctx_r15 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c2, ctx_r15.squircle));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("src", link_r11.iconImg, ɵngcc0.ɵɵsanitizeUrl);
} }
function NgxPerfectNavComponent_ng_template_9_a_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 22);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var link_r11 = ɵngcc0.ɵɵnextContext().link;
    ɵngcc0.ɵɵproperty("routerLink", link_r11.link);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(link_r11.label);
} }
function NgxPerfectNavComponent_ng_template_9_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 23);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var link_r11 = ɵngcc0.ɵɵnextContext().link;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(link_r11.label);
} }
function NgxPerfectNavComponent_ng_template_9_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 24);
    ɵngcc0.ɵɵlistener("click", function NgxPerfectNavComponent_ng_template_9_button_9_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r27); var link_r11 = ɵngcc0.ɵɵnextContext().link; var ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.toggleChildren(link_r11); });
    ɵngcc0.ɵɵelement(1, "span");
    ɵngcc0.ɵɵelementEnd();
} }
function NgxPerfectNavComponent_ng_template_9_ng_container_10_ng_template_2_Template(rf, ctx) { }
var _c3 = function (a0) { return { links: a0 }; };
function NgxPerfectNavComponent_ng_template_9_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 25);
    ɵngcc0.ɵɵtemplate(2, NgxPerfectNavComponent_ng_template_9_ng_container_10_ng_template_2_Template, 0, 0, "ng-template", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var link_r11 = ɵngcc0.ɵɵnextContext().link;
    ɵngcc0.ɵɵnextContext();
    var _r1 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c3, link_r11.children));
} }
function NgxPerfectNavComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtemplate(1, NgxPerfectNavComponent_ng_template_9_div_1_Template, 1, 0, "div", 11);
    ɵngcc0.ɵɵelement(2, "i", 12);
    ɵngcc0.ɵɵtemplate(3, NgxPerfectNavComponent_ng_template_9_div_3_Template, 2, 6, "div", 13);
    ɵngcc0.ɵɵtemplate(4, NgxPerfectNavComponent_ng_template_9_div_4_Template, 2, 4, "div", 13);
    ɵngcc0.ɵɵtemplate(5, NgxPerfectNavComponent_ng_template_9_div_5_Template, 2, 4, "div", 13);
    ɵngcc0.ɵɵtemplate(6, NgxPerfectNavComponent_ng_template_9_a_6_Template, 2, 2, "a", 14);
    ɵngcc0.ɵɵtemplate(7, NgxPerfectNavComponent_ng_template_9_div_7_Template, 2, 1, "div", 15);
    ɵngcc0.ɵɵelement(8, "div", 16);
    ɵngcc0.ɵɵtemplate(9, NgxPerfectNavComponent_ng_template_9_button_9_Template, 2, 0, "button", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(10, NgxPerfectNavComponent_ng_template_9_ng_container_10_Template, 3, 4, "ng-container", 18);
} if (rf & 2) {
    var link_r11 = ctx.link;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !link_r11.icon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", link_r11.faIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", link_r11.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", link_r11.iconImg);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !link_r11.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", link_r11.disabled);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", link_r11.children && link_r11.children.length);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", link_r11.children);
} }
var _c4 = function (a0, a1) { return { "icon-mode": a0, "hover-reveal": a1 }; };
var _c5 = ["*"];
var NgxPerfectNavComponent = /** @class */ (function () {
    function NgxPerfectNavComponent() {
        this.hoverReveal = false;
        this.squircle = false;
        this.showCategories = true;
        this.time = new Date();
        this.likeNotify = new EventEmitter();
        this.shareNotify = new EventEmitter();
        this.commentNotify = new EventEmitter();
    }
    NgxPerfectNavComponent.prototype.likeEvent = function () {
        this.likeNotify.emit(true);
    };
    NgxPerfectNavComponent.prototype.shareEvent = function () {
        this.shareNotify.emit(true);
    };
    NgxPerfectNavComponent.prototype.commentEvent = function () {
        this.commentNotify.emit(true);
    };
    NgxPerfectNavComponent.prototype.toggleChildren = function (link) {
        console.log(link);
        if (link.showChildren) {
            link.showChildren = false;
            // link.height = 44;
        }
        else {
            var multiplyer = link.children.length;
            // link.height = 44 * (multiplyer + 1);
            link.showChildren = true;
        }
    };
    __decorate([
        Input()
    ], NgxPerfectNavComponent.prototype, "links", void 0);
    __decorate([
        Input()
    ], NgxPerfectNavComponent.prototype, "iconMode", void 0);
    __decorate([
        Input()
    ], NgxPerfectNavComponent.prototype, "hideIcons", void 0);
    __decorate([
        Input()
    ], NgxPerfectNavComponent.prototype, "iconPosition", void 0);
    __decorate([
        Input()
    ], NgxPerfectNavComponent.prototype, "hoverReveal", void 0);
    __decorate([
        Input()
    ], NgxPerfectNavComponent.prototype, "border", void 0);
    __decorate([
        Input()
    ], NgxPerfectNavComponent.prototype, "squircle", void 0);
    __decorate([
        Input()
    ], NgxPerfectNavComponent.prototype, "showCategories", void 0);
    __decorate([
        Input()
    ], NgxPerfectNavComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], NgxPerfectNavComponent.prototype, "name", void 0);
    __decorate([
        Input()
    ], NgxPerfectNavComponent.prototype, "time", void 0);
    __decorate([
        Input()
    ], NgxPerfectNavComponent.prototype, "caption", void 0);
    __decorate([
        Input()
    ], NgxPerfectNavComponent.prototype, "avtar", void 0);
    __decorate([
        Input()
    ], NgxPerfectNavComponent.prototype, "image", void 0);
    __decorate([
        Output()
    ], NgxPerfectNavComponent.prototype, "likeNotify", void 0);
    __decorate([
        Output()
    ], NgxPerfectNavComponent.prototype, "shareNotify", void 0);
    __decorate([
        Output()
    ], NgxPerfectNavComponent.prototype, "commentNotify", void 0);
NgxPerfectNavComponent.ɵfac = function NgxPerfectNavComponent_Factory(t) { return new (t || NgxPerfectNavComponent)(); };
NgxPerfectNavComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxPerfectNavComponent, selectors: [["lib-ngx-perfect-nav"]], inputs: { hoverReveal: "hoverReveal", squircle: "squircle", showCategories: "showCategories", time: "time", links: "links", iconMode: "iconMode", hideIcons: "hideIcons", iconPosition: "iconPosition", border: "border", title: "title", name: "name", caption: "caption", avtar: "avtar", image: "image" }, outputs: { likeNotify: "likeNotify", shareNotify: "shareNotify", commentNotify: "commentNotify" }, ngContentSelectors: _c5, decls: 11, vars: 20, consts: [[1, "perfect-nav-top", 3, "ngClass"], [1, "icon-collapse", 3, "click"], [1, "logo-content"], [1, "perfect-nav-container", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["linksTemplate", ""], ["linkTemplate", ""], [4, "ngFor", "ngForOf"], ["class", "link", 3, "ngClass", 4, "ngIf"], [1, "link", 3, "ngClass"], [1, "link-content"], ["class", "icon no-bg", 4, "ngIf"], [1, "fas", "fa-chart-line"], ["aria-hidden", "true", "class", "icon", 3, "ngClass", 4, "ngIf"], ["class", "label", 3, "routerLink", 4, "ngIf"], ["class", "label label--disabled", 4, "ngIf"], [1, "spacer"], ["class", "children-dropdown", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "icon", "no-bg"], ["aria-hidden", "true", 1, "icon", 3, "ngClass"], [3, "src"], [1, "label", 3, "routerLink"], [1, "label", "label--disabled"], [1, "children-dropdown", 3, "click"], [1, "child-links"]], template: function NgxPerfectNavComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵlistener("click", function NgxPerfectNavComponent_Template_div_click_1_listener() { return ctx.iconMode = !ctx.iconMode; });
        ɵngcc0.ɵɵtext(2, "\u2630");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵprojection(4, 0, ["slot", "logo"]);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 3);
        ɵngcc0.ɵɵtemplate(6, NgxPerfectNavComponent_ng_template_6_Template, 0, 0, "ng-template", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, NgxPerfectNavComponent_ng_template_7_Template, 1, 1, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(9, NgxPerfectNavComponent_ng_template_9_Template, 11, 8, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(8);
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.iconPosition, " ", ctx.border, "");
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(12, _c4, ctx.iconMode, ctx.hoverReveal));
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.iconPosition, " ", ctx.border, "");
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(15, _c4, ctx.iconMode, ctx.hoverReveal));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(18, _c3, ctx.links));
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.RouterLinkWithHref], styles: ["[_nghost-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;background-color:var(--nav-bg-color);color:var(--nav-color);height:100vh;display:block}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.icon-mode[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:none}.icon-mode[_ngcontent-%COMP%]   .child-links[_ngcontent-%COMP%]{padding-left:0}.perfect-nav-top[_ngcontent-%COMP%]{display:flex;align-items:center;color:inherit;background-color:inherit}.perfect-nav-top.icon-mode[_ngcontent-%COMP%]   .logo-content[_ngcontent-%COMP%]{display:none}.logo-content[_ngcontent-%COMP%]{display:flex;align-items:center}.logo-content[_ngcontent-%COMP%]    >*{height:100%;-o-object-fit:cover;object-fit:cover}.perfect-nav-container[_ngcontent-%COMP%]{display:block;color:inherit;background-color:inherit;max-width:var(--nav-width);transition:var(--transition-speed) all;will-change:contents}.perfect-nav-container.icon-mode[_ngcontent-%COMP%]{max-width:var(--nav-iconMode-width);overflow:hidden}.perfect-nav-container.icon-mode[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{max-width:var(--nav-iconMode-width)}.perfect-nav-container.icon-mode[_ngcontent-%COMP%]   .link-has-no-icon[_ngcontent-%COMP%]{height:0}.perfect-nav-container.icon-mode.icon-right[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{order:2;flex:1}.perfect-nav-container.icon-mode.icon-right[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{order:1}.perfect-nav-container.icon-mode[_ngcontent-%COMP%]   .link-category[_ngcontent-%COMP%]{display:none}.perfect-nav-container.icon-mode[_ngcontent-%COMP%]   .child-links[_ngcontent-%COMP%]{padding-left:0}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]{position:absolute}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .link-has-no-icon[_ngcontent-%COMP%]{height:inherit}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .child-links[_ngcontent-%COMP%]{padding-left:var(--child-indent)}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .link-category[_ngcontent-%COMP%]{display:block}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%], .perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .link[_ngcontent-%COMP%]{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover.icon-right   .label[_ngcontent-%COMP%]{order:1}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover.icon-right   .icon[_ngcontent-%COMP%]{order:2}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{transition:var(--transition-speed) all}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]:hover{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%]{display:flex}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{transition:var(--transition-speed) all}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%]{display:flex}.perfect-nav-container.icon-left[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{order:2}.perfect-nav-container.icon-left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{order:1}.perfect-nav-container.icon-right[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{order:1;flex:1}.perfect-nav-container.icon-right[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{order:2}.perfect-nav-container.icon-right[_ngcontent-%COMP%]   .children-dropdown[_ngcontent-%COMP%]{order:0}.link[_ngcontent-%COMP%]{transition:250ms;cursor:pointer}.link[_ngcontent-%COMP%]   .child-links[_ngcontent-%COMP%]{box-shadow:0 2px 2px #00000026}.link[_ngcontent-%COMP%]   .child-links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.link.show-children[_ngcontent-%COMP%] > .link-content[_ngcontent-%COMP%] > .children-dropdown[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transform:rotate(-180deg)}.link.show-children[_ngcontent-%COMP%] > .child-links[_ngcontent-%COMP%] > .link[_ngcontent-%COMP%]{max-height:1000px;overflow:visible}.link[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{padding:0 var(--padding-width);display:flex;align-items:center;height:var(--link-height)}.link[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]:hover{background-color:var(--hover-bg)}.link[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]:hover:has(div.label--disabled){background-color:inherit}.link[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:flex;align-items:center}.label[_ngcontent-%COMP%]{padding:8px var(--padding-width);white-space:nowrap}.label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:8px var(--padding-width)}.label--disabled[_ngcontent-%COMP%]{opacity:.4;cursor:default}.icon[_ngcontent-%COMP%]{justify-content:center;width:24px;height:24px;flex:none;background:var(--icon-bg);border-radius:var(--icon-br)}.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:var(--icon-img-size)}.children-dropdown[_ngcontent-%COMP%]{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto;background-color:inherit;border:inherit;order:5;justify-self:flex-end;padding:.5em;display:flex;justify-content:center;align-items:center;cursor:pointer}.children-dropdown[_ngcontent-%COMP%]:hover{background:var(--dropdown-bg-hover)}.children-dropdown[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{transition:.1s;height:12px;width:12px}.border-left[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{border-left:var(--border-width) solid;border-color:var(--border-color)}.spacer[_ngcontent-%COMP%]{margin:auto;order:4}.caret-bg[_ngcontent-%COMP%], .children-dropdown[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-size:cover;background-image:url(data:image/png;base64,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);filter:brightness(var(--nav-caret-brightness))}.squircle[_ngcontent-%COMP%]{-webkit-clip-path:polygon(100% 50%,100% 56.6%,100% 59.3%,100% 61.4%,99.9% 63.2%,99.9% 64.8%,99.9% 66.2%,99.8% 67.5%,99.8% 68.7%,99.7% 69.8%,99.6% 70.8%,99.5% 71.8%,99.5% 72.8%,99.4% 73.7%,99.3% 74.6%,99.1% 75.4%,99% 76.3%,98.9% 77%,98.8% 77.8%,98.6% 78.5%,98.5% 79.2%,98.3% 79.9%,98.1% 80.6%,98% 81.3%,97.8% 81.9%,97.6% 82.5%,97.4% 83.1%,97.2% 83.7%,97% 84.3%,96.8% 84.8%,96.5% 85.4%,96.3% 85.9%,96% 86.4%,95.8% 86.9%,95.5% 87.4%,95.3% 87.9%,95% 88.3%,94.7% 88.8%,94.4% 89.2%,94.1% 89.7%,93.8% 90.1%,93.4% 90.5%,93.1% 90.9%,92.8% 91.3%,92.4% 91.7%,92% 92%,91.7% 92.4%,91.3% 92.8%,90.9% 93.1%,90.5% 93.4%,90.1% 93.8%,89.7% 94.1%,89.2% 94.4%,88.8% 94.7%,88.3% 95%,87.9% 95.3%,87.4% 95.5%,86.9% 95.8%,86.4% 96%,85.9% 96.3%,85.4% 96.5%,84.8% 96.8%,84.3% 97%,83.7% 97.2%,83.1% 97.4%,82.5% 97.6%,81.9% 97.8%,81.3% 98%,80.6% 98.1%,79.9% 98.3%,79.2% 98.5%,78.5% 98.6%,77.8% 98.8%,77% 98.9%,76.3% 99%,75.4% 99.1%,74.6% 99.3%,73.7% 99.4%,72.8% 99.5%,71.8% 99.5%,70.8% 99.6%,69.8% 99.7%,68.7% 99.8%,67.5% 99.8%,66.2% 99.9%,64.8% 99.9%,63.2% 99.9%,61.4% 100%,59.3% 100%,56.6% 100%,50% 100%,43.4% 100%,40.7% 100%,38.6% 100%,36.8% 99.9%,35.2% 99.9%,33.8% 99.9%,32.5% 99.8%,31.3% 99.8%,30.2% 99.7%,29.2% 99.6%,28.2% 99.5%,27.2% 99.5%,26.3% 99.4%,25.4% 99.3%,24.6% 99.1%,23.7% 99%,23% 98.9%,22.2% 98.8%,21.5% 98.6%,20.8% 98.5%,20.1% 98.3%,19.4% 98.1%,18.7% 98%,18.1% 97.8%,17.5% 97.6%,16.9% 97.4%,16.3% 97.2%,15.7% 97%,15.2% 96.8%,14.6% 96.5%,14.1% 96.3%,13.6% 96%,13.1% 95.8%,12.6% 95.5%,12.1% 95.3%,11.7% 95%,11.2% 94.7%,10.8% 94.4%,10.3% 94.1%,9.9% 93.8%,9.5% 93.4%,9.1% 93.1%,8.7% 92.8%,8.3% 92.4%,8% 92%,7.6% 91.7%,7.2% 91.3%,6.9% 90.9%,6.6% 90.5%,6.2% 90.1%,5.9% 89.7%,5.6% 89.2%,5.3% 88.8%,5% 88.3%,4.7% 87.9%,4.5% 87.4%,4.2% 86.9%,4% 86.4%,3.7% 85.9%,3.5% 85.4%,3.2% 84.8%,3% 84.3%,2.8% 83.7%,2.6% 83.1%,2.4% 82.5%,2.2% 81.9%,2% 81.3%,1.9% 80.6%,1.7% 79.9%,1.5% 79.2%,1.4% 78.5%,1.2% 77.8%,1.1% 77%,1% 76.3%,.9% 75.4%,.7% 74.6%,.6% 73.7%,.5% 72.8%,.5% 71.8%,.4% 70.8%,.3% 69.8%,.2% 68.7%,.2% 67.5%,.1% 66.2%,.1% 64.8%,.1% 63.2%,0 61.4%,0 59.3%,0 56.6%,0 50%,0 43.4%,0 40.7%,0 38.6%,.1% 36.8%,.1% 35.2%,.1% 33.8%,.2% 32.5%,.2% 31.3%,.3% 30.2%,.4% 29.2%,.5% 28.2%,.5% 27.2%,.6% 26.3%,.7% 25.4%,.9% 24.6%,1% 23.7%,1.1% 23%,1.2% 22.2%,1.4% 21.5%,1.5% 20.8%,1.7% 20.1%,1.9% 19.4%,2% 18.7%,2.2% 18.1%,2.4% 17.5%,2.6% 16.9%,2.8% 16.3%,3% 15.7%,3.2% 15.2%,3.5% 14.6%,3.7% 14.1%,4% 13.6%,4.2% 13.1%,4.5% 12.6%,4.7% 12.1%,5% 11.7%,5.3% 11.2%,5.6% 10.8%,5.9% 10.3%,6.2% 9.9%,6.6% 9.5%,6.9% 9.1%,7.2% 8.7%,7.6% 8.3%,8% 8%,8.3% 7.6%,8.7% 7.2%,9.1% 6.9%,9.5% 6.6%,9.9% 6.2%,10.3% 5.9%,10.8% 5.6%,11.2% 5.3%,11.7% 5%,12.1% 4.7%,12.6% 4.5%,13.1% 4.2%,13.6% 4%,14.1% 3.7%,14.6% 3.5%,15.2% 3.2%,15.7% 3%,16.3% 2.8%,16.9% 2.6%,17.5% 2.4%,18.1% 2.2%,18.7% 2%,19.4% 1.9%,20.1% 1.7%,20.8% 1.5%,21.5% 1.4%,22.2% 1.2%,23% 1.1%,23.7% 1%,24.6% .9%,25.4% .7%,26.3% .6%,27.2% .5%,28.2% .5%,29.2% .4%,30.2% .3%,31.3% .2%,32.5% .2%,33.8% .1%,35.2% .1%,36.8% .1%,38.6% 0,40.7% 0,43.4% 0,50% 0,56.6% 0,59.3% 0,61.4% 0,63.2% .1%,64.8% .1%,66.2% .1%,67.5% .2%,68.7% .2%,69.8% .3%,70.8% .4%,71.8% .5%,72.8% .5%,73.7% .6%,74.6% .7%,75.4% .9%,76.3% 1%,77% 1.1%,77.8% 1.2%,78.5% 1.4%,79.2% 1.5%,79.9% 1.7%,80.6% 1.9%,81.3% 2%,81.9% 2.2%,82.5% 2.4%,83.1% 2.6%,83.7% 2.8%,84.3% 3%,84.8% 3.2%,85.4% 3.5%,85.9% 3.7%,86.4% 4%,86.9% 4.2%,87.4% 4.5%,87.9% 4.7%,88.3% 5%,88.8% 5.3%,89.2% 5.6%,89.7% 5.9%,90.1% 6.2%,90.5% 6.6%,90.9% 6.9%,91.3% 7.2%,91.7% 7.6%,92% 8%,92.4% 8.3%,92.8% 8.7%,93.1% 9.1%,93.4% 9.5%,93.8% 9.9%,94.1% 10.3%,94.4% 10.8%,94.7% 11.2%,95% 11.7%,95.3% 12.1%,95.5% 12.6%,95.8% 13.1%,96% 13.6%,96.3% 14.1%,96.5% 14.6%,96.8% 15.2%,97% 15.7%,97.2% 16.3%,97.4% 16.9%,97.6% 17.5%,97.8% 18.1%,98% 18.7%,98.1% 19.4%,98.3% 20.1%,98.5% 20.8%,98.6% 21.5%,98.8% 22.2%,98.9% 23%,99% 23.7%,99.1% 24.6%,99.3% 25.4%,99.4% 26.3%,99.5% 27.2%,99.5% 28.2%,99.6% 29.2%,99.7% 30.2%,99.8% 31.3%,99.8% 32.5%,99.9% 33.8%,99.9% 35.2%,99.9% 36.8%,100% 38.6%,100% 40.7%,100% 43.4%);clip-path:polygon(100% 50%,100% 56.6%,100% 59.3%,100% 61.4%,99.9% 63.2%,99.9% 64.8%,99.9% 66.2%,99.8% 67.5%,99.8% 68.7%,99.7% 69.8%,99.6% 70.8%,99.5% 71.8%,99.5% 72.8%,99.4% 73.7%,99.3% 74.6%,99.1% 75.4%,99% 76.3%,98.9% 77%,98.8% 77.8%,98.6% 78.5%,98.5% 79.2%,98.3% 79.9%,98.1% 80.6%,98% 81.3%,97.8% 81.9%,97.6% 82.5%,97.4% 83.1%,97.2% 83.7%,97% 84.3%,96.8% 84.8%,96.5% 85.4%,96.3% 85.9%,96% 86.4%,95.8% 86.9%,95.5% 87.4%,95.3% 87.9%,95% 88.3%,94.7% 88.8%,94.4% 89.2%,94.1% 89.7%,93.8% 90.1%,93.4% 90.5%,93.1% 90.9%,92.8% 91.3%,92.4% 91.7%,92% 92%,91.7% 92.4%,91.3% 92.8%,90.9% 93.1%,90.5% 93.4%,90.1% 93.8%,89.7% 94.1%,89.2% 94.4%,88.8% 94.7%,88.3% 95%,87.9% 95.3%,87.4% 95.5%,86.9% 95.8%,86.4% 96%,85.9% 96.3%,85.4% 96.5%,84.8% 96.8%,84.3% 97%,83.7% 97.2%,83.1% 97.4%,82.5% 97.6%,81.9% 97.8%,81.3% 98%,80.6% 98.1%,79.9% 98.3%,79.2% 98.5%,78.5% 98.6%,77.8% 98.8%,77% 98.9%,76.3% 99%,75.4% 99.1%,74.6% 99.3%,73.7% 99.4%,72.8% 99.5%,71.8% 99.5%,70.8% 99.6%,69.8% 99.7%,68.7% 99.8%,67.5% 99.8%,66.2% 99.9%,64.8% 99.9%,63.2% 99.9%,61.4% 100%,59.3% 100%,56.6% 100%,50% 100%,43.4% 100%,40.7% 100%,38.6% 100%,36.8% 99.9%,35.2% 99.9%,33.8% 99.9%,32.5% 99.8%,31.3% 99.8%,30.2% 99.7%,29.2% 99.6%,28.2% 99.5%,27.2% 99.5%,26.3% 99.4%,25.4% 99.3%,24.6% 99.1%,23.7% 99%,23% 98.9%,22.2% 98.8%,21.5% 98.6%,20.8% 98.5%,20.1% 98.3%,19.4% 98.1%,18.7% 98%,18.1% 97.8%,17.5% 97.6%,16.9% 97.4%,16.3% 97.2%,15.7% 97%,15.2% 96.8%,14.6% 96.5%,14.1% 96.3%,13.6% 96%,13.1% 95.8%,12.6% 95.5%,12.1% 95.3%,11.7% 95%,11.2% 94.7%,10.8% 94.4%,10.3% 94.1%,9.9% 93.8%,9.5% 93.4%,9.1% 93.1%,8.7% 92.8%,8.3% 92.4%,8% 92%,7.6% 91.7%,7.2% 91.3%,6.9% 90.9%,6.6% 90.5%,6.2% 90.1%,5.9% 89.7%,5.6% 89.2%,5.3% 88.8%,5% 88.3%,4.7% 87.9%,4.5% 87.4%,4.2% 86.9%,4% 86.4%,3.7% 85.9%,3.5% 85.4%,3.2% 84.8%,3% 84.3%,2.8% 83.7%,2.6% 83.1%,2.4% 82.5%,2.2% 81.9%,2% 81.3%,1.9% 80.6%,1.7% 79.9%,1.5% 79.2%,1.4% 78.5%,1.2% 77.8%,1.1% 77%,1% 76.3%,.9% 75.4%,.7% 74.6%,.6% 73.7%,.5% 72.8%,.5% 71.8%,.4% 70.8%,.3% 69.8%,.2% 68.7%,.2% 67.5%,.1% 66.2%,.1% 64.8%,.1% 63.2%,0 61.4%,0 59.3%,0 56.6%,0 50%,0 43.4%,0 40.7%,0 38.6%,.1% 36.8%,.1% 35.2%,.1% 33.8%,.2% 32.5%,.2% 31.3%,.3% 30.2%,.4% 29.2%,.5% 28.2%,.5% 27.2%,.6% 26.3%,.7% 25.4%,.9% 24.6%,1% 23.7%,1.1% 23%,1.2% 22.2%,1.4% 21.5%,1.5% 20.8%,1.7% 20.1%,1.9% 19.4%,2% 18.7%,2.2% 18.1%,2.4% 17.5%,2.6% 16.9%,2.8% 16.3%,3% 15.7%,3.2% 15.2%,3.5% 14.6%,3.7% 14.1%,4% 13.6%,4.2% 13.1%,4.5% 12.6%,4.7% 12.1%,5% 11.7%,5.3% 11.2%,5.6% 10.8%,5.9% 10.3%,6.2% 9.9%,6.6% 9.5%,6.9% 9.1%,7.2% 8.7%,7.6% 8.3%,8% 8%,8.3% 7.6%,8.7% 7.2%,9.1% 6.9%,9.5% 6.6%,9.9% 6.2%,10.3% 5.9%,10.8% 5.6%,11.2% 5.3%,11.7% 5%,12.1% 4.7%,12.6% 4.5%,13.1% 4.2%,13.6% 4%,14.1% 3.7%,14.6% 3.5%,15.2% 3.2%,15.7% 3%,16.3% 2.8%,16.9% 2.6%,17.5% 2.4%,18.1% 2.2%,18.7% 2%,19.4% 1.9%,20.1% 1.7%,20.8% 1.5%,21.5% 1.4%,22.2% 1.2%,23% 1.1%,23.7% 1%,24.6% .9%,25.4% .7%,26.3% .6%,27.2% .5%,28.2% .5%,29.2% .4%,30.2% .3%,31.3% .2%,32.5% .2%,33.8% .1%,35.2% .1%,36.8% .1%,38.6% 0,40.7% 0,43.4% 0,50% 0,56.6% 0,59.3% 0,61.4% 0,63.2% .1%,64.8% .1%,66.2% .1%,67.5% .2%,68.7% .2%,69.8% .3%,70.8% .4%,71.8% .5%,72.8% .5%,73.7% .6%,74.6% .7%,75.4% .9%,76.3% 1%,77% 1.1%,77.8% 1.2%,78.5% 1.4%,79.2% 1.5%,79.9% 1.7%,80.6% 1.9%,81.3% 2%,81.9% 2.2%,82.5% 2.4%,83.1% 2.6%,83.7% 2.8%,84.3% 3%,84.8% 3.2%,85.4% 3.5%,85.9% 3.7%,86.4% 4%,86.9% 4.2%,87.4% 4.5%,87.9% 4.7%,88.3% 5%,88.8% 5.3%,89.2% 5.6%,89.7% 5.9%,90.1% 6.2%,90.5% 6.6%,90.9% 6.9%,91.3% 7.2%,91.7% 7.6%,92% 8%,92.4% 8.3%,92.8% 8.7%,93.1% 9.1%,93.4% 9.5%,93.8% 9.9%,94.1% 10.3%,94.4% 10.8%,94.7% 11.2%,95% 11.7%,95.3% 12.1%,95.5% 12.6%,95.8% 13.1%,96% 13.6%,96.3% 14.1%,96.5% 14.6%,96.8% 15.2%,97% 15.7%,97.2% 16.3%,97.4% 16.9%,97.6% 17.5%,97.8% 18.1%,98% 18.7%,98.1% 19.4%,98.3% 20.1%,98.5% 20.8%,98.6% 21.5%,98.8% 22.2%,98.9% 23%,99% 23.7%,99.1% 24.6%,99.3% 25.4%,99.4% 26.3%,99.5% 27.2%,99.5% 28.2%,99.6% 29.2%,99.7% 30.2%,99.8% 31.3%,99.8% 32.5%,99.9% 33.8%,99.9% 35.2%,99.9% 36.8%,100% 38.6%,100% 40.7%,100% 43.4%)}.icon-collapse[_ngcontent-%COMP%]{cursor:pointer;padding:9px;width:var(--nav-iconMode-width);text-align:center}.link-category[_ngcontent-%COMP%]{margin:.75em 0 .25em}.link-category[_ngcontent-%COMP%]   .icon.icon[_ngcontent-%COMP%]{display:none}.link-category[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{font-size:80%;opacity:.8;height:1em;padding:0}.link-category[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]:hover, .no-bg[_ngcontent-%COMP%]{background:0 0}.hide-link-category.link-category[_ngcontent-%COMP%]{display:none!important}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxPerfectNavComponent, [{
        type: Component,
        args: [{
                selector: 'lib-ngx-perfect-nav',
                template: "\n    <div class=\"perfect-nav-top\" class=\"{{iconPosition}} {{border}}\"\n    [ngClass]=\"{'icon-mode': iconMode, 'hover-reveal': hoverReveal }\">\n    <div class=\"icon-collapse\" (click)=\"iconMode = !iconMode\">&#9776;</div>\n    <div class=\"logo-content\">\n        <ng-content slot=\"logo\"></ng-content>\n    </div>\n</div>\n<div class=\"perfect-nav-container\" class=\"{{iconPosition}} {{border}}\"\n    [ngClass]=\"{'icon-mode': iconMode, 'hover-reveal': hoverReveal }\">\n    <ng-template [ngTemplateOutlet]=\"linksTemplate\" [ngTemplateOutletContext]=\"{links: links}\">\n    </ng-template>\n</div>\n<ng-template #linksTemplate let-links=\"links\">\n    <ng-container *ngFor=\"let l of links\">\n        <div class=\"link\" *ngIf=\"l.visible\"\n            [ngClass]=\"{'show-children': l.showChildren, 'link-category': l.groupCategory, 'hide-link-category': !showCategories, 'link-has-no-icon': !l.icon}\">\n            <ng-template [ngTemplateOutlet]=\"linkTemplate\" [ngTemplateOutletContext]=\"{link: l}\">\n            </ng-template>\n        </div>\n    </ng-container>\n</ng-template>\n<ng-template #linkTemplate let-link=\"link\">\n    <div class=\"link-content\">\n        <div class=\"icon no-bg\" *ngIf=\"!link.icon\"></div>\n\n        <i class=\"fas fa-chart-line\"></i>\n        \n        <div aria-hidden=\"true\" class=\"icon\" *ngIf=\"link.faIcon\" [ngClass]=\"{'squircle': squircle}\"><i class=\"fas {{link.faIcon}}\"></i></div>\n        <div aria-hidden=\"true\" class=\"icon\" *ngIf=\"link.icon\" [ngClass]=\"{'squircle': squircle}\">{{link.icon}}</div>\n        <div aria-hidden=\"true\" class=\"icon\" *ngIf=\"link.iconImg\" [ngClass]=\"{'squircle': squircle}\"><img src=\"{{link.iconImg}}\" /></div>\n\n        <a class=\"label\" *ngIf=\"!link.disabled\" [routerLink]=\"link.link\">{{link.label}}</a>\n        <div class=\"label label--disabled\" *ngIf=\"link.disabled\">{{link.label}}</div>\n        <div class=\"spacer\"></div>\n\n        <button class=\"children-dropdown\" *ngIf=\"link.children && link.children.length\" (click)=\"toggleChildren(link)\">\n            <span></span>\n        </button>\n    </div>\n    <ng-container *ngIf=\"link.children\">\n        <div class=\"child-links\">\n            <ng-template [ngTemplateOutlet]=\"linksTemplate\" [ngTemplateOutletContext]=\"{links: link.children}\">\n            </ng-template>\n        </div>\n    </ng-container>\n</ng-template>\n  ",
                styles: [":host{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;background-color:var(--nav-bg-color);color:var(--nav-color);height:100vh;display:block}:host a{color:inherit;text-decoration:none}.icon-mode .label{display:none}.icon-mode .child-links{padding-left:0}.perfect-nav-top{display:flex;align-items:center;color:inherit;background-color:inherit}.perfect-nav-top.icon-mode .logo-content{display:none}.logo-content{display:flex;align-items:center}.logo-content ::ng-deep>*{height:100%;-o-object-fit:cover;object-fit:cover}.perfect-nav-container{display:block;color:inherit;background-color:inherit;max-width:var(--nav-width);transition:var(--transition-speed) all;will-change:contents}.perfect-nav-container.icon-mode{max-width:var(--nav-iconMode-width);overflow:hidden}.perfect-nav-container.icon-mode .link{max-width:var(--nav-iconMode-width)}.perfect-nav-container.icon-mode .link-has-no-icon{height:0}.perfect-nav-container.icon-mode.icon-right .label{order:2;flex:1}.perfect-nav-container.icon-mode.icon-right .icon{order:1}.perfect-nav-container.icon-mode .link-category{display:none}.perfect-nav-container.icon-mode .child-links{padding-left:0}.perfect-nav-container.icon-mode.hover-reveal{position:absolute}.perfect-nav-container.icon-mode.hover-reveal:hover{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal:hover .link-has-no-icon{height:inherit}.perfect-nav-container.icon-mode.hover-reveal:hover .child-links{padding-left:var(--child-indent)}.perfect-nav-container.icon-mode.hover-reveal:hover .link-category{display:block}.perfect-nav-container.icon-mode.hover-reveal:hover .label,.perfect-nav-container.icon-mode.hover-reveal:hover .link{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal:hover.icon-right .label{order:1}.perfect-nav-container.icon-mode.hover-reveal:hover.icon-right .icon{order:2}.perfect-nav-container.icon-mode.hover-reveal .link-content{transition:var(--transition-speed) all}.perfect-nav-container.icon-mode.hover-reveal .link-content:hover{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal .link-content:hover .label{display:flex}.perfect-nav-container.icon-mode.hover-reveal .link{transition:var(--transition-speed) all}.perfect-nav-container.icon-mode.hover-reveal .link:hover{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal .link:hover .label{display:flex}.perfect-nav-container.icon-left .label{order:2}.perfect-nav-container.icon-left .icon{order:1}.perfect-nav-container.icon-right .label{order:1;flex:1}.perfect-nav-container.icon-right .icon{order:2}.perfect-nav-container.icon-right .children-dropdown{order:0}.link{transition:250ms;cursor:pointer}.link .child-links{box-shadow:0 2px 2px #00000026}.link .child-links .link{max-height:0;overflow:hidden}.link.show-children>.link-content>.children-dropdown span{transform:rotate(-180deg)}.link.show-children>.child-links>.link{max-height:1000px;overflow:visible}.link .link-content{padding:0 var(--padding-width);display:flex;align-items:center;height:var(--link-height)}.link .link-content:hover{background-color:var(--hover-bg)}.link .link-content:hover:has(div.label--disabled){background-color:inherit}.link .link-content>*{display:flex;align-items:center}.label{padding:8px var(--padding-width);white-space:nowrap}.label span{padding:8px var(--padding-width)}.label--disabled{opacity:.4;cursor:default}.icon{justify-content:center;width:24px;height:24px;flex:none;background:var(--icon-bg);border-radius:var(--icon-br)}.icon img{height:var(--icon-img-size)}.children-dropdown{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto;background-color:inherit;border:inherit;order:5;justify-self:flex-end;padding:.5em;display:flex;justify-content:center;align-items:center;cursor:pointer}.children-dropdown:hover{background:var(--dropdown-bg-hover)}.children-dropdown>span{transition:.1s;height:12px;width:12px}.border-left .link-content{border-left:var(--border-width) solid;border-color:var(--border-color)}.spacer{margin:auto;order:4}.caret-bg,.children-dropdown>span{background-size:cover;background-image:url(data:image/png;base64,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);filter:brightness(var(--nav-caret-brightness))}.squircle{-webkit-clip-path:polygon(100% 50%,100% 56.6%,100% 59.3%,100% 61.4%,99.9% 63.2%,99.9% 64.8%,99.9% 66.2%,99.8% 67.5%,99.8% 68.7%,99.7% 69.8%,99.6% 70.8%,99.5% 71.8%,99.5% 72.8%,99.4% 73.7%,99.3% 74.6%,99.1% 75.4%,99% 76.3%,98.9% 77%,98.8% 77.8%,98.6% 78.5%,98.5% 79.2%,98.3% 79.9%,98.1% 80.6%,98% 81.3%,97.8% 81.9%,97.6% 82.5%,97.4% 83.1%,97.2% 83.7%,97% 84.3%,96.8% 84.8%,96.5% 85.4%,96.3% 85.9%,96% 86.4%,95.8% 86.9%,95.5% 87.4%,95.3% 87.9%,95% 88.3%,94.7% 88.8%,94.4% 89.2%,94.1% 89.7%,93.8% 90.1%,93.4% 90.5%,93.1% 90.9%,92.8% 91.3%,92.4% 91.7%,92% 92%,91.7% 92.4%,91.3% 92.8%,90.9% 93.1%,90.5% 93.4%,90.1% 93.8%,89.7% 94.1%,89.2% 94.4%,88.8% 94.7%,88.3% 95%,87.9% 95.3%,87.4% 95.5%,86.9% 95.8%,86.4% 96%,85.9% 96.3%,85.4% 96.5%,84.8% 96.8%,84.3% 97%,83.7% 97.2%,83.1% 97.4%,82.5% 97.6%,81.9% 97.8%,81.3% 98%,80.6% 98.1%,79.9% 98.3%,79.2% 98.5%,78.5% 98.6%,77.8% 98.8%,77% 98.9%,76.3% 99%,75.4% 99.1%,74.6% 99.3%,73.7% 99.4%,72.8% 99.5%,71.8% 99.5%,70.8% 99.6%,69.8% 99.7%,68.7% 99.8%,67.5% 99.8%,66.2% 99.9%,64.8% 99.9%,63.2% 99.9%,61.4% 100%,59.3% 100%,56.6% 100%,50% 100%,43.4% 100%,40.7% 100%,38.6% 100%,36.8% 99.9%,35.2% 99.9%,33.8% 99.9%,32.5% 99.8%,31.3% 99.8%,30.2% 99.7%,29.2% 99.6%,28.2% 99.5%,27.2% 99.5%,26.3% 99.4%,25.4% 99.3%,24.6% 99.1%,23.7% 99%,23% 98.9%,22.2% 98.8%,21.5% 98.6%,20.8% 98.5%,20.1% 98.3%,19.4% 98.1%,18.7% 98%,18.1% 97.8%,17.5% 97.6%,16.9% 97.4%,16.3% 97.2%,15.7% 97%,15.2% 96.8%,14.6% 96.5%,14.1% 96.3%,13.6% 96%,13.1% 95.8%,12.6% 95.5%,12.1% 95.3%,11.7% 95%,11.2% 94.7%,10.8% 94.4%,10.3% 94.1%,9.9% 93.8%,9.5% 93.4%,9.1% 93.1%,8.7% 92.8%,8.3% 92.4%,8% 92%,7.6% 91.7%,7.2% 91.3%,6.9% 90.9%,6.6% 90.5%,6.2% 90.1%,5.9% 89.7%,5.6% 89.2%,5.3% 88.8%,5% 88.3%,4.7% 87.9%,4.5% 87.4%,4.2% 86.9%,4% 86.4%,3.7% 85.9%,3.5% 85.4%,3.2% 84.8%,3% 84.3%,2.8% 83.7%,2.6% 83.1%,2.4% 82.5%,2.2% 81.9%,2% 81.3%,1.9% 80.6%,1.7% 79.9%,1.5% 79.2%,1.4% 78.5%,1.2% 77.8%,1.1% 77%,1% 76.3%,.9% 75.4%,.7% 74.6%,.6% 73.7%,.5% 72.8%,.5% 71.8%,.4% 70.8%,.3% 69.8%,.2% 68.7%,.2% 67.5%,.1% 66.2%,.1% 64.8%,.1% 63.2%,0 61.4%,0 59.3%,0 56.6%,0 50%,0 43.4%,0 40.7%,0 38.6%,.1% 36.8%,.1% 35.2%,.1% 33.8%,.2% 32.5%,.2% 31.3%,.3% 30.2%,.4% 29.2%,.5% 28.2%,.5% 27.2%,.6% 26.3%,.7% 25.4%,.9% 24.6%,1% 23.7%,1.1% 23%,1.2% 22.2%,1.4% 21.5%,1.5% 20.8%,1.7% 20.1%,1.9% 19.4%,2% 18.7%,2.2% 18.1%,2.4% 17.5%,2.6% 16.9%,2.8% 16.3%,3% 15.7%,3.2% 15.2%,3.5% 14.6%,3.7% 14.1%,4% 13.6%,4.2% 13.1%,4.5% 12.6%,4.7% 12.1%,5% 11.7%,5.3% 11.2%,5.6% 10.8%,5.9% 10.3%,6.2% 9.9%,6.6% 9.5%,6.9% 9.1%,7.2% 8.7%,7.6% 8.3%,8% 8%,8.3% 7.6%,8.7% 7.2%,9.1% 6.9%,9.5% 6.6%,9.9% 6.2%,10.3% 5.9%,10.8% 5.6%,11.2% 5.3%,11.7% 5%,12.1% 4.7%,12.6% 4.5%,13.1% 4.2%,13.6% 4%,14.1% 3.7%,14.6% 3.5%,15.2% 3.2%,15.7% 3%,16.3% 2.8%,16.9% 2.6%,17.5% 2.4%,18.1% 2.2%,18.7% 2%,19.4% 1.9%,20.1% 1.7%,20.8% 1.5%,21.5% 1.4%,22.2% 1.2%,23% 1.1%,23.7% 1%,24.6% .9%,25.4% .7%,26.3% .6%,27.2% .5%,28.2% .5%,29.2% .4%,30.2% .3%,31.3% .2%,32.5% .2%,33.8% .1%,35.2% .1%,36.8% .1%,38.6% 0,40.7% 0,43.4% 0,50% 0,56.6% 0,59.3% 0,61.4% 0,63.2% .1%,64.8% .1%,66.2% .1%,67.5% .2%,68.7% .2%,69.8% .3%,70.8% .4%,71.8% .5%,72.8% .5%,73.7% .6%,74.6% .7%,75.4% .9%,76.3% 1%,77% 1.1%,77.8% 1.2%,78.5% 1.4%,79.2% 1.5%,79.9% 1.7%,80.6% 1.9%,81.3% 2%,81.9% 2.2%,82.5% 2.4%,83.1% 2.6%,83.7% 2.8%,84.3% 3%,84.8% 3.2%,85.4% 3.5%,85.9% 3.7%,86.4% 4%,86.9% 4.2%,87.4% 4.5%,87.9% 4.7%,88.3% 5%,88.8% 5.3%,89.2% 5.6%,89.7% 5.9%,90.1% 6.2%,90.5% 6.6%,90.9% 6.9%,91.3% 7.2%,91.7% 7.6%,92% 8%,92.4% 8.3%,92.8% 8.7%,93.1% 9.1%,93.4% 9.5%,93.8% 9.9%,94.1% 10.3%,94.4% 10.8%,94.7% 11.2%,95% 11.7%,95.3% 12.1%,95.5% 12.6%,95.8% 13.1%,96% 13.6%,96.3% 14.1%,96.5% 14.6%,96.8% 15.2%,97% 15.7%,97.2% 16.3%,97.4% 16.9%,97.6% 17.5%,97.8% 18.1%,98% 18.7%,98.1% 19.4%,98.3% 20.1%,98.5% 20.8%,98.6% 21.5%,98.8% 22.2%,98.9% 23%,99% 23.7%,99.1% 24.6%,99.3% 25.4%,99.4% 26.3%,99.5% 27.2%,99.5% 28.2%,99.6% 29.2%,99.7% 30.2%,99.8% 31.3%,99.8% 32.5%,99.9% 33.8%,99.9% 35.2%,99.9% 36.8%,100% 38.6%,100% 40.7%,100% 43.4%);clip-path:polygon(100% 50%,100% 56.6%,100% 59.3%,100% 61.4%,99.9% 63.2%,99.9% 64.8%,99.9% 66.2%,99.8% 67.5%,99.8% 68.7%,99.7% 69.8%,99.6% 70.8%,99.5% 71.8%,99.5% 72.8%,99.4% 73.7%,99.3% 74.6%,99.1% 75.4%,99% 76.3%,98.9% 77%,98.8% 77.8%,98.6% 78.5%,98.5% 79.2%,98.3% 79.9%,98.1% 80.6%,98% 81.3%,97.8% 81.9%,97.6% 82.5%,97.4% 83.1%,97.2% 83.7%,97% 84.3%,96.8% 84.8%,96.5% 85.4%,96.3% 85.9%,96% 86.4%,95.8% 86.9%,95.5% 87.4%,95.3% 87.9%,95% 88.3%,94.7% 88.8%,94.4% 89.2%,94.1% 89.7%,93.8% 90.1%,93.4% 90.5%,93.1% 90.9%,92.8% 91.3%,92.4% 91.7%,92% 92%,91.7% 92.4%,91.3% 92.8%,90.9% 93.1%,90.5% 93.4%,90.1% 93.8%,89.7% 94.1%,89.2% 94.4%,88.8% 94.7%,88.3% 95%,87.9% 95.3%,87.4% 95.5%,86.9% 95.8%,86.4% 96%,85.9% 96.3%,85.4% 96.5%,84.8% 96.8%,84.3% 97%,83.7% 97.2%,83.1% 97.4%,82.5% 97.6%,81.9% 97.8%,81.3% 98%,80.6% 98.1%,79.9% 98.3%,79.2% 98.5%,78.5% 98.6%,77.8% 98.8%,77% 98.9%,76.3% 99%,75.4% 99.1%,74.6% 99.3%,73.7% 99.4%,72.8% 99.5%,71.8% 99.5%,70.8% 99.6%,69.8% 99.7%,68.7% 99.8%,67.5% 99.8%,66.2% 99.9%,64.8% 99.9%,63.2% 99.9%,61.4% 100%,59.3% 100%,56.6% 100%,50% 100%,43.4% 100%,40.7% 100%,38.6% 100%,36.8% 99.9%,35.2% 99.9%,33.8% 99.9%,32.5% 99.8%,31.3% 99.8%,30.2% 99.7%,29.2% 99.6%,28.2% 99.5%,27.2% 99.5%,26.3% 99.4%,25.4% 99.3%,24.6% 99.1%,23.7% 99%,23% 98.9%,22.2% 98.8%,21.5% 98.6%,20.8% 98.5%,20.1% 98.3%,19.4% 98.1%,18.7% 98%,18.1% 97.8%,17.5% 97.6%,16.9% 97.4%,16.3% 97.2%,15.7% 97%,15.2% 96.8%,14.6% 96.5%,14.1% 96.3%,13.6% 96%,13.1% 95.8%,12.6% 95.5%,12.1% 95.3%,11.7% 95%,11.2% 94.7%,10.8% 94.4%,10.3% 94.1%,9.9% 93.8%,9.5% 93.4%,9.1% 93.1%,8.7% 92.8%,8.3% 92.4%,8% 92%,7.6% 91.7%,7.2% 91.3%,6.9% 90.9%,6.6% 90.5%,6.2% 90.1%,5.9% 89.7%,5.6% 89.2%,5.3% 88.8%,5% 88.3%,4.7% 87.9%,4.5% 87.4%,4.2% 86.9%,4% 86.4%,3.7% 85.9%,3.5% 85.4%,3.2% 84.8%,3% 84.3%,2.8% 83.7%,2.6% 83.1%,2.4% 82.5%,2.2% 81.9%,2% 81.3%,1.9% 80.6%,1.7% 79.9%,1.5% 79.2%,1.4% 78.5%,1.2% 77.8%,1.1% 77%,1% 76.3%,.9% 75.4%,.7% 74.6%,.6% 73.7%,.5% 72.8%,.5% 71.8%,.4% 70.8%,.3% 69.8%,.2% 68.7%,.2% 67.5%,.1% 66.2%,.1% 64.8%,.1% 63.2%,0 61.4%,0 59.3%,0 56.6%,0 50%,0 43.4%,0 40.7%,0 38.6%,.1% 36.8%,.1% 35.2%,.1% 33.8%,.2% 32.5%,.2% 31.3%,.3% 30.2%,.4% 29.2%,.5% 28.2%,.5% 27.2%,.6% 26.3%,.7% 25.4%,.9% 24.6%,1% 23.7%,1.1% 23%,1.2% 22.2%,1.4% 21.5%,1.5% 20.8%,1.7% 20.1%,1.9% 19.4%,2% 18.7%,2.2% 18.1%,2.4% 17.5%,2.6% 16.9%,2.8% 16.3%,3% 15.7%,3.2% 15.2%,3.5% 14.6%,3.7% 14.1%,4% 13.6%,4.2% 13.1%,4.5% 12.6%,4.7% 12.1%,5% 11.7%,5.3% 11.2%,5.6% 10.8%,5.9% 10.3%,6.2% 9.9%,6.6% 9.5%,6.9% 9.1%,7.2% 8.7%,7.6% 8.3%,8% 8%,8.3% 7.6%,8.7% 7.2%,9.1% 6.9%,9.5% 6.6%,9.9% 6.2%,10.3% 5.9%,10.8% 5.6%,11.2% 5.3%,11.7% 5%,12.1% 4.7%,12.6% 4.5%,13.1% 4.2%,13.6% 4%,14.1% 3.7%,14.6% 3.5%,15.2% 3.2%,15.7% 3%,16.3% 2.8%,16.9% 2.6%,17.5% 2.4%,18.1% 2.2%,18.7% 2%,19.4% 1.9%,20.1% 1.7%,20.8% 1.5%,21.5% 1.4%,22.2% 1.2%,23% 1.1%,23.7% 1%,24.6% .9%,25.4% .7%,26.3% .6%,27.2% .5%,28.2% .5%,29.2% .4%,30.2% .3%,31.3% .2%,32.5% .2%,33.8% .1%,35.2% .1%,36.8% .1%,38.6% 0,40.7% 0,43.4% 0,50% 0,56.6% 0,59.3% 0,61.4% 0,63.2% .1%,64.8% .1%,66.2% .1%,67.5% .2%,68.7% .2%,69.8% .3%,70.8% .4%,71.8% .5%,72.8% .5%,73.7% .6%,74.6% .7%,75.4% .9%,76.3% 1%,77% 1.1%,77.8% 1.2%,78.5% 1.4%,79.2% 1.5%,79.9% 1.7%,80.6% 1.9%,81.3% 2%,81.9% 2.2%,82.5% 2.4%,83.1% 2.6%,83.7% 2.8%,84.3% 3%,84.8% 3.2%,85.4% 3.5%,85.9% 3.7%,86.4% 4%,86.9% 4.2%,87.4% 4.5%,87.9% 4.7%,88.3% 5%,88.8% 5.3%,89.2% 5.6%,89.7% 5.9%,90.1% 6.2%,90.5% 6.6%,90.9% 6.9%,91.3% 7.2%,91.7% 7.6%,92% 8%,92.4% 8.3%,92.8% 8.7%,93.1% 9.1%,93.4% 9.5%,93.8% 9.9%,94.1% 10.3%,94.4% 10.8%,94.7% 11.2%,95% 11.7%,95.3% 12.1%,95.5% 12.6%,95.8% 13.1%,96% 13.6%,96.3% 14.1%,96.5% 14.6%,96.8% 15.2%,97% 15.7%,97.2% 16.3%,97.4% 16.9%,97.6% 17.5%,97.8% 18.1%,98% 18.7%,98.1% 19.4%,98.3% 20.1%,98.5% 20.8%,98.6% 21.5%,98.8% 22.2%,98.9% 23%,99% 23.7%,99.1% 24.6%,99.3% 25.4%,99.4% 26.3%,99.5% 27.2%,99.5% 28.2%,99.6% 29.2%,99.7% 30.2%,99.8% 31.3%,99.8% 32.5%,99.9% 33.8%,99.9% 35.2%,99.9% 36.8%,100% 38.6%,100% 40.7%,100% 43.4%)}.icon-collapse{cursor:pointer;padding:9px;width:var(--nav-iconMode-width);text-align:center}.link-category{margin:.75em 0 .25em}.link-category .icon.icon{display:none}.link-category .link-content{font-size:80%;opacity:.8;height:1em;padding:0}.link-category .link-content:hover,.no-bg{background:0 0}.hide-link-category.link-category{display:none!important}"]
            }]
    }], function () { return []; }, { hoverReveal: [{
            type: Input
        }], squircle: [{
            type: Input
        }], showCategories: [{
            type: Input
        }], time: [{
            type: Input
        }], likeNotify: [{
            type: Output
        }], shareNotify: [{
            type: Output
        }], commentNotify: [{
            type: Output
        }], links: [{
            type: Input
        }], iconMode: [{
            type: Input
        }], hideIcons: [{
            type: Input
        }], iconPosition: [{
            type: Input
        }], border: [{
            type: Input
        }], title: [{
            type: Input
        }], name: [{
            type: Input
        }], caption: [{
            type: Input
        }], avtar: [{
            type: Input
        }], image: [{
            type: Input
        }] }); })();
    return NgxPerfectNavComponent;
}());
export { NgxPerfectNavComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBlcmZlY3QtbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmd4LXBlcmZlY3QtbmF2L2xpYi9uZ3gtcGVyZmVjdC1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE2QixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEbEc7QUFFbUIsSUFBakI7QUFFZSxRQUtOLGdCQUFXLEdBQVksS0FBSyxDQUFDO0FBQ3hDLFFBR1csYUFBUSxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUNXLG1CQUFjLEdBQVksSUFBSSxDQUFDO0FBQzFDLFFBSVcsU0FBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDN0IsUUFJWSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztBQUNyRCxRQUFZLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztBQUN0RCxRQUFZLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztBQUN4RCxJQTFCa0IsQ0FBQztBQUNuQixJQTBCRSwwQ0FBUyxHQUFUO0FBQ0YsUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDRixJQUFDLDJDQUFVLEdBQVY7QUFBYyxRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLElBQUUsQ0FBQztBQUNGLElBQUMsNkNBQVksR0FBWjtBQUFjLFFBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsSUFBRSxDQUFDO0FBRUgsSUFBRSwrQ0FBYyxHQUFkLFVBQWUsSUFBSTtBQUNyQixRQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDckIsUUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDM0IsWUFBTSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUNoQyxZQUFNLG9CQUFvQjtBQUMxQixTQUFLO0FBQUMsYUFBSztBQUNYLFlBQ00sSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUE7QUFDN0MsWUFBTSx1Q0FBdUM7QUFDN0MsWUFBTSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUMvQixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFoRFc7QUFDVixRQURFLEtBQUssRUFBRTtBQUFDLHlEQUFXO0FBQ3JCLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQyw0REFBa0I7QUFDNUIsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLDZEQUFtQjtBQUU5QixJQUFXO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsZ0VBQXFCO0FBQy9CLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQywrREFBNkI7QUFFeEMsSUFBVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLDBEQUFlO0FBRTFCLElBQVc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQyw0REFBMEI7QUFFckMsSUFBVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLGtFQUErQjtBQUUxQyxJQUNXO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMseURBQWM7QUFDeEIsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLHdEQUFhO0FBQ3ZCLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQyx3REFBa0I7QUFDNUIsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLDJEQUFnQjtBQUMxQixJQUFVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMseURBQWM7QUFDeEIsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLHlEQUFjO0FBRXpCLElBQVk7QUFBYSxRQUF0QixNQUFNLEVBQUU7QUFBQyw4REFBeUM7QUFDcEQsSUFBVztBQUFhLFFBQXRCLE1BQU0sRUFBRTtBQUFDLCtEQUEwQztBQUNyRCxJQUFXO0FBQWEsUUFBdEIsTUFBTSxFQUFFO0FBQUMsaUVBQTRDO0lBM0IzQyxzQkFBc0Isd0JBcERsQyxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUscUJBQXFCLGNBQy9CO0tBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O2tIQStDVDs7Ozs7Ozs7Ozs0eGVBRUYsQ0FBQyxRQUNXLHNCQUFzQixDQXFEbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsNkJBQUM7QUFDQSxDQURBLEFBckRELElBcURDO0FBQ0QsU0F0RGEsc0JBQXNCO0FBRW5DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5neC1wZXJmZWN0LW5hdicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInBlcmZlY3QtbmF2LXRvcFwiIGNsYXNzPVwie3tpY29uUG9zaXRpb259fSB7e2JvcmRlcn19XCJcbiAgICBbbmdDbGFzc109XCJ7J2ljb24tbW9kZSc6IGljb25Nb2RlLCAnaG92ZXItcmV2ZWFsJzogaG92ZXJSZXZlYWwgfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJpY29uLWNvbGxhcHNlXCIgKGNsaWNrKT1cImljb25Nb2RlID0gIWljb25Nb2RlXCI+JiM5Nzc2OzwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJsb2dvLWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2xvdD1cImxvZ29cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJwZXJmZWN0LW5hdi1jb250YWluZXJcIiBjbGFzcz1cInt7aWNvblBvc2l0aW9ufX0ge3tib3JkZXJ9fVwiXG4gICAgW25nQ2xhc3NdPVwieydpY29uLW1vZGUnOiBpY29uTW9kZSwgJ2hvdmVyLXJldmVhbCc6IGhvdmVyUmV2ZWFsIH1cIj5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibGlua3NUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7bGlua3M6IGxpbmtzfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjbGlua3NUZW1wbGF0ZSBsZXQtbGlua3M9XCJsaW5rc1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGwgb2YgbGlua3NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpbmtcIiAqbmdJZj1cImwudmlzaWJsZVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J3Nob3ctY2hpbGRyZW4nOiBsLnNob3dDaGlsZHJlbiwgJ2xpbmstY2F0ZWdvcnknOiBsLmdyb3VwQ2F0ZWdvcnksICdoaWRlLWxpbmstY2F0ZWdvcnknOiAhc2hvd0NhdGVnb3JpZXMsICdsaW5rLWhhcy1uby1pY29uJzogIWwuaWNvbn1cIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJsaW5rVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2xpbms6IGx9XCI+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI2xpbmtUZW1wbGF0ZSBsZXQtbGluaz1cImxpbmtcIj5cbiAgICA8ZGl2IGNsYXNzPVwibGluay1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIG5vLWJnXCIgKm5nSWY9XCIhbGluay5pY29uXCI+PC9kaXY+XG5cbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hhcnQtbGluZVwiPjwvaT5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uXCIgKm5nSWY9XCJsaW5rLmZhSWNvblwiIFtuZ0NsYXNzXT1cInsnc3F1aXJjbGUnOiBzcXVpcmNsZX1cIj48aSBjbGFzcz1cImZhcyB7e2xpbmsuZmFJY29ufX1cIj48L2k+PC9kaXY+XG4gICAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uXCIgKm5nSWY9XCJsaW5rLmljb25cIiBbbmdDbGFzc109XCJ7J3NxdWlyY2xlJzogc3F1aXJjbGV9XCI+e3tsaW5rLmljb259fTwvZGl2PlxuICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvblwiICpuZ0lmPVwibGluay5pY29uSW1nXCIgW25nQ2xhc3NdPVwieydzcXVpcmNsZSc6IHNxdWlyY2xlfVwiPjxpbWcgc3JjPVwie3tsaW5rLmljb25JbWd9fVwiIC8+PC9kaXY+XG5cbiAgICAgICAgPGEgY2xhc3M9XCJsYWJlbFwiICpuZ0lmPVwiIWxpbmsuZGlzYWJsZWRcIiBbcm91dGVyTGlua109XCJsaW5rLmxpbmtcIj57e2xpbmsubGFiZWx9fTwvYT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsIGxhYmVsLS1kaXNhYmxlZFwiICpuZ0lmPVwibGluay5kaXNhYmxlZFwiPnt7bGluay5sYWJlbH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hpbGRyZW4tZHJvcGRvd25cIiAqbmdJZj1cImxpbmsuY2hpbGRyZW4gJiYgbGluay5jaGlsZHJlbi5sZW5ndGhcIiAoY2xpY2spPVwidG9nZ2xlQ2hpbGRyZW4obGluaylcIj5cbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxpbmsuY2hpbGRyZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkLWxpbmtzXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibGlua3NUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7bGlua3M6IGxpbmsuY2hpbGRyZW59XCI+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL25neC1wZXJmZWN0LW5hdi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hQZXJmZWN0TmF2Q29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBJbnB1dCgpIGxpbmtzOiBhbnk7XG4gIEBJbnB1dCgpIGljb25Nb2RlOiBib29sZWFuO1xuICBASW5wdXQoKSBoaWRlSWNvbnM6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgaWNvblBvc2l0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhvdmVyUmV2ZWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgYm9yZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc3F1aXJjbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBzaG93Q2F0ZWdvcmllczogYm9vbGVhbiA9IHRydWU7XG5cblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpbWUgPSBuZXcgRGF0ZSgpO1xuICBASW5wdXQoKSBjYXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGF2dGFyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGxpa2VOb3RpZnkgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBzaGFyZU5vdGlmeSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGNvbW1lbnROb3RpZnkgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgbGlrZUV2ZW50KCkge1xuICAgIHRoaXMubGlrZU5vdGlmeS5lbWl0KHRydWUpO1xuICB9XG4gIHNoYXJlRXZlbnQoKSB7XG4gICAgdGhpcy5zaGFyZU5vdGlmeS5lbWl0KHRydWUpO1xuICB9XG4gIGNvbW1lbnRFdmVudCgpIHtcbiAgICB0aGlzLmNvbW1lbnROb3RpZnkuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIHRvZ2dsZUNoaWxkcmVuKGxpbmspIHtcbiAgICBjb25zb2xlLmxvZyhsaW5rKVxuICAgIGlmIChsaW5rLnNob3dDaGlsZHJlbikge1xuICAgICAgbGluay5zaG93Q2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgIC8vIGxpbmsuaGVpZ2h0ID0gNDQ7XG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc3QgbXVsdGlwbHllciA9IGxpbmsuY2hpbGRyZW4ubGVuZ3RoXG4gICAgICAvLyBsaW5rLmhlaWdodCA9IDQ0ICogKG11bHRpcGx5ZXIgKyAxKTtcbiAgICAgIGxpbmsuc2hvd0NoaWxkcmVuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuXG59XG4iXX0=