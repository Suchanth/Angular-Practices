import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';
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

    // const subject=new Subject();

    //Subscribe-1
    // subject.subscribe((value)=>{console.log(value)})

    //Subscribe-2
  //  subject.subscribe((value)=>{console.log(value)});
  //  subject.next(Math.random())
  const subject=new Subject();
  const data=ajax('https://randomuser.me/api/')
  subject.subscribe((res)=>{console.log(res)})
  subject.subscribe((res)=>{console.log(res)})
  subject.subscribe((res)=>{console.log(res)})

  data.subscribe(subject)
  }
}
