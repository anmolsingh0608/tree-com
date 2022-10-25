import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  webUrl = environment.webUrl;
  order: Order;
  orderId: number;
  constructor(
    private orderService: OrderService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const paramSub =  this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.orderId = params.id;
        this.orderService.getOrder(this.orderId).subscribe((order) => {
          this.order = order.data[0];
        });
      }
    });

    this.subscriptions.push(paramSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
