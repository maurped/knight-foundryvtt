export const registerHandlebarsHelpers = function() {
    Handlebars.registerHelper('tobackaff', function(Strback) {
        
		var outStrback = 'knight.background.' + Strback;
		//console.log(outStrback);
        return outStrback;
        
	});
    
    Handlebars.registerHelper('tocaractsecondaff', function(Strcaractsecond) {
        
    
		var outStrcaractsecond = 'knight.caracsecondaire.' + Strcaractsecond;
		//console.log(outStrcaractsecond);
        return outStrcaractsecond;
	});
    
    Handlebars.registerHelper('toaspeaff', function(Straspe) {
        
		var outStraspe = 'knight.aspect.' + Straspe;
		//console.log(outStraspe); 
        return outStraspe;
	});
    Handlebars.registerHelper('tocaractaff', function(Strcaract) {
        //console.log(Strcaract);
    
		var outStrcaract = 'knight.caracteristique.' + Strcaract;
        //console.log(outStrcaract);
		return outStrcaract;
	});
	Handlebars.registerHelper('toslotsaff', function(Strslot) {
        //console.log(Strslot);
    
		var outStrslot = 'knight.slot.' + Strslot;
        //console.log(outStrslot);
		return outStrslot;
	});
	Handlebars.registerHelper('tooverdrivesbasesaff', function(Stroverdrivesbase) {
        //console.log(Stroverdrivesbase);
    
		var outStroverdrivesbase = 'knight.caracteristique.' + Stroverdrivesbase;
        //console.log(outStroverdrivesbase);
		return outStroverdrivesbase;
	});
	Handlebars.registerHelper('tooveraff', function(Strover, Strcaract) {
        //console.log(Strover,Strcaract);
    
		var outStrover = 'knight.OD.' + Strcaract + '.'+ Strover;
        //console.log(outStrover);
		return outStrover;
	});
	




};
