// Imports
import { UtilService } from './services/util-service.js';
import { data_links } from "./data/data_links.js";
// Constants
const elRootLinks = document.getElementById("Links");
function onInit() {
    elRootLinks.innerHTML = "";
    renderLinkData(data_links.mainLinks);
    renderLinkData(data_links.communityLinks);
}
function renderLinkData(data) {
    const elUlLinks = document.createElement("ul");
    data.forEach(elLink => {
        const elaLink = UtilService.getExternalLinkEl(elLink.url);
        elaLink.innerHTML = elLink.text;
        const elLiLink = document.createElement("li");
        elLiLink.appendChild(elaLink);
        elRootLinks.appendChild(elLiLink);
    });
    elRootLinks.appendChild(elUlLinks);
}
onInit();
