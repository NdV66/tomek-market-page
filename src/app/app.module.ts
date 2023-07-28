import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderModule } from './modules';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { JumbotronModule } from './modules/jumbotron/jumbotron.module';

import { APP_ENV, langModel } from 'app/appEnv';
import { TranslationsService } from './services';

const ngZorroConfig: NzConfig = {
  message: { nzTop: 120 },
  notification: { nzTop: 240 },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NzLayoutModule,
    NzGridModule,

    AppHeaderModule,
    JumbotronModule,
  ],
  providers: [
    TranslationsService,
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    { provide: 'langModel', useValue: langModel },
    { provide: 'appEnv', useValue: APP_ENV },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
