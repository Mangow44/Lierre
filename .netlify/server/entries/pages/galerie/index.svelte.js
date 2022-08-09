var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Galerie
});
module.exports = __toCommonJS(stdin_exports);
var import_index_fa4a4ce4 = require("../../../immutable/chunks/index-fa4a4ce4.js");
var import_pictures_4185de69 = require("../../../immutable/chunks/pictures-4185de69.js");
const Galerie = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-wrap justify-center h-auto w-full pt-16 min-h-[450px] min-w-[265px]"}">${(0, import_index_fa4a4ce4.e)(import_pictures_4185de69.p, (picture) => {
    return `<div class="${"h-auto w-auto m-2 cursor-pointer hover:filter hover:brightness-110 transition"}"><img${(0, import_index_fa4a4ce4.b)("src", picture.src, 0)}${(0, import_index_fa4a4ce4.b)("alt", picture.name, 0)} style="${"object-fit: cover;"}" class="${"h-[26rem] w-[26rem] fade-in-anim"}">
		</div>`;
  })}</div>`;
});
