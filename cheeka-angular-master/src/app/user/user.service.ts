import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from './../app.service';

@Injectable()
export class UserService {

    constructor(private _http: HttpClient) {
        console.log(SERVER_URL.API);
    }

    getCarouselImages() {
        return this._http.get(SERVER_URL.API + '/carousel/get-all');
    }

    getGallery(howMany?: number) {
        return this._http.post(SERVER_URL.API + '/gallery/get-all', null, {});
    }

    getOneGallery(folder: string) {
        return this._http.post(SERVER_URL.API + '/gallery/get-one/' + folder, null, {});
    }

    postContact(body: any) {
        return this._http.post(SERVER_URL.API + '/slack/message/add', body, {});
    }

}