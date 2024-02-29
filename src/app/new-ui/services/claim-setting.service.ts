import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { ClaimSetting } from 'src/app/models/ClaimSetting';
import { Response } from 'src/app/models/Response';

@Injectable({
  providedIn: 'root'
})
export class ClaimSettingService {

  private apiUrl = environment.claimTypeEndpoint;

  private mockResponse: Response<ClaimSetting[]> = {
    success: true,
    data: [
      {
        id : 1,
        description : "Not Filed",
        parentId : undefined,
        groupType : "not-filed",
        enable : true,
        isEditable : false
      },
      {
        id : 2,
        description : "Filed",
        parentId : undefined,
        groupType : "filed",
        enable : true,
        isEditable : false
      },
      {
        id : 3,
        description : "Paymen Hold",
        parentId : undefined,
        groupType : "payment-hold",
        enable : true,
        isEditable : false
      },
      {
        id : 4,
        description : "Closed",
        parentId : undefined,
        groupType : "closed",
        enable : true,
        isEditable : false
      },
      {
        id : 5,
        description : "Not Acknowledge",
        parentId : 2,
        groupType : "filed",
        enable : true,
        isEditable : false
      },
      {
        id : 6,
        description : "Awaitng Response",
        parentId : 2,
        groupType : "filed",
        enable : true,
        isEditable : false
      },
      {
        id : 7,
        description : "Claim Types",
        parentId : undefined,
        groupType : "claim-types",
        enable : true,
        isEditable : false
      },
      {
        id : 8,
        description : "Claim Conditions",
        parentId : undefined,
        groupType : "claim-conditions",
        enable : true,
        isEditable : false
      },
      {
        id : 11,
        description : "Short Paid",
        parentId : 4,
        groupType : "closed",
        enable : true,
        isEditable : false
      },
      {
        id : 12,
        description : "Paid in Full",
        parentId : 4,
        groupType : "closed",
        enable : true,
        isEditable : false
      },
      {
        id : 13,
        description : "Requesting Info",
        parentId : 2,
        groupType : "filed",
        enable : true,
        isEditable : false
      },
      {
        id : 14,
        description : "Declined",
        parentId : 2,
        groupType : "filed",
        enable : true,
        isEditable : false
      },
      {
        id : 15,
        description : "Rebuttal Send",
        parentId : 2,
        groupType : "filed",
        enable : true,
        isEditable : false
      },
      {
        id : 16,
        description : "Approved",
        parentId : 2,
        groupType : "filed",
        enable : true,
        isEditable : false
      },
      {
        id : 17,
        description : "Payment Received",
        parentId : 2,
        groupType : "filed",
        enable : true,
        isEditable : false
      },
      {
        id : 18,
        description : "Clear Delivery",
        parentId : 4,
        groupType : "closed",
        enable : true,
        isEditable : false
      },
      {
        id : 19,
        description : "Cancelled",
        parentId : 4,
        groupType : "closed",
        enable : true,
        isEditable : false
      },
      {
        id : 20,
        description : "Freight Delivered",
        parentId : 4,
        groupType : "closed",
        enable : true,
        isEditable : false
      },
      {
        id : 100,
        description : "Test...",
        parentId : 5,
        groupType : "filed",
        enable : true,
        isEditable : false
      },
      {
        id : 101,
        description : "Example sub status",
        parentId : 5,
        groupType : "filed",
        enable : true,
        isEditable : false
      },
      {
        id : 102,
        description : "Example sub status",
        parentId : 6,
        groupType : "filed",
        enable : true,
        isEditable : false
      },
      {
        id : 103,
        description : "Example sub status",
        parentId : 6,
        groupType : "filed",
        enable : true,
        isEditable : false
      },
      {
        id : 104,
        description : "Example sub status",
        parentId : 11,
        groupType : "closed",
        enable : true,
        isEditable : false
      },
      {
        id : 105,
        description : "Example sub status",
        parentId : 11,
        groupType : "closed",
        enable : true,
        isEditable : false
      },
      {
        id : 106,
        description : "Example sub status",
        parentId : 12,
        groupType : "closed",
        enable : true,
        isEditable : false
      },
      {
        id : 107,
        description : "Example sub status",
        parentId : 12,
        groupType : "closed",
        enable : true,
        isEditable : false
      },
      {
        id : 108,
        description : "Example sub status",
        parentId : 13,
        groupType : "filed",
        enable : true,
        isEditable : false
      },
      {
        id : 109,
        description : "Short/Lost",
        parentId : 7,
        groupType : "claim-types",
        enable : true,
        isEditable : false
      },
      {
        id : 110,
        description : "Damaged",
        parentId : 7,
        groupType : "claim-types",
        enable : true,
        isEditable : false
      },
      {
        id : 111,
        description : "Short/Damaged",
        parentId : 7,
        groupType : "claim-types",
        enable : false,
        isEditable : false
      },
      {
        id : 112,
        description : "New",
        parentId : 8,
        groupType : "claim-conditions",
        enable : false,
        isEditable : false
      },
      {
        id : 113,
        description : "Used",
        parentId : 8,
        groupType : "claim-conditions",
        enable : true,
        isEditable : false
      },
      {
        id : 114,
        description : "Repared",
        parentId : 8,
        groupType : "claim-conditions",
        enable : true,
        isEditable : false
      } 
    ],
    error: undefined
  }

  constructor(private http: HttpClient) { }

  getAll(customerId: number): Observable<Response<ClaimSetting[]>> {
    const url = `${this.apiUrl}`;
    return this.http.get<Response<ClaimSetting[]>>(url, { headers: { customerId: customerId.toString() } });
  }

  createDocumentCategory(claimSetting: ClaimSetting): Observable<Response<ClaimSetting>> {
    const url = `${this.apiUrl}/post`;
    return this.http.post<Response<ClaimSetting>>(url, claimSetting);
  }

  getAllMock(): Observable<Response<ClaimSetting[]>> {
    return of(this.mockResponse);
  }

  createClaimSettingMock(claimSetting: ClaimSetting): Observable<Response<ClaimSetting[]>> {
    this.mockResponse.data?.push(claimSetting)
    return of(this.mockResponse);
  }

  getAllByParentIdMock(parentId: number): Observable<Response<ClaimSetting[]>> {
    const parentIdMockResponse: Response<ClaimSetting[]> = {
      success: true,
      data: [],
      error: undefined
    };
    parentIdMockResponse.data = this.mockResponse.data?.filter(item => item.parentId === parentId)
    return of(parentIdMockResponse)
  }
}
