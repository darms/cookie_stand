//pike and first object
var hours = [ '6 am ', '7 am ', '08 am ', '09 am ', '10 am ', '11 am ', '12 am ', '1 pm  ', '2 pm ', '3 pm ', '4 pm ' , '5 pm ' , '6 pm ', '7 pm ', '8 pm '];

var cookieStand = {

  minCustPerHour : 23,
  maxCustPerHour : 65,
  avgCookiesPerHour: 6.4,
  cookiesSoldPerHour: [],

  randCustPerHour: function() {
    for(var i= 0; i < hours.length; i++){
      var randCustPerHour = Math.ceil(((Math.random()*this.maxCustPerHour- this.minCustPerHour +1)) + this.minCustPerHour);
      var cookiesPerHour = Math.ceil(randCustPerHour * this.avgCookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
    console.log('after running loop through the randCustPerHour method: '+ this.cookiesSoldPerHour);
  },
  sumTotal: function() {
    var sum = 0;
    for (var i=0; i < this.cookiesSoldPerHour.length; i++) {
      sum += this.cookiesSoldPerHour[i];
    }
    return sum;
  },

  render: function() {
    this.randCustPerHour();
    //before rendering so content is created
    var ulEl = document.createElement('ul');
    ulEl.textContent = 'Data';
    document.body.appendChild(ulEl);

    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.cookiesSoldPerHour[i];
      ulEl.appendChild(liEl);
    }
    var pEl = document.createElement('p');
    pEl.textContent = 'Total: ' + this.sumTotal();
    document.body.appendChild(pEl);
  }

}

cookieStand.render();
cookieStand.randCustPerHour();
cookieStand.cookiesSoldPerHour;
