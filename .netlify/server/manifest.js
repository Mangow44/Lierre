var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["banniere.png", "favicon.png", "morris-roman/MorrisRomanBlack.otf", "morris-roman/MorrisRomanBlack.ttf", "morris-roman/MorrisRomanBlackAlt.otf", "morris-roman/MorrisRomanBlackAlt.ttf", "pictures/belin-goblin.jpg", "pictures/croped-cat.jpg", "pictures/decor-exterieur-necropole.jpg", "pictures/diablotin.png", "pictures/gao_mochi.jpg", "pictures/halloween-cat-painting.jpg", "pictures/le_tablier.jpeg", "pictures/lierre.jpeg", "pictures/loretta.png", "pictures/momo_the_wind_mage.png", "pictures/windy-staircase.jpg", "washington_text/WashingtonText-Alternates.ttf", "washington_text/WashingtonText.ttf"]),
  mimeTypes: { ".png": "image/png", ".otf": "font/otf", ".ttf": "font/ttf", ".jpg": "image/jpeg", ".jpeg": "image/jpeg" },
  _: {
    entry: { "file": "immutable/start-2bcb1f0a.js", "imports": ["immutable/start-2bcb1f0a.js", "immutable/chunks/index-085399b4.js", "immutable/chunks/singletons-cdeec3fd.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "apropos",
        pattern: /^\/apropos\/?$/,
        names: [],
        types: [],
        path: "/apropos",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "contact",
        pattern: /^\/contact\/?$/,
        names: [],
        types: [],
        path: "/contact",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "galerie",
        pattern: /^\/galerie\/?$/,
        names: [],
        types: [],
        path: "/galerie",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "projets",
        pattern: /^\/projets\/?$/,
        names: [],
        types: [],
        path: "/projets",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "projets/Bloc",
        pattern: /^\/projets\/Bloc\/?$/,
        names: [],
        types: [],
        path: "/projets/Bloc",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "galerie/[picture]",
        pattern: /^\/galerie\/([^/]+?)\/?$/,
        names: ["picture"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 8],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
