import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Response } from 'src/app/models/Response';
import { DocumentCategory } from 'src/app/models/DocumentCategory';

@Injectable({
  providedIn: 'root'
})
export class DocumentCategoryService {
  private apiUrl = environment.documentCategoryEndpoint;

  //Todo: remove mock object
  private mockResponse: Response<DocumentCategory[]> = {
    success: true,
    data: [
      {
        id: 1,
        Title: "Bill of Landing",
        IsPrivate: false,
        IsRequired: false,
        IsRecomended: true,
        IsEditable: false,
        Enable: true
      },
      {
        id: 2,
        Title: "Freight Invoice",
        IsPrivate: false,
        IsRequired: true,
        IsRecomended: true,
        IsEditable: false,
        Enable: true
      },
      {
        id: 3,
        Title: "Product Invoice",
        IsPrivate: false,
        IsRequired: true,
        IsRecomended: true,
        IsEditable: false,
        Enable: true
      },
      {
        id: 4,
        Title: "Delivery Receipt / Proof of Delivery",
        IsPrivate: false,
        IsRequired: false,
        IsRecomended: true,
        IsEditable: false,
        Enable: true
      },
      {
        id: 5,
        Title: "Inspection Report",
        IsPrivate: false,
        IsRequired: false,
        IsRecomended: true,
        IsEditable: false,
        Enable: true
      },
      {
        id: 6,
        Title: "Freight Damage Photo",
        IsPrivate: false,
        IsRequired: false,
        IsRecomended: true,
        IsEditable: false,
        Enable: true
      },
      {
        id: 7,
        Title: "Custom Document Category",
        IsPrivate: false,
        IsRequired: false,
        IsRecomended: true,
        IsEditable: true,
        Enable: true
      }
    ],
    error: undefined
  }

  constructor(private http: HttpClient) { }

  getAll(customerId: number): Observable<Response<DocumentCategory[]>> {
    const url = `${this.apiUrl}/getAll`;
    return this.http.get<Response<DocumentCategory[]>>(url, { headers: { customerId: customerId.toString() } });
  }

  getAllMock(customerId: number): Observable<Response<DocumentCategory[]>> {
    return of(this.mockResponse);
  }

  createDocumentCategory(category: DocumentCategory): Observable<Response<DocumentCategory>> {
    const url = `${this.apiUrl}/post`;
    return this.http.post<Response<DocumentCategory>>(url, category);
  }

  createDocumentCategoryMock(category: DocumentCategory): Observable<Response<DocumentCategory[]>> {
    this.mockResponse.data?.push(category)
    return of(this.mockResponse);
  }
}

