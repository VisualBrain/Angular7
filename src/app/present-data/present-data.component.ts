import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { OutputFormat } from '../output-format';

@Component({
  selector: 'app-present-data',
  templateUrl: './present-data.component.html',
  styleUrls: ['./present-data.component.css']
})
export class PresentDataComponent implements OnInit {

  response;

  output: OutputFormat;
  name1 = 'jatinderkumarchaurasia';
  constructor(private service: GithubService) {
  }

  ngOnInit() {
    this.service.getDetailsByName(this.name1).subscribe(
      (data) => {
        console.log(data);
        this.response = data;
        // this.output.name = data["name"];
        // this.output.id = data["id"];
        // this.output.type = data["type"];
        // this.output.avatar_url = data["avatar_url"];
      }, (err) => {
        console.log(err);
      }
    );
  }

}

