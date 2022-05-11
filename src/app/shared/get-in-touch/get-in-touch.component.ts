import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateContactUs(){
    this.router.navigate(['/contact']);
  }

}
