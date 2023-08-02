import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { SectionWrapperModule } from 'app/modules/section-wrapper/section-wrapper.module';
import { FooterComponent } from './footer.component';
import { ButtonsModule } from '../buttons/buttons.module';

@NgModule({
    declarations: [FooterComponent],
    imports: [CommonModule, NzLayoutModule, NzTypographyModule, NzGridModule, SectionWrapperModule, ButtonsModule],
    exports: [FooterComponent],
})
export class FooterModule {}
