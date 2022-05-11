import { Component, OnInit } from '@angular/core';
import { Settings, AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/app.service';  
import { MenuItem } from 'src/app/app.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {  
  public slides = []; 
  public specialMenuItems:Array<MenuItem> = [];

  public settings: Settings;
  constructor(public appSettings:AppSettings, public appService:AppService, private router: Router ) {
    this.settings = this.appSettings.settings;  
  }

  ngOnInit(): void {
    this.getSpecialMenuItems();
  }


  public getSpecialMenuItems(){
    // Calling Get Special Menu Items and assigning to the class property 
    this.appService.getSpecialMenuItems().subscribe(menuItems=>{
      this.specialMenuItems = menuItems;
    }, (error)=>{console.log(error)});
  } 

  navigateAboutUs(){
    // Navigating route to about page
    this.router.navigate(['/about']);
  }

}
