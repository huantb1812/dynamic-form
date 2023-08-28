import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-init-a-new-df',
  templateUrl: './dialog-init-a-new-df.component.html',
  styleUrls: ['./dialog-init-a-new-df.component.css'],
})
export class DialogInitANewDfComponent implements OnInit {
  formNameControl = new FormControl('', [Validators.required]);
  constructor(public dialogRef: DialogRef) {}

  ngOnInit() {}
  onSave() {
    if(this.formNameControl.valid){
      this.dialogRef.close(this.formNameControl.value);
    }
  }
}
