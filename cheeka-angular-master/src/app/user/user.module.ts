import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from "ngx-bootstrap/carousel";
import { UserService } from './user.service';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SingleGalleryComponent } from './single-gallery/single-gallery.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, AboutComponent, GalleryComponent, ContactUsComponent, SingleGalleryComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
