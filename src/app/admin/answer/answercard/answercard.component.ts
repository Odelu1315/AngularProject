import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-answercard',
  templateUrl: './answercard.component.html',
  styleUrls: ['./answercard.component.css']
})
export class AnswercardComponent {
  @Input() f:any;

}
