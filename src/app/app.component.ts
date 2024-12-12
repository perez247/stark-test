import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragNDropComponent } from "./components/drag-n-drop/drag-n-drop.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DragNDropComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'drag-drop';
}
