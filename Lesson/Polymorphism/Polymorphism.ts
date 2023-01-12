interface Transportation {
  move(): void;
}
class Car implements Transportation {
  move(): void {
    console.log("Car is moving on the road");
  }
}

class Bike implements Transportation {
  move(): void {
    console.log("Bike is moving on the road");
  }
}

class Boat implements Transportation {
  move(): void {
    console.log("Boat is moving on the water");
  }
}
let transportation: Transportation[] = [new Car(), new Bike(), new Boat()];

transportation.forEach((t) => {
  t.move();
});

// Car is moving on the road
// Bike is moving on the road
// Boat is moving on the water
