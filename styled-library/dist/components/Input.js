"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var InputStyled = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 8px;\n  border: 2px solid blue;\n  border-radius: 4px;\n"], ["\n  padding: 8px;\n  border: 2px solid blue;\n  border-radius: 4px;\n"])));
var Input = function (props) {
    return react_1.default.createElement(InputStyled, __assign({}, props));
};
exports.default = Input;
var templateObject_1;
