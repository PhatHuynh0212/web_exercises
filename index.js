const item = document.querySelector("ul.nav-item");
const brands = document.querySelector(".brands");
const heading = document.querySelector(".product-heading");
heading.addEventListener;
let currentTab = "";

const menus = {
    Laptop: ["Sony", "Acer", "Asus", "Dell"],
    Smartphone: ["iPhone", "Galaxy S", "Sony Xperia"],
    Tablet: ["Galaxy Tab", "iPad", "Xperia Tab"],
};
const categories = Object.keys(menus);

const setTab = (newTab) => {
    currentTab = newTab;
    heading.textContent = newTab;
    render();
};

const renderItem = () => {
    let result = "";

    categories.forEach((key) => {
        const isActive = currentTab === key;

        /**
         * Cách 1:
         *
         * result += `<li class="tab nav-item nav-link cursor-pointer capitalize ${isActive ? 'text-primary' : 'text-muted'}" onclick="setTab('${key}')">${key}</li>`
         *
         */

        // Cách 2:
        result += `<li class="tab nav-item nav-link cursor-pointer capitalize ${
            isActive ? "text-danger" : "text-muted"
        }">${key}</li>`;
    });

    item.innerHTML = result;

    // Cách 2:
    const navItems = item.querySelectorAll(".tab");
    navItems.forEach((item, i) => {
        item.addEventListener("click", () => setTab(categories[i]));
    });
};

const renderList = () => {
    let result = "";
    const items = menus[currentTab] || [];

    if (items.length > 0) {
        items.forEach((item) => {
            result += `<div class="col-lg-4">
        <div class="card mb-4 shadow-sm">
            <div class="card-body">
                <p class="card-text text-center">${item}</p>
            </div>
        </div>
    </div>`;
        });
    } else {
        result = `<p>Please, choosing one product.</p>`;
    }

    brands.innerHTML = result;
};

function render() {
    renderItem();
    renderList();
}

render();
