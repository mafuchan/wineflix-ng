import { Component, Input } from '@angular/core';
import { wines, Wine } from '../../wines';
@Component({
  selector: 'app-drink-again',
  templateUrl: './drink-again.component.html',
  styleUrls: ['./drink-again.component.css']
})
export class DrinkAgainComponent {
  wines: Wine[] = wines;

}
