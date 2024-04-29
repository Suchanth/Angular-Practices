import { Component, computed, effect, signal } from '@angular/core';
import { urlToHttpOptions } from 'url';

@Component({
  selector: 'app-signals-counter',
  standalone: true,
  imports: [],
  templateUrl: './signals-counter.component.html',
  styleUrl: './signals-counter.component.css'
})
export class SignalsCounterComponent {
  count = signal(0);
  calculated = computed(()=> this.count()*2);
  increment(){
    this.count.update(c => c+1)
  }
  decrement(){
    this.count.update(c => c-1)
  }
  constructor(){
    effect(()=>console.log(`Count Changed ${this.count()}`))
  }
}
