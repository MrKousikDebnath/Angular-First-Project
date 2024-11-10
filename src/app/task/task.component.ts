import { Component, Input } from "@angular/core";
import { IndividualTaskComponent } from "./individual-task/individual-task.component";

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [IndividualTaskComponent],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'
})

export class TaskComponent {
    @Input({ required: true }) name!: string;
}