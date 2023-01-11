export default class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    if (initialBalance >= 0) {
      this.balance = initialBalance;
    } else {
      this.balance = 0;
    }
  }
  public deposit(amount: number) {
    this.balance += amount;
  }

  public withdraw(amount: number) {
    if (this.balance - amount >= 0) {
      this.balance -= amount;
    } else {
      throw new Error("Broke");
    }
  }

  public checkBalance() {
    return this.balance;
  }
}
