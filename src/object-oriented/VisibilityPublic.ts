class Counter {
  protected counter: number = 0;
  public increment(): void {
    this.counter++;
  }
  public getCounter(): number {
    return this.counter;
  }
}

class DoubleCounter extends Counter {
  public incement(): void {
    this.counter += 2;
  }
}
