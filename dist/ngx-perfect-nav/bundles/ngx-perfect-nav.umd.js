(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('ngx-perfect-nav', ['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
    (global = global || self, factory(global['ngx-perfect-nav'] = {}, global.ng.core, global.ng.common, global.ng.router));
}(this, (function (exports, core, common, router) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var NgxPerfectNavService = /** @class */ (function () {
        function NgxPerfectNavService() {
        }
        NgxPerfectNavService.ɵprov = core.ɵɵdefineInjectable({ factory: function NgxPerfectNavService_Factory() { return new NgxPerfectNavService(); }, token: NgxPerfectNavService, providedIn: "root" });
        NgxPerfectNavService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], NgxPerfectNavService);
        return NgxPerfectNavService;
    }());

    var NgxPerfectNavComponent = /** @class */ (function () {
        function NgxPerfectNavComponent() {
            this.hoverReveal = false;
            this.squircle = false;
            this.showCategories = true;
            this.time = new Date();
            this.likeNotify = new core.EventEmitter();
            this.shareNotify = new core.EventEmitter();
            this.commentNotify = new core.EventEmitter();
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
            core.Input()
        ], NgxPerfectNavComponent.prototype, "links", void 0);
        __decorate([
            core.Input()
        ], NgxPerfectNavComponent.prototype, "iconMode", void 0);
        __decorate([
            core.Input()
        ], NgxPerfectNavComponent.prototype, "hideIcons", void 0);
        __decorate([
            core.Input()
        ], NgxPerfectNavComponent.prototype, "iconPosition", void 0);
        __decorate([
            core.Input()
        ], NgxPerfectNavComponent.prototype, "hoverReveal", void 0);
        __decorate([
            core.Input()
        ], NgxPerfectNavComponent.prototype, "border", void 0);
        __decorate([
            core.Input()
        ], NgxPerfectNavComponent.prototype, "squircle", void 0);
        __decorate([
            core.Input()
        ], NgxPerfectNavComponent.prototype, "showCategories", void 0);
        __decorate([
            core.Input()
        ], NgxPerfectNavComponent.prototype, "title", void 0);
        __decorate([
            core.Input()
        ], NgxPerfectNavComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], NgxPerfectNavComponent.prototype, "time", void 0);
        __decorate([
            core.Input()
        ], NgxPerfectNavComponent.prototype, "caption", void 0);
        __decorate([
            core.Input()
        ], NgxPerfectNavComponent.prototype, "avtar", void 0);
        __decorate([
            core.Input()
        ], NgxPerfectNavComponent.prototype, "image", void 0);
        __decorate([
            core.Output()
        ], NgxPerfectNavComponent.prototype, "likeNotify", void 0);
        __decorate([
            core.Output()
        ], NgxPerfectNavComponent.prototype, "shareNotify", void 0);
        __decorate([
            core.Output()
        ], NgxPerfectNavComponent.prototype, "commentNotify", void 0);
        NgxPerfectNavComponent = __decorate([
            core.Component({
                selector: 'lib-ngx-perfect-nav',
                template: "\n    <div class=\"perfect-nav-top\" class=\"{{iconPosition}} {{border}}\"\n    [ngClass]=\"{'icon-mode': iconMode, 'hover-reveal': hoverReveal }\">\n    <div class=\"icon-collapse\" (click)=\"iconMode = !iconMode\">&#9776;</div>\n    <div class=\"logo-content\">\n        <ng-content slot=\"logo\"></ng-content>\n    </div>\n</div>\n<div class=\"perfect-nav-container\" class=\"{{iconPosition}} {{border}}\"\n    [ngClass]=\"{'icon-mode': iconMode, 'hover-reveal': hoverReveal }\">\n    <ng-template [ngTemplateOutlet]=\"linksTemplate\" [ngTemplateOutletContext]=\"{links: links}\">\n    </ng-template>\n</div>\n<ng-template #linksTemplate let-links=\"links\">\n    <ng-container *ngFor=\"let l of links\">\n        <div class=\"link\" *ngIf=\"l.visible\"\n            [ngClass]=\"{'show-children': l.showChildren, 'link-category': l.groupCategory, 'hide-link-category': !showCategories, 'link-has-no-icon': !l.icon}\">\n            <ng-template [ngTemplateOutlet]=\"linkTemplate\" [ngTemplateOutletContext]=\"{link: l}\">\n            </ng-template>\n        </div>\n    </ng-container>\n</ng-template>\n<ng-template #linkTemplate let-link=\"link\">\n    <div class=\"link-content\">\n        <div class=\"icon no-bg\" *ngIf=\"!link.icon\"></div>\n\n        <i class=\"fas fa-chart-line\"></i>\n        \n        <div aria-hidden=\"true\" class=\"icon\" *ngIf=\"link.faIcon\" [ngClass]=\"{'squircle': squircle}\"><i class=\"fas {{link.faIcon}}\"></i></div>\n        <div aria-hidden=\"true\" class=\"icon\" *ngIf=\"link.icon\" [ngClass]=\"{'squircle': squircle}\">{{link.icon}}</div>\n        <div aria-hidden=\"true\" class=\"icon\" *ngIf=\"link.iconImg\" [ngClass]=\"{'squircle': squircle}\"><img src=\"{{link.iconImg}}\" /></div>\n\n        <a class=\"label\" *ngIf=\"!link.disabled\" [routerLink]=\"link.link\">{{link.label}}</a>\n        <div class=\"label label--disabled\" *ngIf=\"link.disabled\">{{link.label}}</div>\n        <div class=\"spacer\"></div>\n\n        <button class=\"children-dropdown\" *ngIf=\"link.children && link.children.length\" (click)=\"toggleChildren(link)\">\n            <span></span>\n        </button>\n    </div>\n    <ng-container *ngIf=\"link.children\">\n        <div class=\"child-links\">\n            <ng-template [ngTemplateOutlet]=\"linksTemplate\" [ngTemplateOutletContext]=\"{links: link.children}\">\n            </ng-template>\n        </div>\n    </ng-container>\n</ng-template>\n  ",
                styles: [":host{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;background-color:var(--nav-bg-color);color:var(--nav-color);height:100vh;display:block}:host a{color:inherit;text-decoration:none}.icon-mode .label{display:none}.icon-mode .child-links{padding-left:0}.perfect-nav-top{display:flex;align-items:center;color:inherit;background-color:inherit}.perfect-nav-top.icon-mode .logo-content{display:none}.logo-content{display:flex;align-items:center}.logo-content ::ng-deep>*{height:100%;-o-object-fit:cover;object-fit:cover}.perfect-nav-container{display:block;color:inherit;background-color:inherit;max-width:var(--nav-width);transition:var(--transition-speed) all;will-change:contents}.perfect-nav-container.icon-mode{max-width:var(--nav-iconMode-width);overflow:hidden}.perfect-nav-container.icon-mode .link{max-width:var(--nav-iconMode-width)}.perfect-nav-container.icon-mode .link-has-no-icon{height:0}.perfect-nav-container.icon-mode.icon-right .label{order:2;flex:1}.perfect-nav-container.icon-mode.icon-right .icon{order:1}.perfect-nav-container.icon-mode .link-category{display:none}.perfect-nav-container.icon-mode .child-links{padding-left:0}.perfect-nav-container.icon-mode.hover-reveal{position:absolute}.perfect-nav-container.icon-mode.hover-reveal:hover{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal:hover .link-has-no-icon{height:inherit}.perfect-nav-container.icon-mode.hover-reveal:hover .child-links{padding-left:var(--child-indent)}.perfect-nav-container.icon-mode.hover-reveal:hover .link-category{display:block}.perfect-nav-container.icon-mode.hover-reveal:hover .label,.perfect-nav-container.icon-mode.hover-reveal:hover .link{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal:hover.icon-right .label{order:1}.perfect-nav-container.icon-mode.hover-reveal:hover.icon-right .icon{order:2}.perfect-nav-container.icon-mode.hover-reveal .link-content{transition:var(--transition-speed) all}.perfect-nav-container.icon-mode.hover-reveal .link-content:hover{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal .link-content:hover .label{display:flex}.perfect-nav-container.icon-mode.hover-reveal .link{transition:var(--transition-speed) all}.perfect-nav-container.icon-mode.hover-reveal .link:hover{max-width:var(--nav-width)}.perfect-nav-container.icon-mode.hover-reveal .link:hover .label{display:flex}.perfect-nav-container.icon-left .label{order:2}.perfect-nav-container.icon-left .icon{order:1}.perfect-nav-container.icon-right .label{order:1;flex:1}.perfect-nav-container.icon-right .icon{order:2}.perfect-nav-container.icon-right .children-dropdown{order:0}.link{transition:250ms;cursor:pointer}.link .child-links{box-shadow:0 2px 2px #00000026}.link .child-links .link{max-height:0;overflow:hidden}.link.show-children>.link-content>.children-dropdown span{transform:rotate(-180deg)}.link.show-children>.child-links>.link{max-height:1000px;overflow:visible}.link .link-content{padding:0 var(--padding-width);display:flex;align-items:center;height:var(--link-height)}.link .link-content:hover{background-color:var(--hover-bg)}.link .link-content:hover:has(div.label--disabled){background-color:inherit}.link .link-content>*{display:flex;align-items:center}.label{padding:8px var(--padding-width);white-space:nowrap}.label span{padding:8px var(--padding-width)}.label--disabled{opacity:.4;cursor:default}.icon{justify-content:center;width:24px;height:24px;flex:none;background:var(--icon-bg);border-radius:var(--icon-br)}.icon img{height:var(--icon-img-size)}.children-dropdown{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto;background-color:inherit;border:inherit;order:5;justify-self:flex-end;padding:.5em;display:flex;justify-content:center;align-items:center;cursor:pointer}.children-dropdown:hover{background:var(--dropdown-bg-hover)}.children-dropdown>span{transition:.1s;height:12px;width:12px}.border-left .link-content{border-left:var(--border-width) solid;border-color:var(--border-color)}.spacer{margin:auto;order:4}.caret-bg,.children-dropdown>span{background-size:cover;background-image:url(data:image/png;base64,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);filter:brightness(var(--nav-caret-brightness))}.squircle{-webkit-clip-path:polygon(100% 50%,100% 56.6%,100% 59.3%,100% 61.4%,99.9% 63.2%,99.9% 64.8%,99.9% 66.2%,99.8% 67.5%,99.8% 68.7%,99.7% 69.8%,99.6% 70.8%,99.5% 71.8%,99.5% 72.8%,99.4% 73.7%,99.3% 74.6%,99.1% 75.4%,99% 76.3%,98.9% 77%,98.8% 77.8%,98.6% 78.5%,98.5% 79.2%,98.3% 79.9%,98.1% 80.6%,98% 81.3%,97.8% 81.9%,97.6% 82.5%,97.4% 83.1%,97.2% 83.7%,97% 84.3%,96.8% 84.8%,96.5% 85.4%,96.3% 85.9%,96% 86.4%,95.8% 86.9%,95.5% 87.4%,95.3% 87.9%,95% 88.3%,94.7% 88.8%,94.4% 89.2%,94.1% 89.7%,93.8% 90.1%,93.4% 90.5%,93.1% 90.9%,92.8% 91.3%,92.4% 91.7%,92% 92%,91.7% 92.4%,91.3% 92.8%,90.9% 93.1%,90.5% 93.4%,90.1% 93.8%,89.7% 94.1%,89.2% 94.4%,88.8% 94.7%,88.3% 95%,87.9% 95.3%,87.4% 95.5%,86.9% 95.8%,86.4% 96%,85.9% 96.3%,85.4% 96.5%,84.8% 96.8%,84.3% 97%,83.7% 97.2%,83.1% 97.4%,82.5% 97.6%,81.9% 97.8%,81.3% 98%,80.6% 98.1%,79.9% 98.3%,79.2% 98.5%,78.5% 98.6%,77.8% 98.8%,77% 98.9%,76.3% 99%,75.4% 99.1%,74.6% 99.3%,73.7% 99.4%,72.8% 99.5%,71.8% 99.5%,70.8% 99.6%,69.8% 99.7%,68.7% 99.8%,67.5% 99.8%,66.2% 99.9%,64.8% 99.9%,63.2% 99.9%,61.4% 100%,59.3% 100%,56.6% 100%,50% 100%,43.4% 100%,40.7% 100%,38.6% 100%,36.8% 99.9%,35.2% 99.9%,33.8% 99.9%,32.5% 99.8%,31.3% 99.8%,30.2% 99.7%,29.2% 99.6%,28.2% 99.5%,27.2% 99.5%,26.3% 99.4%,25.4% 99.3%,24.6% 99.1%,23.7% 99%,23% 98.9%,22.2% 98.8%,21.5% 98.6%,20.8% 98.5%,20.1% 98.3%,19.4% 98.1%,18.7% 98%,18.1% 97.8%,17.5% 97.6%,16.9% 97.4%,16.3% 97.2%,15.7% 97%,15.2% 96.8%,14.6% 96.5%,14.1% 96.3%,13.6% 96%,13.1% 95.8%,12.6% 95.5%,12.1% 95.3%,11.7% 95%,11.2% 94.7%,10.8% 94.4%,10.3% 94.1%,9.9% 93.8%,9.5% 93.4%,9.1% 93.1%,8.7% 92.8%,8.3% 92.4%,8% 92%,7.6% 91.7%,7.2% 91.3%,6.9% 90.9%,6.6% 90.5%,6.2% 90.1%,5.9% 89.7%,5.6% 89.2%,5.3% 88.8%,5% 88.3%,4.7% 87.9%,4.5% 87.4%,4.2% 86.9%,4% 86.4%,3.7% 85.9%,3.5% 85.4%,3.2% 84.8%,3% 84.3%,2.8% 83.7%,2.6% 83.1%,2.4% 82.5%,2.2% 81.9%,2% 81.3%,1.9% 80.6%,1.7% 79.9%,1.5% 79.2%,1.4% 78.5%,1.2% 77.8%,1.1% 77%,1% 76.3%,.9% 75.4%,.7% 74.6%,.6% 73.7%,.5% 72.8%,.5% 71.8%,.4% 70.8%,.3% 69.8%,.2% 68.7%,.2% 67.5%,.1% 66.2%,.1% 64.8%,.1% 63.2%,0 61.4%,0 59.3%,0 56.6%,0 50%,0 43.4%,0 40.7%,0 38.6%,.1% 36.8%,.1% 35.2%,.1% 33.8%,.2% 32.5%,.2% 31.3%,.3% 30.2%,.4% 29.2%,.5% 28.2%,.5% 27.2%,.6% 26.3%,.7% 25.4%,.9% 24.6%,1% 23.7%,1.1% 23%,1.2% 22.2%,1.4% 21.5%,1.5% 20.8%,1.7% 20.1%,1.9% 19.4%,2% 18.7%,2.2% 18.1%,2.4% 17.5%,2.6% 16.9%,2.8% 16.3%,3% 15.7%,3.2% 15.2%,3.5% 14.6%,3.7% 14.1%,4% 13.6%,4.2% 13.1%,4.5% 12.6%,4.7% 12.1%,5% 11.7%,5.3% 11.2%,5.6% 10.8%,5.9% 10.3%,6.2% 9.9%,6.6% 9.5%,6.9% 9.1%,7.2% 8.7%,7.6% 8.3%,8% 8%,8.3% 7.6%,8.7% 7.2%,9.1% 6.9%,9.5% 6.6%,9.9% 6.2%,10.3% 5.9%,10.8% 5.6%,11.2% 5.3%,11.7% 5%,12.1% 4.7%,12.6% 4.5%,13.1% 4.2%,13.6% 4%,14.1% 3.7%,14.6% 3.5%,15.2% 3.2%,15.7% 3%,16.3% 2.8%,16.9% 2.6%,17.5% 2.4%,18.1% 2.2%,18.7% 2%,19.4% 1.9%,20.1% 1.7%,20.8% 1.5%,21.5% 1.4%,22.2% 1.2%,23% 1.1%,23.7% 1%,24.6% .9%,25.4% .7%,26.3% .6%,27.2% .5%,28.2% .5%,29.2% .4%,30.2% .3%,31.3% .2%,32.5% .2%,33.8% .1%,35.2% .1%,36.8% .1%,38.6% 0,40.7% 0,43.4% 0,50% 0,56.6% 0,59.3% 0,61.4% 0,63.2% .1%,64.8% .1%,66.2% .1%,67.5% .2%,68.7% .2%,69.8% .3%,70.8% .4%,71.8% .5%,72.8% .5%,73.7% .6%,74.6% .7%,75.4% .9%,76.3% 1%,77% 1.1%,77.8% 1.2%,78.5% 1.4%,79.2% 1.5%,79.9% 1.7%,80.6% 1.9%,81.3% 2%,81.9% 2.2%,82.5% 2.4%,83.1% 2.6%,83.7% 2.8%,84.3% 3%,84.8% 3.2%,85.4% 3.5%,85.9% 3.7%,86.4% 4%,86.9% 4.2%,87.4% 4.5%,87.9% 4.7%,88.3% 5%,88.8% 5.3%,89.2% 5.6%,89.7% 5.9%,90.1% 6.2%,90.5% 6.6%,90.9% 6.9%,91.3% 7.2%,91.7% 7.6%,92% 8%,92.4% 8.3%,92.8% 8.7%,93.1% 9.1%,93.4% 9.5%,93.8% 9.9%,94.1% 10.3%,94.4% 10.8%,94.7% 11.2%,95% 11.7%,95.3% 12.1%,95.5% 12.6%,95.8% 13.1%,96% 13.6%,96.3% 14.1%,96.5% 14.6%,96.8% 15.2%,97% 15.7%,97.2% 16.3%,97.4% 16.9%,97.6% 17.5%,97.8% 18.1%,98% 18.7%,98.1% 19.4%,98.3% 20.1%,98.5% 20.8%,98.6% 21.5%,98.8% 22.2%,98.9% 23%,99% 23.7%,99.1% 24.6%,99.3% 25.4%,99.4% 26.3%,99.5% 27.2%,99.5% 28.2%,99.6% 29.2%,99.7% 30.2%,99.8% 31.3%,99.8% 32.5%,99.9% 33.8%,99.9% 35.2%,99.9% 36.8%,100% 38.6%,100% 40.7%,100% 43.4%);clip-path:polygon(100% 50%,100% 56.6%,100% 59.3%,100% 61.4%,99.9% 63.2%,99.9% 64.8%,99.9% 66.2%,99.8% 67.5%,99.8% 68.7%,99.7% 69.8%,99.6% 70.8%,99.5% 71.8%,99.5% 72.8%,99.4% 73.7%,99.3% 74.6%,99.1% 75.4%,99% 76.3%,98.9% 77%,98.8% 77.8%,98.6% 78.5%,98.5% 79.2%,98.3% 79.9%,98.1% 80.6%,98% 81.3%,97.8% 81.9%,97.6% 82.5%,97.4% 83.1%,97.2% 83.7%,97% 84.3%,96.8% 84.8%,96.5% 85.4%,96.3% 85.9%,96% 86.4%,95.8% 86.9%,95.5% 87.4%,95.3% 87.9%,95% 88.3%,94.7% 88.8%,94.4% 89.2%,94.1% 89.7%,93.8% 90.1%,93.4% 90.5%,93.1% 90.9%,92.8% 91.3%,92.4% 91.7%,92% 92%,91.7% 92.4%,91.3% 92.8%,90.9% 93.1%,90.5% 93.4%,90.1% 93.8%,89.7% 94.1%,89.2% 94.4%,88.8% 94.7%,88.3% 95%,87.9% 95.3%,87.4% 95.5%,86.9% 95.8%,86.4% 96%,85.9% 96.3%,85.4% 96.5%,84.8% 96.8%,84.3% 97%,83.7% 97.2%,83.1% 97.4%,82.5% 97.6%,81.9% 97.8%,81.3% 98%,80.6% 98.1%,79.9% 98.3%,79.2% 98.5%,78.5% 98.6%,77.8% 98.8%,77% 98.9%,76.3% 99%,75.4% 99.1%,74.6% 99.3%,73.7% 99.4%,72.8% 99.5%,71.8% 99.5%,70.8% 99.6%,69.8% 99.7%,68.7% 99.8%,67.5% 99.8%,66.2% 99.9%,64.8% 99.9%,63.2% 99.9%,61.4% 100%,59.3% 100%,56.6% 100%,50% 100%,43.4% 100%,40.7% 100%,38.6% 100%,36.8% 99.9%,35.2% 99.9%,33.8% 99.9%,32.5% 99.8%,31.3% 99.8%,30.2% 99.7%,29.2% 99.6%,28.2% 99.5%,27.2% 99.5%,26.3% 99.4%,25.4% 99.3%,24.6% 99.1%,23.7% 99%,23% 98.9%,22.2% 98.8%,21.5% 98.6%,20.8% 98.5%,20.1% 98.3%,19.4% 98.1%,18.7% 98%,18.1% 97.8%,17.5% 97.6%,16.9% 97.4%,16.3% 97.2%,15.7% 97%,15.2% 96.8%,14.6% 96.5%,14.1% 96.3%,13.6% 96%,13.1% 95.8%,12.6% 95.5%,12.1% 95.3%,11.7% 95%,11.2% 94.7%,10.8% 94.4%,10.3% 94.1%,9.9% 93.8%,9.5% 93.4%,9.1% 93.1%,8.7% 92.8%,8.3% 92.4%,8% 92%,7.6% 91.7%,7.2% 91.3%,6.9% 90.9%,6.6% 90.5%,6.2% 90.1%,5.9% 89.7%,5.6% 89.2%,5.3% 88.8%,5% 88.3%,4.7% 87.9%,4.5% 87.4%,4.2% 86.9%,4% 86.4%,3.7% 85.9%,3.5% 85.4%,3.2% 84.8%,3% 84.3%,2.8% 83.7%,2.6% 83.1%,2.4% 82.5%,2.2% 81.9%,2% 81.3%,1.9% 80.6%,1.7% 79.9%,1.5% 79.2%,1.4% 78.5%,1.2% 77.8%,1.1% 77%,1% 76.3%,.9% 75.4%,.7% 74.6%,.6% 73.7%,.5% 72.8%,.5% 71.8%,.4% 70.8%,.3% 69.8%,.2% 68.7%,.2% 67.5%,.1% 66.2%,.1% 64.8%,.1% 63.2%,0 61.4%,0 59.3%,0 56.6%,0 50%,0 43.4%,0 40.7%,0 38.6%,.1% 36.8%,.1% 35.2%,.1% 33.8%,.2% 32.5%,.2% 31.3%,.3% 30.2%,.4% 29.2%,.5% 28.2%,.5% 27.2%,.6% 26.3%,.7% 25.4%,.9% 24.6%,1% 23.7%,1.1% 23%,1.2% 22.2%,1.4% 21.5%,1.5% 20.8%,1.7% 20.1%,1.9% 19.4%,2% 18.7%,2.2% 18.1%,2.4% 17.5%,2.6% 16.9%,2.8% 16.3%,3% 15.7%,3.2% 15.2%,3.5% 14.6%,3.7% 14.1%,4% 13.6%,4.2% 13.1%,4.5% 12.6%,4.7% 12.1%,5% 11.7%,5.3% 11.2%,5.6% 10.8%,5.9% 10.3%,6.2% 9.9%,6.6% 9.5%,6.9% 9.1%,7.2% 8.7%,7.6% 8.3%,8% 8%,8.3% 7.6%,8.7% 7.2%,9.1% 6.9%,9.5% 6.6%,9.9% 6.2%,10.3% 5.9%,10.8% 5.6%,11.2% 5.3%,11.7% 5%,12.1% 4.7%,12.6% 4.5%,13.1% 4.2%,13.6% 4%,14.1% 3.7%,14.6% 3.5%,15.2% 3.2%,15.7% 3%,16.3% 2.8%,16.9% 2.6%,17.5% 2.4%,18.1% 2.2%,18.7% 2%,19.4% 1.9%,20.1% 1.7%,20.8% 1.5%,21.5% 1.4%,22.2% 1.2%,23% 1.1%,23.7% 1%,24.6% .9%,25.4% .7%,26.3% .6%,27.2% .5%,28.2% .5%,29.2% .4%,30.2% .3%,31.3% .2%,32.5% .2%,33.8% .1%,35.2% .1%,36.8% .1%,38.6% 0,40.7% 0,43.4% 0,50% 0,56.6% 0,59.3% 0,61.4% 0,63.2% .1%,64.8% .1%,66.2% .1%,67.5% .2%,68.7% .2%,69.8% .3%,70.8% .4%,71.8% .5%,72.8% .5%,73.7% .6%,74.6% .7%,75.4% .9%,76.3% 1%,77% 1.1%,77.8% 1.2%,78.5% 1.4%,79.2% 1.5%,79.9% 1.7%,80.6% 1.9%,81.3% 2%,81.9% 2.2%,82.5% 2.4%,83.1% 2.6%,83.7% 2.8%,84.3% 3%,84.8% 3.2%,85.4% 3.5%,85.9% 3.7%,86.4% 4%,86.9% 4.2%,87.4% 4.5%,87.9% 4.7%,88.3% 5%,88.8% 5.3%,89.2% 5.6%,89.7% 5.9%,90.1% 6.2%,90.5% 6.6%,90.9% 6.9%,91.3% 7.2%,91.7% 7.6%,92% 8%,92.4% 8.3%,92.8% 8.7%,93.1% 9.1%,93.4% 9.5%,93.8% 9.9%,94.1% 10.3%,94.4% 10.8%,94.7% 11.2%,95% 11.7%,95.3% 12.1%,95.5% 12.6%,95.8% 13.1%,96% 13.6%,96.3% 14.1%,96.5% 14.6%,96.8% 15.2%,97% 15.7%,97.2% 16.3%,97.4% 16.9%,97.6% 17.5%,97.8% 18.1%,98% 18.7%,98.1% 19.4%,98.3% 20.1%,98.5% 20.8%,98.6% 21.5%,98.8% 22.2%,98.9% 23%,99% 23.7%,99.1% 24.6%,99.3% 25.4%,99.4% 26.3%,99.5% 27.2%,99.5% 28.2%,99.6% 29.2%,99.7% 30.2%,99.8% 31.3%,99.8% 32.5%,99.9% 33.8%,99.9% 35.2%,99.9% 36.8%,100% 38.6%,100% 40.7%,100% 43.4%)}.icon-collapse{cursor:pointer;padding:9px;width:var(--nav-iconMode-width);text-align:center}.link-category{margin:.75em 0 .25em}.link-category .icon.icon{display:none}.link-category .link-content{font-size:80%;opacity:.8;height:1em;padding:0}.link-category .link-content:hover,.no-bg{background:0 0}.hide-link-category.link-category{display:none!important}"]
            })
        ], NgxPerfectNavComponent);
        return NgxPerfectNavComponent;
    }());

    var NgxPerfectNavModule = /** @class */ (function () {
        function NgxPerfectNavModule() {
        }
        NgxPerfectNavModule = __decorate([
            core.NgModule({
                declarations: [NgxPerfectNavComponent],
                imports: [
                    common.CommonModule,
                    router.RouterModule
                ],
                exports: [NgxPerfectNavComponent]
            })
        ], NgxPerfectNavModule);
        return NgxPerfectNavModule;
    }());

    exports.NgxPerfectNavComponent = NgxPerfectNavComponent;
    exports.NgxPerfectNavModule = NgxPerfectNavModule;
    exports.NgxPerfectNavService = NgxPerfectNavService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-perfect-nav.umd.js.map