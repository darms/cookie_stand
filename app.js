//pike and first object
var displayTable = document.getElementById('displayTable');
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
makeHeader();
showSales();
