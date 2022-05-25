import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drunkard',
  templateUrl: './drunkard.component.html',
  styleUrls: ['./drunkard.component.css']
})
export class DrunkardComponent {
  @Input() imageUrl!: string;
  @Input() isNew?: boolean;
  @Input() label!: string;
  @Input() isFinished?: boolean;
  @Input() progress?: number;
}
