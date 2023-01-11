class Animals {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): void {
    console.log(`${this.name} makes a sound`);
  }
}
class Dogs extends Animals {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
  speak(): void {
    console.log(`${this.name} barks`);
  }
}
