import { Component, Input } from '@angular/core';
import { WithTranslationsComponent } from 'app/components';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.less'],
})
export class SloganComponent extends WithTranslationsComponent {
  @Input() title = '';
  @Input() img = '';
}
