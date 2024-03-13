"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var ButtonStyled = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  padding: 8px 16px;\n  border: 2px solid blue;\n  border-radius: 4px;\n  cursor: pointer;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  padding: 8px 16px;\n  border: 2px solid blue;\n  border-radius: 4px;\n  cursor: pointer;\n"])), function (props) { return (props.primary ? 'blue' : 'white'); }, function (props) { return (props.primary ? 'white' : 'black'); });
var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, children = _a.children;
    return react_1.default.createElement(ButtonStyled, { primary: primary }, children);
};
exports.default = Button;
var templateObject_1;
