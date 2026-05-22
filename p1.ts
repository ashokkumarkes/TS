
function calculate(strikAmt: number, tgtAmnt: number, lot: number, qty: number) : void{

    const strikeNumber : string = '75400 Put';
    let profitAmt: number = tgtAmnt - strikAmt;

    let totalQty = lot * qty;
    let totalAmt = totalQty * strikAmt;
    let totalProfit = totalQty * profitAmt;
    let percentProfit = (profitAmt / strikAmt) * 100;

    let obj ={
        "lot": lot,
        'strikeNumber': strikeNumber,
        "Investment": totalAmt,
        "Profit": totalProfit,
        "qty": qty,
        "%": Number(percentProfit.toFixed(2))
    }
    console.log(obj);
}
calculate(16.5, 170, 1, 20);