
  
  const customerContainer = document.querySelector("#customer-container");
  // get the empty container and store it in a variable, exists but not painted on the page yet
  for (let customer of customers){


  // build out one object with JS
  let customerDiv = document.createElement("div");
  let name = document.createElement("h6");
  let email = document.createElement("h6");
  let address = document.createElement("h6");
  let DOB = document.createElement("p");
  let since = document.createElement("p");

  // use the data from an object to populate these divs
 
  //city.innerText = ray.city;
  //food.innerText = ray.favFood;
   
  customerDiv.appendChild(name);
  customerDiv.appendChild(email);
  customerDiv.appendChild(address);
  customerDiv.appendChild(DOB);
  customerDiv.appendChild(since);
  customerContainer.appendChild(customerDiv);
  
    name.innerText = `${customer.name.title} ${customer.name.first} ${customer.name.last}`


  customerDiv.classList.add("customer");

  }

  // add styles to the div using a class
  
  // now loop through the array `people`, build a customerDiv for each person, append that to the page
  
  /* function buildPeopleGrid(peopleArray) {
     for (let person of peopleArray) {
      let customerDiv = document.createElement("div");
      let personName = document.createElement("h1");
      let email = document.createElement("h3");
      let address = document.createElement("h3");
      let DOB = document.createElement("p");
      let since = document.createElement("p");
       // use the data from an object to populate these divs
       customerDiv.appendChild(personName);
       customerDiv.appendChild(email);
       customerDiv.appendChild(address);
       customerDiv.appendChild(DOB);
       customerDiv.appendChild(since);
       peopleContainer.appendChild(customerDiv);
       customerDiv.classList.add("person");
    }
  */
  