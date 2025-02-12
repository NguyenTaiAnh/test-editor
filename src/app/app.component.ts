import { CommonModule } from '@angular/common';
import { AfterContentChecked, Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

declare var ckeditor: any
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true
})
export class AppComponent {
  title = 'todo-list-fe';
  constructor(){
  }
}
