import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-component',
  templateUrl: './work-component.component.html',
  styleUrls: ['./work-component.component.scss']
})
export class WorkComponentComponent {
  @Input() bg_img: any = "";
}
