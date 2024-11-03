const countriesPopulation = [
    { country: "China", population: 1439323776 },
    { country: "India", population: 1379302771 },
    { country: "USA", population: 331002651 },
    { country: "Indonesia", population: 269603400 },
    { country: "Pakistan", population: 220892340 },
    { country: "Bangladesh", population: 164970459 },
    { country: "Japan", population: 126451398 },
    { country: "Philippines", population: 109581078 },
    { country: "Vietnam", population: 97338579 },
    { country: "Turkey", population: 84339642 },
  ];
  const populationTotal = 8000000000;
  
  function percentageOfPopulation(population, totalPopulation) {
    return parseFloat(((population / totalPopulation) * 100).toFixed(2));
  }
  
  // Vytvořte kopii pole
  const copyCountries = [...countriesPopulation];
  
  // Seřaďte pole na základe počtu populace od nejmenšího po největší
  copyCountries.sort((a, b) => a.population - b.population);
  
  // Každému objektu přiřaďte novou vlastnost id
  copyCountries.forEach((country, index) => {
    country.id = country.country.slice(0, 3) + index;
  });
  
  // Každému objektu přiřaďte novou vlastnost percentage
  copyCountries.forEach((country) => {
    country.percentage = percentageOfPopulation(country.population, populationTotal);
  });
  
  // Vytvořte nové pole s podmínkami
  const filteredCountries = copyCountries.filter(
    (country) =>
      country.country.length > 4 &&
      country.country.length <= 8 &&
      country.percentage > 1.5 &&
      country.percentage < 10
  );
  
  console.log(filteredCountries);