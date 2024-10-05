import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h2>Counter</h2>
<p>Bienvenidos a Angular {{ counter }}</p>
<button (click)="increaseBy(1)">+1</button>
<button (click)="increaseBy(-2)">-2</button>
<button (click)="resetCounter()">Reset to 10</button>`
})
export class CounterComponent {
  protected counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
