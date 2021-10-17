import { entities  } from './../dummy data/dummydata';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { NbMenuItem,NbMenuService  } from '@nebular/theme';

import { Subject } from 'rxjs';

import { NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy  {
    
   entities: any = [];
  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
    this.entities = entities
   
  }
 
 
  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }
 ngOnDestroy() {
    //this.destroy$.next();
    //this.destroy$.complete();
  }

  items: NbMenuItem[] = [
 
    {
      title: 'Dashboard',
      icon: 'home',
      link :"/dash",
      pathMatch:'full',
      
      
    },
  
    
  ];


  
  
  items3: NbMenuItem[] = [
 
    {
      title: 'Settings',
      icon: 'settings',
      link :"/settings",
   
      
    },
    {
      title: '',
     
      
      
    },
    {
      title: '',
     
      
      
    },
    {
      title: '',
     
      
      
    },
    {
      title: '',
     
      
      
    },
    {
      title: '',
     
      
      
    },
    {
      title: '',
    
      
      
    },
 
    {
      title: 'Logout',
      icon: 'log-out',
      
      
    }
   
    
  ];
  

}
