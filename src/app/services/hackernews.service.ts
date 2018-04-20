import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType, URLSearchParams } from '@angular/http';
import { BestStoryIDs } from '../storymodels';

// Import our environment variables
import { environment } from '../../environments/environment';

@Injectable()
export class HackernewsService {
  bestStoriesURL: string;

  constructor(public http:Http) { 
    // Setup the web api urls
    this.bestStoriesURL = environment.hackerNewsAPIURL;
  }

  getBestStories() {
    let storyIDs = this.http.get(this.bestStoriesURL);
    return storyIDs;
  }

}
