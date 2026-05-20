class Payment  {

	processPayment(): void {
        console.log("Generic payment");
    }
}

class UpiPayment extends Payment {
	override processPayment(): void {
        console.log("UPI Payment Success");
    }
}

class CardPayment extends Payment {
    override processPayment(): void {
        console.log("Card Payment Success");
    }
}

const upi = new UpiPayment();
upi.processPayment();

const card = new CardPayment();
card.processPayment();