import {Component, Input, EventEmitter, Output} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('modalAnimation', [
      state('void', style({
        transform: 'translateX(100%)',
        opacity: 0,
        display: 'none',

      })),
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1,
        display: 'block',

      })),
      transition(':enter', animate('400ms ease-in-out')),
      transition(':leave', animate('400ms ease-in-out'))
    ])
  ]
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() closeModalNew = new EventEmitter<void>();
  close(): void {
    this.closeModal.emit();
  }

  newClose(): void {
    this.closeModalNew.emit();
  }

  @Input() navLink: any = [
    {
      name: "About Us",
      id: "about-us"
    },
    {
      name: "Articles",
      id: "articles"
    },
    {
      name: "Search",
      id: "search"
    },
    {
      name: "Community",
      id: "community"
    },
    {
      name: "Help",
      id: "help"
    },
  ]
}
