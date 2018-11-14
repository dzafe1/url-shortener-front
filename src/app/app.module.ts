import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UrlComponent} from './main/url.component';
import {UrlService} from './main/url.service';
import {Routes} from './routes';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AlertService} from './alert.service';
import {ErrorComponent} from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(Routes),
  ],
  providers: [UrlService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
