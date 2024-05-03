import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable,ReplaySubject,Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {
  ngOnInit() {
    //let obser=new Observable((observer)=>{observer.next(Math.random())})

    //const subject=new Subject();
    //const subject=new BehaviorSubject<number>(100);
  //   const subject=new ReplaySubject(2,1000);
  //   subject.next(100);
  //   subject.next(200);
  //   subject.next(300);

  //  // Subscribe-1
  //  subject.subscribe((value)=>{console.log("Subscriber 1:"+value)})

  //   //Subscribe-2
  //  subject.subscribe((value)=>{console.log("Subscriber 2:"+value)});
  //  subject.next(2020);

  //  //Subscriber-3
  //  subject.subscribe((value)=>{console.log("Subscriber 3:"+value)});
  //  subject.next(2024);


  // const subject=new Subject();
  // const data=ajax('https://randomuser.me/api/')
  // subject.subscribe((res)=>{console.log(res)})
  // subject.subscribe((res)=>{console.log(res)})
  // subject.subscribe((res)=>{console.log(res)})

  // data.subscribe(subject)

  //Async Subject
  // const asyncSubject=new AsyncSubject();
  // asyncSubject.next(100);
  // asyncSubject.next(200);
  // asyncSubject.next(300);
 

  // asyncSubject.subscribe(data =>console.log(`Subscriber 1:${data}`))
  // asyncSubject.complete();
  // asyncSubject.next(400);

  // asyncSubject.subscribe(data =>console.log(`Subscriber 2:${data}`))

  //Promises vs Observables

  const promise=new Promise((resolve,reject)=>{
    console.log("Promise is called!!!");
    resolve(100);
    resolve(200);
    resolve(300);
  })

  promise.then((data)=>{
    console.log(data)
  })


  const obs=new Observable((val)=>{
    console.log("Observable is Called!!!")
    val.next(100);
    val.next(200);
    val.next(300);
  })
  obs.subscribe(data =>console.log(data));
  }
}
