import * as ts from 'typescript';
import * as Lint from 'tslint';

import { forEachTokenWithTrivia } from 'tsutils';

const FAILURE_STRING: string = 'DEBUG comment found, you have to remove this comment';
const DEBUG_WORD = 'DEBUG';

/**
 * Считает ошибкой все комментарии, которые содержат слово DEBUG
 */
export class Rule extends Lint.Rules.AbstractRule {

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(new NoOnlyDebugCommentRuleWalker(sourceFile, this.getOptions()));
  }
}

class NoOnlyDebugCommentRuleWalker extends Lint.RuleWalker {
  public visitSourceFile(node: ts.SourceFile) {
    forEachTokenWithTrivia(node, (text, tokenSyntaxKind, range) => {
      if (tokenSyntaxKind === ts.SyntaxKind.SingleLineCommentTrivia ||
        tokenSyntaxKind === ts.SyntaxKind.MultiLineCommentTrivia) {
        this.scanCommentForDebugWord(range.pos, text.substring(range.pos, range.end));
      }
    });
  }

  private scanCommentForDebugWord(startPosition: number, commentText: string): void {
    const regexExactCaseNoColon = new RegExp('\\b' + DEBUG_WORD + '\\b');
    const regexCaseInsensistiveWithColon = new RegExp('\\b' + DEBUG_WORD + '\\b\:', 'i');
    if (regexExactCaseNoColon.test(commentText) || regexCaseInsensistiveWithColon.test(commentText)) {
      this.addFailureAt(startPosition, commentText.length, FAILURE_STRING);
    }
  }
}
