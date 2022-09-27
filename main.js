
  
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
  let pic = document.createElement("img");

  customerDiv.appendChild(pic);
  customerDiv.appendChild(name);
  customerDiv.appendChild(email);
  customerDiv.appendChild(address);
  customerDiv.appendChild(DOB);
  customerDiv.appendChild(since);
  

  customerContainer.appendChild(customerDiv);
  
    pic.src = `${customer.picture.thumbnail}`
    name.innerText = `${customer.name.title} ${customer.name.first} ${customer.name.last}`
    email.innerText = `${customer.email}`
    address.innerText = `${customer.location.street.number} ${customer.location.street.name} 
      ${customer.location.city} ${customer.location.state} ${customer.location.postcode}`
    DOB.innerText = `${customer.dob.date}`
    since.innerText = `${customer.registered.date}`



  customerDiv.classList.add("customer");

  }

 


  