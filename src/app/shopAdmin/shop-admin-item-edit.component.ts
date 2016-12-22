import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import {ShopService} from '../shop/shop.service';
import {IShopItem} from '../shop/shop.types';

@Component({
  selector: 'shop-admin-item-edit',
  styles: [`form{max-width:400px;}
            md-input{width: 100%}`],
  template: `
<md-card>
    <md-card-title><h1>Store Admin</h1></md-card-title>
    <md-card-content>
      <form [formGroup]="itemForm" novalidate (ngSubmit)="onSubmit()">
        <md-input placeholder='Title' formControlName="title"></md-input>
        <md-input type="hidden" *ngIf="isEdit" formControlName="_id"></md-input>
        <md-input placeholder='Price' formControlName="price" type="number">
          <span md-prefix>$&nbsp;</span>
      </md-input>
        <button md-raised-button type="submit" >{{isEdit ? 'Update' : 'Add'}}</button>
      </form>
    </md-card-content>
</md-card>
`
})
export class ShopAdminItemEditComponent implements OnInit {
  itemForm: FormGroup;
  isEdit: boolean;

  constructor(private shopService: ShopService, private fb: FormBuilder, private router: Router, private activateRoute: ActivatedRoute) {
  }

  onSubmit() {
    let promise: Promise<any>;
    if (this.isEdit) {
      promise = this.shopService.editShopItem(this.itemForm.value._id, this.itemForm.value)
    }
    else {
      promise = this.shopService.addItemToShop(this.itemForm.value);

    }
    promise.then(() => {
      this.router.navigateByUrl('/shop');
    })

  }

  ngOnInit() {
    this.itemForm = this.fb.group({title: ['', Validators.required], price: [0, Validators.required]});
    let item = this.activateRoute.snapshot.data['shopItem'];
    this.isEdit = true;
    this.itemForm.addControl('_id', new FormControl(item._id));
    this.itemForm.setValue(item);
  }
}
