"use strict";

module.exports = Result;

function Result(err, value) {
    var self = this;
    self.err = err || null;
    self.value = value;
}

Result.prototype.toValue = function toValue() {
    var self = this;
    if (self.err) {
        throw self.err;
    } else {
        return self.value;
    }
};

Result.prototype.toCallback = function toCallback(callback) {
    var self = this;
    callback(self.err, self.value);
};
