import { Component, OnInit,inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { TaskService } from '../Services/task.service';


@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit {
    tasks:string[]=["Tasks 1","Tasks 2","Tasks 3"];
    taskService:TaskService=inject(TaskService)

    ngOnInit(): void {
      this.taskService.createTask.subscribe((value)=>{
        this.tasks.push(value)
      })
    }
}
