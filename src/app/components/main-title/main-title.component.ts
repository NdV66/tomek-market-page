import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.less'],
})
export class MainTitleComponent {
  @Input() title = '';
  @Input() direction = '';
}
