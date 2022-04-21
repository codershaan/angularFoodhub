import { Component, OnInit } from '@angular/core';
import { AppSettings, Settings } from 'src/app/app.settings';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
 
  public settings: Settings;
  constructor(public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings; 
  }

  ngOnInit(): void {
  }

}
