import { columns1 } from './../dummy data/dummydata';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Entity } from '../model/entity';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { entities } from '../dummy data/dummydata';


const Entites: Array<Entity> = entities;


@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {

  displayedColumns!: string[];
  dataSource = new MatTableDataSource<Entity>(Entites);
  id: any
  entity: any


  columnsToDisplay!: string[];
  selectedRow: any;
  //ViewChild
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog) {


  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.entity = entities.find(entity => entity.id == this.id);
      this.displayedColumns = this.entity.columns
      this.columnsToDisplay = this.displayedColumns.slice();

      this.dataSource = this.entity.data
    }
    );



  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }


  clickMethod(name: string) {
    if (confirm("Are you sure to delete " + name)) {
      console.log("Implement delete functionality here");
    }
  }
  Delete(name: any) {
    if (confirm("Are you sure to delete " + name)) {
      console.log("Implement delete functionality here");
    }
  }
  onRowClicked(row: any) {
    let route = '/form/' + row.id;
    this.router.navigate([route]);
  }

}

