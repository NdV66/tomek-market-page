import { Component } from '@angular/core';
import { WithTranslationsComponent } from 'app/components';
import { EMainTitleDirections } from '../main-title/main-title.component';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.less'],
})
export class GalleryComponent extends WithTranslationsComponent {
    public direction = EMainTitleDirections.RIGHT;
}
