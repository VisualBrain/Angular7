import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OutputFormat } from './output-format';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  constructor(private https: HttpClient) {
  }
  getDetailsByName(name: string) {
    return this.https.get(`https://api.github.com/users/${name}`);
  }
}
