import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { JumbotronComponent } from './jumbotron.component';
import { ContactButtonModule } from 'app/modules/contact-button/contact-button.module';
import { FollowButtonModule } from 'app/modules/follow-button/follow-button.module';
import { SectionWrapperModule } from 'app/modules/section-wrapper/section-wrapper.module';
import { SloganComponent } from './slogan/slogan.component';

@NgModule({
  declarations: [JumbotronComponent, SloganComponent],
  imports: [
    CommonModule,
    NzTypographyModule,

    ContactButtonModule,
    FollowButtonModule,
    SectionWrapperModule,
  ],
  exports: [JumbotronComponent],
})
export class JumbotronModule {}
