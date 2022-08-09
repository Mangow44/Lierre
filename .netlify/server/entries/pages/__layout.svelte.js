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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_fa4a4ce4 = require("../../immutable/chunks/index-fa4a4ce4.js");
var import_stores_123dfec1 = require("../../immutable/chunks/stores-123dfec1.js");
var import_Pinterest_2819d9bd = require("../../immutable/chunks/Pinterest-2819d9bd.js");
const app = "";
const Mobile = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  let { navigation = [] } = $$props;
  let { selected = "" } = $$props;
  let { collapse = false } = $$props;
  if ($$props.navigation === void 0 && $$bindings.navigation && navigation !== void 0)
    $$bindings.navigation(navigation);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.collapse === void 0 && $$bindings.collapse && collapse !== void 0)
    $$bindings.collapse(collapse);
  return `<ul class="${"fixed left-0 h-screen w-[60%] pt-[7rem] z-10 flex flex-col sm:invisible visible font-washington bg-c-cream"}">${(0, import_index_fa4a4ce4.e)(navigation, (page2) => {
    return `<li class="${"ml-4 my-3 text-2xl font-medium cursor-pointer hover:scale-105 " + (0, import_index_fa4a4ce4.a)(selected == page2.url ? "underline" : "", true)}">${(0, import_index_fa4a4ce4.a)(page2.name)}
		</li>`;
  })}</ul>


<div class="${"absolute h-screen w-screen sm:invisible visible opacity-60 bg-c-cream"}"></div>`;
});
const Menu = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  let { size: size2 = "1em" } = $$props;
  let { width = size2 } = $$props;
  let { height = size2 } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg${(0, import_index_fa4a4ce4.b)("width", width, 0)}${(0, import_index_fa4a4ce4.b)("height", height, 0)}${(0, import_index_fa4a4ce4.b)("viewBox", viewBox, 0)}><path d="${"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}"${(0, import_index_fa4a4ce4.b)("fill", color, 0)}></path></svg>`;
});
const Close = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  let { size: size2 = "1em" } = $$props;
  let { width = size2 } = $$props;
  let { height = size2 } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg${(0, import_index_fa4a4ce4.b)("width", width, 0)}${(0, import_index_fa4a4ce4.b)("height", height, 0)}${(0, import_index_fa4a4ce4.b)("viewBox", viewBox, 0)}><path d="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"${(0, import_index_fa4a4ce4.b)("fill", color, 0)}></path></svg>`;
});
const Burger = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  let { collapse = false } = $$props;
  if ($$props.collapse === void 0 && $$bindings.collapse && collapse !== void 0)
    $$bindings.collapse(collapse);
  return `<div class="${"z-20 fixed left-2 top-2.5 sm:invisible visible cursor-pointer"}">${!collapse ? `<div>${(0, import_index_fa4a4ce4.v)(Menu, "Menu").$$render($$result, { size: 42 }, {}, {})}</div>` : `<div>${(0, import_index_fa4a4ce4.v)(Close, "Close").$$render($$result, { size: 42 }, {}, {})}</div>`}</div>`;
});
const Logo = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  let { selected = "" } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  return `<div class="${"fixed h-auto w-full min-w-[300px] sm:w-auto"}"><h1 class="${"mt-3 text-center font-morris text-5xl hover:scale-110 cursor-pointer"}">LIERRE
	</h1></div>`;
});
const Navigation = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  let { navigation = [] } = $$props;
  let { selected = "" } = $$props;
  if ($$props.navigation === void 0 && $$bindings.navigation && navigation !== void 0)
    $$bindings.navigation(navigation);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  return `<ul class="${"flex my-auto ml-auto mx-3 sm:visible invisible font-washington"}" style="${"font-size: 20px;"}">${(0, import_index_fa4a4ce4.e)(navigation, (page2) => {
    return `<li class="${"mx-2 hover:scale-110 cursor-pointer " + (0, import_index_fa4a4ce4.a)(selected == page2.url ? "underline" : "", true)}">${(0, import_index_fa4a4ce4.a)(page2.name)}
		</li>`;
  })}</ul>`;
});
const NavigationBar = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  let selected;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_fa4a4ce4.d)(import_stores_123dfec1.p, (value) => $page = value);
  let navigation = [
    { name: "Galerie", url: "/galerie" },
    { name: "Projets", url: "/projets" },
    { name: "\xC0 propos", url: "/apropos" },
    { name: "Contact", url: "/contact" }
  ];
  let collapse = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    selected = $page.url.pathname;
    $$rendered = `<nav class="${"fixed flex h-[4rem] w-full z-10 bg-white"}">
	${(0, import_index_fa4a4ce4.v)(Logo, "Logo").$$render($$result, { selected }, {
      selected: ($$value) => {
        selected = $$value;
        $$settled = false;
      }
    }, {})}

	
	${(0, import_index_fa4a4ce4.v)(Navigation, "Navigation").$$render($$result, { navigation, selected }, {}, {})}

	
	${(0, import_index_fa4a4ce4.v)(Burger, "Burger").$$render($$result, { collapse }, {
      collapse: ($$value) => {
        collapse = $$value;
        $$settled = false;
      }
    }, {})}

	
	${collapse ? `${(0, import_index_fa4a4ce4.v)(Mobile, "Mobile").$$render($$result, { navigation, selected, collapse }, {
      collapse: ($$value) => {
        collapse = $$value;
        $$settled = false;
      }
    }, {})}` : ``}</nav>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
let size = 21;
const Footer = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
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
    }
  ];
  return `<div class="${"flex flex-col h-[5rem] w-full"}"><p class="${"m-auto text-center font-medium text-xs"}">\xA9 2023 - Ana\xEFs Vautier
		<br> Tous droits r\xE9serv\xE9s
	</p>

	<ul class="${"flex m-auto cursor-pointer"}">${(0, import_index_fa4a4ce4.e)(socialNetworks, (sn) => {
    return `<li class="${"px-1 hover:scale-110"}">${sn.name == "Twitter" ? `${(0, import_index_fa4a4ce4.v)(import_Pinterest_2819d9bd.T, "Twitter").$$render($$result, { size }, {}, {})}` : `${sn.name == "Instagram" ? `${(0, import_index_fa4a4ce4.v)(import_Pinterest_2819d9bd.I, "Instagram").$$render($$result, { size }, {}, {})}` : `${sn.name == "Pinterest" ? `${(0, import_index_fa4a4ce4.v)(import_Pinterest_2819d9bd.P, "Pinterest").$$render($$result, { size }, {}, {})}` : ``}`}`}
			</li>`;
  })}</ul></div>`;
});
const _layout = (0, import_index_fa4a4ce4.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_fa4a4ce4.v)(NavigationBar, "NavigationBar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${(0, import_index_fa4a4ce4.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
