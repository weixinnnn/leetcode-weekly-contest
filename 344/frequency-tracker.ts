class FrequencyTracker {
  numberFrequency: Map<number, number>;
  frequencyCount: Map<number, number>;

  constructor() {
    this.numberFrequency = new Map();
    this.frequencyCount = new Map();
  }

  getNumberFrequency(number: number): number {
    return this.numberFrequency.get(number) || 0;
  }

  getFrequencyCount(frequency: number): number {
    return this.frequencyCount.get(frequency) || 0;
  }

  add(number: number): void {
    const prevFreq = this.getNumberFrequency(number);
    const newFreq = prevFreq + 1;

    this.numberFrequency.set(number, newFreq);
    this.frequencyCount.set(prevFreq, this.getFrequencyCount(prevFreq) - 1);
    this.frequencyCount.set(newFreq, this.getFrequencyCount(newFreq) + 1);
  }

  deleteOne(number: number): void {
    const prevFreq = this.getNumberFrequency(number);
    if (!prevFreq) return;

    const newFreq = prevFreq - 1;
    this.numberFrequency.set(number, newFreq);
    this.frequencyCount.set(prevFreq, this.getFrequencyCount(prevFreq) - 1);
    this.frequencyCount.set(newFreq, this.getFrequencyCount(newFreq) + 1);
  }

  hasFrequency(frequency: number): boolean {
    return !!this.getFrequencyCount(frequency);
  }
}
