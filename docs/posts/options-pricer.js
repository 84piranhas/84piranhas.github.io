function normalcdf(X){   //HASTINGS.  MAX ERROR = .000001
	var T=1/(1+.2316419*Math.abs(X));
	var D=.3989423*Math.exp(-X*X/2);
	var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
	if (X>0) {
		Prob=1-Prob
	}
	return Prob
}   

function getNcdf(Z, M, SD) {
		if (SD<0) {
			alert("The standard deviation must be nonnegative.")
		} else if (SD==0) {
		    if (Z<M){
		        Prob=0
		    } else {
			    Prob=1
			}
		} else {
			Prob=normalcdf((Z-M)/SD);
			Prob=Math.round(100000*Prob)/100000;
		}
    result = Prob
    return result
}


function dOne(underlyingPrice, exercisePrice, time, interest, volatility, dividend){
  var result = (Math.log(underlyingPrice / exercisePrice) + (interest - dividend + 0.5 * (volatility * volatility)) * time) / (volatility * (Math.sqrt(time)))
	return result
}

function NdOne(underlyingPrice, exercisePrice, time, interest, volatility, dividend){
  var result = Math.exp(-(dOne(underlyingPrice, exercisePrice, time, interest, volatility, dividend) * dOne(underlyingPrice, exercisePrice, time, interest, volatility, dividend))/2)/Math.sqrt(2*Math.PI)
	return result
}

function dTwo(underlyingPrice, exercisePrice, time, interest, volatility, dividend){
  var result = dOne(underlyingPrice, exercisePrice, time, interest, volatility, dividend) - volatility * Math.sqrt(time)
	return result
}

function NdTwo(underlyingPrice, exercisePrice, time, interest, volatility, dividend){
  var result = getNcdf(dTwo(underlyingPrice, exercisePrice, time, interest, volatility, dividend), 0, 1) 
	return result
}

function callOption(underlyingPrice, exercisePrice, time, interest, volatility, dividend){
  var result =  Math.exp(-dividend * time) * underlyingPrice * getNcdf(dOne(underlyingPrice, exercisePrice, time, interest, volatility, dividend),0, 1) - exercisePrice * Math.exp(-interest * time) * getNcdf(dOne(underlyingPrice, exercisePrice, time, interest, volatility, dividend) - volatility * Math.sqrt(time), 0, 1) 
	return result
}

function callOptionA(underlyingPrice, exercisePrice, time, interest, volatility, dividend){
  var result =  Math.exp(-dividend * time) * underlyingPrice * getNcdf(dOne(underlyingPrice, exercisePrice, time, interest, volatility, dividend),0, 1)
	return result
}

function callOptionB(underlyingPrice, exercisePrice, time, interest, volatility, dividend){
  var result =  - exercisePrice * Math.exp(-interest * time) * getNcdf(dOne(underlyingPrice, exercisePrice, time, interest, volatility, dividend) - volatility * Math.sqrt(time), 0, 1) 
	return result
}

function price(){
console.log("price!")
var call = callOption(180,178.47,1/365*3,0,0.18,0)
console.log(call)

}