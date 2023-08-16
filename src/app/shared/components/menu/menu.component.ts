// Angular
import { Component, OnInit } from '@angular/core';

// Libraries
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      { label: 'a', icon: 'a' },
      { label: 'a', icon: 'a' },
      { label: 'a', icon: 'a' },
    ];
  }
}
