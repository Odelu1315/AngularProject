import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formcard',
  templateUrl: './formcard.component.html',
  styleUrls: ['./formcard.component.css']
})
export class FormcardComponent {
  @Input() f:any;

}
