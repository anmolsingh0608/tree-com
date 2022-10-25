import {
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/admin/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { ToastService } from 'src/app/services/toast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.page.html',
  styleUrls: ['./drawing.page.scss'],
})
export class DrawingPage implements OnInit, OnDestroy {
  webUrl = environment.webUrl;
  path: any;
  subscriptions: Subscription[] = [];
  status = false;

  points = [];
  paths = [];

  @ViewChild('imageCanvas') canvas: any;
  canvasElement: any;

  saveX: number;
  saveY: number;

  storedImages = [];

  // Make Canvas sticky at the top stuff
  @ViewChild(IonContent) content: IonContent;
  @ViewChild('fixedContainer') fixedContainer: any;

  // Color Stuff
  selectedColor = '#000000';

  colors = [
    '#000000',
    '#c2281d',
    '#de722f',
    '#edbf4c',
    '#5db37e',
    '#459cde',
    '#4250ad',
    '#FFFFFF',
  ];

  constructor(
    public router: Router,
    public renderer: Renderer2,
    private plt: Platform,
    private orderService: OrderService,
    private authService: AuthService,
    private toastService: ToastService
  ) {}
  ngOnInit(): void {}

  async ionViewDidEnter() {
    const isLoggedIn = this.authService.isLoggedIn();
    if (!isLoggedIn) {
      this.toastService.presentToast('Please login to continue');
      this.router.navigate(['/main/trees']);
    }
    this.paths = [];
    this.status = !!this.orderService.orderData;
    this.getImage();
    if (!this.fixedContainer) return;
    let itemHeight = this.fixedContainer.nativeElement.offsetHeight;
    let scroll = await this.content.getScrollElement();

    itemHeight =
      Number.parseFloat(scroll.style.marginTop.replace('px', '')) + itemHeight;
    scroll.style.marginTop = itemHeight + 'px';
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.plt.width() + '';
    this.canvasElement.height = 450;
  }

  ionViewDidLoad() {
    // Set the Canvas Element and its size
  }

  selectColor(color) {
    this.selectedColor = color;
  }

  startDrawing(ev) {
    var canvasPosition = this.canvasElement.getBoundingClientRect();

    this.saveX = ev.touches[0].pageX - canvasPosition.x;
    this.saveY = ev.touches[0].pageY - canvasPosition.y;
    this.points.push({
      x: this.saveX,
      y: this.saveY,
      size: 3,
      color: this.selectedColor,
    });
  }

  moved(ev) {
    ev.preventDefault();
    var canvasPosition = this.canvasElement.getBoundingClientRect();

    let ctx = this.canvasElement.getContext('2d');
    let currentX = ev.touches[0].pageX - canvasPosition.x;
    let currentY = ev.touches[0].pageY - canvasPosition.y;

    ctx.lineJoin = 'round';
    ctx.strokeStyle = this.selectedColor;
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(this.saveX, this.saveY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();

    ctx.stroke();

    this.saveX = currentX;
    this.saveY = currentY;

    this.points.push({
      x: currentX,
      y: currentY,
      size: 3,
      color: this.selectedColor,
    });
  }

  touchLeft(ev) {
    this.points.push({
      x: this.saveX,
      y: this.saveY,
      size: 3,
      color: this.selectColor,
    });
    this.paths.push(this.points);
    this.points = [];
  }

  undoLastStroke() {
    this.paths.pop();
    this.redrawAll();
  }

  redrawAll() {
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    // draw all the paths in the paths array
    this.paths.forEach((path) => {
      ctx.strokeStyle = path[0].color;
      ctx.lineWidth = path[0].size;
      ctx.beginPath();
      ctx.moveTo(path[0].x, path[0].y);
      for (let i = 1; i < path.length; i++) {
        ctx.lineTo(path[i].x, path[i].y);
      }
      ctx.stroke();
    });
  }

  saveCanvasImage() {
    var dataUrl = this.canvasElement.toDataURL();
    const sketchSub = this.orderService
      .uploadYardSketch(dataUrl)
      .subscribe((res) => {
        this.orderService.orderData.yardSketchImage = res.data.id;
        this.orderService
          .createOrder(this.orderService.orderData)
          .subscribe((result) => {
            this.proceedToSuccess();
          });
      });
    this.subscriptions.push(sketchSub);
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
  }

  saveImage() {
    var dataUrl = this.canvasElement.toDataURL();
    const sketchSub = this.orderService
      .uploadYardSketch(dataUrl)
      .subscribe((res) => {
        if (this.status) {
          this.orderService.orderData.yardSketchImage = res.data.id;
          this.orderService
            .createOrder(this.orderService.orderData)
            .subscribe((result) => {
              this.proceedToSuccess();
            });

          localStorage.removeItem('image_id');
          this.orderService.orderData = null;
        } else {
          localStorage.setItem('image_id', res.data.id.toString());
          this.getImage();
        }
      });
    this.subscriptions.push(sketchSub);
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
  }

  resetDrawing() {
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
  }

  proceedToSuccess() {
    this.router.navigate(['/main/order-success']);
  }

  proceedToView() {
    this.router.navigate(['/main/drawing']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  drawAgain() {
    const image_id = localStorage.getItem('image_id');
    const deleteImage = this.orderService
      .deleteImage(image_id)
      .subscribe((res) => {
        localStorage.removeItem('image_id');
        this.path = null;
        this.ionViewDidEnter();
      });
    this.subscriptions.push(deleteImage);
  }

  getImage() {
    if (localStorage.getItem('image_id')) {
      const image_id = localStorage.getItem('image_id');
      if (image_id) {
        this.orderService
          .getYardSketch(image_id)
          .subscribe((res) => (this.path = res.data.path));
      }
    }
  }

  sendImage() {
    this.orderService.orderData.yardSketchImage =
      localStorage.getItem('image_id');
    this.orderService
      .createOrder(this.orderService.orderData)
      .subscribe((result) => {
        localStorage.removeItem('image_id');
        this.path = null;
        this.orderService.orderData = null;
        this.proceedToSuccess();
      });
  }

  sendToSel() {
    if (!this.orderService.orderData) {
      this.toastService.presentToast('Please select a tree before continuing!');
      this.router.navigate(['/main/trees']);
    }
  }

  proceed() {
    !!!this.path
      ? this.saveImage()
      : !!this.path && this.status
      ? this.sendImage()
      : this.sendToSel();
  }
}
