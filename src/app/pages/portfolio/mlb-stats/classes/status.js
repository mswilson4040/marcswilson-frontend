"use strict";
var Status = (function () {
    function Status(data) {
        this.status = null;
        if (data) {
            this.status = data.status;
        }
    }
    return Status;
}());
exports.Status = Status;
//# sourceMappingURL=status.js.map