
import { Component, OnDestroy ,OnInit} from '@angular/core';

import { Subject } from 'rxjs';
import { NbMenuItem } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy {

  constructor(private sidebarService: NbSidebarService) { }

 

  private destroy$ = new Subject<void>();
  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }
 ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  items: NbMenuItem[] = [

    {
       home: true,
      title: 'Dashboard',
      icon: 'home',
      link: "/dash",
   
    
    },
    {
      title: 'Entities',
      icon: 'book',
      link: "/entities"
    },
    {
      title: 'Templates',
      icon: 'file',
      link: '/templates'
    },
    {
      title: 'Users management',
      icon: 'people',
      link: '/users'
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
      title: 'Settings',
      icon: 'settings',
      link: '/settings'

    },
  
  ];

 
  items3: NbMenuItem[] = [
    {
      title: 'Logout',
      icon: 'log-out',
    }
  ];
}
