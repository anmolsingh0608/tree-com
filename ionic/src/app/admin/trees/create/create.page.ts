import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Subscription } from 'rxjs';
import { Filter } from 'src/app/models/filter.model';
import { Image, ImageTypes } from 'src/app/models/image.model';
import { Tree } from 'src/app/models/tree.model';
import { ToastService } from 'src/app/services/toast.service';
import { environment } from 'src/environments/environment';
import { FiltersService } from '../../services/filters.service';
import { TreesService } from '../../services/trees.service';
import { form, fruit, size, flowerColor, tolerances, fallColor, flowerTime, growthRate, nativeRegion } from './const';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit, OnDestroy {
  filtersArr = ['form', 'flowerColor', 'flowerTime', 'fruit', 'fallColor', 'tolerances', 'size', 'growthRate', 'nativeRegion'];
  subscriptions: Subscription[] = [];
  treeId: string;
  treeData: any = {};
  treeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    scientificName: new FormControl(''),
    use: new FormControl(''),
    // form: new FormControl(''),
    // flowerColor: new FormControl(''),
    // flowerTime: new FormControl(''),
    // fruit: new FormControl(''),
    // fallColor: new FormControl(''),
    // tolerates: new FormControl(''),
    // size: new FormControl(''),
    // growthRate: new FormControl(''),
    // nativeRegion: new FormControl(''),
    notes: new FormControl(''),
    images: new FormControl([]),
  });
  webUrl = environment.webUrl;
  imagesArray: Image[] = [];
  imagesIdArray: any = [];
  form: any[] = form;
  fruit: any[] = fruit;
  size: any[] = size;
  flowerColor: any[] = flowerColor;
  flowerTime: any[] = flowerTime;
  growthRate: any[] = growthRate;
  nativeRegion: any[] = nativeRegion;
  fallColor: any[] = fallColor;
  tolerances: any[] = tolerances;

  filters: Filter[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private treeService: TreesService,
    private toastService: ToastService,
    private filterService: FiltersService,
  ) { }

  ngOnInit() {
    const filterSub = this.filterService.getFilters().subscribe((res) => {
      this.filters = res.data;

      this.mapOrder(this.filters, this.filtersArr, 'name');

      this.filters.forEach((filter) => {
        let formControl = new FormControl('');
        this.treeForm.controls[filter.name] = formControl;
      })
    });
    this.subscriptions.push(filterSub);
    const treeSub = this.route.params.subscribe(params => {
      if (params.id) {
        this.treeId = params.id;
        this.treeService.getTree(params.id).subscribe((res: any) => {
          this.treeData = res.data;
          delete this.treeData.id;
          this.treeForm.patchValue(this.treeData);
          this.imagesArray = this.treeData.images;
        });
      }
    });

    this.subscriptions.push(treeSub);
  }

  mapOrder (array, order, key) {

    array.sort( function (a, b) {
      var A = a[key], B = b[key];

      if (order.indexOf(A) > order.indexOf(B)) {
        return 1;
      } else {
        return -1;
      }

    });

    return array;
  };

  saveForm() {
    this.treeForm.updateValueAndValidity();
    if (this.treeForm.invalid) {
      this.toastService.presentToast('Please fill all the required fields');
      return;
    }
    this.treeForm.value.images = this.imagesArray.map(image => image.id).filter(id => !!id);
    if (this.treeId) {
      this.treeService.updateTree({ ...this.treeForm.value, id: this.treeId }).subscribe((res: any) => {
        this.navigateToList();
      });
    } else {
      this.treeService.createTree(this.treeForm.value as Tree).subscribe((res: any) => {
        this.navigateToList();
      });
    }
  }

  navigateToList() {
    this.router.navigate(['/admin/trees/']);
  }

  image() {
    this.imagesArray.push({
      type: ImageTypes.TREE
    });
    // this.imagesArray.push(this.imagesArray.length);
  }

  async imageUpload(index: number) {
    let image: Photo;
    image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      quality: 100,
      allowEditing: false,
      source: CameraSource.Photos
    });

    if (!image) {
      this.toastService.presentToast('Problem selecting image!');
    }
    this.treeService.createImage(image.dataUrl, ImageTypes.TREE).subscribe((res) => {
      this.imagesArray[index] = res.data;
    });
  }

  saveImage(base64: string, event) {
    // this.treeService.createImage({ photo: base64Data, type: 'TREE' }).subscribe((res: any) => {
    //   const path = res.data.path;
    //   event.target.disabled = true;
    //   event.target.nextElementSibling.style.display = 'block';
    // event.target.nextElementSibling.firstChild.innerHTML = path[path.length - 1];
    //   event.target.nextElementSibling.firstChild.setAttribute('src', `${this.webUrl}/${path}`);
    //   event.target.nextElementSibling.lastChild.setAttribute('id', res.data.id);
    //   this.imagesIdArray.push(res.data.id);
    // });
  }

  async readAsBase64(photo: Photo) {
    const response = await fetch(photo.webPath);
    const blob = await response.blob();
    return (await this.convertBlobToBase64(blob)) as string;
  }

  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    })


  delete(id: number) {
    const deleteSub = this.treeService.deleteImage(id).subscribe((res: any) => {
      this.imagesArray.splice(this.imagesArray.findIndex(img => id === img.id), 1);
    });
    this.subscriptions.push(deleteSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
