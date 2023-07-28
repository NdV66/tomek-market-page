import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderModule } from './modules';
import { WithTranslationsComponent } from './components/with-translations/with-translations.component';

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {
  message: { nzTop: 120 },
  notification: { nzTop: 240 },
};

@NgModule({
  declarations: [AppComponent, WithTranslationsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NzLayoutModule,
    NzGridModule,

    AppHeaderModule,
  ],
  providers: [{ provide: NZ_CONFIG, useValue: ngZorroConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
