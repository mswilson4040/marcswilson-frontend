"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var link_1 = require("../../shared-classes/link");
var router_1 = require("@angular/router");
var contact_form_dialog_component_1 = require("../contact-form-dialog/contact-form-dialog.component");
var material_1 = require("@angular/material");
var email_service_1 = require("../../shared-services/email.service");
var GlobalNavComponent = (function () {
    function GlobalNavComponent(_router, _dialog, _emailService) {
        var _this = this;
        this._router = _router;
        this._dialog = _dialog;
        this._emailService = _emailService;
        this.links = new Array();
        this.links.push(new link_1.Link('/home', 'Home', 'fa-home'));
        this.links.push(new link_1.Link('/about', 'About', 'fa-user'));
        this.links.push(new link_1.Link('/portfolio', 'Portfolio', 'fa-briefcase'));
        this._router.events.subscribe(function (data) {
            $('.navbar-collapse').removeClass('show'); // collapses nav if expanded
            var path = data['url'];
            if (path === '/' || path === '/home') {
                _this.fadeNavColors('white', 'transparent');
            }
            else if (path === '/about') {
                _this.fadeNavColors('black', 'transparent');
            }
            else if (path === '/portfolio') {
                _this.fadeNavColors('white', '#2F4050');
            }
            else if (path === '/contact') {
                _this.fadeNavColors('white', '#2F4050');
            }
            else if (path === '/mlbstats') {
                _this.fadeNavColors('white', '#2F4050');
            }
            else if (path === '/mlbstatsapi') {
                _this.fadeNavColors('white', '#2F4050');
            }
            else if (path === '/powerball') {
                _this.fadeNavColors('white', '#2F4050');
            }
            else if (path === '/timetracker') {
                _this.fadeNavColors('white', '#2F4050');
            }
            $('.nav-collapsable').hide('slide', { direction: 'up' }, 200);
        });
    }
    GlobalNavComponent.prototype.fadeNavColors = function (textColor, backgroundColor) {
        var textColorJqEl = $('#globalNav').find('a,.navbar-text');
        var backgroundColorJqEl = $('#globalNav');
        textColorJqEl.animate({ color: textColor }, 200);
        backgroundColorJqEl.animate({ 'background-color': backgroundColor }, 200);
    };
    GlobalNavComponent.prototype.ngOnInit = function () {
    };
    GlobalNavComponent.prototype.openContactForm = function () {
        var _this = this;
        var dialogRef = this._dialog.open(contact_form_dialog_component_1.ContactFormDialogComponent);
        dialogRef.afterClosed().subscribe(function (data) {
            data = data === 'true' ? true : false;
            if (data === true) {
                var componentInstance = dialogRef.componentInstance;
                var subject = componentInstance.subject;
                var from = componentInstance.from;
                var message = componentInstance.message;
                _this._emailService.sendEmail(from, subject, message).then(function (result) {
                    if (result.ok === true) {
                        // show verification screen
                    }
                }, function (error) {
                    // display error
                });
            }
        });
    };
    GlobalNavComponent = __decorate([
        core_1.Component({
            selector: 'app-global-nav',
            templateUrl: './global-nav.component.html',
            styleUrls: ['./global-nav.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router, material_1.MdDialog, email_service_1.EmailService])
    ], GlobalNavComponent);
    return GlobalNavComponent;
}());
exports.GlobalNavComponent = GlobalNavComponent;
//# sourceMappingURL=global-nav.component.js.map