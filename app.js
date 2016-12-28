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
      console.log(randCustPerHour);
      var cookiesPerHour = Math.ceil(randCustPerHour * this.cookiesSoldPerCust);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
  }

  this.sumTotal = function() {
    for(var i= 0; i <hours.length; i++) {
      this.sum += this.cookiesSoldPerHour[i];
    }
    console.log('Lets do this!');
    return this.sum;
  };
  this.calcCookiesSoldPerHour();


 // console.log('Potato!');
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
     alert('Fields cannot be empty!');
  }
  ////if a single entry is empty
  if (()!event.target.storeLocation.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value)) {
     alert('Fields cannot be empty!');
  }
  //// if a number is entered for a store name
  ///if a letter is entered instead of a number

  // if ( isNan(parseInt(event.target.min.value)) || isNan(parseInt(event.target.min.value)) || isNan(parseInt(event.target.avg.value))) {
  //   alert('Please enter in numbers only for Min, Max & Avg.');
  // }

var storeLocation = event.target.storeLocation.value;
var newMin = parseInt(event.target.min.value);
var newMax = parseInt(event.target.max.value);
var newAvg = parseInt(event.target.avg.value);
var newStore = new Store(storeLocation, newMin, newMax, newAvg);



 if (event.target.button){
    new Store(storeLocation, min, max, avg);
    displayTable.innerHTML = '';
  }

  makeHeader();
  showSales();
  event.target.newStoreLocation.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
}


makeHeader();
showSales();
////////////event listener////////////////////////////

salesForm.addEventListener('submit', handleStoreSubmit);
