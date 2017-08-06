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
var material_1 = require("@angular/material");
var contact_form_dialog_component_1 = require("../../shared-components/contact-form-dialog/contact-form-dialog.component");
var email_service_1 = require("../../shared-services/email.service");
var HomeComponent = (function () {
    function HomeComponent(_dialog, _emailService) {
        this._dialog = _dialog;
        this._emailService = _emailService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        $('#firstName').addClass('first-name-width', 500);
        $('.hidden-text').delay(1000).show('slide', { direction: 'left' }, 500, function (e) {
            $('#coverImage').fadeIn();
            $('#underline').delay(500).animate({ backgroundColor: 'white' }, 500);
            $('#welcomeScreen').animate({ color: 'white' }, 500);
        });
    };
    HomeComponent.prototype.openContactForm = function () {
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
                    alert(result);
                }, function (error) {
                    alert('send email error');
                });
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        __metadata("design:paramtypes", [material_1.MdDialog, email_service_1.EmailService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map