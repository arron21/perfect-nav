import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function NgxPerfectNavComponent_ng_template_6_Template(rf, ctx) { }
function NgxPerfectNavComponent_ng_template_7_ng_container_0_div_1_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0, a1, a2, a3) { return { "show-children": a0, "link-category": a1, "hide-link-category": a2, "link-has-no-icon": a3 }; };
const _c1 = function (a0) { return { link: a0 }; };
function NgxPerfectNavComponent_ng_template_7_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, NgxPerfectNavComponent_ng_template_7_ng_container_0_div_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(10);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(3, _c0, l_r7.showChildren, l_r7.groupCategory, !ctx_r8.showCategories, !l_r7.icon));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(8, _c1, l_r7));
} }
function NgxPerfectNavComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NgxPerfectNavComponent_ng_template_7_ng_container_0_div_1_Template, 2, 10, "div", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const l_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", l_r7.visible);
} }
function NgxPerfectNavComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NgxPerfectNavComponent_ng_template_7_ng_container_0_Template, 2, 1, "ng-container", 7);
} if (rf & 2) {
    const links_r5 = ctx.links;
    i0.ɵɵproperty("ngForOf", links_r5);
} }
function NgxPerfectNavComponent_ng_template_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 19);
} }
const _c2 = function (a0) { return { "squircle": a0 }; };
function NgxPerfectNavComponent_ng_template_9_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelement(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r11 = i0.ɵɵnextContext().link;
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, ctx_r13.squircle));
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("fas ", link_r11.faIcon, "");
} }
function NgxPerfectNavComponent_ng_template_9_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r11 = i0.ɵɵnextContext().link;
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c2, ctx_r14.squircle));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(link_r11.icon);
} }
function NgxPerfectNavComponent_ng_template_9_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelement(1, "img", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r11 = i0.ɵɵnextContext().link;
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c2, ctx_r15.squircle));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("src", link_r11.iconImg, i0.ɵɵsanitizeUrl);
} }
function NgxPerfectNavComponent_ng_template_9_a_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r11 = i0.ɵɵnextContext().link;
    i0.ɵɵproperty("routerLink", link_r11.link);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(link_r11.label);
} }
function NgxPerfectNavComponent_ng_template_9_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r11 = i0.ɵɵnextContext().link;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(link_r11.label);
} }
function NgxPerfectNavComponent_ng_template_9_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function NgxPerfectNavComponent_ng_template_9_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const link_r11 = i0.ɵɵnextContext().link; const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.toggleChildren(link_r11); });
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementEnd();
} }
function NgxPerfectNavComponent_ng_template_9_ng_container_10_ng_template_2_Template(rf, ctx) { }
const _c3 = function (a0) { return { links: a0 }; };
function NgxPerfectNavComponent_ng_template_9_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵtemplate(2, NgxPerfectNavComponent_ng_template_9_ng_container_10_ng_template_2_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const link_r11 = i0.ɵɵnextContext().link;
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(8);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, link_r11.children));
} }
function NgxPerfectNavComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, NgxPerfectNavComponent_ng_template_9_div_1_Template, 1, 0, "div", 11);
    i0.ɵɵelement(2, "i", 12);
    i0.ɵɵtemplate(3, NgxPerfectNavComponent_ng_template_9_div_3_Template, 2, 6, "div", 13);
    i0.ɵɵtemplate(4, NgxPerfectNavComponent_ng_template_9_div_4_Template, 2, 4, "div", 13);
    i0.ɵɵtemplate(5, NgxPerfectNavComponent_ng_template_9_div_5_Template, 2, 4, "div", 13);
    i0.ɵɵtemplate(6, NgxPerfectNavComponent_ng_template_9_a_6_Template, 2, 2, "a", 14);
    i0.ɵɵtemplate(7, NgxPerfectNavComponent_ng_template_9_div_7_Template, 2, 1, "div", 15);
    i0.ɵɵelement(8, "div", 16);
    i0.ɵɵtemplate(9, NgxPerfectNavComponent_ng_template_9_button_9_Template, 2, 0, "button", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, NgxPerfectNavComponent_ng_template_9_ng_container_10_Template, 3, 4, "ng-container", 18);
} if (rf & 2) {
    const link_r11 = ctx.link;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !link_r11.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", link_r11.faIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", link_r11.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", link_r11.iconImg);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !link_r11.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", link_r11.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", link_r11.children && link_r11.children.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", link_r11.children);
} }
const _c4 = function (a0, a1) { return { "icon-mode": a0, "hover-reveal": a1 }; };
const _c5 = ["*"];
export class NgxPerfectNavComponent {
    constructor() {
        this.hoverReveal = false;
        this.squircle = false;
        this.showCategories = true;
        this.time = new Date();
        this.likeNotify = new EventEmitter();
        this.shareNotify = new EventEmitter();
        this.commentNotify = new EventEmitter();
    }
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
        console.log(link);
        if (link.showChildren) {
            link.showChildren = false;
            // link.height = 44;
        }
        else {
            const multiplyer = link.children.length;
            // link.height = 44 * (multiplyer + 1);
            link.showChildren = true;
        }
    }
}
NgxPerfectNavComponent.ɵfac = function NgxPerfectNavComponent_Factory(t) { return new (t || NgxPerfectNavComponent)(); };
NgxPerfectNavComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxPerfectNavComponent, selectors: [["lib-ngx-perfect-nav"]], inputs: { links: "links", iconMode: "iconMode", hideIcons: "hideIcons", iconPosition: "iconPosition", hoverReveal: "hoverReveal", border: "border", squircle: "squircle", showCategories: "showCategories", title: "title", name: "name", time: "time", caption: "caption", avtar: "avtar", image: "image" }, outputs: { likeNotify: "likeNotify", shareNotify: "shareNotify", commentNotify: "commentNotify" }, ngContentSelectors: _c5, decls: 11, vars: 20, consts: [[1, "perfect-nav-top", 3, "ngClass"], [1, "icon-collapse", 3, "click"], [1, "logo-content"], [1, "perfect-nav-container", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["linksTemplate", ""], ["linkTemplate", ""], [4, "ngFor", "ngForOf"], ["class", "link", 3, "ngClass", 4, "ngIf"], [1, "link", 3, "ngClass"], [1, "link-content"], ["class", "icon no-bg", 4, "ngIf"], [1, "fas", "fa-chart-line"], ["aria-hidden", "true", "class", "icon", 3, "ngClass", 4, "ngIf"], ["class", "label", 3, "routerLink", 4, "ngIf"], ["class", "label label--disabled", 4, "ngIf"], [1, "spacer"], ["class", "children-dropdown", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "icon", "no-bg"], ["aria-hidden", "true", 1, "icon", 3, "ngClass"], [3, "src"], [1, "label", 3, "routerLink"], [1, "label", "label--disabled"], [1, "children-dropdown", 3, "click"], [1, "child-links"]], template: function NgxPerfectNavComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function NgxPerfectNavComponent_Template_div_click_1_listener() { return ctx.iconMode = !ctx.iconMode; });
        i0.ɵɵtext(2, "\u2630");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵprojection(4, 0, ["slot", "logo"]);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵtemplate(6, NgxPerfectNavComponent_ng_template_6_Template, 0, 0, "ng-template", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, NgxPerfectNavComponent_ng_template_7_Template, 1, 1, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(9, NgxPerfectNavComponent_ng_template_9_Template, 11, 8, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(8);
        i0.ɵɵclassMapInterpolate2("", ctx.iconPosition, " ", ctx.border, "");
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(12, _c4, ctx.iconMode, ctx.hoverReveal));
        i0.ɵɵadvance(5);
        i0.ɵɵclassMapInterpolate2("", ctx.iconPosition, " ", ctx.border, "");
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(15, _c4, ctx.iconMode, ctx.hoverReveal));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction1(18, _c3, ctx.links));
    } }, directives: [i1.NgClass, i1.NgTemplateOutlet, i1.NgForOf, i1.NgIf, i2.RouterLinkWithHref], styles: ["[_nghost-%COMP%]{background-color:var(--nav-bg-color);color:var(--nav-color);display:block;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;height:100vh}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.icon-mode[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:none}.icon-mode[_ngcontent-%COMP%]   .child-links[_ngcontent-%COMP%]{padding-left:0}.perfect-nav-top[_ngcontent-%COMP%]{align-items:center;background-color:inherit;color:inherit;display:flex}.perfect-nav-top.icon-mode[_ngcontent-%COMP%]   .logo-content[_ngcontent-%COMP%]{display:none}.logo-content[_ngcontent-%COMP%]{align-items:center;display:flex}.logo-content[_ngcontent-%COMP%]    >*{-o-object-fit:cover;height:100%;object-fit:cover}.perfect-nav-container[_ngcontent-%COMP%]{background-color:inherit;color:inherit;display:block;max-width:var(--nav-width);transition:var(--transition-speed) all;will-change:contents}.perfect-nav-container.icon-mode[_ngcontent-%COMP%]{overflow:hidden}.perfect-nav-container.icon-mode[_ngcontent-%COMP%], .perfect-nav-container.icon-mode[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{max-width:var(--nav-iconMode-width)}.perfect-nav-container.icon-mode[_ngcontent-%COMP%]   .link-has-no-icon[_ngcontent-%COMP%]{height:0}.perfect-nav-container.icon-mode.icon-right[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{flex:1;order:2}.perfect-nav-container.icon-mode.icon-right[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{order:1}.perfect-nav-container.icon-mode[_ngcontent-%COMP%]   .link-category[_ngcontent-%COMP%]{display:none}.perfect-nav-container.icon-mode[_ngcontent-%COMP%]   .child-links[_ngcontent-%COMP%]{padding-left:0}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]{position:absolute}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .link-has-no-icon[_ngcontent-%COMP%]{height:inherit}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .child-links[_ngcontent-%COMP%]{padding-left:var(--child-indent)}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .link-category[_ngcontent-%COMP%]{display:block}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%], .perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover   .link[_ngcontent-%COMP%]{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover.icon-right   .label[_ngcontent-%COMP%]{order:1}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]:hover.icon-right   .icon[_ngcontent-%COMP%]{order:2}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{transition:var(--transition-speed) all}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]:hover{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%]{display:flex}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{transition:var(--transition-speed) all}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover   .label[_ngcontent-%COMP%]{display:flex}.perfect-nav-container.icon-left[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{order:2}.perfect-nav-container.icon-left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{order:1}.perfect-nav-container.icon-right[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{flex:1;order:1}.perfect-nav-container.icon-right[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{order:2}.perfect-nav-container.icon-right[_ngcontent-%COMP%]   .children-dropdown[_ngcontent-%COMP%]{order:0}.link[_ngcontent-%COMP%]{cursor:pointer;transition:all .25s}.link[_ngcontent-%COMP%]   .child-links[_ngcontent-%COMP%]{box-shadow:0 2px 2px rgba(0,0,0,.15)}.link[_ngcontent-%COMP%]   .child-links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.link.show-children[_ngcontent-%COMP%] > .link-content[_ngcontent-%COMP%] > .children-dropdown[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transform:rotate(-180deg)}.link.show-children[_ngcontent-%COMP%] > .child-links[_ngcontent-%COMP%] > .link[_ngcontent-%COMP%]{max-height:1000px;overflow:visible}.link[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{align-items:center;display:flex;height:var(--link-height);padding:0 var(--padding-width)}.link[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]:hover{background-color:var(--hover-bg)}.link[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]:hover:has(div.label--disabled){background-color:inherit}.link[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{align-items:center;display:flex}.label[_ngcontent-%COMP%]{white-space:nowrap}.label[_ngcontent-%COMP%], .label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:8px var(--padding-width)}.label--disabled[_ngcontent-%COMP%]{cursor:default;opacity:.4}.icon[_ngcontent-%COMP%]{background:var(--icon-bg);border-radius:var(--icon-br);flex:none;height:24px;justify-content:center;width:24px}.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:var(--icon-img-size)}.children-dropdown[_ngcontent-%COMP%]{-moz-appearance:auto;-webkit-appearance:auto;align-items:center;appearance:auto;background-color:inherit;border:inherit;cursor:pointer;display:flex;justify-content:center;justify-self:flex-end;order:5;padding:.5em}.children-dropdown[_ngcontent-%COMP%]:hover{background:var(--dropdown-bg-hover)}.children-dropdown[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{height:12px;transition:all .1s;width:12px}.border-left[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{border-color:var(--border-color);border-left:var(--border-width) solid}.spacer[_ngcontent-%COMP%]{margin:auto;order:4}.caret-bg[_ngcontent-%COMP%], .children-dropdown[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-image:url(\"data:image/png;base64,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\");background-size:cover;filter:brightness(var(--nav-caret-brightness))}.squircle[_ngcontent-%COMP%]{-webkit-clip-path:polygon(100% 50%,100% 56.6%,100% 59.3%,100% 61.4%,99.9% 63.2%,99.9% 64.8%,99.9% 66.2%,99.8% 67.5%,99.8% 68.7%,99.7% 69.8%,99.6% 70.8%,99.5% 71.8%,99.5% 72.8%,99.4% 73.7%,99.3% 74.6%,99.1% 75.4%,99% 76.3%,98.9% 77%,98.8% 77.8%,98.6% 78.5%,98.5% 79.2%,98.3% 79.9%,98.1% 80.6%,98% 81.3%,97.8% 81.9%,97.6% 82.5%,97.4% 83.1%,97.2% 83.7%,97% 84.3%,96.8% 84.8%,96.5% 85.4%,96.3% 85.9%,96% 86.4%,95.8% 86.9%,95.5% 87.4%,95.3% 87.9%,95% 88.3%,94.7% 88.8%,94.4% 89.2%,94.1% 89.7%,93.8% 90.1%,93.4% 90.5%,93.1% 90.9%,92.8% 91.3%,92.4% 91.7%,92% 92%,91.7% 92.4%,91.3% 92.8%,90.9% 93.1%,90.5% 93.4%,90.1% 93.8%,89.7% 94.1%,89.2% 94.4%,88.8% 94.7%,88.3% 95%,87.9% 95.3%,87.4% 95.5%,86.9% 95.8%,86.4% 96%,85.9% 96.3%,85.4% 96.5%,84.8% 96.8%,84.3% 97%,83.7% 97.2%,83.1% 97.4%,82.5% 97.6%,81.9% 97.8%,81.3% 98%,80.6% 98.1%,79.9% 98.3%,79.2% 98.5%,78.5% 98.6%,77.8% 98.8%,77% 98.9%,76.3% 99%,75.4% 99.1%,74.6% 99.3%,73.7% 99.4%,72.8% 99.5%,71.8% 99.5%,70.8% 99.6%,69.8% 99.7%,68.7% 99.8%,67.5% 99.8%,66.2% 99.9%,64.8% 99.9%,63.2% 99.9%,61.4% 100%,59.3% 100%,56.6% 100%,50% 100%,43.4% 100%,40.7% 100%,38.6% 100%,36.8% 99.9%,35.2% 99.9%,33.8% 99.9%,32.5% 99.8%,31.3% 99.8%,30.2% 99.7%,29.2% 99.6%,28.2% 99.5%,27.2% 99.5%,26.3% 99.4%,25.4% 99.3%,24.6% 99.1%,23.7% 99%,23% 98.9%,22.2% 98.8%,21.5% 98.6%,20.8% 98.5%,20.1% 98.3%,19.4% 98.1%,18.7% 98%,18.1% 97.8%,17.5% 97.6%,16.9% 97.4%,16.3% 97.2%,15.7% 97%,15.2% 96.8%,14.6% 96.5%,14.1% 96.3%,13.6% 96%,13.1% 95.8%,12.6% 95.5%,12.1% 95.3%,11.7% 95%,11.2% 94.7%,10.8% 94.4%,10.3% 94.1%,9.9% 93.8%,9.5% 93.4%,9.1% 93.1%,8.7% 92.8%,8.3% 92.4%,8% 92%,7.6% 91.7%,7.2% 91.3%,6.9% 90.9%,6.6% 90.5%,6.2% 90.1%,5.9% 89.7%,5.6% 89.2%,5.3% 88.8%,5% 88.3%,4.7% 87.9%,4.5% 87.4%,4.2% 86.9%,4% 86.4%,3.7% 85.9%,3.5% 85.4%,3.2% 84.8%,3% 84.3%,2.8% 83.7%,2.6% 83.1%,2.4% 82.5%,2.2% 81.9%,2% 81.3%,1.9% 80.6%,1.7% 79.9%,1.5% 79.2%,1.4% 78.5%,1.2% 77.8%,1.1% 77%,1% 76.3%,.9% 75.4%,.7% 74.6%,.6% 73.7%,.5% 72.8%,.5% 71.8%,.4% 70.8%,.3% 69.8%,.2% 68.7%,.2% 67.5%,.1% 66.2%,.1% 64.8%,.1% 63.2%,0 61.4%,0 59.3%,0 56.6%,0 50%,0 43.4%,0 40.7%,0 38.6%,.1% 36.8%,.1% 35.2%,.1% 33.8%,.2% 32.5%,.2% 31.3%,.3% 30.2%,.4% 29.2%,.5% 28.2%,.5% 27.2%,.6% 26.3%,.7% 25.4%,.9% 24.6%,1% 23.7%,1.1% 23%,1.2% 22.2%,1.4% 21.5%,1.5% 20.8%,1.7% 20.1%,1.9% 19.4%,2% 18.7%,2.2% 18.1%,2.4% 17.5%,2.6% 16.9%,2.8% 16.3%,3% 15.7%,3.2% 15.2%,3.5% 14.6%,3.7% 14.1%,4% 13.6%,4.2% 13.1%,4.5% 12.6%,4.7% 12.1%,5% 11.7%,5.3% 11.2%,5.6% 10.8%,5.9% 10.3%,6.2% 9.9%,6.6% 9.5%,6.9% 9.1%,7.2% 8.7%,7.6% 8.3%,8% 8%,8.3% 7.6%,8.7% 7.2%,9.1% 6.9%,9.5% 6.6%,9.9% 6.2%,10.3% 5.9%,10.8% 5.6%,11.2% 5.3%,11.7% 5%,12.1% 4.7%,12.6% 4.5%,13.1% 4.2%,13.6% 4%,14.1% 3.7%,14.6% 3.5%,15.2% 3.2%,15.7% 3%,16.3% 2.8%,16.9% 2.6%,17.5% 2.4%,18.1% 2.2%,18.7% 2%,19.4% 1.9%,20.1% 1.7%,20.8% 1.5%,21.5% 1.4%,22.2% 1.2%,23% 1.1%,23.7% 1%,24.6% .9%,25.4% .7%,26.3% .6%,27.2% .5%,28.2% .5%,29.2% .4%,30.2% .3%,31.3% .2%,32.5% .2%,33.8% .1%,35.2% .1%,36.8% .1%,38.6% 0,40.7% 0,43.4% 0,50% 0,56.6% 0,59.3% 0,61.4% 0,63.2% .1%,64.8% .1%,66.2% .1%,67.5% .2%,68.7% .2%,69.8% .3%,70.8% .4%,71.8% .5%,72.8% .5%,73.7% .6%,74.6% .7%,75.4% .9%,76.3% 1%,77% 1.1%,77.8% 1.2%,78.5% 1.4%,79.2% 1.5%,79.9% 1.7%,80.6% 1.9%,81.3% 2%,81.9% 2.2%,82.5% 2.4%,83.1% 2.6%,83.7% 2.8%,84.3% 3%,84.8% 3.2%,85.4% 3.5%,85.9% 3.7%,86.4% 4%,86.9% 4.2%,87.4% 4.5%,87.9% 4.7%,88.3% 5%,88.8% 5.3%,89.2% 5.6%,89.7% 5.9%,90.1% 6.2%,90.5% 6.6%,90.9% 6.9%,91.3% 7.2%,91.7% 7.6%,92% 8%,92.4% 8.3%,92.8% 8.7%,93.1% 9.1%,93.4% 9.5%,93.8% 9.9%,94.1% 10.3%,94.4% 10.8%,94.7% 11.2%,95% 11.7%,95.3% 12.1%,95.5% 12.6%,95.8% 13.1%,96% 13.6%,96.3% 14.1%,96.5% 14.6%,96.8% 15.2%,97% 15.7%,97.2% 16.3%,97.4% 16.9%,97.6% 17.5%,97.8% 18.1%,98% 18.7%,98.1% 19.4%,98.3% 20.1%,98.5% 20.8%,98.6% 21.5%,98.8% 22.2%,98.9% 23%,99% 23.7%,99.1% 24.6%,99.3% 25.4%,99.4% 26.3%,99.5% 27.2%,99.5% 28.2%,99.6% 29.2%,99.7% 30.2%,99.8% 31.3%,99.8% 32.5%,99.9% 33.8%,99.9% 35.2%,99.9% 36.8%,100% 38.6%,100% 40.7%,100% 43.4%);clip-path:polygon(100% 50%,100% 56.6%,100% 59.3%,100% 61.4%,99.9% 63.2%,99.9% 64.8%,99.9% 66.2%,99.8% 67.5%,99.8% 68.7%,99.7% 69.8%,99.6% 70.8%,99.5% 71.8%,99.5% 72.8%,99.4% 73.7%,99.3% 74.6%,99.1% 75.4%,99% 76.3%,98.9% 77%,98.8% 77.8%,98.6% 78.5%,98.5% 79.2%,98.3% 79.9%,98.1% 80.6%,98% 81.3%,97.8% 81.9%,97.6% 82.5%,97.4% 83.1%,97.2% 83.7%,97% 84.3%,96.8% 84.8%,96.5% 85.4%,96.3% 85.9%,96% 86.4%,95.8% 86.9%,95.5% 87.4%,95.3% 87.9%,95% 88.3%,94.7% 88.8%,94.4% 89.2%,94.1% 89.7%,93.8% 90.1%,93.4% 90.5%,93.1% 90.9%,92.8% 91.3%,92.4% 91.7%,92% 92%,91.7% 92.4%,91.3% 92.8%,90.9% 93.1%,90.5% 93.4%,90.1% 93.8%,89.7% 94.1%,89.2% 94.4%,88.8% 94.7%,88.3% 95%,87.9% 95.3%,87.4% 95.5%,86.9% 95.8%,86.4% 96%,85.9% 96.3%,85.4% 96.5%,84.8% 96.8%,84.3% 97%,83.7% 97.2%,83.1% 97.4%,82.5% 97.6%,81.9% 97.8%,81.3% 98%,80.6% 98.1%,79.9% 98.3%,79.2% 98.5%,78.5% 98.6%,77.8% 98.8%,77% 98.9%,76.3% 99%,75.4% 99.1%,74.6% 99.3%,73.7% 99.4%,72.8% 99.5%,71.8% 99.5%,70.8% 99.6%,69.8% 99.7%,68.7% 99.8%,67.5% 99.8%,66.2% 99.9%,64.8% 99.9%,63.2% 99.9%,61.4% 100%,59.3% 100%,56.6% 100%,50% 100%,43.4% 100%,40.7% 100%,38.6% 100%,36.8% 99.9%,35.2% 99.9%,33.8% 99.9%,32.5% 99.8%,31.3% 99.8%,30.2% 99.7%,29.2% 99.6%,28.2% 99.5%,27.2% 99.5%,26.3% 99.4%,25.4% 99.3%,24.6% 99.1%,23.7% 99%,23% 98.9%,22.2% 98.8%,21.5% 98.6%,20.8% 98.5%,20.1% 98.3%,19.4% 98.1%,18.7% 98%,18.1% 97.8%,17.5% 97.6%,16.9% 97.4%,16.3% 97.2%,15.7% 97%,15.2% 96.8%,14.6% 96.5%,14.1% 96.3%,13.6% 96%,13.1% 95.8%,12.6% 95.5%,12.1% 95.3%,11.7% 95%,11.2% 94.7%,10.8% 94.4%,10.3% 94.1%,9.9% 93.8%,9.5% 93.4%,9.1% 93.1%,8.7% 92.8%,8.3% 92.4%,8% 92%,7.6% 91.7%,7.2% 91.3%,6.9% 90.9%,6.6% 90.5%,6.2% 90.1%,5.9% 89.7%,5.6% 89.2%,5.3% 88.8%,5% 88.3%,4.7% 87.9%,4.5% 87.4%,4.2% 86.9%,4% 86.4%,3.7% 85.9%,3.5% 85.4%,3.2% 84.8%,3% 84.3%,2.8% 83.7%,2.6% 83.1%,2.4% 82.5%,2.2% 81.9%,2% 81.3%,1.9% 80.6%,1.7% 79.9%,1.5% 79.2%,1.4% 78.5%,1.2% 77.8%,1.1% 77%,1% 76.3%,.9% 75.4%,.7% 74.6%,.6% 73.7%,.5% 72.8%,.5% 71.8%,.4% 70.8%,.3% 69.8%,.2% 68.7%,.2% 67.5%,.1% 66.2%,.1% 64.8%,.1% 63.2%,0 61.4%,0 59.3%,0 56.6%,0 50%,0 43.4%,0 40.7%,0 38.6%,.1% 36.8%,.1% 35.2%,.1% 33.8%,.2% 32.5%,.2% 31.3%,.3% 30.2%,.4% 29.2%,.5% 28.2%,.5% 27.2%,.6% 26.3%,.7% 25.4%,.9% 24.6%,1% 23.7%,1.1% 23%,1.2% 22.2%,1.4% 21.5%,1.5% 20.8%,1.7% 20.1%,1.9% 19.4%,2% 18.7%,2.2% 18.1%,2.4% 17.5%,2.6% 16.9%,2.8% 16.3%,3% 15.7%,3.2% 15.2%,3.5% 14.6%,3.7% 14.1%,4% 13.6%,4.2% 13.1%,4.5% 12.6%,4.7% 12.1%,5% 11.7%,5.3% 11.2%,5.6% 10.8%,5.9% 10.3%,6.2% 9.9%,6.6% 9.5%,6.9% 9.1%,7.2% 8.7%,7.6% 8.3%,8% 8%,8.3% 7.6%,8.7% 7.2%,9.1% 6.9%,9.5% 6.6%,9.9% 6.2%,10.3% 5.9%,10.8% 5.6%,11.2% 5.3%,11.7% 5%,12.1% 4.7%,12.6% 4.5%,13.1% 4.2%,13.6% 4%,14.1% 3.7%,14.6% 3.5%,15.2% 3.2%,15.7% 3%,16.3% 2.8%,16.9% 2.6%,17.5% 2.4%,18.1% 2.2%,18.7% 2%,19.4% 1.9%,20.1% 1.7%,20.8% 1.5%,21.5% 1.4%,22.2% 1.2%,23% 1.1%,23.7% 1%,24.6% .9%,25.4% .7%,26.3% .6%,27.2% .5%,28.2% .5%,29.2% .4%,30.2% .3%,31.3% .2%,32.5% .2%,33.8% .1%,35.2% .1%,36.8% .1%,38.6% 0,40.7% 0,43.4% 0,50% 0,56.6% 0,59.3% 0,61.4% 0,63.2% .1%,64.8% .1%,66.2% .1%,67.5% .2%,68.7% .2%,69.8% .3%,70.8% .4%,71.8% .5%,72.8% .5%,73.7% .6%,74.6% .7%,75.4% .9%,76.3% 1%,77% 1.1%,77.8% 1.2%,78.5% 1.4%,79.2% 1.5%,79.9% 1.7%,80.6% 1.9%,81.3% 2%,81.9% 2.2%,82.5% 2.4%,83.1% 2.6%,83.7% 2.8%,84.3% 3%,84.8% 3.2%,85.4% 3.5%,85.9% 3.7%,86.4% 4%,86.9% 4.2%,87.4% 4.5%,87.9% 4.7%,88.3% 5%,88.8% 5.3%,89.2% 5.6%,89.7% 5.9%,90.1% 6.2%,90.5% 6.6%,90.9% 6.9%,91.3% 7.2%,91.7% 7.6%,92% 8%,92.4% 8.3%,92.8% 8.7%,93.1% 9.1%,93.4% 9.5%,93.8% 9.9%,94.1% 10.3%,94.4% 10.8%,94.7% 11.2%,95% 11.7%,95.3% 12.1%,95.5% 12.6%,95.8% 13.1%,96% 13.6%,96.3% 14.1%,96.5% 14.6%,96.8% 15.2%,97% 15.7%,97.2% 16.3%,97.4% 16.9%,97.6% 17.5%,97.8% 18.1%,98% 18.7%,98.1% 19.4%,98.3% 20.1%,98.5% 20.8%,98.6% 21.5%,98.8% 22.2%,98.9% 23%,99% 23.7%,99.1% 24.6%,99.3% 25.4%,99.4% 26.3%,99.5% 27.2%,99.5% 28.2%,99.6% 29.2%,99.7% 30.2%,99.8% 31.3%,99.8% 32.5%,99.9% 33.8%,99.9% 35.2%,99.9% 36.8%,100% 38.6%,100% 40.7%,100% 43.4%)}.icon-collapse[_ngcontent-%COMP%]{cursor:pointer;padding:9px;text-align:center;width:var(--nav-iconMode-width)}.link-category[_ngcontent-%COMP%]{margin:.75em 0 .25em}.link-category[_ngcontent-%COMP%]   .icon.icon[_ngcontent-%COMP%]{display:none}.link-category[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{font-size:80%;height:1em;opacity:.8;padding:0}.link-category[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]:hover, .no-bg[_ngcontent-%COMP%]{background:none}.hide-link-category.link-category[_ngcontent-%COMP%]{display:none!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxPerfectNavComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return []; }, { links: [{
            type: Input
        }], iconMode: [{
            type: Input
        }], hideIcons: [{
            type: Input
        }], iconPosition: [{
            type: Input
        }], hoverReveal: [{
            type: Input
        }], border: [{
            type: Input
        }], squircle: [{
            type: Input
        }], showCategories: [{
            type: Input
        }], title: [{
            type: Input
        }], name: [{
            type: Input
        }], time: [{
            type: Input
        }], caption: [{
            type: Input
        }], avtar: [{
            type: Input
        }], image: [{
            type: Input
        }], likeNotify: [{
            type: Output
        }], shareNotify: [{
            type: Output
        }], commentNotify: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBlcmZlY3QtbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXJyb24vRG9jdW1lbnRzL0dpdEh1Yi9wZXJmZWN0LW5hdi9wcm9qZWN0cy9uZ3gtcGVyZmVjdC1uYXYvc3JjLyIsInNvdXJjZXMiOlsibGliL25neC1wZXJmZWN0LW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNkIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQW1CMUYsOEJBRUk7SUFBQSwwSEFDQTtJQUNKLGlCQUFNOzs7OztJQUhGLCtIQUFtSjtJQUN0SSxlQUFpQztJQUFqQyxzQ0FBaUMsNkRBQUE7OztJQUh0RCw2QkFDSTtJQUFBLHFHQUVJO0lBR1IsMEJBQWU7OztJQUxPLGVBQWlCO0lBQWpCLG1DQUFpQjs7O0lBRHZDLHVHQUNJOzs7SUFEVSxrQ0FBdUI7OztJQVVqQywwQkFBaUQ7Ozs7SUFJakQsK0JBQTRGO0lBQUEsb0JBQW1DO0lBQUEsaUJBQU07Ozs7SUFBNUUsc0VBQWtDO0lBQUksZUFBMkI7SUFBM0Isc0RBQTJCOzs7SUFDMUgsK0JBQTBGO0lBQUEsWUFBYTtJQUFBLGlCQUFNOzs7O0lBQXRELHNFQUFrQztJQUFDLGVBQWE7SUFBYixtQ0FBYTs7O0lBQ3ZHLCtCQUE2RjtJQUFBLDBCQUE4QjtJQUFBLGlCQUFNOzs7O0lBQXZFLHNFQUFrQztJQUFNLGVBQXNCO0lBQXRCLG1FQUFzQjs7O0lBRXhILDZCQUFpRTtJQUFBLFlBQWM7SUFBQSxpQkFBSTs7O0lBQTNDLDBDQUF3QjtJQUFDLGVBQWM7SUFBZCxvQ0FBYzs7O0lBQy9FLCtCQUF5RDtJQUFBLFlBQWM7SUFBQSxpQkFBTTs7O0lBQXBCLGVBQWM7SUFBZCxvQ0FBYzs7OztJQUd2RSxrQ0FDSTtJQUQ0RSxvUUFBOEI7SUFDMUcsdUJBQWE7SUFDakIsaUJBQVM7Ozs7O0lBRWIsNkJB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YztrQkFBdEIsS0FBSztZQUdHLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUVJLFVBQVU7a0JBQW5CLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZ3gtcGVyZmVjdC1uYXYnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJwZXJmZWN0LW5hdi10b3BcIiBjbGFzcz1cInt7aWNvblBvc2l0aW9ufX0ge3tib3JkZXJ9fVwiXG4gICAgW25nQ2xhc3NdPVwieydpY29uLW1vZGUnOiBpY29uTW9kZSwgJ2hvdmVyLXJldmVhbCc6IGhvdmVyUmV2ZWFsIH1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiaWNvbi1jb2xsYXBzZVwiIChjbGljayk9XCJpY29uTW9kZSA9ICFpY29uTW9kZVwiPiYjOTc3Njs8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibG9nby1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNsb3Q9XCJsb2dvXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicGVyZmVjdC1uYXYtY29udGFpbmVyXCIgY2xhc3M9XCJ7e2ljb25Qb3NpdGlvbn19IHt7Ym9yZGVyfX1cIlxuICAgIFtuZ0NsYXNzXT1cInsnaWNvbi1tb2RlJzogaWNvbk1vZGUsICdob3Zlci1yZXZlYWwnOiBob3ZlclJldmVhbCB9XCI+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxpbmtzVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2xpbmtzOiBsaW5rc31cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+XG48bmctdGVtcGxhdGUgI2xpbmtzVGVtcGxhdGUgbGV0LWxpbmtzPVwibGlua3NcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBsIG9mIGxpbmtzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rXCIgKm5nSWY9XCJsLnZpc2libGVcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydzaG93LWNoaWxkcmVuJzogbC5zaG93Q2hpbGRyZW4sICdsaW5rLWNhdGVnb3J5JzogbC5ncm91cENhdGVnb3J5LCAnaGlkZS1saW5rLWNhdGVnb3J5JzogIXNob3dDYXRlZ29yaWVzLCAnbGluay1oYXMtbm8taWNvbic6ICFsLmljb259XCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibGlua1RlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntsaW5rOiBsfVwiPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG48L25nLXRlbXBsYXRlPlxuPG5nLXRlbXBsYXRlICNsaW5rVGVtcGxhdGUgbGV0LWxpbms9XCJsaW5rXCI+XG4gICAgPGRpdiBjbGFzcz1cImxpbmstY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbiBuby1iZ1wiICpuZ0lmPVwiIWxpbmsuaWNvblwiPjwvZGl2PlxuXG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoYXJ0LWxpbmVcIj48L2k+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvblwiICpuZ0lmPVwibGluay5mYUljb25cIiBbbmdDbGFzc109XCJ7J3NxdWlyY2xlJzogc3F1aXJjbGV9XCI+PGkgY2xhc3M9XCJmYXMge3tsaW5rLmZhSWNvbn19XCI+PC9pPjwvZGl2PlxuICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvblwiICpuZ0lmPVwibGluay5pY29uXCIgW25nQ2xhc3NdPVwieydzcXVpcmNsZSc6IHNxdWlyY2xlfVwiPnt7bGluay5pY29ufX08L2Rpdj5cbiAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb25cIiAqbmdJZj1cImxpbmsuaWNvbkltZ1wiIFtuZ0NsYXNzXT1cInsnc3F1aXJjbGUnOiBzcXVpcmNsZX1cIj48aW1nIHNyYz1cInt7bGluay5pY29uSW1nfX1cIiAvPjwvZGl2PlxuXG4gICAgICAgIDxhIGNsYXNzPVwibGFiZWxcIiAqbmdJZj1cIiFsaW5rLmRpc2FibGVkXCIgW3JvdXRlckxpbmtdPVwibGluay5saW5rXCI+e3tsaW5rLmxhYmVsfX08L2E+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbCBsYWJlbC0tZGlzYWJsZWRcIiAqbmdJZj1cImxpbmsuZGlzYWJsZWRcIj57e2xpbmsubGFiZWx9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoaWxkcmVuLWRyb3Bkb3duXCIgKm5nSWY9XCJsaW5rLmNoaWxkcmVuICYmIGxpbmsuY2hpbGRyZW4ubGVuZ3RoXCIgKGNsaWNrKT1cInRvZ2dsZUNoaWxkcmVuKGxpbmspXCI+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsaW5rLmNoaWxkcmVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZC1saW5rc1wiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxpbmtzVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2xpbmtzOiBsaW5rLmNoaWxkcmVufVwiPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG48L25nLXRlbXBsYXRlPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtcGVyZmVjdC1uYXYuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4UGVyZmVjdE5hdkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBASW5wdXQoKSBsaW5rczogYW55O1xuICBASW5wdXQoKSBpY29uTW9kZTogYm9vbGVhbjtcbiAgQElucHV0KCkgaGlkZUljb25zOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGljb25Qb3NpdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBob3ZlclJldmVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGJvcmRlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNxdWlyY2xlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgc2hvd0NhdGVnb3JpZXM6IGJvb2xlYW4gPSB0cnVlO1xuXG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB0aW1lID0gbmV3IERhdGUoKTtcbiAgQElucHV0KCkgY2FwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBhdnRhcjogc3RyaW5nO1xuICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBsaWtlTm90aWZ5ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgc2hhcmVOb3RpZnkgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBjb21tZW50Tm90aWZ5ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGxpa2VFdmVudCgpIHtcbiAgICB0aGlzLmxpa2VOb3RpZnkuZW1pdCh0cnVlKTtcbiAgfVxuICBzaGFyZUV2ZW50KCkge1xuICAgIHRoaXMuc2hhcmVOb3RpZnkuZW1pdCh0cnVlKTtcbiAgfVxuICBjb21tZW50RXZlbnQoKSB7XG4gICAgdGhpcy5jb21tZW50Tm90aWZ5LmVtaXQodHJ1ZSk7XG4gIH1cblxuICB0b2dnbGVDaGlsZHJlbihsaW5rKSB7XG4gICAgY29uc29sZS5sb2cobGluaylcbiAgICBpZiAobGluay5zaG93Q2hpbGRyZW4pIHtcbiAgICAgIGxpbmsuc2hvd0NoaWxkcmVuID0gZmFsc2U7XG4gICAgICAvLyBsaW5rLmhlaWdodCA9IDQ0O1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIGNvbnN0IG11bHRpcGx5ZXIgPSBsaW5rLmNoaWxkcmVuLmxlbmd0aFxuICAgICAgLy8gbGluay5oZWlnaHQgPSA0NCAqIChtdWx0aXBseWVyICsgMSk7XG4gICAgICBsaW5rLnNob3dDaGlsZHJlbiA9IHRydWU7XG4gICAgfVxuICB9XG5cblxufVxuIl19