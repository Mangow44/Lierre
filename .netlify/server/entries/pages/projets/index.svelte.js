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
  default: () => Projets
});
module.exports = __toCommonJS(stdin_exports);
var import_index_fa4a4ce4 = require("../../../immutable/chunks/index-fa4a4ce4.js");
var import_Bloc_svelte = __toESM(require("./Bloc.svelte.js"));
const projets = [
  {
    src: "/pictures/momo_the_wind_mage.png",
    name: "Momo - Summoners war",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum rutrum placerat.Pellentesque non interdum nisl. Class aptent taciti sociosqu ad litora torquent per conubianostra, per inceptos himenaeos. Nam consequat magna odio, eu lobortis orci volutpat ut.Pellentesque congue eu lectus eget tempus. In risus orci, bibendum sit amet finibus quis, temporsed ex. Integer bibendum accumsan neque, in dictum turpis posuere in. Maecenas molestie, auguenon eleifend mollis, ipsum orci aliquet nibh, non commodo orci turpis et mi.",
    pictures: [
      { src: "/pictures/loretta.png", alt: "loretta" },
      { src: "/pictures/loretta.png", alt: "loretta" },
      { src: "/pictures/loretta.png", alt: "loretta" },
      { src: "/pictures/loretta.png", alt: "loretta" },
      { src: "/pictures/loretta.png", alt: "loretta" }
    ]
  },
  {
    src: "/pictures/momo_the_wind_mage.png",
    name: "Momo - Summoners war",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum rutrum placerat.Pellentesque non interdum nisl. Class aptent taciti sociosqu ad litora torquent per conubianostra, per inceptos himenaeos. Nam consequat magna odio, eu lobortis orci volutpat ut.Pellentesque congue eu lectus eget tempus. In risus orci, bibendum sit amet finibus quis, temporsed ex. Integer bibendum accumsan neque, in dictum turpis posuere in. Maecenas molestie, auguenon eleifend mollis, ipsum orci aliquet nibh, non commodo orci turpis et mi.",
    pictures: [
      { src: "/pictures/loretta.png", alt: "loretta" },
      { src: "/pictures/loretta.png", alt: "loretta" },
      { src: "/pictures/loretta.png", alt: "loretta" },
      { src: "/pictures/loretta.png", alt: "loretta" },
      { src: "/pictures/loretta.png", alt: "loretta" }
    ]
  }
];
const Projets = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_fa4a4ce4.e)(projets, (projet) => {
    return `${(0, import_index_fa4a4ce4.v)(import_Bloc_svelte.default, "BlocProjet").$$render($$result, { projet }, {}, {})}`;
  })}`;
});
