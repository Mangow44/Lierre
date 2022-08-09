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
  p: () => pictures
});
module.exports = __toCommonJS(stdin_exports);
const pictures = [
  {
    name: "Momo the Wind Mage",
    src: "/pictures/momo_the_wind_mage.png",
    url: "momo_the_wind_mage",
    description: "Fanart de Momo la mage vent du jeu Summoners War",
    date: "05/2022"
  },
  {
    name: "Loretta",
    src: "/pictures/loretta.png",
    url: "loretta",
    date: "04/2022"
  },
  {
    name: "Gao.mochi",
    src: "/pictures/gao_mochi.jpg",
    url: "gao_mochi",
    description: "Fanart de @gao.mochi sur Instagram",
    date: "04/2022"
  },
  {
    name: "Diablotin",
    src: "/pictures/diablotin.png",
    url: "diablotin",
    date: "03/2022"
  },
  {
    name: "Le tablier",
    src: "/pictures/le_tablier.jpeg",
    url: "le_tablier",
    date: "05/2021"
  },
  {
    name: "Lierre",
    src: "/pictures/lierre.jpeg",
    url: "lierre",
    date: "01/2021"
  }
];
