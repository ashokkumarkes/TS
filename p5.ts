enum constVal {
Year = 1,
Profit = 30,
weeklyProfit = 2
}


function firstYearCal(year :constVal, contProfit:constVal, constWeekly:constVal):void{

	let buying 		= 700;
	let profit      =  buying * (contProfit/100); 
	let weeklyProfit = profit*constWeekly;
	let monthlyProfit = weeklyProfit*4;
	let yearlyProfit = 12*monthlyProfit;

	let obj = {
		'buying price': Number(buying),
		'Profit' : Number(profit),
		'weeklyProfit' :weeklyProfit,
		'monthlyProfit' : monthlyProfit,
		'yearlyProfit' : yearlyProfit
	}
	console.log(obj);
}

firstYearCal(constVal.Year, constVal.Profit, constVal.weeklyProfit);