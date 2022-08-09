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
  default: () => Contact
});
module.exports = __toCommonJS(stdin_exports);
var import_index_fa4a4ce4 = require("../../../immutable/chunks/index-fa4a4ce4.js");
var import_Pinterest_2819d9bd = require("../../../immutable/chunks/Pinterest-2819d9bd.js");
const EmailOutline = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg${(0, import_index_fa4a4ce4.b)("width", width, 0)}${(0, import_index_fa4a4ce4.b)("height", height, 0)}${(0, import_index_fa4a4ce4.b)("viewBox", viewBox, 0)}><path d="${"M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"}"${(0, import_index_fa4a4ce4.b)("fill", color, 0)}></path></svg>`;
});
const Contact = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  let socialNetworks = [
    {
      name: "Twitter",
      url: "https://twitter.com/lierre_art"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/lierre_art/"
    },
    {
      name: "Pinterest",
      url: "https://pin.it/2aZ8cTK"
    },
    {
      name: "Email",
      url: "lipazaran.is.here@gmail.com"
    }
  ];
  return `<div class="${"flex flex-col h-[calc(100vh-5rem)] w-full pt-16 min-h-[450px] min-w-[265px]"}"><div class="${"my-auto"}"><img src="${"/pictures/croped-cat.jpg"}" alt="${"Looking at you"}" class="${"max-w-[80%] mx-auto fade-in-anim"}">
		<h1 class="${"text-center"}">Retrouvez moi sur vos r\xE9seaux sociaux.</h1></div>

	<ul class="${"flex flex-col items-center h-auto w-full m-auto font-medium"}">${(0, import_index_fa4a4ce4.e)(socialNetworks, (sn) => {
    return `<li class="${"flex cursor-pointer hover:scale-110 my-1"}">${sn.name == "Twitter" ? `<span class="${"mr-3"}">${(0, import_index_fa4a4ce4.v)(import_Pinterest_2819d9bd.T, "Twitter").$$render($$result, { size: 26 }, {}, {})}</span>` : `${sn.name == "Instagram" ? `<span class="${"mr-3"}">${(0, import_index_fa4a4ce4.v)(import_Pinterest_2819d9bd.I, "Instagram").$$render($$result, { size: 26 }, {}, {})}</span>` : `${sn.name == "Pinterest" ? `<span class="${"mr-3"}">${(0, import_index_fa4a4ce4.v)(import_Pinterest_2819d9bd.P, "Pinterest").$$render($$result, { size: 26 }, {}, {})}</span>` : `${sn.name == "Email" ? `<span class="${"mr-3"}">${(0, import_index_fa4a4ce4.v)(EmailOutline, "EmailOutline").$$render($$result, { size: 26 }, {}, {})}</span>` : ``}`}`}`}

				${(0, import_index_fa4a4ce4.a)(sn.name)}
			</li>`;
  })}</ul>

	<p class="${"m-auto font-medium text-sm my-[2rem]"}">Site d\xE9velopp\xE9 par
		<span class="${"underline cursor-pointer"}">Thomas Clouet
		</span>
		.
	</p></div>`;
});
