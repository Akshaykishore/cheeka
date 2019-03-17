import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { SingleGallery } from 'src/app/model/single-gallery.response';
import { ServerResponse } from 'src/app/model/server.response';
import { SERVER_URL } from './../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  carouselImages: SingleGallery[] = [];
  api: object = SERVER_URL;
  image: SingleGallery;
  index: number = 0;
  timerSubscription: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getCarouselImages();
  }

  getCarouselImages() {
    this.userService.getCarouselImages().subscribe((data: ServerResponse<SingleGallery>) => {
      if (data.ok) {
        this.carouselImages = data.data;
        this.index = this.index % this.carouselImages.length;
        this.image = this.carouselImages[this.index];
        this.startTimer();
      } 
    }, () => {
      // alert('Error');
    });
  }

  startTimer() {
    this.timerSubscription = setInterval(() => {
      this.index = this.index % this.carouselImages.length;
      this.image = this.carouselImages[this.index];
      this.index++;
    }, 4000);
  }

  ngOnDestroy() {
    clearInterval(this.timerSubscription);
  }

}
