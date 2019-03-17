import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ServerResponse } from 'src/app/model/server.response';
import { Gallery } from 'src/app/model/gallery.response';
import { SERVER_URL } from './../../app.service';
import { Route, Router } from '@angular/router'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  gallery: Gallery[];
  api: object = SERVER_URL;

  constructor(private router: Router, private _userService: UserService) { }

  ngOnInit() {
    this.getAllGallery();
  }

  getAllGallery() {
    this._userService.getGallery().subscribe((data: ServerResponse<Gallery>) => {
      if (data.ok) {
        this.gallery = data.data;
      }
    }, () => {
      alert('Error');
    });
  }

}
