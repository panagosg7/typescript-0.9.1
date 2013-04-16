﻿//﻿
// Copyright (c) Microsoft Corporation.  All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

///<reference path='Typescript.ts' />

module TypeScript {
    // TODO: refactor indent logic for use in emit
    export class PrintContext {
        public builder = "";
        public indent1 = "  ";
        public indentStrings: string[] = [];
        public indentAmt = 0;

        constructor (public outfile: ITextWriter) {
        }

        public increaseIndent() {
            this.indentAmt++;
        }

        public decreaseIndent() {
            this.indentAmt--;
        }

        public startLine() {
            if (this.builder.length > 0) {
                CompilerDiagnostics.Alert(this.builder);
            }
            var indentString = this.indentStrings[this.indentAmt];
            if (indentString === undefined) {
                indentString = "";
                for (var i = 0; i < this.indentAmt; i++) {
                    indentString += this.indent1;
                }
                this.indentStrings[this.indentAmt] = indentString;
            }
            this.builder += indentString;
        }

        public write(s) {
            this.builder += s;
        }

        public writeLine(s) {
            this.builder += s;
            this.outfile.WriteLine(this.builder);
            this.builder = "";
        }

    }

    export function prePrintAST(ast: AST, parent: AST, walker: IAstWalker) {
        var pc: PrintContext = <PrintContext>walker.state;

        ast.print(pc);
        pc.increaseIndent();
        return ast;
    }


    export function postPrintAST(ast: AST, parent: AST, walker: IAstWalker) {
        var pc: PrintContext = <PrintContext>walker.state;
        pc.decreaseIndent();
        return ast;
    }
}