import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { MainTitleModule } from 'app/modules/main-title/main-title.module';
import { SectionWrapperModule } from 'app/modules/section-wrapper/section-wrapper.module';
import { TogetherComponent } from './together.component';

@NgModule({
    declarations: [TogetherComponent],
    imports: [CommonModule, MainTitleModule, SectionWrapperModule, NzTypographyModule],
    exports: [TogetherComponent],
})
export class TogetherModule {}
