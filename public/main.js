(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_courses_courses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/courses/courses.component */ "./src/app/components/courses/courses.component.ts");
/* harmony import */ var _components_uni_uni_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/uni/uni.component */ "./src/app/components/uni/uni.component.ts");
/* harmony import */ var _components_course_review_course_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/course-review/course-review.component */ "./src/app/components/course-review/course-review.component.ts");
/* harmony import */ var _components_profs_profs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profs/profs.component */ "./src/app/components/profs/profs.component.ts");
/* harmony import */ var _components_profs_prof_prof_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profs/prof/prof.component */ "./src/app/components/profs/prof/prof.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_courses_course_course_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/courses/course/course.component */ "./src/app/components/courses/course/course.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_profile_user_edit_profile_user_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user-profile/user-edit-profile/user-edit-profile.component */ "./src/app/components/user-profile/user-edit-profile/user-edit-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
    },
    {
        path: 'courses',
        component: _components_courses_courses_component__WEBPACK_IMPORTED_MODULE_4__["CoursesComponent"]
    },
    {
        path: 'courses/:id',
        component: _components_courses_course_course_component__WEBPACK_IMPORTED_MODULE_10__["CourseComponent"]
    },
    {
        path: 'professors',
        component: _components_profs_profs_component__WEBPACK_IMPORTED_MODULE_7__["ProfsComponent"]
    },
    {
        path: 'professors/:id',
        component: _components_profs_prof_prof_component__WEBPACK_IMPORTED_MODULE_8__["ProfComponent"]
    },
    {
        path: 'universities',
        component: _components_uni_uni_component__WEBPACK_IMPORTED_MODULE_5__["UniComponent"]
    },
    {
        path: 'courses/:id/course-review',
        component: _components_course_review_course_review_component__WEBPACK_IMPORTED_MODULE_6__["CourseReviewComponent"]
    },
    {
        path: 'signup',
        component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"]
    },
    {
        path: 'signin',
        component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_13__["SigninComponent"]
    },
    {
        path: 'user',
        component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'user-edit-profile',
        component: _components_user_profile_user_edit_profile_user_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__["UserEditProfileComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'user-profile',
        component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    }
    // {path: 'courses/course/courseReview', component: CourseReviewComponent}
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"].forRoot(),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<main role=\"main\">\r\n    <router-outlet></router-outlet>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _common_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/helpers/jwt-interceptor */ "./src/app/common/helpers/jwt-interceptor.ts");
/* harmony import */ var _common_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/helpers/error-interceptor */ "./src/app/common/helpers/error-interceptor.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_courses_courses_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/courses/courses.component */ "./src/app/components/courses/courses.component.ts");
/* harmony import */ var _components_courses_course_course_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/courses/course/course.component */ "./src/app/components/courses/course/course.component.ts");
/* harmony import */ var _components_profs_profs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profs/profs.component */ "./src/app/components/profs/profs.component.ts");
/* harmony import */ var _components_profs_prof_prof_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profs/prof/prof.component */ "./src/app/components/profs/prof/prof.component.ts");
/* harmony import */ var _components_uni_uni_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/uni/uni.component */ "./src/app/components/uni/uni.component.ts");
/* harmony import */ var _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/menu/menu.component */ "./src/app/common/menu/menu.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _common_rating_rating_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/rating/rating.component */ "./src/app/common/rating/rating.component.ts");
/* harmony import */ var _common_slider_slider_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/slider/slider.component */ "./src/app/common/slider/slider.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_course_review_course_review_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/course-review/course-review.component */ "./src/app/components/course-review/course-review.component.ts");
/* harmony import */ var _common_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./common/dialog/dialog.component */ "./src/app/common/dialog/dialog.component.ts");
/* harmony import */ var _common_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./common/dialog-overview/dialog-overview.component */ "./src/app/common/dialog-overview/dialog-overview.component.ts");
/* harmony import */ var _common_rate_rate_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./common/rate/rate.component */ "./src/app/common/rate/rate.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./common/navbar/navbar.component */ "./src/app/common/navbar/navbar.component.ts");
/* harmony import */ var _common_card_card_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./common/card/card.component */ "./src/app/common/card/card.component.ts");
/* harmony import */ var _common_top3_top3_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./common/top3/top3.component */ "./src/app/common/top3/top3.component.ts");
/* harmony import */ var _common_top4_top4_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./common/top4/top4.component */ "./src/app/common/top4/top4.component.ts");
/* harmony import */ var _common_long_card_long_card_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./common/long-card/long-card.component */ "./src/app/common/long-card/long-card.component.ts");
/* harmony import */ var _common_filter_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./common/filter.pipe */ "./src/app/common/filter.pipe.ts");
/* harmony import */ var _common_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./common/paginator/paginator.component */ "./src/app/common/paginator/paginator.component.ts");
/* harmony import */ var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./common/loader/loader.component */ "./src/app/common/loader/loader.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_user_profile_user_edit_profile_user_edit_profile_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/user-profile/user-edit-profile/user-edit-profile.component */ "./src/app/components/user-profile/user-edit-profile/user-edit-profile.component.ts");
/* harmony import */ var _common_tags_review_tags_review_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./common/tags-review/tags-review.component */ "./src/app/common/tags-review/tags-review.component.ts");
/* harmony import */ var _common_errors_app_error_handler__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./common/errors/app-error-handler */ "./src/app/common/errors/app-error-handler.ts");
/* harmony import */ var _common_rate_display_rate_display_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./common/rate-display/rate-display.component */ "./src/app/common/rate-display/rate-display.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _services_bookmark_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/bookmark.service */ "./src/app/services/bookmark.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_filters_by_professor_by_professor_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./common/filters/by-professor/by-professor.component */ "./src/app/common/filters/by-professor/by-professor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { TokenInterceptor } from './common/helpers/token-interceptor';












































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_courses_courses_component__WEBPACK_IMPORTED_MODULE_10__["CoursesComponent"],
                _components_courses_course_course_component__WEBPACK_IMPORTED_MODULE_11__["CourseComponent"],
                _components_profs_profs_component__WEBPACK_IMPORTED_MODULE_12__["ProfsComponent"],
                _components_profs_prof_prof_component__WEBPACK_IMPORTED_MODULE_13__["ProfComponent"],
                _components_uni_uni_component__WEBPACK_IMPORTED_MODULE_14__["UniComponent"],
                _common_rating_rating_component__WEBPACK_IMPORTED_MODULE_17__["RatingComponent"],
                _common_slider_slider_component__WEBPACK_IMPORTED_MODULE_18__["SliderComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"],
                _components_course_review_course_review_component__WEBPACK_IMPORTED_MODULE_20__["CourseReviewComponent"],
                _common_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DialogComponent"],
                _common_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_22__["DialogOverviewComponent"],
                _common_rate_rate_component__WEBPACK_IMPORTED_MODULE_23__["RateComponent"],
                _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_27__["SignupComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_28__["SigninComponent"],
                _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_29__["NavbarComponent"],
                _common_card_card_component__WEBPACK_IMPORTED_MODULE_30__["CardComponent"],
                _common_top3_top3_component__WEBPACK_IMPORTED_MODULE_31__["Top3Component"],
                _common_top4_top4_component__WEBPACK_IMPORTED_MODULE_32__["Top4Component"],
                _common_tags_review_tags_review_component__WEBPACK_IMPORTED_MODULE_39__["TagsReviewComponent"],
                _common_long_card_long_card_component__WEBPACK_IMPORTED_MODULE_33__["LongCardComponent"],
                _common_filter_pipe__WEBPACK_IMPORTED_MODULE_34__["FilterPipe"],
                _common_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_35__["PaginatorComponent"],
                _common_filter_pipe__WEBPACK_IMPORTED_MODULE_34__["FilterPipe"],
                _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_36__["LoaderComponent"],
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_37__["UserProfileComponent"],
                _components_user_profile_user_edit_profile_user_edit_profile_component__WEBPACK_IMPORTED_MODULE_38__["UserEditProfileComponent"],
                _common_rate_display_rate_display_component__WEBPACK_IMPORTED_MODULE_41__["RateDisplayComponent"],
                _common_filters_by_professor_by_professor_component__WEBPACK_IMPORTED_MODULE_46__["ByProfessorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_45__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_45__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_45__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"].forRoot(),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_42__["FlashMessagesModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"]
            ],
            providers: [
                _services_course_service__WEBPACK_IMPORTED_MODULE_25__["CourseService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_28__["SigninComponent"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_42__["FlashMessagesService"],
                src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_44__["ToastService"],
                _services_bookmark_service__WEBPACK_IMPORTED_MODULE_43__["BookmarkService"],
                src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_44__["ToastService"],
                // {
                //   provide: HTTP_INTERCEPTORS,
                //   useClass: TokenInterceptor,
                //   multi: true,
                // },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"],
                    useClass: _common_errors_app_error_handler__WEBPACK_IMPORTED_MODULE_40__["AppErrorHandler"]
                },
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"],
                    useClass: _common_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"],
                    useClass: _common_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"],
                    multi: true
                },
            ],
            entryComponents: [
                _common_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DialogComponent"],
                _common_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_22__["DialogOverviewComponent"],
                _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            exports: [_common_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DialogComponent"], _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"], _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_28__["SigninComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #signIn let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"mat-elevation-z24\" fxLayout=\"column\" fxLayoutWrap fxLayoutAlign=\"start stretch\" fxLayoutGap=\"2%\" style=\"background: white; border-color: white; padding: 3%;\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\" style=\"text-align: right;\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    <div class=\"col-xs-12 col-sm-10 col-md-12 col-sm-offset-1 col-md-offset-2\">\r\n      <form #f=\"ngForm\">\r\n        <div class=\"form-group\">\r\n\r\n          <div *ngIf=\"invalidLogin\" class=\"alert alert-danger\">\r\n            Invalid user and/or password\r\n          </div>\r\n\r\n          <label for=\"email\" style=\"color: #333333; padding: 1%;\">Tell us your email address to find your account</label>\r\n          <div class=\"icon-input\">\r\n            <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email Address\" style=\"margin-bottom: 2%;\"\r\n              ngModel>\r\n            <i class=\"fas fa-envelope\"></i>\r\n          </div>\r\n          <div class=\"icon-input\">\r\n            <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Your password\" style=\"margin-bottom: 2%;\"\r\n              ngModel>\r\n            <i class=\"fas fa-unlock-alt\"></i>\r\n          </div>\r\n          <button (click)=\"emailLogin(f.value)\" class=\"btn btn-primary col-xs-12 col-sm-10\r\n            col-md-12 col-sm-offset-1 col-md-offset-2\" style=\"background-color: #E96543;\r\n                      border-color: #E96543; color: white;\" type=\"submit\">Login\r\n          </button>\r\n        </div>\r\n\r\n        <hr id=\"modal-hr\" class=\"hr-text hr-style mb-4\" data-content=\"or\">\r\n\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-primary btn-facebook col-xs-12 col-sm-10\r\n            col-md-12 col-sm-offset-1 col-md-offset-2\" type=\"submit\">\r\n            <i class=\"fab fa-facebook login-icon\"></i>Log in with Facebook\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-primary col-xs-12 col-sm-10\r\n              col-md-12 col-sm-offset-1 col-md-offset-2\" style=\"background-color: white;\r\n                      border-color: #818078; color: #818078;\" type=\"submit\">\r\n            <img class=\"login-icon\" src=\"/assets/images/google-icon.png\" />Log in with Google\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"login-lightbox\">\r\n      <p>Don’t have an account?\r\n        <a class=\"bold-text\" style=\"color: #41B175\" (click)=\"loginSignUp($event)\">Sign up</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Roboto+Slab|Open+Sans:400italic,700italic,400,700);\n.dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white; }\n.dark-modal .close {\n  color: white; }\n.light-blue-backdrop {\n  background-color: #6C757D; }\n.container-hr {\n  max-width: 50%;\n  margin: 4rem auto; }\n.hr-style {\n  text-align: center;\n  /*background: #fcfcfa;*/\n  color: #292b2c;\n  font-family: Futura, sans-serif; }\n#modal-hr.hr-text {\n  line-height: 1em;\n  position: relative;\n  outline: 0;\n  border: 0;\n  color: black;\n  text-align: center;\n  height: 1.5em;\n  opacity: .5; }\n#modal-hr.hr-text:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 1px; }\n#modal-hr.hr-text:after {\n    content: attr(data-content);\n    position: relative;\n    display: inline-block;\n    color: black;\n    padding: 0.5em;\n    line-height: 1.5em;\n    color: #818078; }\n.modal-height {\n  height: 7% !important; }\n.login-icon {\n  padding-right: 1%;\n  width: 1.7rem; }\n.center-text {\n  text-align: center; }\n.bold-text {\n  font-weight: bold; }\n.login-lightbox {\n  text-align: center; }\n.login-lightbox p a {\n    cursor: pointer; }\ninput {\n  margin-bottom: 2%; }\n.icon-input {\n  position: relative; }\n.icon-input i {\n    position: absolute;\n    right: 1rem;\n    top: 30%;\n    color: #A5A6A7; }\n.radio-icon {\n  position: relative; }\n.radio-icon i {\n    position: absolute;\n    color: #818384; }\ninput[type=radio]:checked ~ .check::before {\n  background: #FB775D; }\ninput[type=radio]:checked ~ label {\n  color: #FB775D; }\n.btn-facebook {\n  color: white;\n  background-color: #4062BB;\n  border-color: #4062BB; }\n.btn-facebook:hover, .btn-facebook:focus, .btn-facebook:active, .btn-facebook:link, .btn-facebook:visited {\n    background-color: #067BC2;\n    border-color: #067BC2; }\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = /** @class */ (function () {
    function SigninComponent(modalService, authService, userService, router) {
        this.modalService = modalService;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.callSignUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent.prototype.loadSignIn = function () {
        this.signIn(this.signInRef);
    };
    SigninComponent.prototype.signIn = function (content) {
        this.modalReference = this.modalService.open(content, { backdropClass: 'light-blue-backdrop', centered: true });
    };
    SigninComponent.prototype.loginSignUp = function ($event) {
        this.modalReference.close();
        // open sign up form
        this.callSignUp.emit($event);
    };
    SigninComponent.prototype.emailLogin = function (credentials) {
        var _this = this;
        this.authService.login(credentials)
            .subscribe(function (token) {
            if (token) {
                // console.log(token);
                localStorage.setItem('token', token);
                _this.modalReference.close();
                _this.router.navigate(['user-profile']);
                _this.userService.getUserInfo();
            }
        }, function (error) {
            console.log(error);
            _this.invalidLogin = true;
            // showing invalid login error for 2 seconds
            setInterval(function () {
                _this.invalidLogin = false;
            }, 2000);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signIn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SigninComponent.prototype, "signInRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginContinue'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SigninComponent.prototype, "loginContinue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], SigninComponent.prototype, "callSignUp", void 0);
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/auth/signin/signin.component.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #signUp let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"mat-elevation-z24\" fxLayout=\"column\" fxLayoutWrap fxLayoutAlign=\"start stretch\" fxLayoutGap=\"2%\" style=\"background: white; border-color: white; padding: 3%;\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\" style=\"text-align: right;\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n\r\n    <div class=\"col-xs-12 col-sm-10 col-md-12 col-sm-offset-1 col-md-offset-2\">\r\n\r\n      <form #f=\"ngForm\">\r\n        <div class=\"form-group\">\r\n\r\n          <div *ngIf=\"differentPasswords\" class=\"alert alert-danger\">\r\n            Passwords do not correspond\r\n          </div>\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"col-10\">\r\n              <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Your full name\" ngModel>\r\n            </div>\r\n            <div class=\"col-2\">\r\n                <!--<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">-->\r\n                    <!--<label class=\"btn btn-secondary active\">-->\r\n                      <!--<input type=\"radio\" name=\"sex\" id=\"female\" class=\"form-control\" value=\"0\" autocomplete=\"off\" ngModel>-->\r\n                      <!--<i class=\"fas fa-female\"></i>-->\r\n                    <!--</label>-->\r\n                    <!--<label class=\"btn btn-secondary\">-->\r\n                      <!--<input type=\"radio\" name=\"sex\" id=\"male\" class=\"form-control\" value=\"1\" autocomplete=\"off\" ngModel>-->\r\n                      <!--<i class=\"fas fa-male\"></i>-->\r\n                    <!--</label>-->\r\n                <!--</div>-->\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"radio\" ngModel name=\"sex\" id=\"female\" value=\"0\">\r\n                <label class=\"form-check-label\" for=\"female\">\r\n                  Female\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"radio\" ngModel name=\"sex\" id=\"male\" value=\"1\">\r\n                <label class=\"form-check-label\" for=\"male\">\r\n                  Male\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"col\">\r\n              <input type=\"text\" id=\"studyProgram\" name=\"study_program\" class=\"form-control\" placeholder=\"Study program &#f0e0;\" ngModel>\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" id=\"location\" name=\"location\" class=\"form-control\" placeholder=\"Location &#f0e0;\" ngModel>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <label for=\"email\" style=\"color: #333333; padding: 1%;\">Tell us your email address to find your account</label> -->\r\n          <div class=\"icon-input\">\r\n            <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email Address\" ngModel>\r\n            <i class=\"fas fa-envelope\"></i>\r\n          </div>\r\n\r\n          <div class=\"icon-input\">\r\n            <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Your password &#f0e0;\" ngModel>\r\n            <i class=\"fas fa-unlock-alt\"></i>\r\n          </div>\r\n          <div class=\"icon-input\">\r\n            <input type=\"password\" id=\"c_password\" name=\"c_password\" class=\"form-control\" placeholder=\"Retype password &#f0e0;\" ngModel>\r\n            <i class=\"fas fa-unlock-alt\"></i>\r\n          </div>\r\n\r\n          <button (click)=\"signUpAndLogin(f.value)\" class=\"btn btn-primary col-xs-12 col-sm-10\r\n            col-md-12 col-sm-offset-1 col-md-offset-2 mt-2\" style=\"background-color: #E96543;\r\n                      border-color: #E96543; color: white;\" type=\"submit\">Register\r\n          </button>\r\n        </div>\r\n\r\n        <hr id=\"modal-hr\" class=\"hr-text hr-style mb-4\" data-content=\"or\">\r\n\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-primary btn-facebook col-xs-12 col-sm-10\r\n            col-md-12 col-sm-offset-1 col-md-offset-2\" type=\"submit\">\r\n            <i class=\"fab fa-facebook login-icon\"></i>Log in with Facebook\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-primary col-xs-12 col-sm-10\r\n              col-md-12 col-sm-offset-1 col-md-offset-2\" style=\"background-color: white;\r\n                      border-color: #818078; color: #818078;\" type=\"submit\">\r\n            <img class=\"login-icon\" src=\"../../../assets/images/google-icon.png\" />Log in with Google\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"login-lightbox\">\r\n      <p>Already have an account?\r\n        <a class=\"bold-text\" style=\"color: #41B175\" (click)=\"signUpLogin()\">Sign in</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Roboto+Slab|Open+Sans:400italic,700italic,400,700);\n@import url(http://fonts.googleapis.com/css?family=Roboto+Slab|Open+Sans:400italic,700italic,400,700);\n.dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white; }\n.dark-modal .close {\n  color: white; }\n.light-blue-backdrop {\n  background-color: #6C757D; }\n.container-hr {\n  max-width: 50%;\n  margin: 4rem auto; }\n.hr-style {\n  text-align: center;\n  /*background: #fcfcfa;*/\n  color: #292b2c;\n  font-family: Futura, sans-serif; }\n#modal-hr.hr-text {\n  line-height: 1em;\n  position: relative;\n  outline: 0;\n  border: 0;\n  color: black;\n  text-align: center;\n  height: 1.5em;\n  opacity: .5; }\n#modal-hr.hr-text:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 1px; }\n#modal-hr.hr-text:after {\n    content: attr(data-content);\n    position: relative;\n    display: inline-block;\n    color: black;\n    padding: 0.5em;\n    line-height: 1.5em;\n    color: #818078; }\n.modal-height {\n  height: 7% !important; }\n.login-icon {\n  padding-right: 1%;\n  width: 1.7rem; }\n.center-text {\n  text-align: center; }\n.bold-text {\n  font-weight: bold; }\n.login-lightbox {\n  text-align: center; }\n.login-lightbox p a {\n    cursor: pointer; }\ninput {\n  margin-bottom: 2%; }\n.icon-input {\n  position: relative; }\n.icon-input i {\n    position: absolute;\n    right: 1rem;\n    top: 30%;\n    color: #A5A6A7; }\n.radio-icon {\n  position: relative; }\n.radio-icon i {\n    position: absolute;\n    color: #818384; }\ninput[type=radio]:checked ~ .check::before {\n  background: #FB775D; }\ninput[type=radio]:checked ~ label {\n  color: #FB775D; }\n.btn-facebook {\n  color: white;\n  background-color: #4062BB;\n  border-color: #4062BB; }\n.btn-facebook:hover, .btn-facebook:focus, .btn-facebook:active, .btn-facebook:link, .btn-facebook:visited {\n    background-color: #067BC2;\n    border-color: #067BC2; }\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(modalService, authService, router) {
        this.modalService = modalService;
        this.authService = authService;
        this.router = router;
        this.callSignIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.loadSignUp = function () {
        this.signUp(this.signUpRef);
    };
    SignupComponent.prototype.signUp = function (content) {
        this.modalReference = this.modalService.open(content, { backdropClass: 'light-blue-backdrop', centered: true });
    };
    SignupComponent.prototype.signUpLogin = function ($event) {
        this.modalReference.close();
        // open sign up form
        this.callSignIn.emit($event);
    };
    SignupComponent.prototype.signUpAndLogin = function (credentials) {
        var _this = this;
        console.log(credentials);
        this.authService.register(credentials)
            .subscribe(function (token) {
            if (token) {
                localStorage.setItem('token', token);
                _this.modalReference.close();
                _this.router.navigate(['user-profile']);
            }
        }, function (error) {
            console.log(error);
            _this.differentPasswords = true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('signUp'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], SignupComponent.prototype, "signUpRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "callSignIn", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/common/card/card.component.html":
/*!*************************************************!*\
  !*** ./src/app/common/card/card.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <img class=\"card-img-top\" *ngIf=\"displayPicture\" src=\"{{imageUrl}}\" alt=\"{{title}}\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">{{title}}</h5>\r\n    <!-- d-block text-truncate -->\r\n    <app-rating *ngIf=\"displayRating\" [currentRate]=\"rating\"></app-rating>\r\n    <p class=\"card-text\">{{summary}}</p>\r\n    <div *ngIf=\"displayTags\" class=\"tag-set\">\r\n      <span>Tags</span>\r\n      <mat-chip-list>\r\n        <mat-chip *ngFor=\"let tag of tags\">{{tag}}</mat-chip>\r\n      </mat-chip-list>\r\n    </div>\r\n    <div *ngIf=\"displaySkills\" class=\"skill-set\">\r\n      <span>Skills</span>\r\n      <mat-chip-list>\r\n        <mat-chip *ngFor=\"let skill of skills\">{{skill}}</mat-chip>\r\n      </mat-chip-list>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/card/card.component.scss":
/*!*************************************************!*\
  !*** ./src/app/common/card/card.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  transition: box-shadow .3s; }\n\n.card:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/common/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/app/common/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CardComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "summary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "imageUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CardComponent.prototype, "tags", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CardComponent.prototype, "skills", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "displayPicture", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "displayTags", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "displaySkills", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "displayRating", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bootstrap-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/common/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/common/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/common/dialog-overview/dialog-overview.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/common/dialog-overview/dialog-overview.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <!--{{data.name}} + {{data.animal}}-->\r\n  Content dialog-overview component\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/common/dialog-overview/dialog-overview.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/common/dialog-overview/dialog-overview.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/dialog-overview/dialog-overview.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/common/dialog-overview/dialog-overview.component.ts ***!
  \*********************************************************************/
/*! exports provided: DialogOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewComponent", function() { return DialogOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogOverviewComponent = /** @class */ (function () {
    function DialogOverviewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewComponent.prototype.ngOnInit = function () {
    };
    DialogOverviewComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-overview',
            template: __webpack_require__(/*! ./dialog-overview.component.html */ "./src/app/common/dialog-overview/dialog-overview.component.html"),
            styles: [__webpack_require__(/*! ./dialog-overview.component.scss */ "./src/app/common/dialog-overview/dialog-overview.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewComponent);
    return DialogOverviewComponent;
}());



/***/ }),

/***/ "./src/app/common/dialog/dialog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/dialog/dialog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dialog works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/common/dialog/dialog.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/dialog/dialog.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/dialog/dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog-overview/dialog-overview.component */ "./src/app/common/dialog-overview/dialog-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_2__["DialogOverviewComponent"], {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/common/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/common/dialog/dialog.component.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/common/enums/star-rating.ts":
/*!*********************************************!*\
  !*** ./src/app/common/enums/star-rating.ts ***!
  \*********************************************/
/*! exports provided: StarRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRating", function() { return StarRating; });
var StarRating;
(function (StarRating) {
    StarRating[StarRating["Rating_1"] = 1] = "Rating_1";
    StarRating[StarRating["Rating_2"] = 2] = "Rating_2";
    StarRating[StarRating["Rating_3"] = 3] = "Rating_3";
    StarRating[StarRating["Rating_4"] = 4] = "Rating_4";
    StarRating[StarRating["Rating_5"] = 5] = "Rating_5";
})(StarRating || (StarRating = {}));


/***/ }),

/***/ "./src/app/common/errors/app-error-handler.ts":
/*!****************************************************!*\
  !*** ./src/app/common/errors/app-error-handler.ts ***!
  \****************************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        // alert('Unexpected error');
        // console.log(error);
    };
    return AppErrorHandler;
}());



/***/ }),

/***/ "./src/app/common/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/common/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    // Search courses by name
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            console.warn('it: ', it.top_tags.tag);
            return it.name.toLowerCase().includes(searchText)
                || it.summary.toLowerCase().includes(searchText)
                || it.top_tags.toString().toLowerCase().includes(searchText);
            // || this.test(it, searchText);
            // || this.test(it, searchText);
            // || it.top_tags.forEach(element => {
            //   element.tag.toLowerCase().includes(searchText);
            //   console.warn('it: ', element.tag);
            // });
        });
    };
    FilterPipe.prototype.test = function (it, searchText) {
        return it.top_tags.filter(function (item) {
            item.tag.toLowerCase().includes(searchText);
            console.warn('it: ', item.tag);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/common/filters/by-professor/by-professor.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/common/filters/by-professor/by-professor.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"professor-chip-list\">\r\n  <mat-chip-list #chipList>\r\n    <mat-chip\r\n      *ngFor=\"let professor of professors\"\r\n      [selectable]=\"selectable\"\r\n      [removable]=\"removable\"\r\n      (removed)=\"remove(professor.id)\">\r\n      {{professor.name}}\r\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <input\r\n      placeholder=\"type in professor name...\"\r\n      #professorInput\r\n      (input)=\"onInputQuickSearch($event.target.value)\"\r\n      [formControl]=\"professorCtrl\"\r\n      [matAutocomplete]=\"auto\"\r\n      [matChipInputFor]=\"chipList\"\r\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n      [matChipInputAddOnBlur]=\"addOnBlur\">\r\n  </mat-chip-list>\r\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n    <mat-option *ngFor=\"let professor of professorsHints\" [value]=\"professor\">\r\n      {{professor.name}}\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./src/app/common/filters/by-professor/by-professor.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/common/filters/by-professor/by-professor.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".professor-chip-list {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/common/filters/by-professor/by-professor.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/common/filters/by-professor/by-professor.component.ts ***!
  \***********************************************************************/
/*! exports provided: ByProfessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByProfessorComponent", function() { return ByProfessorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _services_quick_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/quick-search.service */ "./src/app/services/quick-search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ByProfessorComponent = /** @class */ (function () {
    function ByProfessorComponent(quickSearch) {
        this.quickSearch = quickSearch;
        // mat design vars
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.professorCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        // professors vars
        this.addProfessor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.professors = [];
        this.professorsIds = [];
    }
    ByProfessorComponent.prototype.ngOnInit = function () {
    };
    ByProfessorComponent.prototype.remove = function (professorId) {
        console.log('removed');
        var index = this.professorsIds.indexOf(professorId);
        if (index >= 0) {
            this.professorsIds.splice(index, 1);
            this.professors.splice(index, 1);
            this.addProfessor.emit(this.professorsIds);
        }
    };
    ByProfessorComponent.prototype.selected = function (event) {
        // check if professor is already on the list exists
        if (!this.professorsIds.includes(event.option.value.id)) {
            this.professors.push(event.option.value);
            this.professorsIds.push(event.option.value.id);
            this.addProfessor.emit(this.professorsIds);
        }
        // nullifying variables
        this.professorInput.nativeElement.value = '';
        this.professorCtrl.setValue(null);
    };
    ByProfessorComponent.prototype.onInputQuickSearch = function (professor) {
        var _this = this;
        this.quickSearch.quickSearchProfessor(professor)
            .debounceTime(500)
            .subscribe(function (hints) {
            _this.professorsHints = hints;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ByProfessorComponent.prototype, "addProfessor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('professorInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ByProfessorComponent.prototype, "professorInput", void 0);
    ByProfessorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-by-professor',
            template: __webpack_require__(/*! ./by-professor.component.html */ "./src/app/common/filters/by-professor/by-professor.component.html"),
            styles: [__webpack_require__(/*! ./by-professor.component.scss */ "./src/app/common/filters/by-professor/by-professor.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_quick_search_service__WEBPACK_IMPORTED_MODULE_3__["QuickSearchService"]])
    ], ByProfessorComponent);
    return ByProfessorComponent;
}());



/***/ }),

/***/ "./src/app/common/helpers/error-interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/helpers/error-interceptor.ts ***!
  \*****************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authService) {
        this.authService = authService;
    }
    ErrorInterceptor.prototype.intercept = function (request, handler) {
        var _this = this;
        return handler.handle(request).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                _this.authService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/common/helpers/jwt-interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/common/helpers/jwt-interceptor.ts ***!
  \***************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, handler) {
        // add authorization header with jwt token if available
        var token = localStorage.getItem('token');
        // console.warn('token: ', token);
        if (token) {
            request = request.clone({
                setHeaders: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + token
                }
            });
        }
        return handler.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/common/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/loader/loader.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\r\n    <div class=\"loading-bar\"></div>\r\n    <div class=\"loading-bar\"></div>\r\n    <div class=\"loading-bar\"></div>\r\n    <div class=\"loading-bar\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/loader/loader.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/loader/loader.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  position: absolute;\n  top: 50%;\n  left: 50%; }\n\n.loading-bar {\n  display: inline-block;\n  width: 4px;\n  height: 18px;\n  border-radius: 4px;\n  -webkit-animation: loading 1s ease-in-out infinite;\n          animation: loading 1s ease-in-out infinite; }\n\n.loading-bar:nth-child(1) {\n  background-color: #3498db;\n  -webkit-animation-delay: 0;\n          animation-delay: 0; }\n\n.loading-bar:nth-child(2) {\n  background-color: #c0392b;\n  -webkit-animation-delay: 0.09s;\n          animation-delay: 0.09s; }\n\n.loading-bar:nth-child(3) {\n  background-color: #f1c40f;\n  -webkit-animation-delay: .18s;\n          animation-delay: .18s; }\n\n.loading-bar:nth-child(4) {\n  background-color: #27ae60;\n  -webkit-animation-delay: .27s;\n          animation-delay: .27s; }\n\n@-webkit-keyframes loading {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  20% {\n    -webkit-transform: scale(1, 2.2);\n            transform: scale(1, 2.2); }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes loading {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  20% {\n    -webkit-transform: scale(1, 2.2);\n            transform: scale(1, 2.2); }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n"

/***/ }),

/***/ "./src/app/common/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/common/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/common/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/common/long-card/long-card.component.html":
/*!***********************************************************!*\
  !*** ./src/app/common/long-card/long-card.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card flex-md-row mb-0\"\r\nstyle=\"cursor: pointer;\"\r\n[routerLink]=\"['/courses', id]\"\r\nrouterLinkActive=\"active\" [ngClass]=\"cardstyle === 'rounded' ? 'card': 'card-edgy'\">\r\n  <img class=\"card-img-left p-3 col-md-3 flex-auto d-none d-lg-block\" [src]=\"course.imageUrl === undefined ? getRandomImage() : course.imageUrl\">\r\n  <div class=\"card-body flex-column d-flex justify-content-center\">\r\n    <div class=\"col-xs-2\" style=\"float: right;\">\r\n      <button class=\"btn bookmark\" data-toggle=\"tooltip\" [ngClass]=\"bookmarked ? 'btn-secondary': 'btn-primary'\"\r\n      *ngIf=\"bookmark\" (click)=\"bookmarkCourse(course.id)\" (click)=\"$event.stopPropagation()\" >\r\n        <i placement=\"bottom\" ngbTooltip=\"Bookmark course\" class=\"fas fa-pencil-alt\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"col-xs-9\"><strong class=\"d-inline-block mb-2 text-theme\">{{ course.name }}</strong></div>\r\n    <div class=\"row mb-2 mt-2\">\r\n    <div class=\"col-md-5\">\r\n      <app-rating #rating [currentRate]=\"course.avg_rating\"></app-rating>\r\n    </div>\r\n    <div class=\"col-md-6 mb-1 mt-2 text-muted\">{{course.reviews.length}} Reviews</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 mb-1 mt-1 pb-2\">\r\n      <mat-chip-list>\r\n        <mat-chip *ngFor=\"let tag of course.top_tags\">{{ tag.tag }}</mat-chip>\r\n      </mat-chip-list>\r\n    </div>\r\n  </div>\r\n    <p class=\"card-text mb-auto\">{{ course.summary }}</p>\r\n    <!-- <a href=\"#\">Continue reading</a> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/long-card/long-card.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/common/long-card/long-card.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Roboto+Slab|Open+Sans:400italic,700italic,400,700);\n.card {\n  transition: box-shadow .3s;\n  border-radius: 1rem; }\n.card:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2); }\n.card-img-left {\n  display: flex;\n  flex-direction: column;\n  border-top-left-radius: 2rem;\n  border-bottom-left-radius: 2rem;\n  height: 20%;\n  width: 20%; }\n.card-edgy {\n  transition: box-shadow .3s;\n  border-radius: 0rem;\n  border-width: 0.01rem; }\n.bookmark {\n  width: 2.5rem;\n  float: right; }\n"

/***/ }),

/***/ "./src/app/common/long-card/long-card.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/long-card/long-card.component.ts ***!
  \*********************************************************/
/*! exports provided: LongCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongCardComponent", function() { return LongCardComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_course_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/course.model */ "./src/app/models/course.model.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rating/rating.component */ "./src/app/common/rating/rating.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LongCardComponent = /** @class */ (function () {
    function LongCardComponent(router) {
        this.router = router;
        this.addBookmark = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // array with images to randomly assign image for a card
        this.imgArr = ['assets/images/courses.jpg', 'assets/images/profs.jpg', 'assets/images/course-rate.jpg'];
    }
    LongCardComponent.prototype.ngOnInit = function () { };
    LongCardComponent.prototype.bookmarkCourse = function (id) {
        this.addBookmark.emit(id);
    };
    LongCardComponent.prototype.getRandomImage = function () {
        return this.imgArr[Math.floor(Math.random() * this.imgArr.length)];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], LongCardComponent.prototype, "cardImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _models_course_model__WEBPACK_IMPORTED_MODULE_2__["Course"])
    ], LongCardComponent.prototype, "course", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], LongCardComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], LongCardComponent.prototype, "cardstyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], LongCardComponent.prototype, "bookmarked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], LongCardComponent.prototype, "bookmark", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], LongCardComponent.prototype, "addBookmark", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rating'),
        __metadata("design:type", _rating_rating_component__WEBPACK_IMPORTED_MODULE_3__["RatingComponent"])
    ], LongCardComponent.prototype, "rating", void 0);
    LongCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-long-card',
            template: __webpack_require__(/*! ./long-card.component.html */ "./src/app/common/long-card/long-card.component.html"),
            styles: [__webpack_require__(/*! ./long-card.component.scss */ "./src/app/common/long-card/long-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], LongCardComponent);
    return LongCardComponent;
}());



/***/ }),

/***/ "./src/app/common/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/common/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-elevation-z3 header\" style=\"background-color: white;\">\r\n  <mat-toolbar-row>\r\n\r\n    <mat-menu #appMenu=\"matMenu\" class=\"navbar navbar-expand-lg navbar-light fixed-top\">\r\n      <button mat-menu-item [routerLink]=\"['/dashboard']\">Dashboard</button>\r\n      <button mat-menu-item>Settings</button>\r\n      <button mat-menu-item>Help</button>\r\n    </mat-menu>\r\n\r\n    <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n\r\n    <span class=\"company\"><a [routerLink]=\"['']\">Evalooni</a></span>\r\n\r\n    <span class=\"spacer\"></span>\r\n    <div class=\"custom-search\">\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-icon matPrefix>search</mat-icon>\r\n        <mat-label>Search</mat-label>\r\n        <input matInput placeholder=\"\">\r\n      </mat-form-field>\r\n    </div>\r\n    <!--<span class=\"spacer-small\"></span>-->\r\n    <!--<images class=\"menu-icon-custom\" src=\"../../assets/images/flag-DE.png\"/>-->\r\n    <!--<mat-icon class=\"menu-icon\">account_circle</mat-icon>-->\r\n\r\n    <!--<span class=\"spacer\"></span>-->\r\n    <!--<button mat-icon-button class=\"mat-elevation-z5 menu-icon\" [routerLink]=\"['/signup']\">-->\r\n    <!--<button mat-icon-button class=\"mat-elevation-z5 menu-icon\" [routerLink]=\"['/signin']\">-->\r\n\r\n    <button mat-icon-button class=\"mat-elevation-z5 menu-icon\"\r\n            (click)=\"signIn(loginOrSignup)\">\r\n      <!--(click)=\"openDialog()\">-->\r\n\r\n      <mat-icon>account_circle</mat-icon>\r\n    </button>\r\n\r\n    <!--<ng-template #content let-c=\"close\" let-d=\"dismiss\">-->\r\n    <!--<div class=\"modal-header\">-->\r\n    <!--<h4 class=\"modal-title\">Log in</h4>-->\r\n    <!--<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">-->\r\n    <!--<span aria-hidden=\"true\">&times;</span>-->\r\n    <!--</button>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"modal-body\">-->\r\n    <!--<p>One fine body&hellip;</p>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"modal-footer\">-->\r\n    <!--<button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>-->\r\n    <!--</div>-->\r\n    <!--</ng-template>-->\r\n\r\n    <ng-template #loginOrSignup let-c=\"close\" let-d=\"dismiss\">\r\n      <div class=\"mat-elevation-z24\" fxLayout=\"column\"\r\n           fxLayoutWrap fxLayoutAlign=\"start stretch\" fxLayoutGap=\"2%\"\r\n           style=\"background: white; border-color: white; padding: 3%;\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\"\r\n                (click)=\"d('Cross click')\" style=\"text-align: right;\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <!--<div class=\"row\">-->\r\n        <div class=\"col-xs-12 col-sm-10 col-md-12 col-sm-offset-1 col-md-offset-2\">\r\n          <!--<form (ngSubmit)=\"onSignUp(f)\" #f=\"ngForm\">-->\r\n          <form #f=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <label for=\"email\" style=\"color: #333333; padding: 1%;\">Tell us your email address to find your account</label>\r\n              <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\"\r\n                     placeholder=\"Email Address\" style=\"margin-bottom: 2%;\" ngModel>\r\n              <button class=\"btn btn-primary col-xs-12 col-sm-10\r\n            col-md-12 col-sm-offset-1 col-md-offset-2\"\r\n                      style=\"background-color: #E96543;\r\n                      border-color: #E96543;\"\r\n                      type=\"submit\">\r\n                <!--(click)=\"signInContinue(loginContinue)\" -->\r\n                Next\r\n              </button>\r\n            </div>\r\n\r\n            <hr id=\"modal-hr\" class=\"hr-text hr-style\" data-content=\"or\">\r\n\r\n            <div class=\"form-group\">\r\n              <button class=\"btn btn-primary col-xs-12 col-sm-10\r\n            col-md-12 col-sm-offset-1 col-md-offset-2\" type=\"submit\">\r\n                <i class=\"fab fa-facebook login-icon\"></i>Log in with Facebook\r\n              </button>\r\n            </div>\r\n\r\n            <!--<div class=\"form-group\">-->\r\n            <!--<label for=\"password\">Password</label>-->\r\n            <!--<input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" ngModel>-->\r\n            <!--</div>-->\r\n\r\n            <div class=\"form-group\">\r\n              <button class=\"btn btn-primary col-xs-12 col-sm-10\r\n              col-md-12 col-sm-offset-1 col-md-offset-2\"\r\n                      style=\"background-color: white;\r\n                      border-color: #818078; color: #818078;\"\r\n                      type=\"submit\"><img class=\"login-icon\"\r\n                src=\"../../../assets/images/google-icon.png\" />Log in with Google\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <p style=\"text-align: center;\">Don’t have an account? Sign up</p>\r\n      </div>\r\n\r\n\r\n    </ng-template>\r\n\r\n    <ng-template #loginContinue let-c=\"close\" let-d=\"dismiss\">\r\n      <div class=\"mat-elevation-z24\" fxLayout=\"column\"\r\n           fxLayoutWrap fxLayoutAlign=\"start stretch\" fxLayoutGap=\"2%\"\r\n           style=\"background: white; border-color: white; padding: 3%;\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\"\r\n                (click)=\"d('Cross click')\" style=\"text-align: right;\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <div class=\"col-xs-12 col-sm-10 col-md-12 col-sm-offset-1 col-md-offset-2\">\r\n          <form #f=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <label class=\"center-text\"><h4>Welcome back, [Name]</h4></label>\r\n              <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\r\n                     placeholder=\"Password\" style=\"margin-bottom: 2%;\" ngModel>\r\n              <button class=\"btn btn-primary col-xs-12 col-sm-10\r\n            col-md-12 col-sm-offset-1 col-md-offset-2\"\r\n                      style=\"background-color: #E96543;\r\n                      border-color: #E96543;\"\r\n                      type=\"submit\">Continue\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <p style=\"text-align: center;\">Forgot password?</p>\r\n      </div>\r\n    </ng-template>\r\n\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n"

/***/ }),

/***/ "./src/app/common/menu/menu.component.scss":
/*!*************************************************!*\
  !*** ./src/app/common/menu/menu.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white; }\n\n.dark-modal .close {\n  color: white; }\n\n.light-blue-backdrop {\n  background-color: #6C757D; }\n\n.container-hr {\n  max-width: 50%;\n  margin: 40px auto; }\n\n.hr-style {\n  text-align: center;\n  /*background: #fcfcfa;*/\n  color: #292b2c;\n  font-family: Futura, sans-serif; }\n\n#modal-hr.hr-text {\n  line-height: 1em;\n  position: relative;\n  outline: 0;\n  border: 0;\n  color: black;\n  text-align: center;\n  height: 1.5em;\n  opacity: .5; }\n\n#modal-hr.hr-text:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 1px; }\n\n#modal-hr.hr-text:after {\n    content: attr(data-content);\n    position: relative;\n    display: inline-block;\n    color: black;\n    padding: 0.5em;\n    line-height: 1.5em;\n    color: #818078; }\n\n.modal-height {\n  height: 7% !important; }\n\n.login-icon {\n  padding-right: 1%;\n  width: 25px; }\n\n.center-text {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/common/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/common/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(modalService) {
        this.modalService = modalService;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.signIn = function (content) {
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop', centered: true });
    };
    MenuComponent.prototype.signInContinue = function (content) {
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop', centered: true });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loginOrSignup'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], MenuComponent.prototype, "loginOrSignup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loginContinue'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], MenuComponent.prototype, "loginContinue", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/common/menu/menu.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/common/menu/menu.component.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/common/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-white fixed-top shadow-sm\">\r\n    <a class=\"navbar-brand float-mobile\" routerLink=\"\">\r\n      <img class=\"logo-home\" src=\"/assets/images/evalooni-logo.png\" />\r\n    </a>\r\n\r\n    <div id=\"fixed-search\">\r\n        <form class=\"form-inline\" (ngSubmit)=\"searchCourse(form)\" #form=\"ngForm\">\r\n            <div class=\"search-form-field icon-input\">\r\n              <input type=\"text\" placeholder=\"Search courses\" matInput \r\n              class=\"form-control rounded-search search-width\"\r\n              [matAutocomplete]=\"auto\" (input)=\"onInputSearch($event.target.value)\" \r\n              name=\"searchable\" [(ngModel)]=\"searchable\" autocomplete=\"off\">\r\n              <i class=\"fas fa-search\"></i>\r\n              <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let hint of searchHints\" [routerLink]=\"['courses', hint.id]\">\r\n                  {{ hint.name }}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </div>\r\n          </form>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse float-right\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto navbar-mobile-width\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/universities\">Universities</a>\r\n        </li>\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"/courses\">Courses</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/professors\">Professors</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link disabled\" href=\"#\">Companies</a>\r\n        </li>\r\n      </ul>\r\n      \r\n    <div class=\"hidden mt-2\" *ngIf=\"authService.isLoggenIn(); then loggedin else loggedout\"></div>\r\n    <ng-template #loggedout>\r\n      <li ngbDropdown class=\"nav-item navbar-nav dropdown user-mobile\">\r\n        <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Login</a>\r\n        <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" x-placement=\"bottom-start\" style=\"position: absolute; transform: translate3d(-5rem, 2px, 0px);\r\n                                top: 0px; left: 0px; will-change: transform;\">\r\n          <a class=\"dropdown-item\" (click)=\"loadSignInComponent()\">Log in</a>\r\n          <a class=\"dropdown-item\" (click)=\"loadSignUpComponent()\">Sign up</a>\r\n        </div>\r\n      </li>\r\n    </ng-template>\r\n    <ng-template #loggedin>\r\n      <li ngbDropdown class=\"nav-item dropdown clearfix navbar-nav user-mobile\">\r\n        <span class=\"p-2 bg-white rounded float-left\">\r\n          <img class=\"mr-3 rounded-circle border border-white shadow float-right ml-3 mr-2 mb-3\" style=\"height: 50px;\" [src]=\"getUserImage()\" alt=\"profile photo\"\r\n            [routerLink]=\"['/user-profile']\" />\r\n            <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{getUserName()}} </a>\r\n        </span>\r\n        <div ngbDropdownMenu class=\"dropdown-menu position-mobile\" aria-labelledby=\"dropdown01\" \r\n        x-placement=\"bottom-start\" style=\"position: absolute; transform: translate3d(-5rem, 2px, 0px);\r\n                                top: 0px; left: 0px; will-change: transform;\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/user-profile']\">Profile</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/user-edit-profile']\">Settings</a>\r\n          <a class=\"dropdown-item\" (click)=\"logout()\">Log out</a>\r\n        </div>\r\n      </li>\r\n    </ng-template>\r\n\r\n    </div>\r\n\r\n      <div id=\"fixed-div\" class=\"float-right\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\r\n          data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <div class=\"navbar-toggler-icon\"></div>\r\n        </button>\r\n      </div>\r\n\r\n    <app-signin (callSignUp)=\"loadSignUpComponent()\"></app-signin>\r\n    <app-signup (callSignIn)=\"loadSignInComponent()\"></app-signup>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle {\n  cursor: pointer; }\n\n.logo-home {\n  width: 15rem; }\n\nimg:hover, :focus {\n  outline: none;\n  cursor: pointer; }\n\n.icon-input {\n  position: relative; }\n\n.icon-input i {\n    position: absolute;\n    right: 4rem;\n    top: 0.8rem; }\n\n#fixed-div {\n  position: fixed;\n  top: 2.2em;\n  right: 2em; }\n\n#fixed-search {\n  position: fixed;\n  top: 2.2em;\n  right: 12em; }\n\n.navbar-user {\n  margin-right: 0 !important;\n  padding-right: 0 !important; }\n\n.rounded-search {\n  border-radius: 1rem !important;\n  border: 1px solid #B7B8B9 !important;\n  padding: 0.6rem; }\n\n.search-width {\n  width: 20rem !important;\n  margin-right: 3rem; }\n\n@media (max-width: 576px) {\n  .navbar-mobile-width {\n    font-size: 1.5rem !important;\n    padding-left: 2rem !important; }\n  .user-mobile {\n    padding-left: 2rem !important; }\n  .float-mobile {\n    padding-right: 10rem !important;\n    margin-right: 7rem !important; }\n  .search-width {\n    width: 14rem !important;\n    margin-right: 2rem; }\n  .icon-input {\n    position: relative; }\n    .icon-input i {\n      position: absolute;\n      right: 3rem;\n      top: 25%; }\n  .position-mobile {\n    margin-left: 2rem !important; } }\n"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var _services_search_control_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/search-control.service */ "./src/app/services/search-control.service.ts");
/* harmony import */ var _services_quick_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/quick-search.service */ "./src/app/services/quick-search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, userService, searchControlService, quickSearch) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.searchControlService = searchControlService;
        this.quickSearch = quickSearch;
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.getUserName = function () {
        return this.userService.getCurrentUserName();
    };
    NavbarComponent.prototype.getUserImage = function () {
        return this.userService.getCurrentUserImage();
    };
    NavbarComponent.prototype.loadSignInComponent = function () {
        this.signIn.loadSignIn();
    };
    NavbarComponent.prototype.loadSignUpComponent = function () {
        this.signUp.loadSignUp();
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavbarComponent.prototype.onInputSearch = function () {
        var _this = this;
        this.quickSearch.quickSearchCourse(this.searchable)
            .debounceTime(500)
            .subscribe(function (data) {
            _this.searchHints = data;
        });
    };
    NavbarComponent.prototype.searchCourse = function () {
        this.searchControlService.setSearchQuery(this.searchable);
        this.router.navigate(['courses']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]),
        __metadata("design:type", _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"])
    ], NavbarComponent.prototype, "signIn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]),
        __metadata("design:type", _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"])
    ], NavbarComponent.prototype, "signUp", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/common/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/common/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"],
            _services_search_control_service__WEBPACK_IMPORTED_MODULE_7__["SearchControlService"],
            _services_quick_search_service__WEBPACK_IMPORTED_MODULE_8__["QuickSearchService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/common/paginator/paginator.component.html":
/*!***********************************************************!*\
  !*** ./src/app/common/paginator/paginator.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"...\" id=\"pagination\">\r\n  <ul class=\"pagination\">\r\n    <li class=\"page-item disabled\">\r\n      <a class=\"page-link\" tabindex=\"-1\" (click)=\"onPrev()\" class=\"btn\" [class.disabled]=\"page === 1 || loading\">Previous</a>\r\n    </li>\r\n    <!--<li class=\"page-item\"><a class=\"page-link\" *ngFor=\"let pageNum of getPages()\" [class.active]=\"pageNum == page\" (click)=\"onPage(pageNum)\">{{pageNum}}</a></li>-->\r\n    <li class=\"page-item\" *ngFor=\"let pageNum of getPages()\" [class.active]=\"pageNum == page\">\r\n      <a class=\"page-link\" (click)=\"onPage(pageNum)\">{{pageNum}} <span class=\"sr-only\">(current)</span></a>\r\n    </li>\r\n    <li class=\"page-item\">\r\n      <a class=\"page-link\" (click)=\"onNext()\" class=\"btn\" [class.disabled]=\"lastPage() || loading\">Next</a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/common/paginator/paginator.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/common/paginator/paginator.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pagination {\n  padding-top: 3rem; }\n"

/***/ }),

/***/ "./src/app/common/paginator/paginator.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/paginator/paginator.component.ts ***!
  \*********************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginatorComponent = /** @class */ (function () {
    function PaginatorComponent() {
        this.goPrev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginatorComponent.prototype.ngOnInit = function () {
    };
    PaginatorComponent.prototype.getMin = function () {
        return ((this.perPage * this.page) - this.perPage) + 1;
    };
    PaginatorComponent.prototype.getMax = function () {
        var max = this.perPage * this.page;
        if (max > this.count) {
            max = this.count;
        }
        return max;
    };
    PaginatorComponent.prototype.onPage = function (n) {
        this.goPage.emit(n);
    };
    PaginatorComponent.prototype.onPrev = function () {
        this.goPrev.emit(true);
    };
    PaginatorComponent.prototype.onNext = function () {
        this.goNext.emit(true);
    };
    PaginatorComponent.prototype.totalPages = function () {
        return Math.ceil(this.count / this.perPage) || 0;
    };
    PaginatorComponent.prototype.lastPage = function () {
        return this.perPage * this.page > this.count;
    };
    PaginatorComponent.prototype.getPages = function () {
        var c = Math.ceil(this.count / this.perPage);
        var p = this.page || 1;
        var pagesToShow = this.pagesToShow || 9;
        var pages = [];
        pages.push(p);
        var times = pagesToShow - 1;
        for (var i = 0; i < times; i++) {
            if (pages.length < pagesToShow) {
                if (Math.min.apply(null, pages) > 1) {
                    pages.push(Math.min.apply(null, pages) - 1);
                }
            }
            if (pages.length < pagesToShow) {
                if (Math.max.apply(null, pages) < c) {
                    pages.push(Math.max.apply(null, pages) + 1);
                }
            }
        }
        pages.sort(function (a, b) { return a - b; });
        return pages;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginatorComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginatorComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginatorComponent.prototype, "perPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginatorComponent.prototype, "pagesToShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PaginatorComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginatorComponent.prototype, "goPrev", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginatorComponent.prototype, "goNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginatorComponent.prototype, "goPage", void 0);
    PaginatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paginator',
            template: __webpack_require__(/*! ./paginator.component.html */ "./src/app/common/paginator/paginator.component.html"),
            styles: [__webpack_require__(/*! ./paginator.component.scss */ "./src/app/common/paginator/paginator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginatorComponent);
    return PaginatorComponent;
}());



/***/ }),

/***/ "./src/app/common/rate-display/rate-display.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/common/rate-display/rate-display.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-rating [(rate)]=\"currentRate\" [readonly]=\"true\" max=\"5\">\r\n    <ng-template let-fill=\"fill\" let-index=\"index\" style=\"width: 50px\">\r\n      <!--<span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>-->\r\n      <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\r\n    </ng-template>\r\n  </ngb-rating>\r\n"

/***/ }),

/***/ "./src/app/common/rate-display/rate-display.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/rate-display/rate-display.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".star {\n  position: relative;\n  display: inline-block;\n  font-size: 1.5rem;\n  color: #d3d3d3; }\n\n.full {\n  color: red; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: red; }\n\n.filled {\n  color: gold; }\n\n.bad {\n  color: #deb0b0; }\n\n.filled.bad {\n  color: #ff1e1e; }\n\n.courseItem {\n  margin: 5%; }\n\n:focus {\n  outline: none !important; }\n"

/***/ }),

/***/ "./src/app/common/rate-display/rate-display.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/rate-display/rate-display.component.ts ***!
  \***************************************************************/
/*! exports provided: RateDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateDisplayComponent", function() { return RateDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RateDisplayComponent = /** @class */ (function () {
    function RateDisplayComponent() {
        this.currentRate = 0;
    }
    RateDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RateDisplayComponent.prototype, "currentRate", void 0);
    RateDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rate-display',
            template: __webpack_require__(/*! ./rate-display.component.html */ "./src/app/common/rate-display/rate-display.component.html"),
            styles: [__webpack_require__(/*! ./rate-display.component.scss */ "./src/app/common/rate-display/rate-display.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RateDisplayComponent);
    return RateDisplayComponent;
}());



/***/ }),

/***/ "./src/app/common/rate/rate.component.html":
/*!*************************************************!*\
  !*** ./src/app/common/rate/rate.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-rating [(rate)]=\"currentRate\" (rateChange)=\"onRateChange()\" max=\"5\">\r\n  <ng-template let-fill=\"fill\" let-index=\"index\" style=\"width: 50px\">\r\n    <!--<span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>-->\r\n    <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\r\n  </ng-template>\r\n</ngb-rating>\r\n<!-- <pre>Rate: <b>{{currentRate}}</b></pre> -->\r\n"

/***/ }),

/***/ "./src/app/common/rate/rate.component.scss":
/*!*************************************************!*\
  !*** ./src/app/common/rate/rate.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".star {\n  position: relative;\n  display: inline-block;\n  font-size: 1.5rem;\n  color: #d3d3d3; }\n\n.full {\n  color: red; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: red; }\n\n.filled {\n  color: gold; }\n\n.bad {\n  color: #deb0b0; }\n\n.filled.bad {\n  color: #ff1e1e; }\n\n.courseItem {\n  margin: 5%; }\n\n:focus {\n  outline: none !important; }\n"

/***/ }),

/***/ "./src/app/common/rate/rate.component.ts":
/*!***********************************************!*\
  !*** ./src/app/common/rate/rate.component.ts ***!
  \***********************************************/
/*! exports provided: RateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateComponent", function() { return RateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RateComponent = /** @class */ (function () {
    function RateComponent() {
        this.currentRate = 0;
        this.currentRateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RateComponent.prototype.ngOnInit = function () {
    };
    RateComponent.prototype.onRateChange = function () {
        this.currentRateChange.emit(this.currentRate);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RateComponent.prototype, "currentRate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RateComponent.prototype, "currentRateChange", void 0);
    RateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rate',
            template: __webpack_require__(/*! ./rate.component.html */ "./src/app/common/rate/rate.component.html"),
            styles: [__webpack_require__(/*! ./rate.component.scss */ "./src/app/common/rate/rate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RateComponent);
    return RateComponent;
}());



/***/ }),

/***/ "./src/app/common/rating/rating.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/rating/rating.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ngb-rating [(rate)]=\"currentRate\" max=\"5\" [readonly]=\"true\">\r\n  <ng-template let-fill=\"fill\" let-index=\"index\">\r\n    <!--<span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>-->\r\n    <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\r\n  </ng-template>\r\n</ngb-rating>\r\n<!--<hr class=\"courseItem\">-->\r\n<!--<pre class=\"courseItem\">Rate: <b>{{currentRate}}</b> based on {{rateCount}} reviews</pre>-->\r\n<!-- <pre class=\"courseItem\" style=\"margin-left: 2em;\">Rate: <b>{{currentRate}}</b></pre> -->\r\n"

/***/ }),

/***/ "./src/app/common/rating/rating.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/rating/rating.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".span.sr-only:focus, ngb-rating:hover, ngb-rating:active {\n  box-shadow: none !important;\n  outline-color: white;\n  border-color: white;\n  border-style: none; }\n\n.star {\n  position: relative;\n  display: inline-block;\n  font-size: 1.5rem;\n  color: #d3d3d3; }\n\n.full {\n  color: red; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: red; }\n\n.filled {\n  color: gold; }\n\n.bad {\n  color: #deb0b0; }\n\n.filled.bad {\n  color: #ff1e1e; }\n\n.courseItem {\n  margin: 5%; }\n\n:focus {\n  outline: none !important; }\n"

/***/ }),

/***/ "./src/app/common/rating/rating.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/rating/rating.component.ts ***!
  \***************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.rateCount = 8;
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "currentRate", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/common/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/app/common/rating/rating.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/common/slider/slider.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/slider/slider.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-slider\r\n  thumbLabel=\"true\"\r\n  [displayWith]=\"formatLabel\"\r\n  [disabled]=\"disabled\"\r\n  [min]=\"min\"\r\n  [max]=\"max\"\r\n  [step]=\"step\"\r\n  [(ngModel)]=\"value\">\r\n</mat-slider>\r\n"

/***/ }),

/***/ "./src/app/common/slider/slider.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/slider/slider.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n::ng-deep .mat-slider-thumb-label {\n  -webkit-transform: rotate(45deg) !important;\n          transform: rotate(45deg) !important;\n  border-radius: 50% 50% 0 !important; }\n::ng-deep .mat-slider-thumb {\n  -webkit-transform: scale(0) !important;\n          transform: scale(0) !important; }\n::ng-deep .mat-slider-thumb-label-text {\n  opacity: 1 !important; }\n::ng-deep .mat-slider-min-value .mat-slider-focus-ring {\n  background-color: #A5A6A7 !important; }\n::ng-deep .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n::ng-deep .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: #A5A6A7 !important; }\n::ng-deep .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n::ng-deep .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: #A5A6A7 !important; }\n"

/***/ }),

/***/ "./src/app/common/slider/slider.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/slider/slider.component.ts ***!
  \***************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.step = 0.1;
        this.min = 0;
        this.max = 10;
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent.prototype.formatLabel = function (value) {
        if (!value) {
            return 0;
        }
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SliderComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SliderComponent.prototype, "disabled", void 0);
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/common/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/common/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/common/tags-review/tags-review.component.html":
/*!***************************************************************!*\
  !*** ./src/app/common/tags-review/tags-review.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-rate [(currentRate)]=\"tagsReview.star_rating\" (currentRateChange)=\"onRateSet()\"></app-rate>\r\n\r\n<div *ngIf=\"tagsReview.star_rating > 0\">\r\n\r\n  <mat-chip-list [multiple]=\"true\" #chipListTags>\r\n    <mat-chip *ngFor=\"let tag of tags; let i = index\" [attr.data-index]=\"i\"\r\n              [selected]=\"tag.state\"\r\n              (click)=\"changeSelected(tag)\">\r\n      {{tag.name}}\r\n    </mat-chip>\r\n  </mat-chip-list>\r\n\r\n  <mat-form-field class=\"professor-chip-list\">\r\n    <mat-chip-list #chipList>\r\n      <mat-chip\r\n        *ngFor=\"let skill of skills\"\r\n        [selectable]=\"selectable\"\r\n        [removable]=\"removable\"\r\n        (removed)=\"removeSkill(skill)\">\r\n        {{skill.name}}\r\n        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n      </mat-chip>\r\n      <!--TODO: Implement add custom Skill-->\r\n      <!--(matChipInputTokenEnd)=\"addSkill($event)\"-->\r\n      <input\r\n        placeholder=\"type in skills...\"\r\n        #skillInput\r\n        (input)=\"onInputQuickSearch($event.target.value)\"\r\n        [formControl]=\"skillControl\"\r\n        [matAutocomplete]=\"auto\"\r\n        [matChipInputFor]=\"chipList\"\r\n        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n        [matChipInputAddOnBlur]=\"addOnBlur\">\r\n    </mat-chip-list>\r\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n      <mat-option *ngFor=\"let skill of skillsHints\" [value]=\"skill\">\r\n        {{skill.name}}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n  <div class=\"row\">\r\n    <div class=\"col-6\"><a class=\"btn btn-primary\" style=\"color: white;\">To full review</a></div>\r\n    <div class=\"col-6\"><button class=\"btn btn-primary float-right\" (click)=\"submitTagsReview()\">Submit</button></div>\r\n    <!-- TMP Commented out -->\r\n    <!-- <div class=\"col-6\">\r\n      <button class=\"btn btn-primary float-right\" (click)=\"submitTagsReview()\" >Submit</button>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/tags-review/tags-review.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/common/tags-review/tags-review.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tags-chip-list, .skills-chip-list {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/common/tags-review/tags-review.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/tags-review/tags-review.component.ts ***!
  \*************************************************************/
/*! exports provided: TagsReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsReviewComponent", function() { return TagsReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _models_course_review_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/course-review.model */ "./src/app/models/course-review.model.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_quick_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/quick-search.service */ "./src/app/services/quick-search.service.ts");
/* harmony import */ var _models_course_skill_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/course-skill.model */ "./src/app/models/course-skill.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_course_tags_review__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/course-tags-review */ "./src/app/models/course-tags-review.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TagsReviewComponent = /** @class */ (function () {
    function TagsReviewComponent(courseService, quickSearchService) {
        this.courseService = courseService;
        this.quickSearchService = quickSearchService;
        // chips configuration
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.skillControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.tagsReviewSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.skills = [];
        this.tagsReview = new _models_course_tags_review__WEBPACK_IMPORTED_MODULE_7__["CourseTagsReview"]([], [], 0);
    }
    TagsReviewComponent.prototype.ngOnInit = function () {
        this.showSkills = true;
    };
    TagsReviewComponent.prototype.onRateSet = function () {
        this.tags = this.courseService.getTagsByRating(this.tagsReview.star_rating);
        this.tagsReview.tags = [];
    };
    TagsReviewComponent.prototype.changeSelected = function (tag) {
        tag.state = !tag.state;
        if (tag.state === true) {
            this.tagsReview.tags.push(tag.name);
        }
        else {
            var index = this.tagsReview.tags.indexOf(tag.name);
            if (index > -1) {
                this.tagsReview.tags.splice(index, 1);
            }
        }
    };
    TagsReviewComponent.prototype.onInputQuickSearch = function (skill) {
        var _this = this;
        this.quickSearchService.quickSearchSkills(skill)
            .debounceTime(500)
            .subscribe(function (hints) {
            _this.skillsHints = hints;
        });
    };
    // if skill was selected from the autocomplete list
    TagsReviewComponent.prototype.selected = function (event) {
        // check if skill is already in the list
        if (!this.tagsReview.skills.includes(event.option.value.name)) {
            this.skills.push(event.option.value);
            this.tagsReview.skills.push(event.option.value.name);
        }
        // nullifying variables
        this.skillInput.nativeElement.value = '';
        this.skillControl.setValue(null);
    };
    // TODO: if manual input for skills was used
    TagsReviewComponent.prototype.addSkill = function (event) {
        var input = event.input;
        var skillName = event.value;
        // trim skill
        if ((skillName || '').trim()) {
            if (!this.tagsReview.skills.includes(skillName)) {
                var skill = new _models_course_skill_model__WEBPACK_IMPORTED_MODULE_5__["CourseSkill"]();
                skill.name = skillName.trim();
                this.skills.push(skill);
                this.tagsReview.tags.push(skillName.trim());
            }
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.skillControl.setValue(null);
    };
    TagsReviewComponent.prototype.removeSkill = function (skill) {
        var index = this.tagsReview.skills.indexOf(skill.name);
        if (index >= 0) {
            console.log('exists');
            this.tagsReview.skills.splice(index, 1);
            this.skills.splice(index, 1);
        }
    };
    TagsReviewComponent.prototype.submitTagsReview = function () {
        this.tagsReviewSubmit.emit(this.tagsReview);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_course_review_model__WEBPACK_IMPORTED_MODULE_2__["CourseReview"])
    ], TagsReviewComponent.prototype, "review", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('skillInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TagsReviewComponent.prototype, "skillInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TagsReviewComponent.prototype, "tagsReviewSubmit", void 0);
    TagsReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tags-review',
            template: __webpack_require__(/*! ./tags-review.component.html */ "./src/app/common/tags-review/tags-review.component.html"),
            styles: [__webpack_require__(/*! ./tags-review.component.scss */ "./src/app/common/tags-review/tags-review.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"],
            _services_quick_search_service__WEBPACK_IMPORTED_MODULE_4__["QuickSearchService"]])
    ], TagsReviewComponent);
    return TagsReviewComponent;
}());



/***/ }),

/***/ "./src/app/common/top3/top3.component.html":
/*!*************************************************!*\
  !*** ./src/app/common/top3/top3.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-md-inline-flex justify-content-center\">\r\n  <div *ngFor=\"let item of items\" class=\"col-md-3 col-lg-3 p-0 m-md-3\">\r\n    <app-bootstrap-card\r\n            [title]=\"item.name\"\r\n            [summary]=\"item.summary\"\r\n            [tags]=\"item.topTags\"\r\n            [skills]=\"item.topSkills\"\r\n            [imageUrl]=\"item.imageUrl\"\r\n            [rating]=\"item.avgRating\"\r\n            [displayPicture]=\"true\"\r\n            [displayTags]=\"true\"\r\n            [displaySkills]=\"true\"\r\n            [displayRating]=\"true\"\r\n    ></app-bootstrap-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/top3/top3.component.scss":
/*!*************************************************!*\
  !*** ./src/app/common/top3/top3.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-top3 {\n  width: 18rem;\n  max-height: 38rem; }\n"

/***/ }),

/***/ "./src/app/common/top3/top3.component.ts":
/*!***********************************************!*\
  !*** ./src/app/common/top3/top3.component.ts ***!
  \***********************************************/
/*! exports provided: Top3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Top3Component", function() { return Top3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/services/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Top3Component = /** @class */ (function () {
    function Top3Component(service) {
        this.service = service;
        this.items = [];
    }
    Top3Component.prototype.ngOnInit = function () {
        this.items = this.service.getTop3();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Top3Component.prototype, "displayTop3Image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Top3Component.prototype, "displayTop3Summary", void 0);
    Top3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top3',
            template: __webpack_require__(/*! ./top3.component.html */ "./src/app/common/top3/top3.component.html"),
            styles: [__webpack_require__(/*! ./top3.component.scss */ "./src/app/common/top3/top3.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]])
    ], Top3Component);
    return Top3Component;
}());



/***/ }),

/***/ "./src/app/common/top4/top4.component.html":
/*!*************************************************!*\
  !*** ./src/app/common/top4/top4.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0 m-0\">\r\n        <div class=\"row top4-title mb-md-3\">\r\n            <div class=\"col\"><h2 class=\"text-center\">Most usefull courses from Technical faculty</h2></div>\r\n          </div>\r\n\r\n          <div class=\"row top4-content\">\r\n\r\n            <div *ngIf=\"resourceImagePositionRight\" class=\"col-sm-12 col-md-6 col-lg-6 d-xs-flex justify-content\">\r\n              <mat-card class=\"resource-card\">\r\n                <img mat-card-image src=\"assets/images/home-component/fau.jpg\" alt=\"Photo of a Shiba Inu\">\r\n                <mat-card-content>\r\n                  <h2>Technische Fakultät</h2>\r\n                  <p>\r\n                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n                    A small, agile dog that copes very well with mountainous terrain.\r\n                  </p>\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-md-6 col-lg-6 d-xs-flex justify-content\">\r\n              <div class=\"row\">\r\n                <div *ngFor=\"let item of items; index as i\" class=\"col-sm-12 col-md-6 pb-md-4\">\r\n                    <app-bootstrap-card\r\n                    [title]=\"item.name\"\r\n                    [rating]=\"item.avgRating\"\r\n                    [summary]=\"item.summary\"\r\n                    [tags]=\"item.topTags\"\r\n                    [skills]=\"item.skills\"\r\n                    [displayTags]=\"true\"\r\n                    [displayRating]=\"true\"\r\n                    ></app-bootstrap-card>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"!resourceImagePositionRight\" class=\"col-sm-12 col-md-6 col-lg-6 d-xs-flex justify-content\">\r\n              <mat-card class=\"resource-card\">\r\n                <img mat-card-image src=\"assets/images/home-component/fau.jpg\" alt=\"Photo of a Shiba Inu\">\r\n                <mat-card-content>\r\n                  <h2>Medizinische Fakultät</h2>\r\n                  <p>\r\n                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n                    A small, agile dog that copes very well with mountainous terrain.\r\n                  </p>\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </div>\r\n\r\n          </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/top4/top4.component.scss":
/*!*************************************************!*\
  !*** ./src/app/common/top4/top4.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  font-weight: bold; }\n\n.resource-card {\n  max-width: 40rem;\n  max-height: 40rem;\n  background-color: #FFC600;\n  color: #1A2B49;\n  font-family: \"GT Eesti\",Arial,sans-serif;\n  -webkit-font-kerning: normal;\n          font-kerning: normal; }\n\n.row {\n  display: flex;\n  flex-wrap: wrap; }\n\n.row > [class*='col-'] {\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/common/top4/top4.component.ts":
/*!***********************************************!*\
  !*** ./src/app/common/top4/top4.component.ts ***!
  \***********************************************/
/*! exports provided: Top4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Top4Component", function() { return Top4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/services/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Top4Component = /** @class */ (function () {
    function Top4Component(service) {
        this.service = service;
    }
    Top4Component.prototype.ngOnInit = function () {
        this.items = this.service.getTop4();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Top4Component.prototype, "resourceImageUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Top4Component.prototype, "showResourceImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Top4Component.prototype, "resourceImagePositionRight", void 0);
    Top4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top4',
            template: __webpack_require__(/*! ./top4.component.html */ "./src/app/common/top4/top4.component.html"),
            styles: [__webpack_require__(/*! ./top4.component.scss */ "./src/app/common/top4/top4.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]])
    ], Top4Component);
    return Top4Component;
}());



/***/ }),

/***/ "./src/app/components/course-review/course-review.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/course-review/course-review.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"home-bckgnd-big\"> -->\r\n\r\n    <br><br><br><br>\r\n    <!-- TODO: row with height of menu component -->\r\n\r\n    <!-- class=\"mat-elevation-z24 containerCourse\" -->\r\n    <!-- style=\"background: #E8F7FF;\" -->\r\n  <div class=\"container col-md-12\" fxLayout=\"row\" fxLayout.xs=\"column\"\r\n       fxLayoutWrap fxLayoutGap=\"5%\" fxLayoutAlign=\"start stretch\">\r\n\r\n    <div fxFlex=\"30%\">\r\n\r\n      <!--TODO: individual rating for each course-->\r\n      <br><br>\r\n      <!-- <app-rating class=\"courseItem\"></app-rating> -->\r\n\r\n      <h4>Review of the course: </h4>\r\n      <h4>[Course Name]</h4>\r\n\r\n      <img class=\"courseImg\" src=\"../assets/images/course-rate.jpg\"/>\r\n\r\n    </div>\r\n\r\n    <div fxFlex=\"30%\">\r\n      <br><br>\r\n      <!--TODO: labels-amounts of chips-reviews-->\r\n      <!--TODO Question: slides are for reviewing, where to display?-->\r\n      <mat-chip-list>\r\n        <mat-chip>Useful</mat-chip>\r\n        <mat-chip>Interesting</mat-chip>\r\n        <mat-chip color=\"primary\" selected=\"true\">Fair</mat-chip>\r\n      </mat-chip-list>\r\n      <mat-chip-list>\r\n        <mat-chip>Useful</mat-chip>\r\n        <mat-chip>Interesting</mat-chip>\r\n        <mat-chip color=\"accent\" selected=\"true\">Engaging</mat-chip>\r\n      </mat-chip-list>\r\n      <br/>\r\n      <hr>\r\n      <!--<br/>-->\r\n      <!--<h4>Sign up to continue with Review</h4>-->\r\n      <!--<br>-->\r\n\r\n\r\n\r\n      <div fxLayout\r\n           fxLayoutAlign=\"space-around center\"\r\n           fxLayoutAlign=\"center\"\r\n           fxLayoutGap=\"40px\">\r\n        <div class=\"item item-1\" fxFlex=\"35%\">\r\n          <button mat-raised-button style=\"background: #3D449E; color: white;\">\r\n            <i class=\"fab fa-facebook-f\" style=\"color: white\"></i>  Sign up with Facebook</button>\r\n          <br><br>\r\n          <button mat-raised-button style=\"background: #397DC1; color: white;\">\r\n            <i class=\"fab fa-linkedin-in\" style=\"color: white\"></i>  Sign up with LinkedIn</button>\r\n        </div>\r\n\r\n        <div class=\"item item-2\" style=\"padding-left: 40px;\" fxFlex=\"20%\">\r\n          <br>\r\n          <h4>OR</h4>\r\n          <br>\r\n        </div>\r\n\r\n        <div class=\"item item-3\" fxFlex=\"35%\">\r\n          <br>\r\n          <button mat-raised-button style=\"background: #FF7552; color: white;\">\r\n            Sign up with email</button>\r\n          <br>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <br><br>\r\n      <!--<form>-->\r\n        <!--<input class=\"bigInputArea\" type=\"text\" [value]=\"formText\">-->\r\n      <!--</form>-->\r\n\r\n      <form class=\"rating-form\">\r\n        <h6>What grade did you receive?</h6>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput type=\"number\"\r\n                 [value]=\"grade\" min=\"1.0\" max=\"5.0\" step=\"0.1\">\r\n        </mat-form-field>\r\n\r\n        <br><br>\r\n\r\n        <h6>Would you recommend others to take this course?</h6>\r\n        <br>\r\n        <mat-radio-group>\r\n          <mat-radio-button value=\"1\">Yes</mat-radio-button>\r\n          <mat-radio-button value=\"0\">No</mat-radio-button>\r\n        </mat-radio-group>\r\n\r\n        <br><br>\r\n\r\n        <h6>You can pass this course if you:</h6>\r\n        <br>\r\n        <section class=\"options-group\">\r\n          <!--<mat-checkbox class=\"options-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>-->\r\n          <mat-checkbox class=\"options-margin\"\r\n                        *ngFor=\"let passOption of passOptions\" [value]=\"passOption\">\r\n            {{passOption}}\r\n          </mat-checkbox>\r\n        </section>\r\n\r\n        <br><br>\r\n\r\n        <h6>Is attending class necessary?</h6>\r\n        <br>\r\n        <mat-radio-group>\r\n          <mat-radio-button value=\"1\">Yes</mat-radio-button>\r\n          <mat-radio-button value=\"0\">No</mat-radio-button>\r\n        </mat-radio-group>\r\n\r\n        <br><br>\r\n\r\n        <mat-form-field class=\"rating-full-width\">\r\n          <textarea matInput placeholder=\"Please leave additional comments (optional)\"></textarea>\r\n        </mat-form-field>\r\n      </form>\r\n\r\n      <!--<textarea rows=\"10\" cols=\"40\">{{formText}}</textarea>-->\r\n\r\n      <!--<br><br>-->\r\n      <button mat-raised-button style=\"background: #397DC1; color: white;\">\r\n        Submit Review</button>\r\n      <br><br><br><br>\r\n    </div>\r\n\r\n    <div fxFlex=\"30%\">\r\n\r\n      <br><br>\r\n      <div fxLayout=\"row\" fxLayout.xs=\"column\"\r\n           fxLayoutWrap fxLayoutAlign=\"start stretch\">\r\n        <div fxFlex=\"5%\">0</div>\r\n        <div fxFlex=\"70%\">\r\n          <app-slider></app-slider>\r\n          <p>Overall Difficulty</p>\r\n        </div>\r\n        <div fxFlex=\"5%\">10</div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayout.xs=\"column\"\r\n           fxLayoutWrap fxLayoutAlign=\"start stretch\">\r\n        <div fxFlex=\"5%\">0</div>\r\n        <div fxFlex=\"70%\">\r\n          <app-slider></app-slider>\r\n          <p>Usefulness of the Course</p>\r\n        </div>\r\n        <div fxFlex=\"5%\">10</div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- <mat-toolbar class=\"footer\" color='primary'>\r\n    <span class='spacer'></span>\r\n    <p>© Evalooni 2018</p>\r\n    <span class='spacer'></span>\r\n  </mat-toolbar> -->\r\n\r\n<!-- </div> -->\r\n\r\n\r\n<!--<mat-toolbar class=\"footerCourse\" color='primary'>-->\r\n  <!--<span class='spacer'></span>-->\r\n  <!--<p>© Evalooni 2018</p>-->\r\n  <!--<span class='spacer'></span>-->\r\n<!--</mat-toolbar>-->\r\n"

/***/ }),

/***/ "./src/app/components/course-review/course-review.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/course-review/course-review.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bigInputArea {\n  width: 100px;\n  height: 250px; }\n\n.rating-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.rating-full-width {\n  width: 100%; }\n\n.mat-radio-button ~ .mat-radio-button {\n  padding-left: 16px; }\n\n.options-group {\n  display: inline-flex;\n  flex-direction: column; }\n\n.options-button {\n  margin: 5px; }\n\n.options-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n\n.options-margin {\n  margin: 0 10px; }\n\n* {\n  font-family: Roboto;\n  color: #333333; }\n\nbody {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  overflow: auto; }\n\n.home-bckgnd-big {\n  /*background:*/\n  /*url(../../../assets/images/bckgrnd.png);*/\n  /*background-size: cover;*/\n  /*background-repeat: repeat-y;*/\n  /*height: 100vh;*/\n  width: 100vw;\n  min-height: 100%;\n  margin-bottom: -50px; }\n\n.containerCourse {\n  /*background-color: #FFFFFF;*/\n  background-color: #E8F7FF;\n  margin: 1%;\n  border-radius: 5px; }\n\n.courseItem {\n  margin: 8%; }\n\n/*.big {*/\n\n/*width: 70px;*/\n\n/*height: 70px;*/\n\n/*}*/\n\n.courseImg {\n  max-width: 300px; }\n\n/*TODO*/\n\n.spacer-text {\n  padding-left: 2%; }\n\n.textGroup {\n  padding: 2em; }\n\nmat-chip:hover {\n  cursor: pointer; }\n\napp-rate:visited {\n  stroke: none; }\n\n.custom-search {\n  font-size: small; }\n"

/***/ }),

/***/ "./src/app/components/course-review/course-review.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/course-review/course-review.component.ts ***!
  \*********************************************************************/
/*! exports provided: CourseReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseReviewComponent", function() { return CourseReviewComponent; });
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseReviewComponent = /** @class */ (function () {
    function CourseReviewComponent(courseService) {
        this.courseService = courseService;
        this.grade = 1.0;
        this.passOptions = [
            'Come to class',
            'Take good notes',
            'Memorize the Skript',
            'Attend the Ubungen',
            'Study the old exams',
            'Do the extra credit assignment'
        ];
        this.formText = 'Please leave additional comments (optional)';
    }
    CourseReviewComponent.prototype.ngOnInit = function () {
    };
    CourseReviewComponent.prototype.reviewCourse = function () {
    };
    CourseReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-review',
            template: __webpack_require__(/*! ./course-review.component.html */ "./src/app/components/course-review/course-review.component.html"),
            styles: [__webpack_require__(/*! ./course-review.component.scss */ "./src/app/components/course-review/course-review.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_0__["CourseService"]])
    ], CourseReviewComponent);
    return CourseReviewComponent;
}());



/***/ }),

/***/ "./src/app/components/courses/course/course.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/courses/course/course.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 mb-5 pb-5\"></div>\r\n<div class=\"row pt-4\"></div>\r\n<div class=\"col-md-12 container\" *ngIf=\"!loading\">\r\n  <h4 class=\"ml-md-3\"><strong>{{course.name}}</strong></h4>\r\n  <div class=\"row col-md-4 mb-2\">\r\n    <div class=\"col-md-5\">\r\n      <app-rating #rating class=\"ml-1\" [currentRate]=\"course.avg_rating\"></app-rating>\r\n    </div>\r\n    <div class=\"col-md-7 mb-1 mt-2 text-muted\">Based on {{course.reviews_count}} Reviews</div>\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n    <!-- 1st column -->\r\n    <div class=\"col-md-4 d-xs-flex rounded margin-card\">\r\n      <!-- <div class=\"card width-20 no-borders-white shadow\">\r\n        <div class=\"card-header\">\r\n          <h4>{{course.name}}</h4>\r\n          <a (click)=\"reviewCourseStart()\" class=\"btn btn-primary\" style=\"color:\r\n          ghostwhite; float: right;\">Rate this course</a>\r\n        </div>\r\n        <img class=\"card-img-top\" src=\"{{course.imageUrl}}\" alt=\"Card image cap\">\r\n        <div class=\"card-body bg-light\">\r\n        </div>\r\n      </div> -->\r\n\r\n      <div class=\"card ml-1 width-24\">\r\n        <div class=\"card-body\">\r\n          <div class=\"card-text\">\r\n            <h5 class=\"text-primary\">\r\n              <strong>General information</strong>\r\n            </h5>\r\n            <p>{{course.summary}}</p>\r\n\r\n            <h6 class=\"text-primary\">Ranking:</h6>\r\n            <p>[1st] for {{course.chair.name}}</p>\r\n            <p>[3rd] for [FAU]</p>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n                <h6 class=\"text-primary mt-2\">Professor(s):</h6>\r\n              </div>\r\n              <div class=\"col-sm-1 shift-left\">\r\n                <button class=\"btn btn-link ml-0\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                  <i class=\"fas fa-caret-down\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n              <ul *ngFor=\"let professor of course.professors\">\r\n                <li style=\"list-style-type:none\">{{professor.name}}</li>\r\n              </ul>\r\n            </div>\r\n            <h6 class=\"text-primary\">Chair:</h6>\r\n            <p>{{course.chair.name}}</p>\r\n            <h6 class=\"text-primary\">University:</h6>\r\n            <p>Friedrich-Alexander Universität Erlangen-Nürnberg</p>\r\n\r\n            <h6 class=\"text-primary\">Links:</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <!-- 2nd column -->\r\n    <div class=\"col-md-4 margin-2nd-col\">\r\n\r\n\r\n      <!-- START hidden dialog -->\r\n      <!-- <div class=\"container mat-elevation-z24 mb-4 rounded align-review review-container\" fxLayout=\"column\" [style.[visibility]=\"isItemVisible ? 'visible' : 'hidden'\"\r\n        [style.display]=\"isReviewVisible ? 'block' : 'none'\" fxLayoutWrap fxLayoutAlign=\"start stretch\" fxLayoutGap=\"2%\" style=\"padding: 3%\">\r\n        <p style=\"font-size: 12px;\">Rate the course</p>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"2%\">\r\n          <app-tags-review (tagsReviewSubmit)=\"reviewCourseSubmit($event)\"></app-tags-review>\r\n        </div>\r\n      </div> -->\r\n      <!-- END hidden dialog -->\r\n\r\n      <!--tags: to be removed to compenents-->\r\n      <div class=\"card bg-light no-borders-bg-light shadow-sm width-25\">\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-title pb-3\">\r\n            <b>How was your experience?</b>\r\n          </h6>\r\n          <!-- <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6> -->\r\n          <div class=\"card-text\">\r\n            <mat-chip-list>\r\n              <span *ngFor=\"let tag of course.top_tags\" matBadge=\"{{tag.tagged}}\" matBadgePosition=\"above after\" matBadgeOverlap=\"true\"\r\n                matBadgeColor=\"accent\">\r\n                <mat-chip>{{tag.tag}}</mat-chip>\r\n              </span>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4 p-2\"></div>\r\n\r\n      <!--skills: to be removed to compenents-->\r\n      <div class=\"card bg-light no-borders-bg-light shadow-sm width-25 margin-card\">\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-title pb-2\">\r\n            <b>What did you learn?</b>\r\n          </h6>\r\n          <!-- <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6> -->\r\n          <div class=\"card-text\">\r\n            <span *ngFor=\"let skill of course.top_skills\">\r\n              <button type=\"button\" class=\"btn mr-2 mb-2 badge-pill btn-sm\" style=\"background: #CDD855;\">\r\n                {{skill.name}}\r\n                <span class=\"badge badge-light\">{{skill.tagged}}</span>\r\n              </button>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4 p-md-2\"></div>\r\n\r\n      <!-- Invisible layer (==> sliders values can't be changed) -->\r\n      <div class=\"layer\"></div>\r\n\r\n      <div class=\"card bg-light no-borders-white shadow width-25\">\r\n        <div class=\"card-body\">\r\n          <div class=\"card-text\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <span style=\"font-size: 1.1rem;\">\r\n                    <span class=\"text-primary float-left\" style=\"font-size: 1.5rem;\">\r\n                      <b>{{course.percentage_take_again | number: '1.0-0' }}%</b>\r\n                    </span>\r\n                      <span class=\"ml-3 text-secondary\">of students reccomend this course</span>\r\n                  <!-- <i class=\"fas fa-bookmark ml-2\"></i> -->\r\n                  <!-- <i class=\"fas fa-heart ml-2\"></i> -->\r\n                  <!-- <i class=\"fas fa-thumbs-up ml-2\"></i> -->\r\n                </span>\r\n\r\n              </div>\r\n\r\n              <div class=\"row col-xs-12 col-sm-12\">\r\n\r\n                <div class=\"col-xs-10 col-sm-10 col-md-5\">\r\n                    <!-- bg-light -->\r\n                    <!-- rounded-circle -->\r\n                  <div class=\"card no-borders-bg-light shadow-sm width-10 m-sm-2 align-say\" >\r\n                    <div class=\"card-body\">\r\n                      <div class=\"card-text text-base\">\r\n\r\n                          <!-- mt-3 -->\r\n                        <div class=\"row\">\r\n                          <app-slider value={{course.avg_difficulty}} disabled=\"false\"></app-slider>\r\n                        </div>\r\n                        <div class=\"row float-right mr-2\">\r\n                        <span class=\"pl-1\"><small class=\"form-text text-muted\">Difficulty</small></span>\r\n                      </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-xs-1 col-sm-1 p-1\"></div>\r\n\r\n                <div class=\"col-xs-10 col-sm-10 col-md-5\">\r\n                    <!-- bg-light -->\r\n                  <div class=\"card no-borders-bg-light shadow-sm width-10 m-sm-2 align-say\">\r\n                    <div class=\"card-body\">\r\n                        <!-- style=\"position: relative;\" -->\r\n                      <div class=\"card-text text-base\">\r\n\r\n                          <!-- layer -->\r\n                        <div class=\"row\">\r\n                            <app-slider value={{course.avg_usefulness}} disabled=\"false\"></app-slider>\r\n                        </div>\r\n                        <div class=\"row float-right mr-2\">\r\n                            <span class=\"pl-1\"><small class=\"form-text text-muted\">Usefulness</small></span>\r\n                          </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <br>\r\n\r\n    </div>\r\n\r\n    <!-- 3rd column -->\r\n    <div class=\"col-md-3 margin-2nd-col align-review\">\r\n        <!-- <div *ngIf=\"isMessageVisible\" class=\"alert alert-success width-25\"\r\n        style=\"position: absolute; margin-top: 18rem; height: 10rem; font-size: 1.3rem;\">\r\n            Thank you for submitting your review!<br>\r\n            Would you like to leave full review?\r\n          </div> -->\r\n\r\n          <div *ngIf=\"isMessageVisible\"\r\n          class=\"card shadow width-25 text-primary alert-thanks\"\r\n          style=\"position: absolute; margin-top: 18rem; height: 10rem;\">\r\n              <div class=\"card-body\">\r\n                <p class=\"card-title mt-4\" style=\"font-size: 1.2rem;\">\r\n                  <b>Thank you for submitting your review!<br></b>\r\n                  <b>Would you like to leave full review?</b>\r\n                </p>\r\n                <div class=\"card-text\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n      <div class=\"container mat-elevation-z24 mb-3 rounded width-25\r\n      review-container margin-review\" fxLayout=\"column\"\r\n      [style.[visibility]=\"isItemVisible ? 'visible' : 'hidden'\"\r\n      [style.display]=\"isReviewVisible ? 'block' : 'none'\" fxLayoutWrap fxLayoutAlign=\"start stretch\"\r\n        fxLayoutGap=\"2%\" style=\"padding: 3%; z-index: 999;\">\r\n        <div class=\"ml-3 text-primary\"><p style=\"font-size: 1.3rem; z-index: 999;\"><strong>Rate the course</strong></p></div>\r\n        <div class=\"ml-3\" fxLayout=\"column\" fxLayoutGap=\"2%\">\r\n          <app-tags-review [review]=\"review\" style=\"z-index: 999;\"\r\n          (tagsReviewSubmit)=\"reviewCourseSubmit($event)\"></app-tags-review>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-loader #loader *ngIf=\"loading\"></app-loader>\r\n<div class=\"row mb-5 pb-5\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/courses/course/course.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/courses/course/course.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".review-container {\n  width: 27rem;\n  max-width: 200% !important; }\n\n.card.rounded-circle {\n  height: 8.5rem;\n  width: 8.5rem; }\n\n.layer {\n  background-color: transparent;\n  z-index: 9;\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n\n.align-review {\n  margin-left: 0.1rem !important; }\n\n.alert-thanks {\n  color: #333333 !important;\n  background-color: #CDE7B0 !important;\n  border-color: #CDE7B0 !important;\n  border: 2px solid #CDE7B0;\n  text-align: center !important; }\n\n.width-10 {\n  width: 10rem; }\n\n.width-20 {\n  width: 20rem; }\n\n.width-24 {\n  width: 24rem; }\n\n.width-25 {\n  width: 25rem; }\n\n.margin-2nd-col {\n  margin-left: -1rem; }\n\n/* .shift-left {\r\n  margin-left: -2.5rem !important;\r\n} */\n\n@media (max-width: 576px) {\n  .align-review {\n    margin-left: 0rem; }\n  .align-say {\n    margin-top: 2rem;\n    margin-left: 2.5rem; }\n  .width-10 {\n    width: 20rem; }\n  .width-20 {\n    width: 27rem; }\n  .width-24 {\n    width: 27rem; }\n  .width-25 {\n    width: 27rem; }\n  .margin-card {\n    margin-bottom: 2rem; }\n  .margin-2nd-col {\n    margin-left: 0.3rem; }\n  .margin-review {\n    margin-left: 0.1rem; } }\n"

/***/ }),

/***/ "./src/app/components/courses/course/course.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/courses/course/course.component.ts ***!
  \***************************************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_course_review_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/course-review.model */ "./src/app/models/course-review.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/dialog/dialog.component */ "./src/app/common/dialog/dialog.component.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_observable_combineLatest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/combineLatest */ "./node_modules/rxjs-compat/_esm5/add/observable/combineLatest.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/toast.service */ "./src/app/services/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CourseComponent = /** @class */ (function () {
    function CourseComponent(courseService, router, route, dialog, toastService) {
        this.courseService = courseService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.toastService = toastService;
        // isReviewVisible = false;
        this.isReviewVisible = true;
        this.isMessageVisible = false;
        this.loading = false;
        this.countLoad = 0;
        this.disabled = false;
    }
    CourseComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.isReviewVisible = true;
        this.loadCourse();
    };
    CourseComponent.prototype.loadCourse = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            console.warn('ID: ', _this.id);
            _this.courseService.getOne(_this.id)
                .map(function (response) {
                _this.course = response;
                console.warn('COURSE: ', response);
                _this.id = response.id;
                _this.course.imageUrl = response.imageUrl;
                _this.course.imageUrl = 'assets/images/courses.jpg'; // tmp
                _this.course.avg_rating = response.avg_rating.length > 0 ? response.avg_rating[0].average : 0;
                _this.course.avg_difficulty = response.avg_difficulty.length > 0 ? response.avg_difficulty[0].average : 0;
                // this.avg_difficulty = this.course.avg_difficulty;
                _this.course.avg_usefulness = response.avg_usefulness.length > 0 ? response.avg_usefulness[0].average : 0;
                _this.course.percentage_must_attend = response.percentage_must_attend.length > 0 ? response.percentage_must_attend[0].percentage : 0;
                _this.course.percentage_take_again = response.percentage_take_again.length > 0 ? response.percentage_take_again[0].percentage : 0;
                _this.course.top_tags = response.top_tags;
                _this.course.top_skills = response.top_skills;
                _this.course.reviews_count = _this.course.reviews.length;
                return response;
            })
                .subscribe(function (data) {
                console.warn('Course: ', data);
                _this.checkLoad();
            });
        });
    };
    CourseComponent.prototype.checkLoad = function () {
        this.countLoad++;
        if (this.countLoad === 1) {
            this.loading = false;
        }
    };
    CourseComponent.prototype.reviewCourseStart = function () {
        this.review = new _models_course_review_model__WEBPACK_IMPORTED_MODULE_1__["CourseReview"](3, this.id);
        // this.isReviewVisible = true;
        // this.dialog.openDialog();
    };
    // reviewCourseSubmit() {
    //   //  this.isReviewVisible = false;
    //   this.isMessageVisible = true;
    //   this.isReviewVisible = true;
    // }
    CourseComponent.prototype.reviewCourseSubmit = function (tagsReview) {
        var _this = this;
        rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].combineLatest([
            this.courseService.submitStarRating(this.id, tagsReview.star_rating),
            this.courseService.attachSkills(this.id, tagsReview.skills),
            this.courseService.attachTags(this.id, tagsReview.star_rating, tagsReview.tags)
        ]).subscribe(function (combined) {
            console.log(combined);
            _this.course.avg_rating = combined[0].avg_rating.length > 0 ? combined[0].avg_rating[0].average : 0;
            _this.course.top_skills = combined[1].top_skills;
            _this.course.top_tags = combined[2].top_tags;
            _this.toastService.showToaster('Your review has been successfully submitted');
            _this.isReviewVisible = false;
            // this.changeMessageVisibility();
        });
    };
    CourseComponent.prototype.goToFullCourseReview = function () {
        this.router.navigate(['courses', this.id, 'course-review']);
    };
    // TODO: relative position of the success message. It overlaps the review box
    CourseComponent.prototype.changeMessageVisibility = function () {
        var _this = this;
        this.isMessageVisible = true;
        setInterval(function () {
            _this.isMessageVisible = false;
        }, 3000);
    };
    CourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/components/courses/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.scss */ "./src/app/components/courses/course/course.component.scss")],
            providers: [_common_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]]
        }),
        __metadata("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _common_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "./src/app/components/courses/courses.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/courses/courses.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mb-5\">\r\n  <!-- Search/filter option -->\r\n  <div class=\"row mb-xs-0 mt-xs-0 mr-xs-4 clearfix\">\r\n    <div class=\"col-md-4\">\r\n      <!-- <h5><strong>Filter courses</strong></h5> -->\r\n    </div>\r\n    <!-- <div class=\"col-md-2\">\r\n    </div> -->\r\n\r\n    <!-- <div class=\" col-sm-5 col-md-4\"> -->\r\n    <div class=\" col-sm-12 col-md-12\">\r\n      <ul class=\"navbar-nav float-right mr-5\" style=\"z-index: 999;\">\r\n        <li ngbDropdown class=\"nav-item dropdown\">\r\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle text-muted\" id=\"dropdown01\"\r\n            data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n            aria-expanded=\"false\">Sortieren</a>\r\n          <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\"\r\n            x-placement=\"bottom-start\">\r\n              <a class=\"dropdown-item\" (click)=\"sortAsc()\">Alphabetisch <i class=\"fas fa-long-arrow-alt-up\"></i></a>\r\n              <a class=\"dropdown-item\" (click)=\"sortDesc()\">Alphabetisch <i class=\"fas fa-long-arrow-alt-down\"></i></a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Courses -->\r\n  <div class=\"row mb-0 mt-xs-2 pl-3\">\r\n    <div class=\"col-md-4 mb-3\">\r\n        <!-- style=\"background: #FEF2F0; border-color: #FEF2F0;\" -->\r\n        <div class=\"card shadow-sm\" style=\"border-radius: 3%\">\r\n            <div class=\"card-body\">\r\n              <h6 class=\"card-title\"><strong>Filter nach Fakultäten</strong></h6>\r\n              <!-- <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6> -->\r\n              <!-- <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"card-link\">Card link</a>\r\n              <a href=\"#\" class=\"card-link\">Another link</a> -->\r\n              <!-- <div class=\"col-md-12\"> -->\r\n              <div class=\"form-check\">\r\n                  <input class=\"form-check-input checkbox-custom\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\">\r\n                  <label class=\"form-check-label\" for=\"defaultCheck1\">\r\n                    Medizinische Fakultät\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input checkbox-custom\" type=\"checkbox\" value=\"\" id=\"defaultCheck2\">\r\n                  <label class=\"form-check-label\" for=\"defaultCheck2\">\r\n                    Naturwissenschaftliche Fakultät\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                    <input class=\"form-check-input checkbox-custom\" type=\"checkbox\" value=\"\" id=\"defaultCheck3\">\r\n                    <label class=\"form-check-label\" for=\"defaultCheck3\">\r\n                      Philosophische Fakultät\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check\">\r\n                    <input class=\"form-check-input checkbox-custom\" type=\"checkbox\" value=\"\" id=\"defaultCheck4\">\r\n                    <label class=\"form-check-label break-word\" for=\"defaultCheck4\">\r\n                      Rechts- und Wirtschaftswissen-<br>schaftliche Fakultät\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check\">\r\n                      <input class=\"form-check-input checkbox-custom\" type=\"checkbox\" value=\"\" id=\"defaultCheck5\">\r\n                      <label class=\"form-check-label\" for=\"defaultCheck5\">\r\n                        Technische Fakultät\r\n                      </label>\r\n                    </div>\r\n                  <!-- </div> -->\r\n              <hr class=\"featurette-divider-sm\">\r\n              <h6 class=\"card-title\"><strong>Filter nach Professoren</strong></h6>\r\n              <!-- <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"card-link\">Card link</a>\r\n              <a href=\"#\" class=\"card-link\">Another link</a> -->\r\n\r\n              <app-by-professor (addProfessor)=\"applyProfessorsFilter($event)\"></app-by-professor>\r\n\r\n              <hr class=\"featurette-divider-sm\">\r\n              <h6 class=\"card-title\"><strong>Filter nach Bewertungen</strong></h6>\r\n              <!-- <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              <a href=\"#\" class=\"card-link\">Card link</a>\r\n              <a href=\"#\" class=\"card-link\">Another link</a> -->\r\n              <div class=\"dropdown\">\r\n                  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    Alle Bewertungen\r\n                  </button>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                    <a class=\"dropdown-item\">Alle Bewertungen</a>\r\n                    <a class=\"dropdown-item\"><app-rate-display [(currentRate)]=\"StarRating.Rating_5\"></app-rate-display></a>\r\n                    <a class=\"dropdown-item\"><app-rate-display [(currentRate)]=\"StarRating.Rating_4\"></app-rate-display></a>\r\n                    <a class=\"dropdown-item\"><app-rate-display [(currentRate)]=\"StarRating.Rating_3\"></app-rate-display></a>\r\n                    <a class=\"dropdown-item\"><app-rate-display [(currentRate)]=\"StarRating.Rating_2\"></app-rate-display></a>\r\n                    <a class=\"dropdown-item\"><app-rate-display [(currentRate)]=\"StarRating.Rating_1\"></app-rate-display></a>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"col-md-8 pr-md-5 pl-4\">\r\n      <div class=\"mb-3\" *ngFor=\"let id = index; let course of courses | filter : filterText\">\r\n        <app-long-card\r\n          #LongCardComponent\r\n          [course]=\"course\"\r\n          [id]=\"course.id\"\r\n          [cardstyle]=\"cardStyle\"\r\n          [bookmark]=\"authService.isLoggenIn()\"\r\n          (addBookmark)=\"addBookmark(course.id)\"></app-long-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center\">\r\n    <app-paginator\r\n      *ngIf=\"!loading\"\r\n      [count]=\"paginator.total\"\r\n      [page]=\"paginator.current_page\"\r\n      [perPage]=\"paginator.per_page\"\r\n      [pagesToShow]=\"5\"\r\n      [loading]=\"loading\"\r\n      (goPrev)=\"toPrev()\"\r\n      (goNext)=\"toNext()\"\r\n      (goPage)=\"goToPage($event)\">\r\n    </app-paginator>\r\n  </div>\r\n  <app-loader #loader *ngIf=\"loading\"></app-loader>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/courses/courses.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/courses/courses.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin-top: 10rem; }\n\n.dropdown-toggle, .dropdown-item {\n  cursor: pointer; }\n\n/* styled checkboxes */\n\ninput.checkbox-custom::before, input.checkbox-custom::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: #eee; }\n\ninput.checkbox-custom {\n  position: relative;\n  margin: 0 10px 0 -1rem;\n  border-radius: 20px;\n  background: #999;\n  outline: 0;\n  -webkit-appearance: none;\n  cursor: pointer; }\n\ninput.checkbox-custom::after {\n  content: '';\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  display: block;\n  width: calc((100% - 4px) / 2);\n  height: calc(100% - 4px);\n  border-radius: 50%;\n  background: #eee;\n  transition: all .1s linear; }\n\n.checkbox-custom:checked {\n  background: #5b5; }\n\n.checkbox-custom:checked::after {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%); }\n\n.checkbox-custom:nth-child(1) {\n  width: 36px;\n  height: 20px; }\n\n.checkbox-custom:nth-child(2) {\n  width: 32px;\n  height: 18px; }\n\n.checkbox-custom:nth-child(3) {\n  width: 28px;\n  height: 16px; }\n\n.checkbox-custom:nth-child(4) {\n  width: 24px;\n  height: 14px; }\n\n.checkbox-custom:nth-child(5) {\n  width: 20px;\n  height: 12px; }\n\n.break-word {\n  word-break: break-all; }\n\n.small-text {\n  font-size: 0.8rem; }\n"

/***/ }),

/***/ "./src/app/components/courses/courses.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/courses/courses.component.ts ***!
  \*********************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _common_long_card_long_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/long-card/long-card.component */ "./src/app/common/long-card/long-card.component.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/loader/loader.component */ "./src/app/common/loader/loader.component.ts");
/* harmony import */ var _services_bookmark_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/bookmark.service */ "./src/app/services/bookmark.service.ts");
/* harmony import */ var _models_course_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/course-query */ "./src/app/models/course-query.ts");
/* harmony import */ var _common_enums_star_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/enums/star-rating */ "./src/app/common/enums/star-rating.ts");
/* harmony import */ var _services_search_control_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/search-control.service */ "./src/app/services/search-control.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(authService, courseService, boomarkService, searchControlService, toastService, router) {
        this.authService = authService;
        this.courseService = courseService;
        this.boomarkService = boomarkService;
        this.searchControlService = searchControlService;
        this.toastService = toastService;
        this.router = router;
        // for search and filter queries
        this.query = new _models_course_query__WEBPACK_IMPORTED_MODULE_6__["CourseQuery"]();
        // rating enum
        this.StarRating = _common_enums_star_rating__WEBPACK_IMPORTED_MODULE_7__["StarRating"];
        // array with images to randomly assign image for a card
        this.imgArr = ['assets/images/courses.jpg', 'assets/images/profs.jpg', 'assets/images/course-rate.jpg'];
        // component visual properties
        this.isItemVisible = true;
        this.loading = false;
        this.cardStyle = 'rounded';
    }
    CoursesComponent.prototype.ngOnInit = function () {
        // TODO: check subscription
        var _this = this;
        this.loadCourses(null, null);
        this.searchControlService.getSearchQuery()
            .subscribe(function (searchable) {
            console.log(searchable);
            _this.query.q = searchable;
            _this.loadCourses(null, null);
        });
    };
    CoursesComponent.prototype.loadCourses = function (page, pageUrl) {
        var _this = this;
        this.loading = true;
        if (page) {
            this.courseService.getAllByPageNumber(page, this.query)
                .map(function (response) {
                return _this.mapResponse(response);
            })
                .subscribe(function (courses) {
                _this.courses = courses;
            });
        }
        else if (pageUrl) {
            this.courseService.getAllByPageUrl(pageUrl, this.query)
                .map(function (response) {
                return _this.mapResponse(response);
            })
                .subscribe(function (courses) {
                _this.courses = courses;
            });
        }
        else {
            console.log(this.query);
            this.courseService.getAll(this.query)
                .map(function (response) {
                return _this.mapResponse(response);
            })
                .subscribe(function (courses) {
                _this.courses = courses;
            });
        }
    };
    CoursesComponent.prototype.goToPage = function (page) {
        this.loadCourses(page, null);
    };
    CoursesComponent.prototype.toNext = function () {
        this.loadCourses(null, this.paginator.next_page_url);
    };
    CoursesComponent.prototype.toPrev = function () {
        this.loadCourses(null, this.paginator.prev_page_url);
    };
    CoursesComponent.prototype.sortAsc = function () {
        this.query.sort_name = 'asc';
        this.loadCourses(this.paginator.current_page, null);
    };
    CoursesComponent.prototype.sortDesc = function () {
        this.query.sort_name = 'desc';
        this.loadCourses(this.paginator.current_page, null);
    };
    CoursesComponent.prototype.applyProfessorsFilter = function (professorsIds) {
        this.query.professor = JSON.stringify(professorsIds);
        this.loadCourses(null, null);
        console.log(professorsIds);
    };
    CoursesComponent.prototype.addBookmark = function (id) {
        var _this = this;
        this.boomarkService.add(id)
            .subscribe(function (message) {
            _this.toastService.showToaster(message);
        });
    };
    CoursesComponent.prototype.mapResponse = function (response) {
        this.paginator = response;
        for (var _i = 0, _a = response.data; _i < _a.length; _i++) {
            var course = _a[_i];
            course.imageUrl = this.imgArr[Math.floor(Math.random() * this.imgArr.length)];
            course.avg_rating = course.avg_rating.length > 0 ? course.avg_rating[0].average : 0;
        }
        this.loading = false;
        return response.data;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_common_long_card_long_card_component__WEBPACK_IMPORTED_MODULE_2__["LongCardComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CoursesComponent.prototype, "longCardComponents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_common_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]),
        __metadata("design:type", Object)
    ], CoursesComponent.prototype, "loader", void 0);
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/components/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.scss */ "./src/app/components/courses/courses.component.scss")],
            providers: [_services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            _services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"],
            _services_bookmark_service__WEBPACK_IMPORTED_MODULE_5__["BookmarkService"],
            _services_search_control_service__WEBPACK_IMPORTED_MODULE_8__["SearchControlService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GLOBAL STYLES\r\n-------------------------------------------------- */\r\n/* Padding below the footer and lighter body text */\r\nbody {\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem;\r\n  color: #5a5a5a;\r\n}\r\n/* CUSTOMIZE THE CAROUSEL\r\n-------------------------------------------------- */\r\n/* Carousel base class */\r\n/* Since positioning the image, we need to help out the caption */\r\n.carousel-caption {\r\n  bottom: 3rem;\r\n  z-index: 10;\r\n}\r\n/* Declare heights because of positioning of img element */\r\n.carousel-item {\r\n  height: 32rem;\r\n  background-color: #777;\r\n}\r\n.carousel-item > img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  min-width: 100%;\r\n  height: 32rem;\r\n}\r\n/* MARKETING CONTENT\r\n-------------------------------------------------- */\r\n/* Center align the text within the three columns below the carousel */\r\n.marketing .col-lg-4 {\r\n  margin-bottom: 1.5rem;\r\n  text-align: center;\r\n}\r\n.marketing h2 {\r\n  font-weight: 400;\r\n}\r\n.marketing .col-lg-4 p {\r\n  margin-right: .75rem;\r\n  margin-left: .75rem;\r\n}\r\n.top-courses {\r\n  padding: 4rem 0;\r\n  background-image: url(\"/assets/images/home-component/start-blog-pattern.jpg\");\r\n}\r\n.top-courses-header {\r\n  margin-bottom: 1rem;\r\n}\r\n.top-courses-content {\r\n  padding: 3rem 0;\r\n}\r\n/* RESPONSIVE CSS\r\n-------------------------------------------------- */\r\n@media (min-width: 40em) {\r\n  /* Bump up size of carousel content */\r\n  .carousel-caption p {\r\n    margin-bottom: 1.25rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.4;\r\n  }\r\n\r\n  .featurette-heading {\r\n    font-size: 50px;\r\n  }\r\n}\r\n@media (min-width: 62em) {\r\n  .featurette-heading {\r\n    margin-top: 7rem;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0 m-0\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-lg-12\">\r\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\">\r\n                    <img class=\"first-slide\" src=\"assets/images/home-component/college.jpg\" alt=\"First slide\">\r\n                    <div class=\"container\">\r\n                        <div class=\"carousel-caption text-left\">\r\n                            <h1>Dein smarter Studienführer</h1>\r\n                            <p>Unser Feedback als Studenten hat für unsere Kommilitonen einen ganz besonderen Wert.<br>\r\n                              Unser Ziel ist es, die Kurs- und Professorenauswahl für Studenten transparenter zu gestalten!</p>\r\n                            <!-- <form class=\"form-inline my-2 my-lg-0\">\r\n                                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n                                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n                            </form> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <!-- Marketing messaging and featurettes\r\n    ================================================== -->\r\n    <!-- Wrap the rest of the page in another container to center all the content. -->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n        <div class=\"top-courses\">\r\n\r\n            <div class=\"container\">\r\n                <div class=\"row top-courses-header\">\r\n                    <div class=\"col\"><h2 class=\"text-center\">Top rated courses</h2></div>\r\n                </div>\r\n\r\n                <div class=\"d-xs-flex justify-content-around bg-light rounded shadow-lg top-courses-content ml-lg-3 mr-lg-3\">\r\n                    <app-top3></app-top3>\r\n                </div>\r\n            </div>\r\n\r\n          </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-12 col-lg-12\">\r\n        <div class=\"container marketing\">\r\n\r\n            <!-- START THE FEATURETTES -->\r\n\r\n            <hr class=\"featurette-divider\">\r\n                <app-top4></app-top4>\r\n            <hr class=\"featurette-divider\">\r\n                <app-top4 [resourceImagePositionRight]=\"true\"></app-top4>\r\n            <hr class=\"featurette-divider\">\r\n\r\n            <!-- /END THE FEATURETTES -->\r\n\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.courses = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var course = {
            id: 1,
            avgRating: 5,
            chair: 'Practical magic',
            ects: 2.5,
            imageUrl: 'assets/images/course.jpg',
            language: 'en',
            maxTurnout: 50,
            name: 'Transfiguration',
            professors: ['Snape', 'Dambldore'],
            summary: 'Just a simeple summarz to show course',
            sws: 5,
            type: 'seminar',
            topSkills: ['Java', 'C++'],
            topTags: ['Boring', 'Useless']
        };
        this.courses.push(course);
        course = {
            id: 2,
            avgRating: 5,
            chair: 'Informatics',
            ects: 2.5,
            language: 'de',
            imageUrl: 'assets/images/profs.jpg',
            maxTurnout: 50,
            name: 'Transfiguration',
            professors: ['Snape', 'Dambldore'],
            summary: 'Just a simeple summarz to show course',
            sws: 5,
            type: 'lecture',
            topSkills: ['Java', 'C++'],
            topTags: ['Boring', 'Useless']
        };
        this.courses.push(course);
        course = {
            id: 3,
            avgRating: 4,
            chair: 'Cultural',
            ects: 2.5,
            language: 'de',
            imageUrl: 'assets/images/course-rate.jpg',
            maxTurnout: 50,
            name: 'Theater acting',
            professors: ['Snape', 'Dambldore'],
            summary: 'Just a simeple summarz to show course',
            sws: 5,
            type: 'lecture',
            topSkills: ['Java', 'C++'],
            topTags: ['Boring', 'Useless']
        };
        this.courses.push(course);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/profs/prof/prof.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profs/prof/prof.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  TODO: page for the selected prof\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/profs/prof/prof.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profs/prof/prof.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profs/prof/prof.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profs/prof/prof.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfComponent", function() { return ProfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfComponent = /** @class */ (function () {
    function ProfComponent() {
    }
    ProfComponent.prototype.ngOnInit = function () {
    };
    ProfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prof',
            template: __webpack_require__(/*! ./prof.component.html */ "./src/app/components/profs/prof/prof.component.html"),
            styles: [__webpack_require__(/*! ./prof.component.scss */ "./src/app/components/profs/prof/prof.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfComponent);
    return ProfComponent;
}());



/***/ }),

/***/ "./src/app/components/profs/profs.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/profs/profs.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  TODO: page for all profs\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/profs/profs.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/profs/profs.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profs/profs.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/profs/profs.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfsComponent", function() { return ProfsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfsComponent = /** @class */ (function () {
    function ProfsComponent() {
    }
    ProfsComponent.prototype.ngOnInit = function () {
    };
    ProfsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profs',
            template: __webpack_require__(/*! ./profs.component.html */ "./src/app/components/profs/profs.component.html"),
            styles: [__webpack_require__(/*! ./profs.component.scss */ "./src/app/components/profs/profs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfsComponent);
    return ProfsComponent;
}());



/***/ }),

/***/ "./src/app/components/uni/uni.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/uni/uni.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  TODO: here info about FAU\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/uni/uni.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/uni/uni.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/uni/uni.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/uni/uni.component.ts ***!
  \*************************************************/
/*! exports provided: UniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniComponent", function() { return UniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UniComponent = /** @class */ (function () {
    function UniComponent() {
    }
    UniComponent.prototype.ngOnInit = function () {
    };
    UniComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-uni',
            template: __webpack_require__(/*! ./uni.component.html */ "./src/app/components/uni/uni.component.html"),
            styles: [__webpack_require__(/*! ./uni.component.scss */ "./src/app/components/uni/uni.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UniComponent);
    return UniComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-edit-profile/user-edit-profile.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/user-profile/user-edit-profile/user-edit-profile.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0 m-0 mt-5 pt-5 pb-5 background clearfix\">\r\n  <div class=\"row\">\r\n    <!-- Profile Picture -->\r\n    <div class=\"col-xs-10 col-sm-10 col-md-4\">\r\n      <div class=\"media hover11\">\r\n        <figure>\r\n          <img class=\"mr-3 p-2 shadow-sm img-thumbnail profile-img\" src=\"{{imagePath}}\" alt=\"profile photo\">\r\n        </figure>\r\n        <button class=\"button btn btn-primary\" (click)=\"openPictures(picturesRef)\">Change picture</button>\r\n      </div>\r\n    </div>\r\n    <!-- User Info -->\r\n    <div class=\"col-xs-10 col-sm-10 col-md-7 mt-3\">\r\n      <div class=\"card mt-5 card-margin\">\r\n        <div class=\"card-header\">\r\n          Edit Information\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!-- inner-card -->\r\n          <div class=\"card m-4 p-5\">\r\n            <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text label-width\" id=\"first-name\">First Name</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" aria-label=\"First Name\" aria-describedby=\"first-name\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text label-width\" id=\"last-name\">Last Name</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" aria-label=\"Last Name\" aria-describedby=\"last-name\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text label-width\" id=\"email\">Email Address</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email Address\" aria-label=\"Email Address\" aria-describedby=\"email\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text label-width\" id=\"university\">University</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"University\" aria-label=\"University\" aria-describedby=\"university\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text label-width\" id=\"location\">Location</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Location\" aria-label=\"Location\" aria-describedby=\"location\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text label-width\" id=\"birth-date\">Birth Date</span>\r\n              </div>\r\n              <input matInput class=\"form-control styled\" [matDatepicker]=\"birth\" [(ngModel)]=\"birthDate\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"birth\"></mat-datepicker-toggle>\r\n            </div>\r\n\r\n            <mat-datepicker #birth></mat-datepicker>\r\n\r\n            <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text label-width\" id=\"graduation\">Graduation Date</span>\r\n              </div>\r\n              <input matInput class=\"form-control styled\" [matDatepicker]=\"graduation\" [(ngModel)]=\"graduationDate\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"graduation\"></mat-datepicker-toggle>\r\n            </div>\r\n            <mat-datepicker #graduation></mat-datepicker>\r\n\r\n            <div class=\"input-group mb-1\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text label-width\" id=\"program\">Program</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Program\" aria-label=\"Program\" aria-describedby=\"program\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button class=\"btn mt-4 shadow-sm btn-mob\" type=\"submit\" style=\"float: right; background: #FB836B;\">Save</button>\r\n    </div>\r\n\r\n    <div class=\"col-md-1\"></div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<ng-template #pictures let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"mat-elevation-z24\" fxLayout=\"column\" fxLayoutWrap fxLayoutAlign=\"start stretch\" fxLayoutGap=\"2%\" style=\"background: white; border-color: white; padding: 3%;\r\n  padding-top: 0%; margin-top: 0%; height: 30rem !important; width: 50rem !important;\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\" style=\"text-align: right;\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    <div class=\"modal-header\">\r\n      <h6 class=\"mt-0\">\r\n        <b>Chose image</b>\r\n      </h6>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"overflow: scroll;\">\r\n      <div class=\"container ml-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-5\">\r\n            <!-- <span> -->\r\n              <img src=\"{{imagePath}}\" alt=\"profile photo\" style=\"width: 10rem;\">\r\n            <!-- </span> -->\r\n          </div>\r\n          <div class=\"col-sm-5\">\r\n              <!-- <span> -->\r\n                <img src=\"../../../../assets/images/curly-w.png\" alt=\"profile photo\" style=\"width: 10rem;\">\r\n              <!-- </span> -->\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row pt-5 mt-5\">\r\n            <div class=\"col-sm-5 pt-4 mt-5\">\r\n              <!-- <span> -->\r\n                <img src=\"../../../../assets/images/ch-w.png\" alt=\"profile photo\" style=\"width: 10rem;\">\r\n              <!-- </span> -->\r\n            </div>\r\n            <div class=\"col-sm-5 pt-4 mt-5\">\r\n                <!-- <span> -->\r\n                  <img src=\"{{imagePath}}\" alt=\"profile photo\" style=\"width: 10rem;\">\r\n                <!-- </span> -->\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"row pt-5 mt-5\">\r\n              <div class=\"col-sm-5 pt-4 mt-5\">\r\n                <!-- <span> -->\r\n                  <img src=\"../../../../assets/images/curly-w.png\" alt=\"profile photo\" style=\"width: 10rem;\">\r\n                <!-- </span> -->\r\n              </div>\r\n              <div class=\"col-sm-5 pt-4 mt-5\">\r\n                  <!-- <span> -->\r\n                    <img src=\"../../../../assets/images/ch-w.png\" alt=\"profile photo\" style=\"width: 10rem;\">\r\n                  <!-- </span> -->\r\n                </div>\r\n            </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/user-profile/user-edit-profile/user-edit-profile.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/user-profile/user-edit-profile/user-edit-profile.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: white; }\n\n.card-space {\n  width: 80%; }\n\n.profile-img {\n  max-width: 15rem;\n  margin: 4rem 2rem 0rem 6rem; }\n\n.inner-card {\n  margin: 2rem;\n  border: none; }\n\n.label-width {\n  min-width: 9rem; }\n\n.styled {\n  border-radius: 0rem 0.3rem 0.3rem 0rem !important;\n  border: 1px solid RGBA(206, 212, 218, 1);\n  margin-top: 0.01rem !important; }\n\n.media:hover .profile-img {\n  display: block;\n  background: rgba(0, 0, 0, 0.3);\n  opacity: 0.5; }\n\nimg {\n  position: absolute;\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.button {\n  position: absolute;\n  left: 10rem;\n  top: 10rem;\n  text-align: center;\n  opacity: 0;\n  transition: opacity .35s ease; }\n\n.media:hover .button {\n  opacity: 1; }\n\n@media (max-width: 576px) {\n  .card-margin {\n    margin-top: 30rem !important;\n    margin-left: 3rem;\n    margin-right: 3rem; }\n  .btn-mob {\n    margin-right: 3rem;\n    width: 7rem;\n    height: 4rem;\n    font-size: 1.5rem; }\n  img:hover {\n    display: block;\n    background: rgba(0, 0, 0, 0.3);\n    opacity: 0.5; }\n  .profile-img {\n    max-width: 25rem;\n    margin-left: 7rem !important; }\n  button.button.btn.btn-primary {\n    position: absolute;\n    left: 17rem;\n    top: 15rem;\n    text-align: center;\n    opacity: 0;\n    transition: opacity .35s ease; }\n  figure:hover .btn-primary {\n    opacity: 1; }\n  .hover11 figure img {\n    opacity: 1;\n    transition: .3s ease-in-out; }\n  .hover11 figure:hover img {\n    opacity: .5; } }\n"

/***/ }),

/***/ "./src/app/components/user-profile/user-edit-profile/user-edit-profile.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/user-profile/user-edit-profile/user-edit-profile.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UserEditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditProfileComponent", function() { return UserEditProfileComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserEditProfileComponent = /** @class */ (function () {
    function UserEditProfileComponent(userService, modalService) {
        this.userService = userService;
        this.modalService = modalService;
        this.graduationDate = new Date();
        this.birthDate = new Date();
        this.imagePath = '';
    }
    UserEditProfileComponent.prototype.ngOnInit = function () {
        this.imagePath = this.userService.getCurrentUserImage();
    };
    UserEditProfileComponent.prototype.loadPictures = function () {
        this.openPictures(this.picturesRef);
    };
    UserEditProfileComponent.prototype.openPictures = function (content) {
        this.modalReference = this.modalService.open(content, { backdropClass: 'light-blue-backdrop', centered: true });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('pictures'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])
    ], UserEditProfileComponent.prototype, "picturesRef", void 0);
    UserEditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-edit-profile',
            template: __webpack_require__(/*! ./user-edit-profile.component.html */ "./src/app/components/user-profile/user-edit-profile/user-edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-edit-profile.component.scss */ "./src/app/components/user-profile/user-edit-profile/user-edit-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModal"]])
    ], UserEditProfileComponent);
    return UserEditProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0 m-0 pt-5 pb-5 ml-sm-3 background-img justify-content-center\" *ngIf=\"!loading\">\r\n  <div class=\"row\">\r\n    <div class=\"row col-sm-12\" style=\"height: 15rem;\"></div>\r\n    <!-- Profile Picture -->\r\n    <div class=\"col-12 col-md-3 mr-sm-2 mr-md-5 spaces-card\">\r\n      <!-- User uni Info -->\r\n      <!-- no-borders-bg-light shadow-sm -->\r\n      <div class=\"card text-center m-sm-5 pt-4 mr-sm-5 card-width text-mobile\">\r\n        <img class=\"card-img-top shadow-sm img-thumbnail profile-img mx-auto d-block\" \r\n        src={{imagePath}} alt=\"profile photo\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title text-mobile-title\">Personal Info</h5>\r\n        </div>\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li class=\"list-group-item\">\r\n            <span style=\"color: #FB775D;\">\r\n              <b>University: </b>\r\n            </span>Friedrich-Alexander-Universität Erlangen-Nürnberg</li>\r\n          <li class=\"list-group-item\">\r\n            <span style=\"color: #FB775D;\">\r\n              <b>Status: </b>\r\n            </span>\r\n            <i placement=\"bottom\" ngbTooltip=\"In Progress\" class=\"fas fa-hourglass-half progress-hourglass\"></i>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <span style=\"color: #FB775D;\">\r\n              <b>Program: </b>\r\n            </span>{{currentUser.study_program}}</li>\r\n          <!-- <li class=\"list-group-item\">\r\n            <span style=\"color: #FB775D;\">\r\n              <b>Average Grade: </b>\r\n            </span>1,85</li> -->\r\n        </ul>\r\n        <!-- <div class=\"card-body\">\r\n                <a href=\"#\" class=\"card-link\">Card link</a>\r\n                <a href=\"#\" class=\"card-link\">Another link</a>\r\n              </div> -->\r\n      </div>\r\n    </div>\r\n\r\n    <!-- User Info -->\r\n    <!-- style=\"margin-top: -9rem;\" -->\r\n    <div class=\"col-12 col-md-7 ml-sm-5 ml-md-5 spaces-welcome\">\r\n        <!-- no-borders-bg-light shadow-sm -->\r\n      <div class=\"card bg-light margin-mobile\">\r\n        <!-- <div class=\"card-header\">Header</div> -->\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title\" style=\"color: base-black-11 font-stack\">\r\n            <strong>Hallo, {{currentUser.name}}!</strong>\r\n          </h3>\r\n          <p class=\"card-text\" style=\"color: base-black-3\">{{currentUser.location}} - Registered on {{currentUser.created_at }}</p>\r\n        </div>\r\n      </div>\r\n      <!-- <h2 style=\"color: base-black-11 font-stack\"><strong>Hallo, {{currentUser.name}}!</strong></h2>\r\n        <h6 style=\"color: base-black-3\">Nürnberg, Bayern, Deutschland - Beigetreten {{ currentUser.created_at | date: 'dd.MM.yyyy' }}</h6> -->\r\n      <!-- <div class=\"row\">\r\n        <div class=\"col-1\">\r\n          <h5 class=\"mt-5\">\r\n            <i class=\"fas fa-graduation-cap graduation-cap\"></i>\r\n          </h5>\r\n        </div>\r\n        <div class=\"col-11\">\r\n          <p class=\"mt-5 ml-1 ml-md-0\" style=\"margin-left: -1rem; font-size: 1.2rem; color: #333333;\">\r\n            <strong style=\"color: #EC614D;\">65 ECTS</strong> completed!</p>\r\n        </div>\r\n      </div> -->\r\n\r\n\r\n      <!-- no-borders-white -->\r\n      <div class=\"card text-center margin-mobile\">\r\n        <div class=\"card-header no-borders-white\">\r\n          <ngb-tabset type=\"pills\" orientation=\"horizontal\">\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                <div (click)=\"acivateFirstTab()\">\r\n                  <b>Saved Courses</b>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                <div (click)=\"acivateSecondTab()\">\r\n                  <b>Completed Courses</b>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </ngb-tabset>\r\n        </div>\r\n\r\n        <div class=\"card-body margin-mobile\">\r\n          <div [style.display]=\"isFirstTabActive ? 'block' : 'none'\" id=\"saved-tab\">\r\n\r\n            <div *ngIf=\"currentUser.bookmarks.length > 0; then bookmarks else noCourses\"></div>\r\n\r\n            <ng-template ngbTabContent #bookmarks>\r\n              <div class=\"padding-bookmarks\" *ngFor=\"let course of currentUser.bookmarks\">\r\n                <app-long-card class=\"card-saved\" #LongCardComponent [course]=\"course\" [id]=\"course.id\"\r\n                [cardstyle]=\"cardStyle\" [bookmark]=\"false\">\r\n                </app-long-card>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template ngbTabContent #noCourses>\r\n              <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"media col-md-12\">\r\n                    <span class=\"fa-stack fa-5x mx-auto d-block\">\r\n                      <i class=\"fas fa-book fa-stack-5x\" style=\"color:#FB775D\"></i>\r\n                      <i class=\"fas fa-bookmark fa-stack-1x book-bookmark\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"text-center text-muted col-md-12\">No bookmarked courses</div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n          </div>\r\n\r\n\r\n          <div [style.display]=\"isSecondTabActive ? 'block' : 'none'\" id=\"reviewed-tab\">\r\n\r\n            <div *ngIf=\"currentUser.reviewed_courses.length > 0; then reviewedCourses else noReviews\"></div>\r\n\r\n            <ng-template ngbTabContent #reviewedCourses>\r\n              <div class=\"p-md-2 padding-bookmarks\" *ngFor=\"let course of currentUser.reviewed_courses\">\r\n                <app-long-card class=\"card-saved\" #LongCardComponent [course]=\"course\" [id]=\"course.id\"\r\n                [cardstyle]=\"cardStyle\" [bookmark]=\"false\"></app-long-card>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template ngbTabContent #noReviews>\r\n              <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"media col-md-12\">\r\n                    <span class=\"fa-stack fa-5x mx-auto d-block\">\r\n                      <i class=\"fas fa-book-open fa-stack-5x\" style=\"color:#FB775D;\"></i>\r\n                      <i class=\"fas fa-pencil-alt fa-stack-1x note-review\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"text-center text-muted col-md-12\">No reviews completed yet</div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-loader #loader *ngIf=\"loading\"></app-loader>\r\n"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-image: url(\"/assets/images/title-page.png\");\n  background-position: center top;\n  background-size: 100% auto; }\n\n.background-img {\n  background: white; }\n\n.profile-img {\n  width: 13rem;\n  height: 13rem; }\n\n.profile-img-md {\n  width: 12rem;\n  height: 12rem; }\n\n.profile-img-sm {\n  width: 8rem;\n  height: 8rem; }\n\n.profile-icon {\n  width: 5rem; }\n\n.spaces-card {\n  margin-top: -12rem; }\n\n.spaces-welcome {\n  margin-top: -9rem; }\n\n.table-bordered {\n  border-radius: !important 5rem; }\n\n.tooltip-inner {\n  background-color: #EC614D; }\n\n.card-width {\n  width: 20rem; }\n\n.padding-bookmarks {\n  padding: 0rem !important;\n  padding-bottom: 0.8rem !important; }\n\n.margin-mobile {\n  margin-bottom: 3rem; }\n\n/*\r\n * The Standard Bootstrap 4.x Breakpoints\r\n*/\n\n@media all and (max-width: 575px) {\n  .spaces-card {\n    margin-top: -8rem;\n    margin-left: 5rem; }\n  .spaces-welcome {\n    margin-top: 3rem; }\n  .card-width {\n    width: 30rem; }\n  .profile-img {\n    width: 23rem;\n    height: 23rem; }\n  .text-mobile {\n    font-size: 1.3rem !important; }\n  .text-mobile-title {\n    font-size: 2rem !important; }\n  .margin-mobile {\n    margin: 1.5rem; }\n  .padding-bookmarks {\n    padding: 0.1rem !important;\n    padding-bottom: 0.7rem !important; } }\n\n/*\r\n * Retina Breakpoints(@2x)\r\n*/\n"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(webService, userService) {
        this.webService = webService;
        this.userService = userService;
        // cardStyle = 'edgy';
        this.cardStyle = 'rounded';
        // loading = true;
        this.isFirstTabActive = true;
        this.isSecondTabActive = false;
        this.reviewsCount = 0;
        // countLoad = 0;
        this.loading = false;
        this.countLoad = 0;
        this.currentUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__["User"]('not defined', this.imagePath);
        this.imagePath = this.userService.getCurrentUserImage();
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getUserInfo();
    };
    UserProfileComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getCurrentUser()
            .subscribe(function (data) {
            _this.loading = _this.userService.loading;
            _this.currentUser = data;
            if (_this.currentUser.bookmarks.length > 0) {
                _this.currentUser.bookmarks.forEach(function (bookmark) {
                    bookmark.avg_rating = _this.getBookmarkedCourseRating(bookmark);
                });
            }
            // console.log('USER: ', this.currentUser);
            // console.log('Bookmarks: ', this.currentUser.bookmarks);
        });
    };
    UserProfileComponent.prototype.getBookmarkedCourseRating = function (course) {
        var rating = 0;
        if (course.avg_rating.length > 0) {
            rating = course.avg_rating[0].average;
        }
        return rating;
    };
    UserProfileComponent.prototype.acivateFirstTab = function () {
        this.isFirstTabActive = true;
        this.isSecondTabActive = false;
    };
    UserProfileComponent.prototype.acivateSecondTab = function () {
        this.isSecondTabActive = true;
        this.isFirstTabActive = false;
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/components/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"], _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var res = this.authService.isLoggenIn();
        if (!res) {
            this.router.navigate(['']);
        }
        return res;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import {MatIconModule} from '@angular/material/icon';




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/course-query.ts":
/*!****************************************!*\
  !*** ./src/app/models/course-query.ts ***!
  \****************************************/
/*! exports provided: CourseQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseQuery", function() { return CourseQuery; });
var CourseQuery = /** @class */ (function () {
    function CourseQuery(q, star_rating, professors, sort_name) {
        if (q) {
            this.q = q;
        }
        if (star_rating) {
            this.star_rating = star_rating;
        }
        if (professors) {
            this.professor = professors;
        }
        if (sort_name) {
            this.sort_name = sort_name;
        }
    }
    return CourseQuery;
}());



/***/ }),

/***/ "./src/app/models/course-review.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/course-review.model.ts ***!
  \***********************************************/
/*! exports provided: CourseReview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseReview", function() { return CourseReview; });
var CourseReview = /** @class */ (function () {
    function CourseReview(userId, courseId) {
        this.user_id = userId;
        this.course_id = courseId;
    }
    return CourseReview;
}());



/***/ }),

/***/ "./src/app/models/course-skill.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/course-skill.model.ts ***!
  \**********************************************/
/*! exports provided: CourseSkill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseSkill", function() { return CourseSkill; });
var CourseSkill = /** @class */ (function () {
    function CourseSkill() {
    }
    return CourseSkill;
}());



/***/ }),

/***/ "./src/app/models/course-tags-review.ts":
/*!**********************************************!*\
  !*** ./src/app/models/course-tags-review.ts ***!
  \**********************************************/
/*! exports provided: CourseTagsReview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseTagsReview", function() { return CourseTagsReview; });
var CourseTagsReview = /** @class */ (function () {
    function CourseTagsReview(tags, skills, star_rating) {
        this.tags = tags;
        this.skills = skills;
        this.star_rating = star_rating;
    }
    return CourseTagsReview;
}());



/***/ }),

/***/ "./src/app/models/course.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/course.model.ts ***!
  \****************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(program, image) {
        this.study_program = program;
        this.image = image;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'http://localhost:8000/api';
    }
    AuthService.prototype.login = function (credentials) {
        return this.http.post(this.url + '/login', credentials)
            .map(function (response) { return response.token; });
    };
    AuthService.prototype.logout = function () {
        if (this.isLoggenIn()) {
            localStorage.removeItem('token');
            this.router.navigate(['/']);
        }
    };
    AuthService.prototype.register = function (credentials) {
        return this.http.post(this.url + '/register', credentials)
            .map(function (response) { return response.token; });
    };
    AuthService.prototype.getUser = function (credentials) {
        return this.http.post(this.url + '/profile', credentials)
            .map(function (response) { return response; });
    };
    AuthService.prototype.isLoggenIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])();
    };
    AuthService.prototype.getPayloadData = function () {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_6__(localStorage.getItem('token'));
        }
        catch (Error) {
            return null;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/bookmark.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/bookmark.service.ts ***!
  \**********************************************/
/*! exports provided: BookmarkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkService", function() { return BookmarkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookmarkService = /** @class */ (function () {
    function BookmarkService(http) {
        this.http = http;
        this.url = 'http://localhost:8000/api/bookmark';
    }
    BookmarkService.prototype.add = function (id) {
        return this.http.post(this.url + '/' + id, {}).map(function (response) { return response.message; });
    };
    BookmarkService.prototype.delete = function (id) {
        return this.http.delete(this.url + '/' + id, {}).map(function (response) { return response.message; });
    };
    // TODO
    BookmarkService.prototype.isBookmarkAdded = function (courseId, userId) {
    };
    BookmarkService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookmarkService);
    return BookmarkService;
}());



/***/ }),

/***/ "./src/app/services/course.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/course.service.ts ***!
  \********************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseService = /** @class */ (function () {
    function CourseService(http) {
        this.http = http;
        this.url = 'http://localhost:8000/api/courses';
    }
    CourseService.prototype.getAll = function (params) {
        return this.http.get(this.url, {
            params: params
        });
    };
    CourseService.prototype.getAllByPageNumber = function (page, params) {
        return this.http.get(this.url + '?page=' + page, {
            params: params
        });
    };
    CourseService.prototype.getAllByPageUrl = function (pageUrl, params) {
        return this.http.get(pageUrl, {
            params: params
        });
    };
    CourseService.prototype.getOne = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    CourseService.prototype.create = function (course) {
        return this.http.post(this.url, JSON.stringify(course));
    };
    CourseService.prototype.update = function (course) {
        return this.http.patch(this.url, JSON.stringify(course));
    };
    CourseService.prototype.delete = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    CourseService.prototype.getTagsByRating = function (rating) {
        switch (rating) {
            case 0:
                return [];
            case 1:
                return [
                    { name: 'Unfair', state: false },
                    { name: 'Boring', state: false },
                    { name: 'Confusing', state: false },
                    { name: 'Impossible', state: false }
                ];
            case 2:
                return [
                    { name: 'Unfair', state: false },
                    { name: 'Boring', state: false },
                    { name: 'Confusing', state: false },
                    { name: 'Impossible', state: false }
                ];
            case 3:
                return [
                    { name: 'Easy', state: false },
                    { name: 'Difficult', state: false },
                    { name: 'Attendance necessary', state: false },
                    { name: 'Lots of reading', state: false }
                ];
            case 4:
                return [
                    { name: 'Useful', state: false },
                    { name: 'Inspirational', state: false },
                    { name: 'Interesting', state: false },
                    { name: 'Fair', state: false }
                ];
            case 5:
                return [
                    { name: 'Useful', state: false },
                    { name: 'Inspirational', state: false },
                    { name: 'Interesting', state: false },
                    { name: 'Fair', state: false }
                ];
        }
    };
    CourseService.prototype.submitStarRating = function (courseId, starRating) {
        return this.http.post(this.url + '/' + courseId + '/review', JSON.stringify({ star_rating: starRating }), {});
    };
    CourseService.prototype.attachTags = function (courseId, starRating, tags) {
        var tagsToSubmit = {
            'star_rating': starRating,
            'tags': tags
        };
        return this.http.post(this.url + '/' + courseId + '/tags', JSON.stringify(tagsToSubmit), {});
    };
    CourseService.prototype.attachSkills = function (courseId, skills) {
        var skillsToSubmit = {
            'skills': skills
        };
        return this.http.post(this.url + '/' + courseId + '/skills', JSON.stringify(skillsToSubmit), {});
    };
    CourseService.prototype.getTop3 = function () {
        var courses = [];
        var course = {
            id: 3163,
            avgRating: 5,
            chair: 'Practical magic',
            ects: 2.5,
            imageUrl: 'assets/images/course.jpg',
            language: 'en',
            maxTurnout: 50,
            name: 'Transfiguration',
            professors: ['Snape', 'Dambldore'],
            summary: 'Just a simeple summarz to show course',
            sws: 5,
            type: 'seminar',
            topSkills: ['Java', 'C++'],
            topTags: ['Boring', 'Useless']
        };
        courses.push(course);
        course = {
            id: 2,
            avgRating: 5,
            chair: 'Informatics',
            ects: 2.5,
            language: 'de',
            imageUrl: 'assets/images/profs.jpg',
            maxTurnout: 50,
            name: 'Transfiguration',
            professors: ['Snape', 'Dambldore'],
            summary: 'Just a simeple summarz to show course',
            sws: 5,
            type: 'lecture',
            topSkills: ['Java', 'C++'],
            topTags: ['Boring', 'Useless']
        };
        courses.push(course);
        course = {
            id: 3,
            avgRating: 4,
            chair: 'Cultural',
            ects: 2.5,
            language: 'de',
            imageUrl: 'assets/images/course-rate.jpg',
            maxTurnout: 50,
            name: 'Theater acting',
            professors: ['Snape', 'Dambldore'],
            summary: 'Just a simeple summarz to show course',
            sws: 5,
            type: 'lecture',
            topSkills: ['Java', 'C++'],
            topTags: ['Boring', 'Useless']
        };
        courses.push(course);
        return courses;
    };
    CourseService.prototype.getTop4 = function () {
        var courses = [];
        var course = {
            id: 1,
            avgRating: 5,
            chair: 'MEITA',
            ects: 2.5,
            imageUrl: 'assets/images/course.jpg',
            language: 'en',
            maxTurnout: 50,
            name: 'SoSy',
            professors: ['Snape', 'Dambldore'],
            summary: 'Just a simeple summarz to show course',
            sws: 5,
            type: 'seminar',
            topSkills: ['Java', 'C++'],
            topTags: ['Boring', 'Useless']
        };
        courses.push(course);
        course = {
            id: 1,
            avgRating: 5,
            chair: 'INF-6',
            ects: 2.5,
            imageUrl: 'assets/images/course.jpg',
            language: 'de',
            maxTurnout: 50,
            name: 'AUD',
            professors: ['Snape', 'Dambldore'],
            summary: 'Just a simeple summarz to show course',
            sws: 5,
            type: 'seminar',
            topSkills: ['Java', 'C++'],
            topTags: ['Boring', 'Useless']
        };
        courses.push(course);
        course = {
            id: 2,
            avgRating: 5,
            chair: 'Informatics',
            ects: 2.5,
            language: 'de',
            imageUrl: 'assets/images/profs.jpg',
            maxTurnout: 50,
            name: 'KonzMod',
            professors: ['Snape', 'Dambldore'],
            summary: 'Just a simeple summarz to show course',
            sws: 5,
            type: 'lecture',
            topSkills: ['Java', 'C++'],
            topTags: ['Boring', 'Useless']
        };
        courses.push(course);
        course = {
            id: 3,
            avgRating: 4,
            chair: 'Cultural',
            ects: 2.5,
            language: 'de',
            imageUrl: 'assets/images/course-rate.jpg',
            maxTurnout: 50,
            name: 'POIS',
            professors: ['Snape', 'Dambldore'],
            summary: 'Just a simeple summarz to show course',
            sws: 5,
            type: 'lecture',
            topSkills: ['Java', 'C++'],
            topTags: ['Challenging', 'Empowering']
        };
        courses.push(course);
        return courses;
    };
    CourseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/services/quick-search.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/quick-search.service.ts ***!
  \**************************************************/
/*! exports provided: QuickSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickSearchService", function() { return QuickSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuickSearchService = /** @class */ (function () {
    function QuickSearchService(http) {
        this.http = http;
        this.urlCourses = 'http://localhost:8000/api/courses/quick-search';
        this.urlProfessors = 'http://localhost:8000/api/professors/quick-search';
        this.urlChairs = 'http://localhost:8000/api/cgairs/quick-search';
        this.urlSkills = 'http://localhost:8000/api/skills/quick-search';
    }
    QuickSearchService.prototype.quickSearchCourse = function (term) {
        return this.http.get(this.urlCourses, {
            params: { q: term }
        });
    };
    QuickSearchService.prototype.quickSearchProfessor = function (term) {
        return this.http.get(this.urlProfessors, {
            params: { q: term }
        });
    };
    QuickSearchService.prototype.quickSearchSkills = function (term) {
        return this.http.get(this.urlSkills, {
            params: { q: term }
        });
    };
    QuickSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuickSearchService);
    return QuickSearchService;
}());



/***/ }),

/***/ "./src/app/services/search-control.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/search-control.service.ts ***!
  \****************************************************/
/*! exports provided: SearchControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchControlService", function() { return SearchControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchControlService = /** @class */ (function () {
    function SearchControlService() {
        this.searchQuery = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    SearchControlService.prototype.setSearchQuery = function (searchQuery) {
        this.searchQuery.next(searchQuery);
    };
    SearchControlService.prototype.getSearchQuery = function () {
        return this.searchQuery.asObservable();
    };
    SearchControlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SearchControlService);
    return SearchControlService;
}());



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService(snackBar) {
        this.snackBar = snackBar;
    }
    ToastService.prototype.showToaster = function (msg) {
        this.snackBar.open(msg, null, {
            duration: 3000,
        });
    };
    ToastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = 'http://localhost:8000/api';
        this.loading = true;
        this.countLoad = 0;
        this.bookmarks = [];
    }
    UserService.prototype.getCurrentUser = function () {
        var _this = this;
        this.checkLoad();
        return this.http.post(this.url + '/profile', {}).map(function (response) { return response; }, function (response) {
            _this.bookmarks = response.bookmarks;
            // console.log('User Bookmarks: ', this.bookmarks);
        });
        // }).map(
        //   (response: any) => response
        // );
    };
    UserService.prototype.getUserInfo = function () {
        var token = localStorage.getItem('token');
        var tokenInfo = this.getDecodedAccessToken(token);
        return tokenInfo;
    };
    UserService.prototype.getCurrentUserId = function () {
        var tokenInfo = this.getUserInfo();
        return tokenInfo.sub;
    };
    UserService.prototype.getCurrentUserImage = function () {
        var tokenInfo = this.getUserInfo();
        return tokenInfo.image;
    };
    UserService.prototype.getCurrentUserName = function () {
        var tokenInfo = this.getUserInfo();
        return tokenInfo.name;
    };
    UserService.prototype.getDecodedAccessToken = function (token) {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
        }
        catch (Error) {
            return null;
        }
    };
    UserService.prototype.checkLoad = function () {
        this.countLoad++;
        if (this.countLoad === 1) {
            this.loading = false;
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\evalooni-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map