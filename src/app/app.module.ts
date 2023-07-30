import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { APP_ENV, langModel } from 'app/appEnv';
import { TranslationsService } from 'app/services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeModule } from 'app/modules/about-me/about-me.module';
import { TogetherModule } from 'app/modules/together/together.module';
import { AppHeaderModule } from 'app/modules/app-header/app-header.module';
import { JumbotronModule } from 'app/modules/jumbotron/jumbotron.module';
import { WorkModule } from './modules/work/work.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { APP_ERRORS } from './appErrors';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,

        NzLayoutModule,
        NzGridModule,

        AppHeaderModule,
        JumbotronModule,
        AboutMeModule,
        TogetherModule,
        WorkModule,
        GalleryModule,
    ],
    providers: [
        TranslationsService,
        { provide: 'langModel', useValue: langModel },
        { provide: 'appEnv', useValue: APP_ENV },
        { provide: 'appErrors', useValue: APP_ERRORS },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
