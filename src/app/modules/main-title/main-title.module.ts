import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { SectionWrapperModule } from 'app/modules/section-wrapper/section-wrapper.module';
import { MainTitleComponent } from './main-title.component';

@NgModule({
    declarations: [MainTitleComponent],
    imports: [CommonModule, SectionWrapperModule, NzTypographyModule],
    exports: [MainTitleComponent],
})
export class MainTitleModule {}
