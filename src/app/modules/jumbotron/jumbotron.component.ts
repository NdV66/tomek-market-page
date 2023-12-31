import { Component } from '@angular/core';

import { WithTranslationsComponent } from 'app/components';

@Component({
    selector: 'app-jumbotron',
    templateUrl: './jumbotron.component.html',
    styleUrls: ['./jumbotron.component.less'],
})
export class JumbotronComponent extends WithTranslationsComponent {}
