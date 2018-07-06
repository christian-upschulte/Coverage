import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  getVideosByFormat(format: string){
    return this.http.get('http://localhost:8080/videos-all/' + format);
  }
}
