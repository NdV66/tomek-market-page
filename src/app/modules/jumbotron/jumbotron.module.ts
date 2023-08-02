import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { SectionWrapperModule } from 'app/modules/section-wrapper/section-wrapper.module';
import { ButtonsModule } from 'app/modules/buttons/buttons.module';

import { SloganComponent } from './slogan/slogan.component';
import { JumbotronComponent } from './jumbotron.component';

@NgModule({
    declarations: [JumbotronComponent, SloganComponent],
    imports: [CommonModule, NzTypographyModule, SectionWrapperModule, ButtonsModule],
    exports: [JumbotronComponent],
})
export class JumbotronModule {}
