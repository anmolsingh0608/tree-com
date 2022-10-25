import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-drawing',
  templateUrl: './view-drawing.page.html',
  styleUrls: ['./view-drawing.page.scss'],
})
export class ViewDrawingPage implements OnInit {
  webUrl = environment.webUrl;
  path: any;

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit() {

  }

  ionViewDidEnter(){
  }

  drawAgain(){
    localStorage.clear();
    this.router.navigate(['/main/drawing']);
  }

  home() {
    this.router.navigate(['/main/trees']);
  }
}
