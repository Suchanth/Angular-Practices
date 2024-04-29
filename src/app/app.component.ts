import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { SignalsComponent } from './signals/signals.component';
import { SignalsCounterComponent } from './signals-counter/signals-counter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor,
    SignalsComponent,
    SignalsCounterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  // data:any[]=[];

  // //Create an Observables
  // myObservables=new Observable((observer)=>{
  //   setTimeout(()=>{observer.next(1)},1000);
  //   setTimeout(()=>{observer.next(2)},2000);
  //   setTimeout(()=>{observer.next(3)},3000);
  //   setTimeout(()=>{observer.next(4)},4000);
  //   setTimeout(()=>{observer.next(5)},5000);
  // });
  // GetAsyncData(){
  //   this.myObservables.subscribe((val:any)=>{
  //     this.data.push(val);
  //   })
  // }
}
