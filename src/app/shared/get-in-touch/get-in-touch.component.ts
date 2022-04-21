import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {
  public bgImage: SafeStyle = ''
  constructor( private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.bgImage = this.sanitizer.bypassSecurityTrustStyle('url('+'assets/images/others/operator.png' +')'); 
  }

}
