import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hasil-pbb',
  templateUrl: './hasil-pbb.page.html',
  styleUrls: ['./hasil-pbb.page.scss'],
})
export class HasilPbbPage implements OnInit {

  public dataPbb: any;

  constructor(public router: Router) {
    if (router.getCurrentNavigation()?.extras.state) {
      this.dataPbb = this.router.getCurrentNavigation()?.extras.state;
    }
  }

  ngOnInit() {
  }

}
