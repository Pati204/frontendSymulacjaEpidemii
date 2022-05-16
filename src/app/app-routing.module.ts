import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './add-page/add-page.component';
import { ContentComponent } from './home-page/content/content.component';
import { HeaderComponent } from './home-page/header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResultPageComponent } from './result-page/result-page.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'add-page', component: AddPageComponent
  },
  {
    path: 'result-page', component: ResultPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
