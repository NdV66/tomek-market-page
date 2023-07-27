import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonModule,
    NzLayoutModule,
    NzGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
