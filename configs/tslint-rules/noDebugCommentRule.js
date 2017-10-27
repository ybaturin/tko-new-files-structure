"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ts = require("typescript");
var Lint = require("tslint");
var tsutils_1 = require("tsutils");
var FAILURE_STRING = 'DEBUG comment found, you have to remove this comment';
var DEBUG_WORD = 'DEBUG';
/**
 * Считает ошибкой все комментарии, которые содержат слово DEBUG
 */
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoOnlyDebugCommentRuleWalker(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoOnlyDebugCommentRuleWalker = /** @class */ (function (_super) {
    __extends(NoOnlyDebugCommentRuleWalker, _super);
    function NoOnlyDebugCommentRuleWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoOnlyDebugCommentRuleWalker.prototype.visitSourceFile = function (node) {
        var _this = this;
        tsutils_1.forEachTokenWithTrivia(node, function (text, tokenSyntaxKind, range) {
            if (tokenSyntaxKind === ts.SyntaxKind.SingleLineCommentTrivia ||
                tokenSyntaxKind === ts.SyntaxKind.MultiLineCommentTrivia) {
                _this.scanCommentForDebugWord(range.pos, text.substring(range.pos, range.end));
            }
        });
    };
    NoOnlyDebugCommentRuleWalker.prototype.scanCommentForDebugWord = function (startPosition, commentText) {
        var regexExactCaseNoColon = new RegExp('\\b' + DEBUG_WORD + '\\b');
        var regexCaseInsensistiveWithColon = new RegExp('\\b' + DEBUG_WORD + '\\b\:', 'i');
        if (regexExactCaseNoColon.test(commentText) || regexCaseInsensistiveWithColon.test(commentText)) {
            this.addFailureAt(startPosition, commentText.length, FAILURE_STRING);
        }
    };
    return NoOnlyDebugCommentRuleWalker;
}(Lint.RuleWalker));
