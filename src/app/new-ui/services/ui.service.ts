import { Injectable, signal } from '@angular/core';
import { Menus } from 'src/app/constans/menus';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  public showTopBar = signal<boolean>(true);
  public showSubMenu = signal<boolean>(false);


}
