function loadTamilNaduCities(defaultCity) {
  const cities = [
  { name: "Select Your City", url: "https://www.frisqoo.com/p/cng-price-in-tamil-nadu.html" },
  { name: "Ariyalur", url: "https://www.frisqoo.com/p/cng-price-in-ariyalur.html" },
  { name: "Chengalpattu", url: "https://www.frisqoo.com/p/cng-price-in-chengalpattu.html" },
  { name: "Chennai", url: "https://www.frisqoo.com/p/cng-price-in-chennai.html" },
  { name: "Coimbatore", url: "https://www.frisqoo.com/p/cng-price-in-coimbatore.html" },
  { name: "Cuddalore", url: "https://www.frisqoo.com/p/cng-price-in-cuddalore.html" },
  { name: "Dharmapuri", url: "https://www.frisqoo.com/p/cng-price-in-dharmapuri.html" },
  { name: "Dindigul", url: "https://www.frisqoo.com/p/cng-price-in-dindigul.html" },
  { name: "Erode", url: "https://www.frisqoo.com/p/cng-price-in-erode.html" },
  { name: "Kallakurichi", url: "https://www.frisqoo.com/p/cng-price-in-kallakurichi.html" },
  { name: "Kanchipuram", url: "https://www.frisqoo.com/p/cng-price-in-kanchipuram.html" },
  { name: "Kanniyakumari", url: "https://www.frisqoo.com/p/cng-price-in-kanniyakumari.html" },
  { name: "Karur", url: "https://www.frisqoo.com/p/cng-price-in-karur.html" },
  { name: "Krishnagiri", url: "https://www.frisqoo.com/p/cng-price-in-krishnagiri.html" },
  { name: "Madurai", url: "https://www.frisqoo.com/p/cng-price-in-madurai.html" },
  { name: "Mayiladuthurai", url: "https://www.frisqoo.com/p/cng-price-in-mayiladuthurai.html" },
  { name: "Nagapattinam", url: "https://www.frisqoo.com/p/cng-price-in-nagapattinam.html" },
  { name: "Namakkal", url: "https://www.frisqoo.com/p/cng-price-in-namakkal.html" },
  { name: "Nilgiris", url: "https://www.frisqoo.com/p/cng-price-in-nilgiris.html" },
  { name: "Perambalur", url: "https://www.frisqoo.com/p/cng-price-in-perambalur.html" },
  { name: "Pudukkottai", url: "https://www.frisqoo.com/p/cng-price-in-pudukkottai.html" },
  { name: "Ramanathapuram", url: "https://www.frisqoo.com/p/cng-price-in-ramanathapuram.html" },
  { name: "Ranipet", url: "https://www.frisqoo.com/p/cng-price-in-ranipet.html" },
  { name: "Salem", url: "https://www.frisqoo.com/p/cng-price-in-salem.html" },
  { name: "Sivaganga", url: "https://www.frisqoo.com/p/cng-price-in-sivaganga.html" },
  { name: "Teni", url: "https://www.frisqoo.com/p/cng-price-in-teni.html" },
  { name: "Tenkasi", url: "https://www.frisqoo.com/p/cng-price-in-tenkasi.html" },
  { name: "Thanjavur", url: "https://www.frisqoo.com/p/cng-price-in-thanjavur.html" },
  { name: "Thiruvarur", url: "https://www.frisqoo.com/p/cng-price-in-thiruvarur.html" },
  { name: "Tiruchchirappalli", url: "https://www.frisqoo.com/p/cng-price-in-tiruchchirappalli.html" },
  { name: "Tirunelveli", url: "https://www.frisqoo.com/p/cng-price-in-tirunelveli.html" },
  { name: "Tirupathur", url: "https://www.frisqoo.com/p/cng-price-in-tirupathur.html" },
  { name: "Tirupur", url: "https://www.frisqoo.com/p/cng-price-in-tirupur.html" },
  { name: "Tiruvallur", url: "https://www.frisqoo.com/p/cng-price-in-tiruvallur.html" },
  { name: "Tiruvannamalai", url: "https://www.frisqoo.com/p/cng-price-in-tiruvannamalai.html" },
  { name: "Tuticorin", url: "https://www.frisqoo.com/p/cng-price-in-tuticorin.html" },
  { name: "Vellore", url: "https://www.frisqoo.com/p/cng-price-in-vellore.html" },
  { name: "Viluppuram", url: "https://www.frisqoo.com/p/cng-price-in-viluppuram.html" },
  { name: "Virudunagar", url: "https://www.frisqoo.com/p/cng-price-in-virudunagar.html" },
  ];

  const citySelect = document.createElement("select");
  citySelect.id = "citySelect";

  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Select Your City";
  defaultOption.value = "";
  citySelect.appendChild(defaultOption);

  cities.forEach(city => {
    const option = document.createElement("option");
    option.textContent = city.name;
    option.dataset.url = city.url;
    if (city.name === defaultCity) option.selected = true;
    citySelect.appendChild(option);
  });

  citySelect.onchange = () => {
    const selected = citySelect.options[citySelect.selectedIndex];
    const url = selected.dataset.url;
    if (url && selected.value !== "") {
  updatePetrolPrice();
}
  };

  const container = document.getElementById("cityDropdownContainer");
  container.innerHTML = "";
  container.appendChild(citySelect);
}

if (typeof onCityDropdownReady === "function") {
  onCityDropdownReady(loadTamilNaduCities);
}
