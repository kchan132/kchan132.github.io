// Import data
const { provinces, cities } = window;

// Helper function
const getCodeByProvince = name => provinces.filter(province => province.name === name)[0].code;

// Event listeners
const onProvinceClick = event => provinceChange(event.target.innerText);
const onPostalChange = event => event.target.value = event.target.value.toLocaleUpperCase();

const provinceChange = (name) => {
    const code = getCodeByProvince(name);    
    const provinceDropdown = document.getElementById("provinceDropdown");
    const cityList = document.getElementById("cities");
    const cityName = document.getElementById("city");

    provinceDropdown.innerText = name;

    cityList.innerHTML = '';
    cities
    .filter(city => city.province === code)
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(city => {
        const item = document.createElement("option");
        item.setAttribute("value", city.name);
        cityList.appendChild(item);
    });    

    cityName.value = '';
    cityName.addEventListener("change", updatePostal);
}

const updatePostal = () => {
    const cityName = document.getElementById("city");
    const prefixes = document.getElementById("prefixes");
    const postal = document.getElementById("postal");
    
    prefixes.innerHTML = '';
    postal.value = '';
    cities
    .filter(city => city.name === cityName.value)
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

const updateMessage = (event) => {
    const rate = document.getElementById("rate");
    if (event.target.value === "hiring") {
        rate.removeAttribute("hidden");
        rate.setAttribute("required", true)
    }
    else {
        rate.removeAttribute("required");
        rate.setAttribute("hidden", true);        
    }
}

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

    provinceChange("Ontario");

    postal.addEventListener("keyup", onPostalChange);

    for (var i=0; i < messageType.length; i++) {
        messageType[i].addEventListener("change", updateMessage);
    }
}