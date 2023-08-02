import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { SectionWrapperModule } from 'app/modules/section-wrapper/section-wrapper.module';
import { MainTitleModule } from 'app/modules/main-title/main-title.module';
import { ButtonsModule } from 'app/modules/buttons/buttons.module';

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

        ButtonsModule,
    ],
    exports: [GalleryComponent],
})
export class GalleryModule {}
