"use strict";
const Parser = require("../src/index");

describe("statement", () => {
  it("block", () => {
    expect(Parser.parse("{}", parser => parser.statement())).toEqual({
      type: "BLOCK",
      statements: []
    });
  });

  it("assertStatement", () => {
    expect(Parser.parse("assert this;", parser => parser.statement())).toEqual({
      type: "ASSERT_STATEMENT",
      expressions: [
        {
          type: "THIS"
        }
      ]
    });
  });

  it("ifStatement", () => {
    expect(Parser.parse("if (this) {}", parser => parser.statement())).toEqual({
      type: "IF_STATEMENT",
      condition: {
        type: "THIS"
      },
      body: {
        type: "BLOCK",
        statements: []
      },
      else: undefined
    });
  });

  it("whileStatement", () => {
    expect(
      Parser.parse("while (this) {}", parser => parser.statement())
    ).toEqual({
      type: "WHILE_STATEMENT",
      condition: {
        type: "THIS"
      },
      body: {
        type: "BLOCK",
        statements: []
      },
      else: undefined
    });
  });

  it("doWhileStatement", () => {
    expect(
      Parser.parse("do {} while (this);", parser => parser.statement())
    ).toEqual({
      type: "DO_WHILE_STATEMENT",
      body: {
        type: "BLOCK",
        statements: []
      },
      condition: {
        type: "THIS"
      }
    });
  });

  it("tryStatement", () => {
    expect(
      Parser.parse("try {} catch (A e) {}", parser => parser.statement())
    ).toEqual({
      type: "TRY_STATEMENT",
      resourceSpecification: undefined,
      body: {
        type: "BLOCK",
        statements: []
      },
      catchClauses: [
        {
          type: "CATCH_CLAUSE",
          modifiers: [],
          catchType: {
            type: "CATCH_TYPE",
            types: [
              {
                type: "QUALIFIED_NAME",
                name: ["A"]
              }
            ]
          },
          id: "e",
          block: {
            type: "BLOCK",
            statements: []
          }
        }
      ],
      finally: undefined
    });
  });

  it("switchStatement", () => {
    expect(
      Parser.parse("switch (this) {}", parser => parser.statement())
    ).toEqual({
      type: "SWITCH_STATEMENT",
      condition: {
        type: "THIS"
      }
    });
  });

  it("synchronizedStatement", () => {
    expect(
      Parser.parse("synchronized (this) {}", parser => parser.statement())
    ).toEqual({
      type: "SYNCHRONIZED_STATEMENT",
      condition: {
        type: "THIS"
      },
      body: {
        type: "BLOCK",
        statements: []
      }
    });
  });

  it("returnStatement", () => {
    expect(Parser.parse("return this;", parser => parser.statement())).toEqual({
      type: "RETURN_STATEMENT",
      expression: {
        type: "THIS"
      }
    });
  });

  it("throwStatement", () => {
    expect(Parser.parse("throw this;", parser => parser.statement())).toEqual({
      type: "THROW_STATEMENT",
      expression: {
        type: "THIS"
      }
    });
  });

  it("breakStatement", () => {
    expect(Parser.parse("break a;", parser => parser.statement())).toEqual({
      type: "BREAK_STATEMENT",
      identifier: "a"
    });
  });

  it("continueStatement", () => {
    expect(Parser.parse("continue a;", parser => parser.statement())).toEqual({
      type: "CONTINUE_STATEMENT",
      identifier: "a"
    });
  });

  it("semiColonStatement", () => {
    expect(Parser.parse(";", parser => parser.statement())).toEqual({
      type: "SEMI_COLON_STATEMENT"
    });
  });

  it("expressionStatement", () => {
    expect(Parser.parse("this;", parser => parser.statement())).toEqual({
      type: "EXPRESSION_STATEMENT",
      expression: {
        type: "THIS"
      }
    });
  });

  it("identifierStatement", () => {
    expect(Parser.parse("a:this;", parser => parser.statement())).toEqual({
      type: "IDENTIFIER_STATEMENT",
      identifier: "a",
      statement: {
        type: "EXPRESSION_STATEMENT",
        expression: {
          type: "THIS"
        }
      }
    });
  });
});
