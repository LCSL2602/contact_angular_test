import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-contact',
  templateUrl: './item-contact.component.html',
  styleUrls: ['./item-contact.component.scss']
})

export class ItemContactComponent {
  @Input() name:string = '';
  @Input() lastname:string = '';
  @Input() image:string = '';
}
