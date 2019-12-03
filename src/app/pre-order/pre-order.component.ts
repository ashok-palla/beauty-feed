import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { MatDialog } from '@angular/material';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';

@Component({
  selector: 'app-pre-order',
  templateUrl: './pre-order.component.html',
  styleUrls: ['./pre-order.component.scss']
})
export class PreOrderComponent implements OnInit {
  @HostBinding('attr.class') role = 'vbox viewport margin_on_top';
  public preOrderForm;
  constructor(public fb: FormBuilder
    ,         public matDialog: MatDialog
    ,         public sharedService: SharedService) {
    this.preOrderForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.maxLength(100)]],
      last_name: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.pattern(this.sharedService.emailPattern)]],
      mobile_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });
  }
  ngOnInit() { }
  onSubmit() {
    const notificationDialogComponent = this.matDialog.open(NotificationDialogComponent, { height: '250px', width: '550px' });
    notificationDialogComponent.componentInstance.header = 'Confirmation';
    notificationDialogComponent.componentInstance.message = this.preOrderForm.get('first_name').value + ' '
      + this.preOrderForm.get('last_name').value + ', We got your request, we will get back to you soon!!';
  }

}
