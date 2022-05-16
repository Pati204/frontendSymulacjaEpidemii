import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { ContentComponent } from './home-page/content/content.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { AddPageComponent } from './add-page/add-page.component';
import { ContentAddComponent } from './add-page/content-add/content-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultPageComponent } from './result-page/result-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AddPageComponent,
    ContentAddComponent,
    ResultPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class AppModule { }
