import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeautyFeedComponent } from './beauty-feed/beauty-feed.component';


const routes: Routes = [
  { path: '', component: BeautyFeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
