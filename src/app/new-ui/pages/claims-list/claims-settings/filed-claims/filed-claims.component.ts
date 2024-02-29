import { Component } from '@angular/core';
import { ClaimSettingService } from 'src/app/new-ui/services/claim-setting.service';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ClaimSetting } from 'src/app/models/ClaimSetting';

@Component({
  selector: 'filed-claims',
  templateUrl: './filed-claims.component.html',
  styleUrls: ['./filed-claims.component.scss']
})
export class FiledClaimsComponent {
  filedClaims: ClaimSetting[] = [];
  filedClaimsSubStatus: ClaimSetting[] = [];

  constructor(
    private claimSettingService: ClaimSettingService
    ) {
  }

  ngOnInit() {
    this.loadFiledClaims();
  }

  loadFiledClaims() {
    const customerId = 123; // Todo: Replace with customerId
    this.claimSettingService.getAllByParentIdMock(2)
      .pipe(
        tap(response => {
          if (!response.success) {
            console.error(`Error obtaining document categories: ${response.error}`);
          }
        }),
        catchError(error => {
          console.error(`Network Error:${error}`);
          return EMPTY;
        })
      )
      .subscribe(response => {
        if (response.success) {
          this.filedClaims = response.data || [];
        }
      });
  }

  loadFiledClaimsSubStatus(parentId: number) : string[]  {
    const customerId = 123; // Todo: Replace with customerId
    let subStatusList : string[] = [];
    this.claimSettingService.getAllByParentIdMock(parentId)
      .pipe(
        tap(response => {
          if (!response.success) {
            console.error(`Error obtaining document categories: ${response.error}`);
          }
        }),
        catchError(error => {
          console.error(`Network Error:${error}`);
          return EMPTY;
        })
      )
      .subscribe(response => {
        if (response.success) {
          this.filedClaimsSubStatus = response.data || [];
        }
      });

      this.filedClaimsSubStatus.forEach(element => {
        subStatusList.push(element.description)
      });      

      return subStatusList;
  }
  
}
