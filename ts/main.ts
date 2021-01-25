// Imports
import { UtilService } from './services/util-service.js';
import { DataLink, DataLinks } from "./type-definitions/index";
import { data_links } from "./data/data_links.js";

// Constants
const elRootLinks = document.getElementById("Links") as HTMLElement;

function onInit() {
  elRootLinks.innerHTML = "";
  renderLinkData((data_links as DataLinks).mainLinks);
  renderLinkData((data_links as DataLinks).communityLinks);
}

function renderLinkData(data: DataLink[] ){
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
