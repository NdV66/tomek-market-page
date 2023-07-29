import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { SectionWrapperModule } from '../section-wrapper/section-wrapper.module';
import { MainTitleModule } from '../main-title/main-title.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FollowButtonModule } from '../follow-button/follow-button.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
    declarations: [GalleryComponent],
    imports: [
        CommonModule,
        SectionWrapperModule,
        MainTitleModule,
        NzTypographyModule,
        NzButtonModule,

        FollowButtonModule,
    ],
    exports: [GalleryComponent],
})
export class GalleryModule {}
