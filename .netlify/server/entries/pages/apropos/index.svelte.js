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
  default: () => Apropos
});
module.exports = __toCommonJS(stdin_exports);
var import_index_fa4a4ce4 = require("../../../immutable/chunks/index-fa4a4ce4.js");
const Apropos = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col h-screen w-full pt-16 min-h-[450px] min-w-[265px] sm:flex-row sm:h-[calc(100vh-5rem)]"}"><img class="${"h-[11rem] w-auto m-auto sm:h-[15rem] sm:ml-auto fade-in-anim"}" src="${"/pictures/lierre.jpeg"}" alt="${"Lierre"}">
	<div class="${"h-auto w-auto m-auto p-2 sm:max-w-[600px] sm:my-auto sm:mr-auto sm:ml-2 text-justify overflow-auto"}">Lierre, de son vrai nom Ana\xEFs Vautier, est une illustratrice fran\xE7aise. Son travail, au trait
		pr\xE9cis mais stylis\xE9, m\xEAle les influences diverses de la fantasy, de l\u2019art m\xE9di\xE9val, de la
		litt\xE9rature gothique, mais aussi du manga et du pr\xE9rapha\xE9lisme. En dehors de la fiction, elle
		s\u2019int\xE9resse \xE0 l\u2019Histoire, \xE0 la nature et aux vieilles pierres.
	</div></div>`;
});
