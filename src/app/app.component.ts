import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HackernewsService } from './services/hackernews.service';
import { BestStoryIDs } from './storymodels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bestStories: any;
  
  constructor(public hackerNews: HackernewsService) { }

  ngOnInit() {
    // Get our best stories
    this.hackerNews.getBestStories().subscribe(res => {
      this.bestStories = res.json();
    });
  }

}
