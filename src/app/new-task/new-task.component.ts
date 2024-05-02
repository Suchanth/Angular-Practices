import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  newtask:string='';
  taskService:TaskService=inject(TaskService)
  onCreate(){
    console.log(this.newtask)
    this.taskService.onCreateTask(this.newtask)
  }

}
