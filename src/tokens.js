"use strict";
const chevrotain = require("chevrotain");
const xregexp = require("xregexp");

// A little mini DSL for easier lexer definition using xRegExp.
const fragments = {};

function FRAGMENT(name, def) {
  fragments[name] = xregexp.build(def, fragments);
}

function MAKE_PATTERN(def, flags) {
  return xregexp.build(def, fragments, flags);
}

// The order of fragments definitions is important
FRAGMENT("Digits", "[0-9]([0-9_]*[0-9])?");
FRAGMENT("ExponentPart", "[eE][+-]?{{Digits}}");
FRAGMENT("HexDigit", "[0-9a-fA-F]");
FRAGMENT("HexDigits", "{{HexDigit}}(({{HexDigit}}|'_')*{{HexDigit}})?");

const createToken = chevrotain.createToken;

const Identifier = createToken({ name: "Identifier", pattern: /[a-zA-Z]\w*/ });

function createKeywordToken(options) {
  options.longer_alt = Identifier;
  return createToken(options);
}

const Package = createKeywordToken({
  name: "Package",
  pattern: /package/,
  label: "'package'"
});

const Case = createKeywordToken({
  name: "Case",
  pattern: /case/,
  label: "'case'"
});

const Catch = createKeywordToken({
  name: "Catch",
  pattern: /catch/,
  label: "'catch'"
});

const Finally = createKeywordToken({
  name: "Finally",
  pattern: /finally/,
  label: "'finally'"
});

const Default = createKeywordToken({
  name: "Default",
  pattern: /default/,
  label: "'default'"
});

const Import = createKeywordToken({
  name: "Import",
  pattern: /import/,
  label: "'import'"
});

const Boolean = createKeywordToken({
  name: "Boolean",
  pattern: /boolean/,
  label: "'boolean'"
});

const Char = createKeywordToken({
  name: "Char",
  pattern: /char/,
  label: "'char'"
});

const Byte = createKeywordToken({
  name: "Byte",
  pattern: /byte/,
  label: "'byte'"
});

const Short = createKeywordToken({
  name: "Short",
  pattern: /short/,
  label: "'short'"
});

const Int = createKeywordToken({
  name: "Int",
  pattern: /int/,
  label: "'int'"
});

const Long = createKeywordToken({
  name: "Long",
  pattern: /long/,
  label: "'long'"
});

const Float = createKeywordToken({
  name: "Float",
  pattern: /float/,
  label: "'float'"
});

const Double = createKeywordToken({
  name: "Double",
  pattern: /double/,
  label: "'double'"
});

const Void = createKeywordToken({
  name: "Void",
  pattern: /void/,
  label: "'void'"
});

const Public = createKeywordToken({
  name: "Public",
  pattern: /public/,
  label: "'public'"
});

const Protected = createKeywordToken({
  name: "Protected",
  pattern: /protected/,
  label: "'protected'"
});

const Private = createKeywordToken({
  name: "Private",
  pattern: /private/,
  label: "'private'"
});

const Static = createKeywordToken({
  name: "Static",
  pattern: /static/,
  label: "'static'"
});

const Abstract = createKeywordToken({
  name: "Abstract",
  pattern: /abstract/,
  label: "'abstract'"
});

const Final = createKeywordToken({
  name: "Final",
  pattern: /final/,
  label: "'final'"
});

const Native = createKeywordToken({
  name: "Native",
  pattern: /native/,
  label: "'native'"
});

const Synchronized = createKeywordToken({
  name: "Synchronized",
  pattern: /synchronized/,
  label: "'synchronized'"
});

const Transient = createKeywordToken({
  name: "Transient",
  pattern: /transient/,
  label: "'transient'"
});

const Extends = createKeywordToken({
  name: "Extends",
  pattern: /extends/,
  label: "'extends'"
});

const Implements = createKeywordToken({
  name: "Implements",
  pattern: /implements/,
  label: "'implements'"
});

const New = createKeywordToken({
  name: "New",
  pattern: /new/,
  label: "'new'"
});

const This = createKeywordToken({
  name: "This",
  pattern: /this/,
  label: "'this'"
});

const Super = createKeywordToken({
  name: "Super",
  pattern: /super/,
  label: "'super'"
});

const Throws = createKeywordToken({
  name: "Throws",
  pattern: /throws/,
  label: "'throws'"
});

const Throw = createKeywordToken({
  name: "Throw",
  pattern: /throw/,
  label: "'throw'"
});

const Return = createKeywordToken({
  name: "Return",
  pattern: /return/,
  label: "'return'"
});

const Break = createKeywordToken({
  name: "Break",
  pattern: /break/,
  label: "'break'"
});

const Continue = createKeywordToken({
  name: "Continue",
  pattern: /continue/,
  label: "'continue'"
});

const If = createKeywordToken({
  name: "If",
  pattern: /if/,
  label: "'if'"
});

const Else = createKeywordToken({
  name: "Else",
  pattern: /else/,
  label: "'else'"
});

const While = createKeywordToken({
  name: "While",
  pattern: /while/,
  label: "'while'"
});

const Do = createKeywordToken({
  name: "Do",
  pattern: /do/,
  label: "'do'"
});

const Try = createKeywordToken({
  name: "Try",
  pattern: /try/,
  label: "'try'"
});

const Switch = createKeywordToken({
  name: "Switch",
  pattern: /switch/,
  label: "'switch'"
});

const True = createKeywordToken({
  name: "True",
  pattern: /true/,
  label: "'true'"
});

const False = createKeywordToken({
  name: "False",
  pattern: /false/,
  label: "'false'"
});

const Null = createKeywordToken({
  name: "Null",
  pattern: /null/,
  label: "'null'"
});

const Assert = createKeywordToken({
  name: "Assert",
  pattern: /assert/,
  label: "'assert'"
});

const Volatile = createKeywordToken({
  name: "Volatile",
  pattern: /volatile/,
  label: "'volatile'"
});

const Strictfp = createKeywordToken({
  name: "Strictfp",
  pattern: /strictfp/,
  label: "'strictfp'"
});

const Class = createKeywordToken({
  name: "Class",
  pattern: /class/,
  label: "'class'"
});

const Enum = createKeywordToken({
  name: "Enum",
  pattern: /enum/,
  label: "'enum'"
});

const Interface = createKeywordToken({
  name: "Interface",
  pattern: /interface/,
  label: "'interface'"
});

const LBrace = createToken({
  name: "LBrace",
  pattern: /\(/,
  label: "'('"
});

const RBrace = createToken({
  name: "RBrace",
  pattern: /\)/,
  label: "')'"
});

const LCurly = createToken({
  name: "LCurly",
  pattern: /{/,
  label: "'{'"
});

const RCurly = createToken({
  name: "RCurly",
  pattern: /}/,
  label: "'}'"
});

const LSquare = createToken({
  name: "LSquare",
  pattern: /\[/,
  label: "'['"
});

const RSquare = createToken({
  name: "RSquare",
  pattern: /]/,
  label: "']'"
});

const Pointer = createToken({
  name: "Pointer",
  pattern: /->/,
  label: "'->'"
});

const Less = createToken({
  name: "Less",
  pattern: /</,
  label: "'<'"
});

const Greater = createToken({
  name: "Greater",
  pattern: />/,
  label: "'>'"
});

const DotDotDot = createToken({
  name: "DotDotDot",
  pattern: /\.\.\./,
  label: "'...'"
});

const Dot = createToken({
  name: "Dot",
  pattern: /\./,
  label: "'.'"
});

const Comma = createToken({
  name: "Comma",
  pattern: /,/,
  label: "','"
});

const SemiColon = createToken({
  name: "SemiColon",
  pattern: /;/,
  label: "';'"
});

const ColonColon = createToken({
  name: "ColonColon",
  pattern: /::/,
  label: "'::'"
});

const Colon = createToken({
  name: "Colon",
  pattern: /:/,
  label: "':'"
});

const Equal = createToken({
  name: "Equal",
  pattern: /=/,
  label: "'='"
});

const And = createToken({
  name: "And",
  pattern: /&/,
  label: "'&'"
});

const At = createToken({
  name: "At",
  pattern: /@/,
  label: "'@'"
});

const Questionmark = createToken({
  name: "Questionmark",
  pattern: /\?/,
  label: "'?'"
});

const VerticalLine = createToken({
  name: "VerticalLine",
  pattern: /\|/,
  label: "'|'"
});

const Star = createToken({
  name: "Star",
  pattern: /\*/,
  label: "'*'"
});

const BinaryLiteral = createToken({
  name: "BinaryLiteral",
  pattern: MAKE_PATTERN("0[bB][01]([01_]*[01])?[lL]?"),
  label: "'BinaryLiteral'"
});

const OctLiteral = createToken({
  name: "OctLiteral",
  pattern: MAKE_PATTERN("0_*[0-7]([0-7_]*[0-7])?[lL]?"),
  label: "'OctLiteral'"
});

const HexLiteral = createToken({
  name: "HexLiteral",
  pattern: MAKE_PATTERN("0[xX][0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?[lL]?"),
  label: "'HexLiteral'"
});

const FloatLiteral = createToken({
  name: "FloatLiteral",
  pattern: MAKE_PATTERN(
    "({{Digits}}\\.{{Digits}}?|\\.{{Digits}}){{ExponentPart}}?[fFdD]?|{{Digits}}({{ExponentPart}}[fFdD]?|[fFdD])"
  ),
  label: "'FloatLiteral'"
});

const HexFloatLiteral = createToken({
  name: "HexFloatLiteral",
  pattern: MAKE_PATTERN(
    "0[xX]({{HexDigits}}\\.?|{{HexDigits}}?\\.{{HexDigits}})[pP][+-]?{{Digits}}[fFdD]?"
  ),
  label: "'HexFloatLiteral'"
});

const DecimalLiteral = createToken({
  name: "DecimalLiteral",
  pattern: MAKE_PATTERN("(0|[1-9]({{Digits}}?|_+{{Digits}}))[lL]?"),
  label: "'DecimalLiteral'"
});

const CharLiteral = createToken({
  name: "CharLiteral",
  pattern: MAKE_PATTERN(
    // TODO: fix with better implementation
    "'[0-9a-zA-Z]'"
  ),
  label: "'CharLiteral'"
});

const StringLiteral = createToken({
  name: "StringLiteral",
  pattern: MAKE_PATTERN(
    // TODO: fix with better implementation
    '"[0-9a-zA-Z]*"'
  ),
  label: "'StringLiteral'"
});

const WhiteSpace = createToken({
  name: "WhiteSpace",
  pattern: /\s+/,
  group: chevrotain.Lexer.SKIPPED,
  line_breaks: true
});

// | PUBLIC
// | PROTECTED
// | PRIVATE
// | STATIC
// | ABSTRACT
// | FINAL    // FINAL for class only -- does not apply to interfaces
// | STRICTFP

// note we are placing WhiteSpace first as it is very common thus it will speed up the lexer.
const allTokens = [
  WhiteSpace,
  // "keywords" appear before the Identifier
  Boolean,
  Char,
  Byte,
  Short,
  Interface,
  Int,
  Long,
  Float,
  Double,
  Void,
  Public,
  Protected,
  Private,
  Static,
  Abstract,
  Catch,
  Finally,
  Final,
  Native,
  Synchronized,
  Transient,
  Extends,
  Implements,
  New,
  This,
  Super,
  Throws,
  Throw,
  Return,
  Break,
  Continue,
  If,
  Else,
  While,
  Do,
  Try,
  Switch,
  True,
  False,
  Null,
  Assert,
  Volatile,
  Strictfp,
  Class,
  Enum,
  Import,
  Package,
  Default,
  Case,
  BinaryLiteral,
  OctLiteral,
  HexFloatLiteral,
  HexLiteral,
  FloatLiteral,
  DecimalLiteral,
  CharLiteral,
  StringLiteral,
  // The Identifier must appear after the keywords because all keywords are valid identifiers.
  Identifier,
  DotDotDot,
  Dot,
  Comma,
  SemiColon,
  ColonColon,
  Colon,
  Equal,
  And,
  LBrace,
  RBrace,
  LCurly,
  RCurly,
  LSquare,
  RSquare,
  Pointer,
  Less,
  Greater,
  At,
  Star,
  Questionmark,
  VerticalLine
];

module.exports = {
  allTokens,
  tokens: {
    WhiteSpace,
    Boolean,
    Char,
    Byte,
    Short,
    Interface,
    Int,
    Long,
    Float,
    Double,
    Void,
    Public,
    Protected,
    Private,
    Static,
    Abstract,
    Catch,
    Finally,
    Final,
    Native,
    Synchronized,
    Transient,
    Extends,
    Implements,
    New,
    This,
    Super,
    Throws,
    Throw,
    Return,
    Break,
    Continue,
    If,
    Else,
    While,
    Do,
    Try,
    Switch,
    True,
    False,
    Null,
    Assert,
    Volatile,
    Strictfp,
    Class,
    Enum,
    Import,
    Package,
    Default,
    Case,
    BinaryLiteral,
    HexFloatLiteral,
    HexLiteral,
    OctLiteral,
    FloatLiteral,
    DecimalLiteral,
    CharLiteral,
    StringLiteral,
    Identifier,
    DotDotDot,
    Dot,
    Comma,
    SemiColon,
    ColonColon,
    Colon,
    Equal,
    And,
    LBrace,
    RBrace,
    LCurly,
    RCurly,
    LSquare,
    RSquare,
    Pointer,
    Less,
    Greater,
    At,
    Star,
    Questionmark,
    VerticalLine
  }
};
