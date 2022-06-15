const RECIPE_URL = "https://gamma-delta.github.io/center-brain-archive/dsp.json";
/** Common functions for links */
export class UtilService {
    /**
     * <a href="url" rel="noopener" target="_blank"></a>
     * @param {String} url
     */
    static getExternalLinkEl(url) {
        const elLink = document.createElement("a");
        elLink.href = url;
        elLink.rel = "noopener";
        elLink.target = "_blank";
        return elLink;
    }
    /**
     * <i class="fas fa-id"></i>
     * @param {String} id of the Font Awesome Icon
     */
    static getFaIcon(id) {
        const elIcon = document.createElement("i");
        elIcon.classList.value = "fas fa-xs fa-" + id;
        return elIcon;
    }
    // static getKirkLink(item: string, count: number): string {
    //   return `https://kirkmcdonald.github.io/satisfactory-calculator/calc.html#tab=totals&items=${item.replace(/[_ ]/g, "-").toLowerCase()}:f:${count}`;
    // }
    /**
     * @return url string
     * @param {String} name
     */
    static getGameIconPath(name) {
        return "https://calc.dsp-wiki.com/images/" + name + ".png";
    }
    /**
     * <img src="url" alt="name" title="name">
     * @param {String} name
     */
    static getGameIcon(name) {
        if (name) {
            name = name.replace(/_/g, " ");
            name = name.replace(/\w\S*/g, (txt) => {
                return txt.charAt(0).toUpperCase() + txt.substr(1);
            });
        }
        const elImage = document.createElement("img");
        elImage.src = this.getGameIconPath(name);
        elImage.alt = name;
        elImage.title = name;
        return elImage;
    }
    static getHrName(name) {
        if (name) {
            name = name.replace(/_/g, " ");
            name = name.replace(/\w\S*/g, (txt) => {
                return txt.charAt(0).toUpperCase() + txt.substr(1);
            });
        }
        return name;
    }
    /**
     *
     * @param {String} product
     * @param {String} machine
     */
    static getGameIconProductionItem(product, machine, count) {
        const elDivIcon = document.createElement("div");
        elDivIcon.classList.value = "icon-composite";
        const elImgBg = this.getGameIcon(machine);
        elImgBg.classList.value = "icon icon-bg";
        const elImgFg = this.getGameIcon(product);
        elImgFg.classList.value = "icon icon-fg";
        const elSpan = document.createElement("span");
        elSpan.appendChild(document.createTextNode(count.toString()));
        elSpan.classList.value = "icon-text";
        elDivIcon.appendChild(elImgBg);
        elDivIcon.appendChild(elImgFg);
        elDivIcon.appendChild(elSpan);
        return elDivIcon;
    }
    static getJsonFromUrl(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "json";
        xhr.onload = function () {
            const status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            }
            else {
                callback(`${status}`, xhr.response);
            }
        };
        xhr.send();
    }
}
