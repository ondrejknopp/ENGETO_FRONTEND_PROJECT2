const countries = [
    "United States",
    "China",
    "India",
    "Indonesia",
    "Brazil",
    "Pakistan",
    "Nigeria",
    "Bangladesh",
    "Russia",
    "Mexico",
    "Japan",
    "Philippines",
    "Vietnam",
    "Ethiopia",
    "Egypt",
    "Iran",
    "Turkey",
    "Democratic Republic of the Congo",
    "Thailand",
    "Myanmar",
  ];
  
  // První část
  function checkCountry(country, countries) {
    if (typeof country !== 'string' || country.length === 0) {
      console.log(`Zadali jste neplatný dotaz: ${country}.`);
      return;
    }
  
    const index = countries.indexOf(country);
    if (index !== -1) {
      console.log(`Zadaná krajina ${country} se nachází v seznamu krajin na indexe ${index}.`);
    } else {
      console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin.`);
    }
  }
  
  
  // Druhá část
  function addCountry(country, countries) {
    if (typeof country !== 'string' || country.length === 0) {
      console.log(`Zadali jste neplatný dotaz: ${country}.`);
      return;
    }
  
    const index = countries.indexOf(country);
    if (index !== -1) {
      console.log(`Zadaná krajina ${country} se nachází v seznamu krajin na indexe ${index}.`);
    } else {
      countries.push(country);
      const newIndex = countries.indexOf(country);
      console.log(`Zadaná krajina ${country} byla úspěšně přidaná do seznamu krajin na indexu ${newIndex}. Celkový počet krajin v seznamu je ${countries.length}.`);
    }
  }
  

  // Třetí část
  function removeCountry(country, countries) {
    if (typeof country !== 'string' || country.length === 0) {
      console.log(`Zadali jste neplatný dotaz: ${country}.`);
      return;
    }
  
    const index = countries.indexOf(country);
    if (index !== -1) {
      countries.splice(index, 1);
      console.log(`Zadaná krajina ${country} byla odstraněná se seznamu krajin na indexu ${index}. Aktuální počet krajin v seznamu je ${countries.length}.`);
    } else {
      console.log(`Zadaná krajina ${country} se nenachází v seznamu.`);
    }
  }

//checkCountry("Brazil", countries);
//removeCountry("Vietnam", countries);
