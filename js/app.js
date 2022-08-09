/**
 * WEB222 – Final Assessment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Ka Man Chan
 *      Student ID: 160678215
 *      Date:       August 9, 2022
 */

// Import data
const { provinces, cities } = window;

// Resolving province name "Ontario" to code "ON"
const getCodeByProvince = name => provinces.filter(province => province.name === name)[0].code;

// Event listener to update city autocomplete list upon province change
const onProvinceClick = event => provinceChange(event.target.innerText);

// Auto capitalizing postal code as user types
const onPostalChange = event => event.target.value = event.target.value.toLocaleUpperCase();

// Update city autocomplete list based on province name
const provinceChange = (name) => {
    const code = getCodeByProvince(name);    
    const provinceDropdown = document.getElementById("provinceDropdown");
    const cityList = document.getElementById("cities");
    const cityName = document.getElementById("city");

    provinceDropdown.innerText = name;

    cityList.innerHTML = ''; // Clear old city list
    cities
    .filter(city => city.province === code) // Filter city by province code
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(city => {
        const item = document.createElement("option");
        item.setAttribute("value", city.name);
        cityList.appendChild(item);
    });    

    cityName.value = '';
    cityName.addEventListener("change", updatePostal);
}

// Update postal code prefix autocomplete list upon changing city
const updatePostal = () => {
    const cityName = document.getElementById("city");
    const prefixes = document.getElementById("prefixes");
    const postal = document.getElementById("postal");
    
    prefixes.innerHTML = ''; // Clear old postal code prefix list
    postal.value = '';
    cities
    .filter(city => city.name === cityName.value) // Filter city by name
    .forEach(city => {
        city.postal
        .sort((a, b) => a.localeCompare(b))
        .forEach(postal => {
            const item = document.createElement("option");
            item.setAttribute("value", postal);
            prefixes.appendChild(item);
        })
    })
}

// Hide and unhide the rate input field and toggle the required attribute
const updateMessage = (event) => {
    const rate = document.getElementById("rate");
    if (event.target.value === "hiring") {        
        rate.setAttribute("required", true)
        rate.classList.remove("hidden");
    }
    else {
        rate.removeAttribute("required");
        rate.classList.add("hidden");
    }
}

// Initialization
window.onload = () => {
    
    const provinceList = document.getElementById("provinces");
    const postal = document.getElementById("postal");
    const messageType = document.getElementsByName("messageType");        
    
    // Initialize province dropdown menu with flag image and event listener
    provinces
    .forEach(province => {
        const item = document.createElement("a");
        const flag = document.createElement("img");
        flag.setAttribute("src", `./image/${province.code}.png`);
        flag.setAttribute("width", "32");
        flag.classList.add("mx-2");
        item.setAttribute("class", "dropdown-item");
        item.appendChild(flag);
        item.appendChild(document.createTextNode(province.name));
        item.addEventListener("click", onProvinceClick);
        provinceList.appendChild(item);
    });

    // Show Ontario in the dropdown by default
    provinceChange("Ontario");

    // Auto capitalizing postal code as user types
    postal.addEventListener("keyup", onPostalChange);

    // Event listener to update the Rate input field
    for (var i=0; i < messageType.length; i++) {
        messageType[i].addEventListener("change", updateMessage);
    }
}