import { Component, Input } from '@angular/core';
import { Box } from 'src/app/game/box';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() box: Box;

  constructor() {}
}
