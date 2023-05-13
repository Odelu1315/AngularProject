import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-suggestioncard',
  templateUrl: './suggestioncard.component.html',
  styleUrls: ['./suggestioncard.component.css']
})
export class SuggestioncardComponent {
  @Input() f:any;

}
