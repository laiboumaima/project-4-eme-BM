import { Component, OnInit } from '@angular/core';
import { EntitiesService } from '../services/entities-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-createentity',
  templateUrl: './createentity.component.html',
  styleUrls: ['./createentity.component.scss']
})
export class CreateentityComponent implements OnInit {

  constructor(private entitiesService: EntitiesService,public dialogRef: MatDialogRef<CreateentityComponent>,) { }

  ngOnInit(): void {
    this.dialogRef.updateSize('50%');
  }

  onClickSubmit(data : any) {
 }
}
