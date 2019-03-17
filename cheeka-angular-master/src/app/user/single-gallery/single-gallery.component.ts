import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';
import { ServerResponse } from 'src/app/model/server.response';
import { SingleGallery } from 'src/app/model/single-gallery.response';
import { SERVER_URL } from './../../app.service';

@Component({
  selector: 'app-single-gallery',
  templateUrl: './single-gallery.component.html',
  styleUrls: ['./single-gallery.component.scss']
})
export class SingleGalleryComponent implements OnInit {

  folder: string;
  images: SingleGallery[];
  api: object = SERVER_URL;

  constructor(private _router: Router, private _route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this._route.params.subscribe(
      (params: Params) => {
        this.folder = params['folder'];
        if (this.folder.trim() != '') {
          this.getOneFolder(this.folder);
        }
      }, () => {
        this._router.navigate(['/']);
      });
  }

  getOneFolder(folder: string) {
    this.userService.getOneGallery(folder).subscribe((data: ServerResponse<SingleGallery>) => {
      if (data.ok) {
        this.images = data.data;
      }
    }, () => {
      alert("Error");
    });
  }

}
