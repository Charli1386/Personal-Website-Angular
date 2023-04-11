import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { WorkComponentComponent } from './components/work-component/work-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    WorkComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
