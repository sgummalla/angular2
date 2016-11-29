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
var core_1 = require('@angular/core');
var Customer_1 = require('../Model/Customer');
var CustomerComponent = (function () {
    function CustomerComponent() {
        this.customerObj = new Customer_1.Customer();
        this.customers = new Array();
    }
    CustomerComponent.prototype.Add = function () {
        this.customers.push(this.customerObj);
        this.customers = this.customers.slice();
        this.customerObj = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Select = function (cust) {
        this.customerObj = Object.assign({}, cust);
    };
    CustomerComponent.prototype.Update = function () {
        var _this = this;
        this.customers.forEach(function (element) {
            if (element.CustomerCode == _this.customerObj.CustomerCode) {
                element.CustomerName = _this.customerObj.CustomerName;
                element.CustomerAmount = _this.customerObj.CustomerAmount;
            }
        });
        this.customerObj = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Cancel = function () {
        this.customerObj = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Delete = function (index) {
        this.customers.splice(index, 1);
    };
    CustomerComponent = __decorate([
        core_1.Component({
            selector: 'customer-ui',
            templateUrl: '../UI/Customer.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
