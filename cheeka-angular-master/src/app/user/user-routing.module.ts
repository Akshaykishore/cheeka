import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SingleGalleryComponent } from './single-gallery/single-gallery.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home',
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'gallery', component: GalleryComponent,
  },
  {
    path: 'about', component: AboutComponent,
  },
  {
    path: 'contact-us', component: ContactUsComponent,
  },
  {
    path: ':folder', component: SingleGalleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
