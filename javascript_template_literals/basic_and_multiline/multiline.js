//old way
const fruitList = 
"<ul>" +
    "<li>Kiwi</li>" +
    "<li>Lime</li>" +
    "<li>Pineapple</li>" +
  "</ul>";

  //template literal 
const vegetablesList = `
  <ul>
    <li>Potato</li>
    <li>Carrot</li>
    <li>Onion</li>
  </ul>
`;

document.querySelector('.fruits').innerHTML = fruitList;
document.querySelector('.vegetables').innerHTML = vegetablesList;
