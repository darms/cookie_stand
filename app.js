//pike and first object
var hours = [ '6 am ', '7 am ', '08 am ', '09 am ', '10 am ', '11 am ', '12 am ', '1 pm  ', '2 pm ', '3 pm ', '4 pm ' , '5 pm ' , '6 pm ', '7 pm ', '8 pm '];
var allStores = [];

function Store(locationName, minCustPerHour, maxCustPerHour, cookiesSoldPerHour) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.cookiesSoldPerHour= cookiesSoldPerHour;
  this.sum = 0;
  this.cookiesSoldPerHour = function() {
      for(var i= 0; i < hours.length; i++){
        var randCustPerHour = Math.floor(((Math.random()*this.maxCustPerHour- this.minCustPerHour +1)) + this.minCustPerHour);
        var cookiesPerHour = Math.ceil(randCustPerHour * this.avgCookiesPerHour);
        this.cookiesSoldPerHour.push(cookiesPerHour);
      };

  this.sumTotal = function() {

    for(var i= 0; i <this.cookiesSoldPerHour.length; i++) {
      this.sum += this.cookiesSoldPerHour[i];
    }
    return this.sum;
  };
allStore.push(this);
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3,);
new Store('Alki', 2, 16, 4.6);

//var render = function() {
// function storeTableJS() {
// var storeTable = document.getElementsById('storeJs');
//console.log('storeTable is', catTable);

  function makeHeaderRow() {
    for(var i=0; i<hours.length; i++) {
      var trEl = document.createElement('tr');

      var thEl = document.createElement('th');
      theEl.textContent = hour[i];
      trEl.appendChild(thEl);
    }

      storeTable.appendChild(trEl);
  }

    makeHeaderRow();

    for (var i=0; i< allStores.length; i++) {
      var trEl = document.createElement('tr');

      var tdEl = document.createElement('td');
      tdEl.textContent = allStores[i].locationName;
      trEl.appendChile(tdEl);

      storeTable.appendChild(trEl);
  }
 }

}

  allStores.render();
  allStores.randCustPerHour();
  allStores.cookiesSoldPerHour;




//   randCustPerHour: function() {
//     for(var i= 0; i < hours.length; i++){
//       var randCustPerHour = Math.ceil(((Math.random()*this.maxCustPerHour- this.minCustPerHour +1)) + this.minCustPerHour);
//       var cookiesPerHour = Math.ceil(randCustPerHour * this.avgCookiesPerHour);
//       this.cookiesSoldPerHour.push(cookiesPerHour);
//     }
//     console.log('after running loop through the randCustPerHour method: '+ this.cookiesSoldPerHour);
//   },
//   sumTotal: function() {
//     var sum = 0;
//     for (var i=0; i < this.cookiesSoldPerHour.length; i++) {
//       sum += this.cookiesSoldPerHour[i];
//     }
//     return sum;
//   },
//
//   render: function() {
//     this.randCustPerHour();
//     //before rendering so content is created
//     var ulEl = document.createElement('ul');
//     ulEl.textContent = 'Data';
//     document.body.appendChild(ulEl);
//
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.cookiesSoldPerHour[i];
//       ulEl.appendChild(liEl);
//     }
//     var pEl = document.createElement('p');
//     pEl.textContent = 'Total: ' + this.sumTotal();
//     document.body.appendChild(pEl);
//   }
//
// }
// cookieStand.render();
// cookieStand.randCustPerHour();
// cookieStand.cookiesSoldPerHour;
