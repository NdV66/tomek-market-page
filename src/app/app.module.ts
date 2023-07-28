import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

import { JumbotronModule, AppHeaderModule } from 'app/modules';
import { APP_ENV, langModel } from 'app/appEnv';
import { TranslationsService } from 'app/services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
