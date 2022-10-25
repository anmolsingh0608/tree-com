import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, forkJoin, Observable } from 'rxjs';
import { AuthService } from 'src/app/admin/services/auth.service';
import { CitiesService } from 'src/app/admin/services/cities.service';
import { TreesService } from 'src/app/admin/services/trees.service';
import { City } from 'src/app/models/city.model';
import { OrderService } from 'src/app/services/order.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})
export class CustomerDetailsPage implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  cities: City[] = [];
  customerForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(15),
      Validators.pattern('^[0-9-]+$'),
    ]),
    email: new FormControl('', [Validators.email]),
  });

  treeFormArray = new FormGroup({
    trees: new FormArray([]),
  });

  treeForm = new FormGroup({
    treeName: new FormControl('', Validators.required),
    quantity: new FormControl('1', [Validators.required, Validators.min(1)]),
  });

  constructor(
    private router: Router,
    private toastService: ToastService,
    private orderService: OrderService,
    private treeService: TreesService,
    private citiesService: CitiesService,
    private authService: AuthService
  ) {
    if (!this.orderService.orderData || !this.orderService.orderData.tree) {
      this.toastService.presentToast('Please select a tree before continuting');
      this.router.navigate(['/main/trees']);
    }
  }

  get trees() : FormArray {
    return this.treeFormArray.get('trees') as FormArray;
  }

  ngOnInit() {
    const isLoggedIn = this.authService.isLoggedIn();
    if (!isLoggedIn) {
      this.toastService.presentToast('Please login to continue');
      this.router.navigate(['/main/trees']);
    }
    const citySub = this.citiesService.getCities().subscribe((res) => {
      this.cities = res.data;
    });
    this.subscriptions.push(citySub);
    // this.orderService.orderDataArray.forEach(function(value, index){
    // console.log(value.tree);
    // console.log(this.orderService.orderData);
    // this.treeService.getTree(value.tree).subscribe(tree => {
    //   console.log(tree);
    // this.treeFormArray.get('trees').push(new FormGroup({
    //   treeName: new FormControl(tree.data.name, Validators.required),
    //   quantity: new FormControl('1', [Validators.required, Validators.min(1)]),
    // }));
    // console.log(this.treeFormArray);
    // });
    // });
    // this.treeService
    //   .getTree(this.orderService.orderData.tree)
    //   .subscribe((tree) => {
    //     this.treeForm.patchValue({ treeName: tree.data.name });
    //   });
  }

  ionViewDidEnter() {
    // const arr = [];
    // this.orderService.orderDataArray.forEach(function(value, index){
    //   console.log(value.tree);
    // this.treeService.getTrees().subscribe(tree => {
    //   console.log(tree);
    //   this.treeFormArray.get('trees').push(new FormGroup({
    //     treeName: new FormControl(tree.data.name, Validators.required),
    //     quantity: new FormControl('1', [Validators.required, Validators.min(1)]),
    //   }));
    //   console.log(this.treeFormArray);
    // });
    // arr.push(value.tree);
    // });
    this.trees.clear();
    for (const i of this.orderService.orderDataArray) {
      this.treeService.getTree(i.tree).subscribe((tree) => {
        this.trees.push(
          new FormGroup({
            treeName: new FormControl(tree.data.name, Validators.required),
            quantity: new FormControl('1', [
              Validators.required,
              Validators.min(1),
            ]),
          })
        );
      });
    }

    // forkJoin(arr).subscribe((res) => {
    //   console.log(res);
    //   this.treeService.getTree(res).subscribe(res => console.log(res));
    // });
    this.treeService
      .getTree(this.orderService.orderData.tree)
      .subscribe((tree) => {
        this.treeForm.patchValue({ treeName: tree.data.name });
      });
  }

  async save() {
    const nameField = this.customerForm.get('name');
    const addressField = this.customerForm.get('address');
    const cityField = this.customerForm.get('city');
    const phoneField = this.customerForm.get('phone');
    const emailField = this.customerForm.get('email');
    const treeNameField = this.treeForm.get('treeName');
    const quantityField = this.treeForm.get('quantity');
    console.log(this.treeFormArray.valid);

    if (nameField.invalid) {
      this.toastService.presentToast('Enter a valid name');
      return;
    }
    if (emailField.invalid) {
      this.toastService.presentToast('Enter a valid email');
      return;
    }
    if (phoneField.invalid) {
      this.toastService.presentToast('Enter a valid phone number');
      return;
    }
    if (addressField.invalid) {
      this.toastService.presentToast('Enter a valid address');
      return;
    }
    if (cityField.invalid) {
      this.toastService.presentToast('Enter a valid city');
      return;
    }
    if (treeNameField.invalid) {
      this.toastService.presentToast('Please go back and select a tree');
      return;
    }
    if (quantityField.invalid) {
      this.toastService.presentToast('Enter a valid quantity');
      return;
    }

    // const orderSub = this.orderService
    //   .createCustomer(this.customerForm.value)
    //   .subscribe((res) => {
    //     (this.orderService.orderData.customer = res.data.id),
    //       (this.orderService.orderData.quantity = this.treeForm.value.quantity);
    //     this.orderService.orderData.foresterId = localStorage.getItem('id');
    //     this.proceedToSketch();
    //   });

    // this.subscriptions.push(orderSub);
  }

  goBack() {
    this.router.navigate(['/main/trees']);
  }

  proceedToSketch() {
    this.router.navigate(['/main/drawing']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
