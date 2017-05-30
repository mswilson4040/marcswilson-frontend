"use strict";
var Link = (function () {
    function Link(routerLink, name, icon) {
        if (routerLink === void 0) { routerLink = ''; }
        if (name === void 0) { name = ''; }
        if (icon === void 0) { icon = ''; }
        this.routerLink = routerLink;
        this.name = name;
        this.icon = icon;
    }
    return Link;
}());
exports.Link = Link;
//# sourceMappingURL=link.js.map