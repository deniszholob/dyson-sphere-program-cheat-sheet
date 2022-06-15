// Imports
import { UtilService } from "./services/util-service.js";
import { data_links } from "./data/data_links.js";
import { getRecipes } from "./data/dsp.js";
import { DSP_BUILDINGS } from "./data/dsp.data.js";
// Constants
const elRootLinks = document.getElementById("Links");
function onInit() {
    elRootLinks.innerHTML = "";
    renderLinkData(data_links.mainLinks);
    renderLinkData(data_links.communityLinks);
    getRecipes().then((data) => renderRecipeCalc(data));
}
function renderRecipeCalc(data) {
    // console.log(data.recipes);
    const buildingRecipes = Object.values(data.recipes).filter((r) => {
        return DSP_BUILDINGS.some((v) => v === r.recipe);
    });
    console.log(buildingRecipes);
    const ingredientSimilarities = buildingRecipes.flatMap((r) => r.ingredients);
    // console.log(ingredientSimilarities);
    const ingredientSimilaritiesCount = {};
    ingredientSimilarities.forEach((i) => (ingredientSimilaritiesCount[i.item] = ingredientSimilaritiesCount[i.item]
        ? ingredientSimilaritiesCount[i.item] + 1
        : 1));
    // console.log(ingredientSimilaritiesCount);
    console.log(Object.entries(ingredientSimilaritiesCount).sort((a, b) => b[1] - a[1]));
}
function renderLinkData(data) {
    const elUlLinks = document.createElement("ul");
    data.forEach((elLink) => {
        const elaLink = UtilService.getExternalLinkEl(elLink.url);
        elaLink.innerHTML = elLink.text;
        const elLiLink = document.createElement("li");
        elLiLink.appendChild(elaLink);
        elRootLinks.appendChild(elLiLink);
    });
    elRootLinks.appendChild(elUlLinks);
}
onInit();
