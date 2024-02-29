import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuType } from '../models/menu';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }


  public get menuApp(): Observable<MenuType[]> {
    let url = "../assets/menuDB.json";
    return this.http.get<MenuType[]>(url);
  }

}
