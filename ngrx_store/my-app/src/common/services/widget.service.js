var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
var BASE_URL = 'http://localhost:3000/widgets/';
var HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
var WidgetsService = (function () {
    function WidgetsService(http) {
        this.http = http;
        this.widgets = [];
    }
    WidgetsService.prototype.add = function (widget) {
        var _this = this;
        return this.http.post(BASE_URL, JSON.stringify(widget), HEADER)
            .map(function (res) { return res.json(); })
            .do(function (data) {
            _this.widgets = _this.widgets.concat([data]);
            return data;
        });
    };
    WidgetsService.prototype.remove = function (widget) {
        var _this = this;
        return this.http.delete(BASE_URL + "?id=" + widget.id)
            .map(function (res) { return res.json(); })
            .do(function (removed) {
            _this.widgets = _this.widgets.filter(function (currentWidget) { return currentWidget.id !== removed.id; });
        });
    };
    WidgetsService.prototype.update = function (widget, update) {
        var _this = this;
        return this.http.put(BASE_URL + "?id=" + widget.id, JSON.stringify(update), HEADER)
            .map(function (res) { return res.json(); })
            .do(function (updated) {
            var index = _this.widgets.indexOf(updated);
            _this.widgets = _this.widgets.slice(0, index).concat([
                updated
            ], _this.widgets.slice(index + 1));
        });
    };
    WidgetsService.prototype.loadWidgets = function () {
        var _this = this;
        return this.http.get(BASE_URL)
            .map(function (res) { return res.json(); })
            .do(function (json) { return _this.widgets = _this.widgets.concat(json); });
    };
    WidgetsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], WidgetsService);
    return WidgetsService;
}());
export { WidgetsService };
//# sourceMappingURL=widget.service.js.map