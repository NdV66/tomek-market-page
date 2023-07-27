import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderModule } from './modules';
import { WithTranslationsComponent } from './components/with-translations/with-translations.component';

@NgModule({
  declarations: [AppComponent, WithTranslationsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NzLayoutModule,
    NzGridModule,

    AppHeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
