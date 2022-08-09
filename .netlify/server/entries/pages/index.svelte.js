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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_fa4a4ce4 = require("../../immutable/chunks/index-fa4a4ce4.js");
const Routes = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex h-[calc(100vh-5rem)] w-full pt-16 min-h-[450px] min-w-[265px]"}"><img class="${"max-h-[100%] min-h-[100px] w-auto m-auto landing-scale-anim"}" src="${"./banniere.png"}" alt="${"Banni\xE8re de pr\xE9sentation : Lierre"}"></div>`;
});
