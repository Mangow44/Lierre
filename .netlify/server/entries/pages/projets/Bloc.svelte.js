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
  default: () => Bloc
});
module.exports = __toCommonJS(stdin_exports);
var import_index_fa4a4ce4 = require("../../../immutable/chunks/index-fa4a4ce4.js");
const Bloc = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  let { projet = null } = $$props;
  if ($$props.projet === void 0 && $$bindings.projet && projet !== void 0)
    $$bindings.projet(projet);
  return `${projet ? `<div class="${"flex flex-col h-screen w-full pt-16 min-h-[450px] min-w-[265px] sm:flex-row"}"><img class="${"h-auto w-[15rem] m-auto sm:w-[30%] sm:ml-auto fade-in-anim"}"${(0, import_index_fa4a4ce4.b)("src", projet.src, 0)}${(0, import_index_fa4a4ce4.b)("alt", projet.name, 0)}>
		<div class="${"flex flex-col h-auto w-auto m-auto mt-1 overflow-auto p-2 sm:mr-auto sm:my-auto sm:max-w-[600px]"}"><h1 class="${"mx-auto font-medium"}">${(0, import_index_fa4a4ce4.a)(projet.name)}</h1>
			<p class="${"mx-auto text-justify"}">${(0, import_index_fa4a4ce4.a)(projet.description)}</p></div></div>

	<div class="${"flex flex-wrap justify-center h-auto w-full"}">${(0, import_index_fa4a4ce4.e)(projet.pictures, (pic) => {
    return `<img class="${"h-[24rem] w-[24rem] m-2 fade-in-anim"}" style="${"object-fit: cover;"}"${(0, import_index_fa4a4ce4.b)("src", pic.src, 0)}${(0, import_index_fa4a4ce4.b)("alt", pic.alt, 0)}>`;
  })}</div>` : ``}`;
});
