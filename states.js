const stateList = [
  {
    name: "Andhra Pradesh",
    url: "https://www.frisqoo.com/p/cng-price-in-andhra-pradesh.html"
  },
  {
    name: "Tamil Nadu",
    url: "https://www.frisqoo.com/p/cng-price-in-tamil-nadu.html",
    cityFile: "https://novelmuseum2k20.github.io/Test/tn.js"
  },
  // Add all other states here with optional cityFile for those needing it
];

function loadStates(defaultState = "") {
  const container = document.getElementById("stateDropdownContainer");
  const select = document.createElement("select");
  select.id = "stateSelect";

  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Select Your State";
  defaultOption.value = "";
  select.appendChild(defaultOption);

  stateList.forEach((state) => {
    const option = document.createElement("option");
    option.textContent = state.name;
    option.value = state.name;
    if (state.name === defaultState) option.selected = true;
    select.appendChild(option);
  });

  select.onchange = () => {
    const selectedState = select.value;
    const state = stateList.find(s => s.name === selectedState);
    if (!state) return;

    // If state has cityFile, load city list
    if (state.cityFile) {
      loadCityFile(state.cityFile);
    } else if (state.url) {
      // Otherwise, go directly to state page
      window.location.href = state.url;
    }
  };

  container.innerHTML = "";
  container.appendChild(select);

  // Handle default state on page load
  if (defaultState) {
    const default = stateList.find(s => s.name === defaultState);
    if (default?.cityFile) {
      loadCityFile(default.cityFile);
    }
  }
}

function loadCityFile(jsUrl) {
  const oldScript = document.getElementById("cityScript");
  if (oldScript) oldScript.remove();

  const script = document.createElement("script");
  script.src = jsUrl;
  script.id = "cityScript";
  document.body.appendChild(script);
}
