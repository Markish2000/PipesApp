// Angular
import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'marcos';
  public nameUpper: string = 'MARCOS';
  public fullName: string = 'mArCoS pArElLa';
  public customDate: Date = new Date();
}
