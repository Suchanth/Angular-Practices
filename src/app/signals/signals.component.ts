import { Component,signal,DoCheck } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [NgFor],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalsComponent implements DoCheck{
  counter=signal(0);
  message:string[]=[];
  increment(){
    this.counter;
  }
  decrement(){
    this.counter;
  }
  ngDoCheck(): void {
    console.log("Angular Change Detection Called!")
  }
}
