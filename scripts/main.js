// Imports
import { UtilService } from './services/util-service.js';
import { data_links } from "./data/data_links.js";
// Constants
const elRootLinks = document.getElementById("Links");
const elSectionSidebar = document.getElementById("section-sidebar");
const elSectionSidebarToggle = document.getElementById("section-sidebar-toggle");

function setSectionSidebarOpen(isOpen) {
    elSectionSidebar.classList.toggle("open", isOpen);
    elSectionSidebarToggle.setAttribute("aria-expanded", String(isOpen));
    elSectionSidebarToggle.setAttribute("aria-label", isOpen ? "Close section navigation" : "Open section navigation");
}

function initSectionSidebar() {
    elSectionSidebarToggle.addEventListener("click", () => {
        setSectionSidebarOpen(!elSectionSidebar.classList.contains("open"));
    });
    elSectionSidebar.querySelectorAll(".nav-contents a").forEach(elLink => {
        elLink.addEventListener("click", () => setSectionSidebarOpen(false));
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && elSectionSidebar.classList.contains("open")) {
            setSectionSidebarOpen(false);
            elSectionSidebarToggle.focus();
        }
    });
}

function onInit() {
    initSectionSidebar();
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
        elUlLinks.appendChild(elLiLink);
    });
    elRootLinks.appendChild(elUlLinks);
}
onInit();
