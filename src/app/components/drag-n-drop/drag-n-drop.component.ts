import { Component } from '@angular/core';
import {CdkDragDrop, copyArrayItem, DragDropModule} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drag-n-drop',
  standalone: true,
  imports: [DragDropModule, CommonModule],
  templateUrl: './drag-n-drop.component.html',
  styleUrl: './drag-n-drop.component.scss'
})
export class DragNDropComponent {
  todo = ['Input 1', 'Input 2', 'Input 3', 'Input 4', 'Input 5', 'Input 6', 'Input 7', 'Input 8'];

  done: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      return;
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  removeFromSelected(index: number) {
    this.done.splice(index, 1);
  }
}
