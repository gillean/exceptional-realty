$(function(){

//////////// Market report Table  ///////////

function Property(street, city, state, price, posted){
	this.constructor.all.push(this);

	this.street = street
	this.city = city;
	this.state = state;
	this.price = price;
	this.posted = new Date(posted);
	
	var self = this;

	function isNew(){
    	var currentDate = new Date();
    		daysListed = (((((currentDate - self.posted)/1000)/60)/60)/24);
	if (daysListed < Property.maxDays){
		return '<span class="new">&#9776;</span>';
	  }
	  else {
	  	return'';
	  }
	}

	this.el = '<tr>'+
				'<td>'+isNew()+this.street+'</td>'+
				'<td>'+this.city+'</td>'+
				'<td>'+this.state+'</td>'+
				'<td>'+this.price+'</td>'+
			   '<tr>';

	}

	Property.all= [];
	Property.maxDays = 10;

	Property.displayContent = function(){
		$('.property-count').text(Property.all.length);
		$('.max-days').text(Property.maxDays);
		$.each(Property.all, function(i, property){
			$('table').find('tbody').append(property.el);
		});

	};

	//create properties

	var property1 = new Property("2345 Faiview Ln", "Brooklyn", "NY", 1200000,"2014 Apr 3");
	var property2 = new Property("974 Clapton Street", "Queens", "NY", 998000,"2014 March 14");
	var property3 = new Property("14A Belmont Way", "Bronx", "NY", 874000,"2014 Mar 28");

	/*console.log(Property.all);*/

});