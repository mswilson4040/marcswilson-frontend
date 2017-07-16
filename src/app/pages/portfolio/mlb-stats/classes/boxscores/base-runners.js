"use strict";
var runner_1 = require('./runner');
var BaseRunners = (function () {
    function BaseRunners(data) {
        this.status = null;
        this.runner_on_1b = new runner_1.Runner();
        this.runner_on_2b = new runner_1.Runner();
        this.runner_on_3b = new runner_1.Runner();
        if (data) {
            this.status = data.status;
            if (this.status !== '0') {
                if (data.hasOwnProperty('runner_on_1b')) {
                    this.runner_on_1b = new runner_1.Runner(data.runner_on_1b);
                }
                if (data.hasOwnProperty('runner_on_2b')) {
                    this.runner_on_2b = new runner_1.Runner(data.runner_on_2b);
                }
                if (data.hasOwnProperty('runner_on_3b')) {
                    this.runner_on_3b = new runner_1.Runner(data.runner_on_3b);
                }
            }
        }
    }
    return BaseRunners;
}());
exports.BaseRunners = BaseRunners;
//# sourceMappingURL=base-runners.js.map