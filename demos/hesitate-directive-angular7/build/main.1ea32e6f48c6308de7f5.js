(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0ZzE":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("DHAg");var o=t("wov0");t("ZYjt").platformBrowser().bootstrapModuleFactory(o.AppModuleNgFactory)},"8sXh":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t("CcnG");var o=t("CcnG"),l=(t("CcnG"),t("CcnG"),function(){function e(e,n,t){var l=this;this.handleMousedown=function(e){l.cancel()},this.handleMouseenter=function(e){l.timer=setTimeout(l.handleTimerThreshold,l.duration)},this.handleMouseleave=function(e){l.cancel()},this.handleTimerThreshold=function(){l.zone.runGuarded(function(){l.hesitateEvents.emit()})},this.elementRef=e,this.renderer=n,this.zone=t,this.duration=2e3,this.hesitateEvents=new o.EventEmitter,this.timer=0,this.unlisteners=null}return e.prototype.cancel=function(){clearTimeout(this.timer)},e.prototype.ngOnDestroy=function(){if(this.cancel(),this.unlisteners)for(var e=0,n=this.unlisteners;e<n.length;e++){(0,n[e])()}},e.prototype.ngOnInit=function(){var e=this;this.zone.runOutsideAngular(function(){e.unlisteners=[e.renderer.listen(e.elementRef.nativeElement,"mouseenter",e.handleMouseenter),e.renderer.listen(e.elementRef.nativeElement,"mousedown",e.handleMousedown),e.renderer.listen(e.elementRef.nativeElement,"mouseleave",e.handleMouseleave)]})},e}());n.HesitateDirective=l},DHAg:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("kzjQ"),t("0TWp")},K0Kg:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.styles=["[_nghost-%COMP%] {\n  display: block ;\n  font-size: 18px ;\n}\ndiv[_ngcontent-%COMP%] {\n  align-items: baseline ;\n  display: flex ;\n}\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 22px ;\n}\ndiv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 15px ;\n}\ndiv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: red ;\n}"]},Mn8e:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(){this.isShowingMessage=!1}return e.prototype.hideMessage=function(){this.isShowingMessage=!1},e.prototype.ngDoCheck=function(){console.log("ngDoCheck() - Change detection triggered.")},e.prototype.showMessage=function(){this.isShowingMessage=!0},e}();n.AppComponent=o},SmDo:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){return function(){}}();n.AppModule=o},kcRK:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("K0Kg"),l=t("CcnG"),r=t("8sXh"),i=t("Ip0R"),u=t("Mn8e"),s=[o.styles],a=l.ɵcrt({encapsulation:0,styles:s,data:{}});function p(e){return l.ɵvid(0,[(e()(),l.ɵeld(0,0,null,null,3,"span",[],null,null,null,null,null)),(e()(),l.ɵeld(1,0,null,null,1,"strong",[],null,null,null,null,null)),(e()(),l.ɵted(-1,null,["Come on!"])),(e()(),l.ɵted(-1,null,[" Buy it already! "]))],null,null)}function c(e){return l.ɵvid(0,[(e()(),l.ɵeld(0,0,null,null,5,"div",[],null,null,null,null,null)),(e()(),l.ɵeld(1,0,null,null,2,"button",[],null,[[null,"hesitate"],[null,"click"]],function(e,n,t){var o=!0,l=e.component;"hesitate"===n&&(o=!1!==l.showMessage()&&o);"click"===n&&(o=!1!==l.hideMessage()&&o);return o},null,null)),l.ɵdid(2,212992,null,0,r.HesitateDirective,[l.ElementRef,l.Renderer2,l.NgZone],{duration:[0,"duration"]},{hesitateEvents:"hesitate"}),(e()(),l.ɵted(-1,null,[" Buy It $29.99 "])),(e()(),l.ɵand(16777216,null,null,1,null,p)),l.ɵdid(5,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,n){var t=n.component;e(n,2,0,1e3),e(n,5,0,t.isShowingMessage)},null)}function d(e){return l.ɵvid(0,[(e()(),l.ɵeld(0,0,null,null,1,"my-app",[],null,null,null,c,a)),l.ɵdid(1,311296,null,0,u.AppComponent,[],null,null)],function(e,n){e(n,1,0)},null)}n.RenderType_AppComponent=a,n.View_AppComponent_0=c,n.View_AppComponent_Host_0=d;var m=l.ɵccf("my-app",u.AppComponent,d,{},{},[]);n.AppComponentNgFactory=m},wov0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("CcnG"),l=t("SmDo"),r=t("Mn8e"),i=t("kcRK"),u=t("Ip0R"),s=t("ZYjt"),a=o.ɵcmf(l.AppModule,[r.AppComponent],function(e){return o.ɵmod([o.ɵmpd(512,o.ComponentFactoryResolver,o.ɵCodegenComponentFactoryResolver,[[8,[i.AppComponentNgFactory]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o.ɵmpd(5120,o.LOCALE_ID,o.ɵangular_packages_core_core_o,[[3,o.LOCALE_ID]]),o.ɵmpd(4608,u.NgLocalization,u.NgLocaleLocalization,[o.LOCALE_ID,[2,u.ɵangular_packages_common_common_a]]),o.ɵmpd(4608,o.Compiler,o.Compiler,[]),o.ɵmpd(5120,o.APP_ID,o.ɵangular_packages_core_core_g,[]),o.ɵmpd(5120,o.IterableDiffers,o.ɵangular_packages_core_core_m,[]),o.ɵmpd(5120,o.KeyValueDiffers,o.ɵangular_packages_core_core_n,[]),o.ɵmpd(4608,s.DomSanitizer,s.ɵDomSanitizerImpl,[u.DOCUMENT]),o.ɵmpd(6144,o.Sanitizer,null,[s.DomSanitizer]),o.ɵmpd(4608,s.HAMMER_GESTURE_CONFIG,s.HammerGestureConfig,[]),o.ɵmpd(5120,s.EVENT_MANAGER_PLUGINS,function(e,n,t,o,l,r,i,u){return[new s.ɵDomEventsPlugin(e,n,t),new s.ɵKeyEventsPlugin(o),new s.ɵHammerGesturesPlugin(l,r,i,u)]},[u.DOCUMENT,o.NgZone,o.PLATFORM_ID,u.DOCUMENT,u.DOCUMENT,s.HAMMER_GESTURE_CONFIG,o.ɵConsole,[2,s.HAMMER_LOADER]]),o.ɵmpd(4608,s.EventManager,s.EventManager,[s.EVENT_MANAGER_PLUGINS,o.NgZone]),o.ɵmpd(135680,s.ɵDomSharedStylesHost,s.ɵDomSharedStylesHost,[u.DOCUMENT]),o.ɵmpd(4608,s.ɵDomRendererFactory2,s.ɵDomRendererFactory2,[s.EventManager,s.ɵDomSharedStylesHost]),o.ɵmpd(6144,o.RendererFactory2,null,[s.ɵDomRendererFactory2]),o.ɵmpd(6144,s.ɵSharedStylesHost,null,[s.ɵDomSharedStylesHost]),o.ɵmpd(4608,o.Testability,o.Testability,[o.NgZone]),o.ɵmpd(1073742336,u.CommonModule,u.CommonModule,[]),o.ɵmpd(1024,o.ErrorHandler,s.ɵangular_packages_platform_browser_platform_browser_a,[]),o.ɵmpd(1024,o.APP_INITIALIZER,function(e){return[s.ɵangular_packages_platform_browser_platform_browser_j(e)]},[[2,o.NgProbeToken]]),o.ɵmpd(512,o.ApplicationInitStatus,o.ApplicationInitStatus,[[2,o.APP_INITIALIZER]]),o.ɵmpd(131584,o.ApplicationRef,o.ApplicationRef,[o.NgZone,o.ɵConsole,o.Injector,o.ErrorHandler,o.ComponentFactoryResolver,o.ApplicationInitStatus]),o.ɵmpd(1073742336,o.ApplicationModule,o.ApplicationModule,[o.ApplicationRef]),o.ɵmpd(1073742336,s.BrowserModule,s.BrowserModule,[[3,s.BrowserModule]]),o.ɵmpd(1073742336,l.AppModule,l.AppModule,[]),o.ɵmpd(256,o.ɵAPP_ROOT,!0,[])])});n.AppModuleNgFactory=a},zn8P:function(e,n){function t(e){return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="zn8P"}},[["0ZzE",1,2]]]);
//# sourceMappingURL=main.1ea32e6f48c6308de7f5.js.map