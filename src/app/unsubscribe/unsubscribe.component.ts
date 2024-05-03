import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.css'
})
export class UnsubscribeComponent {
  counter=interval(1000);
  data1:number[]=[];
  data2:number[]=[];
  data3:number[]=[];
  subscriber1;
  subscriber2;
  subscriber3

  OnSubscribe1(){
    this.subscriber1=this.counter.subscribe((val)=>{
      this.data1.push(val);
    });
  }
  OnSubscribe2(){
    this.subscriber2=this.counter.subscribe((val)=>{
      this.data2.push(val);
    });
  }
  
  OnSubscribe3(){
    this.subscriber3=this.counter.subscribe((val)=>{
      this.data3.push(val);
    });
  }
  OnUnSubscribe1(){
    this.subscriber1.unsubscribe();
  }

  OnUnSubscribe2(){
    this.subscriber2.unsubscribe();
  }
  OnUnSubscribe3(){
    this.subscriber3.unsubscribe();
  }
}
