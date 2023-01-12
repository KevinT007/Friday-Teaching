abstract class Payment {
  abstract makePayment(): void;
}
class CreditCardPayment extends Payment {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  constructor(cardNumber: string, expirationDate: string, cvv: string) {
    super();
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
  }
  makePayment(): void {
    //Make payment using credit card details
    console.log(`Payment made using Credit Card: ${this.cardNumber}`);
  }
}

class PayPalPayment extends Payment {
  email: string;
  password: string;
  constructor(email: string, password: string) {
    super();
    this.email = email;
    this.password = password;
  }
  makePayment(): void {
    //Make payment using PayPal account
    console.log(`Payment made using PayPal account: ${this.email}`);
  }
}
