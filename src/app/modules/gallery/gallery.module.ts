import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { SectionWrapperModule } from 'app/modules/section-wrapper/section-wrapper.module';
import { MainTitleModule } from 'app/modules/main-title/main-title.module';
import { FollowButtonModule } from 'app/modules/follow-button/follow-button.module';
import { ContactButtonModule } from 'app/modules/contact-button/contact-button.module';

import { GalleryComponent } from './gallery.component';

@NgModule({
    declarations: [GalleryComponent],
    imports: [
        CommonModule,
        SectionWrapperModule,
        MainTitleModule,

        NzTypographyModule,
        NzButtonModule,
        NzGridModule,
        NzImageModule,

        FollowButtonModule,
        ContactButtonModule,
    ],
    exports: [GalleryComponent],
})
export class GalleryModule {}
