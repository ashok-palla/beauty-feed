import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeautyFeedComponent } from './beauty-feed/beauty-feed.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', component: BeautyFeedComponent, children: [
      {
        path: '',
        component: HomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
