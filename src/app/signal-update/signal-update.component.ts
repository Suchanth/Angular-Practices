import { Component,DoCheck,signal,computed,effect} from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-signal-update',
  standalone: true,
  imports: [NgFor],
  templateUrl: './signal-update.component.html',
  styleUrl: './signal-update.component.css',

})
export class SignalUpdateComponent implements DoCheck {
  counter=signal(0);
  message=signal<string[]>(['']);
  doubleCounter=computed(()=>this.counter() * 2)

  constructor(){
    effect(()=>console.log("NEW VALUE COUNTER IS :"+this.counter()))
  }

  increment(){
    //this.counter.set(this.counter() + 1);
    this.counter.update((prevalue)=> prevalue + 1);
    this.message.update((PreMessage)=> [...PreMessage, 'CURRENT VALUE OF THE COUNTER IS: '+this.counter()]);
    
  }
  decrement(){
    this.counter.update((Prevalue)=> Prevalue - 1);
    this.message.update((PreMessage)=> [...PreMessage, 'CURRENT VALUE OF THE COUNTER IS: '+this.counter()]);
    
  }
  ngDoCheck(): void {
    console.log("Angular Change Detection Called!")
  }
}

