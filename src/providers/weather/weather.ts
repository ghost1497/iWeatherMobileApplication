import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class WeatherProvider {
  apikey = '99433dd4ac8f527b';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apikey+'/conditions/q';
  }

  getWeather(city,state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json');
  }

}
