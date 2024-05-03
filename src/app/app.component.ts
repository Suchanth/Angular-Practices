import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { Observable,of,from, fromEvent} from 'rxjs';
import { map,filter } from 'rxjs/operators';
import { SignalsComponent } from './signals/signals.component';
import { SignalsCounterComponent } from './signals-counter/signals-counter.component';
import { SignalUpdateComponent } from './signal-update/signal-update.component';
import { HooksComponent } from './hooks/hooks.component';
import { NgModel } from '@angular/forms';
import { HookChildComponent } from './hook-child/hook-child.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { SubjectComponent } from './subject/subject.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { StandaloneComponent } from './standalone/standalone.component';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor,
    SignalsComponent,
    SignalsCounterComponent,
    SignalUpdateComponent,
    HooksComponent,
    CustomDirectiveDirective,
    NewTaskComponent,
    ShowTaskComponent,
    SubjectComponent,
    UnsubscribeComponent,
    StandaloneComponent,
    RouterOutlet,
    ChildComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'angular';
  onEventEmit(e:any){
    alert(e)
  }
  // data:any[]=[];

  // @ViewChild('createBtn')
  // createBtn:ElementRef;
  // createBtnObservable;


  // array1=[1,2,3,4,5];
  // array2=['A','B','C','D']

  // //Create an Observables
  // myObservables=new Observable((observer)=>{
  //   setTimeout(()=>{observer.next(1)},1000);
  //   setTimeout(()=>{observer.next(2)},2000);
  //   setTimeout(()=>{observer.next(3)},3000);
  //   //setTimeout(()=>{observer.error(new Error("Something Went Wrong.Please try again later!"))},3000);
  //   setTimeout(()=>{observer.next(4)},4000);
  //   setTimeout(()=>{observer.next(5)},5000);
  //   setTimeout(()=>{observer.complete()},6000);
  // });


  //myObservables=of(this.array1,this.array2,20,30,'Hello',true);
  // promiseData=new Promise((resolve,reject)=>{
  //   resolve([10,20,30,40,50])
  // })

  //myObservables:2,4,6,8,10
  //Result:10,20,30,40,50
  // myObservables=from([2,4,6,8,10,12]).pipe(map((value)=>{
  //   return value * 5;
  // }),filter((value,i)=>{
  //   return value % 4 == 0;
  // }));

  // filteredObser=this.myObservables.pipe(map((value)=>{
  //   return value * 5;
  // }),filter((value,i)=>{
  //   return value % 4 == 0;
  // }))

  // filteredObser=this.transformObser.pipe(filter((value,i)=>{
  //   return value % 4 == 0;
  // }))

  // GetAsyncData(){

    //Observables:
    //next(),error(),complete()

  //   this.myObservables.subscribe((val:any)=>{
  //     this.data.push(val);
  //     },
  //     (err)=>{
  //       alert(err.message)
  //     },
  //      ()=>{
  //        alert("All Data are streamed")
  // })

  // this.myObservables.subscribe({
  //   next:(value:any)=>{
  //     this.data.push(value);
  //     console.log(value);
  //   },
  //   error(err){
  //     alert(err.message)
  //   },
  //   complete(){
  //     alert('All Data are Streamed')
  //   }
  // })
  // }
  // buttonClicked(){
  //   let count=0;
  //   this.createBtnObservable=fromEvent(this.createBtn.nativeElement,'click')
  //   .subscribe((data)=>{
  //     console.log(data);
  //     this.showItem(++count);
  //   })
  // }
  // ngAfterViewInit(): void {
    //this.buttonClicked();
  //}

  // showItem(val){
  //   let div=document.createElement('div')
  //   div.innerText='Items' +val;
  //   div.className='data-list'
  //   document.getElementById('container').appendChild(div)
  // }


}
