import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewClaimSettingComponent } from '../new-claim-setting/new-claim-setting.component';
import { DocumentCategoryService } from 'src/app/new-ui/services/document-category.service';
import { ClaimSettingService } from 'src/app/new-ui/services/claim-setting.service';
import { catchError, tap } from 'rxjs/operators';
import { DocumentCategory } from 'src/app/models/DocumentCategory';
import { EMPTY } from 'rxjs';
import { ParentOptionSetting } from 'src/app/constans/parent-option-claim-setting';
import { ClaimSetting } from 'src/app/models/ClaimSetting';

@Component({
  selector: 'claims-not-filed',
  templateUrl: './claims-not-filed.component.html',
  styleUrls: ['./claims-not-filed.component.scss']
})
export class ClaimsNotFiledComponent {
  documentCategories: DocumentCategory[] = [];
  claimTypes: ClaimSetting[] = [];
  claimConditions: ClaimSetting[] = [];

  constructor(public dialog: MatDialog,
    private documentCategoryService: DocumentCategoryService,
    private claimSettingService: ClaimSettingService) {
  }

  ngOnInit() {
    this.loadDocumentCategories();
    this.loadClaimTypes();
    this.loadClaimConditions();
  }

  loadDocumentCategories() {
    const customerId = 123; // Todo: Replace with customerId
    this.documentCategoryService.getAllMock(customerId)
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
          this.documentCategories = response.data || [];
        }
      });
  }

  createCategory(caterogyTitle: string): void {

    let newCategory: DocumentCategory = {
      Title: caterogyTitle,
      IsPrivate: false,
      IsRequired: false,
      IsRecomended: false,
      IsEditable: true
    };

    this.documentCategoryService.createDocumentCategoryMock(newCategory)
    .pipe(
      tap(response => {
        if (!response.success) {
          console.error(`Error posting the new category: ${response.error}`);
        }
      }),
      catchError(error => {
        console.error(`Network Error:${error}`);
        return EMPTY;
      })
    )
    .subscribe(response => {
      if (response.success) {
        console.log('Category created successfully:', response.data);
      }
    });
  }

  loadClaimTypes() {
    const customerId = 123; // Todo: Replace with customerId
    this.claimSettingService.getAllByParentIdMock(7)
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
          this.claimTypes = response.data || [];
        }
      });
  }

  loadClaimConditions() {
    const customerId = 123; // Todo: Replace with customerId
    this.claimSettingService.getAllByParentIdMock(8)
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
          this.claimConditions = response.data || [];
        }
      });
  }

  openNewClaimSetting(showColorSelect: boolean, title: string, label: string) {
    const dialogRef = this.dialog.open(NewClaimSettingComponent, {},);
    dialogRef.componentInstance.showColorSelect = showColorSelect;
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.label = label;
    

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'save') {
        switch (title) {
          case ParentOptionSetting.documentCategory:
            this.createCategory(dialogRef.componentInstance.save());
            this.loadDocumentCategories()
            break;
          case ParentOptionSetting.claimType:
            this.saveData("claimType " + dialogRef.componentInstance.save());
            break;
          case ParentOptionSetting.claimCondition:
            this.saveData("claimCondition " + dialogRef.componentInstance.save());
            break;
        }
      }
    });
  }
  
  saveData(text:string): void {
    console.log(`Saving data from NewClaimSettingComponent: ${text}`);
  }

}
