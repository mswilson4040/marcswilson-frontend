"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        // TODO: Clean this up. This is nonsense!
        // TODO: Replace jQuery animation with @keyframes animation
        $('#imageContainer').find('img').fadeIn('slow');
        var containers = $('.content-container');
        var icons = $('.icon-container');
        var delay = 500;
        var delay2 = 500;
        var _loop_1 = function(i) {
            $(containers[i]).delay(delay).toggle('slide', { direction: 'left' }, 700, function () {
                $(containers[i]).closest('.content-row').find('img').delay(100).fadeIn(500);
            });
            delay += 500;
        };
        for (var i = 0; i < containers.length; i++) {
            _loop_1(i);
        }
        for (var i = 0; i < icons.length; i++) {
            $(icons[i]).delay(delay2).show('scale', { percent: 50 }, 1000);
            delay2 += 100;
        }
    };
    AboutComponent.prototype.navigate = function (url) {
        window.open(url, '_blank');
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
        })
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map