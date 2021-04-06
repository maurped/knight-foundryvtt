export const registerHandlebarsHelpers = function() {

    Handlebars.registerHelper('tocaractsecondaff', function(str) {
        
    
		var outStrcaractsecond = 'knight.caracsecondaire.' + str;
		return outStrcaractsecond;
	});
    
    Handlebars.registerHelper('toaspeaff', function(str) {
         
		var outStraspe = 'knight.aspect.' + str;
		return outStraspe;
	});
    Handlebars.registerHelper('tocaractaff', function(aspe, caract) {
        console.log(aspe, caract);
    
		var outStrcaract = 'knight.aspect.' + aspe.toLowerCase() + '.' + caract;
        console.log(outStrcaract);
		return outStrcaract;
	});




};