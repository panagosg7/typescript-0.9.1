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

///<reference path='typescript.ts' />

module TypeScript {
    // Note: Any addition to the NodeType should also be supported with addition to AstWalkerDetailCallback
    export enum NodeType {
        None,
        Empty,
        EmptyExpr,
        TrueLiteral,
        FalseLiteral,
        ThisExpression,
        SuperExpression,
        StringLiteral,
        RegularExpressionLiteral,
        Null,
        ArrayLit,
        ObjectLit,
        Void,
        Comma,
        Pos,
        Neg,
        Delete,
        In,
        Dot,
        Is,
        InstOf,
        Typeof,
        NumberLit,
        Name,
        TypeParameter,
        GenericType,
        TypeRef,
        Index,
        Call,
        New,
        Asg,
        AsgAdd,
        AsgSub,
        AsgDiv,
        AsgMul,
        AsgMod,
        AsgAnd,
        AsgXor,
        AsgOr,
        AsgLsh,
        AsgRsh,
        AsgRs2,
        ConditionalExpression,
        LogOr,
        LogAnd,
        Or,
        Xor,
        And,
        Eq,
        Ne,
        Eqv,
        NEqv,
        Lt,
        Le,
        Gt,
        Ge,
        Add,
        Sub,
        Mul,
        Div,
        Mod,
        Lsh,
        Rsh,
        Rs2,
        Not,
        LogNot,
        IncPre,
        DecPre,
        IncPost,
        DecPost,
        TypeAssertion,
        FuncDecl,
        Member,
        VarDecl,
        ArgDecl,
        Return,
        Break,
        Continue,
        Throw,
        For,
        ForIn,
        If,
        While,
        DoWhile,
        Block,
        Case,
        Switch,
        Try,
        TryCatch,
        TryFinally,
        Finally,
        Catch,
        List,
        Script,
        ClassDeclaration,
        InterfaceDeclaration,
        ModuleDeclaration,
        ImportDeclaration,
        ExportAssignment,
        With,
        LabeledStatement,
        EndCode,
        Comment,
        Debugger,
        GeneralNode = FuncDecl,
        LastAsg = AsgRs2,
    }
}