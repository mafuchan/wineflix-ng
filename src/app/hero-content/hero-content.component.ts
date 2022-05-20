import { Component } from '@angular/core';
import { heroContent } from '../../hero';

@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.css']
})
export class HeroContentComponent {
  title = heroContent.title
  imgURL = heroContent.imageUrl
  subtitle = heroContent.subtitle
  description = heroContent.description
}
