import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@app/shared/base/base.componet';
import { Subscription } from 'rxjs';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
    selector: 'app-task',
    templateUrl: './task.page.html',
    styleUrls: ['./task.page.scss'],
    standalone:true,
    imports:[CommonModule, FormsModule]
})
export class TaskPage extends BaseComponent {

    tasks: Array<{ title: string, completed: boolean }> = [];

    onsubmit(test: NgForm){
      console.log({test: test.value});
    }
    constructor() {
        super();
    }
    protected initialize(): void {
        // Initialization logic here
    }
    override ngOnDestroy(): void {
        super.ngOnDestroy();
        // Cleanup logic here
    }
    protected override addSubscription(subscription: Subscription): void {
        // Subscription logic here
        super.addSubscription(subscription);
    }

    override ngOnInit() {
        super.ngOnInit();
        console.log("first")
        this.loadTasks();
    }

    loadTasks() {
        // Load tasks from a service or local storage
        this.tasks = [
            { title: 'Task 1', completed: false },
            { title: 'Task 2', completed: true },
            { title: 'Task 3', completed: false },
        ];
    }

    addTask(title: string) {
        this.tasks.push({ title, completed: false });
    }

    toggleTaskCompletion(index: number) {
        this.tasks[index].completed = !this.tasks[index].completed;
    }

    deleteTask(index: number) {
        this.tasks.splice(index, 1);
    }
}
