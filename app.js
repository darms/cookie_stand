//global variables
var displayTable = document.getElementById('displayTable');
var salesForm = document.getElementById('salesForm');
var hours = [ '6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12am ', '1pm  ', '2pm ', '3pm ', '4pm ' , '5pm ' , '6pm ', '7pm '];
var allStores = [];

function Store(locationName, minCustPerHour, maxCustPerHour, cookiesSoldPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.cookiesSoldPerCust= cookiesSoldPerCust;
  this.cookiesSoldPerHour = [];
  this.sum = 0;
  allStores.push(this);


  this.render = function() {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.locationName;
    trEl.appendChild(tdEl);

    //sales numbers
    for (var i = 0; i < hours.length; i++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldPerHour[i];
      trEl.appendChild(tdEl);
    }

    tdEl = document.createElement('td');
    tdEl.textContent = this.sumTotal();
    trEl.appendChild(tdEl);

    displayTable.appendChild(trEl);

  }
  this.calcCookiesSoldPerHour = function() {
    for(var i= 0; i < hours.length; i++){
      var randCustPerHour = Math.floor(((Math.random()*this.maxCustPerHour- this.minCustPerHour +1)) + this.minCustPerHour);

      var cookiesPerHour = Math.ceil(randCustPerHour * this.cookiesSoldPerCust);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
  }

  this.sumTotal = function() {
    for(var i= 0; i <hours.length; i++) {
      this.sum += this.cookiesSoldPerHour[i];
    }
    return this.sum;
  };
  this.calcCookiesSoldPerHour();

}
new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

//FUNCTION DECLARATIONS

// this.render = function() {
//     var trEl = document.createElement('tr');

function makeHeader(){
  var trEl = document.createElement('tr');
//empty cell
  var tdEl = document.createElement('td');
  tdEl.textContent = '';
  trEl.appendChild(tdEl);

// hours cells
  for (var i =0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);

  }
  tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);
  displayTable.appendChild(trEl);
}

function showSales(){
  for ( var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}


//////////////event handler////////////////////////
function handleStoreSubmit(event) {
  ///////stop page from loading////////////////
  event.preventDefault();

  //////////validation/////////////////////
  ///Entire form is empty
  if (!event.target.storeLocation.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value) {
     alert('Please check that all fields are filled in.');
  }


  //// if a number is entered for a store name
  ///if a letter is entered instead of a number

  // if ( isNan(parseInt(event.target.min.value)) || isNan(parseInt(event.target.min.value)) || isNan(parseInt(event.target.avg.value))) {
  //   alert('Please enter in numbers only for Min, Max & Avg.');
  // }

var storeLocation = event.target.storeLocation.value;
var newMinCustPerHour = parseInt(event.target.minCustPerHour.value);
var newMaxCustPerHour = parseInt(event.target.maxCustPerHour.value);
var newCookiesSoldPerHour = parseInt(event.target.cookiesSoldPerHour.value);
var newStore = new Store(storeLocation, newMinCustPerHour, newMaxCustPerHour, newCookiesSoldPerHour);



 if (event.target.button){
    new Store(storeLocation, minCustPerHour, maxCustPerHour, cookiesSoldPerHour);
    displayTable.innerHTML = '';
  }

  makeHeader();
  showSales();

  event.target.newStoreLocation.value = null;
  event.target.minCustPerHour.value = null;
  event.target.maxCustPerHour.value = null;
  event.target.cookiesSoldPerHour.value = null;
}


makeHeader();
showSales();
////////////event listener////////////////////////////

salesForm.addEventListener('submit', handleStoreSubmit);
