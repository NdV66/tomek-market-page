import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { SeeYouPanelComponent } from './see-you-panel.component';

@NgModule({
    declarations: [SeeYouPanelComponent],
    imports: [CommonModule, NzTypographyModule],
    exports: [SeeYouPanelComponent],
})
export class SeeYouPanelModule {}
