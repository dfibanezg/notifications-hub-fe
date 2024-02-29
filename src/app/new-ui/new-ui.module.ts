import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

import { NewUiRoutingModule } from './new-ui-routing.module';
import { ClaimsListComponent } from './pages/claims-list/claims/claims-list/claims-list.component';
import { TableComponent } from './components/table/table.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { UniversalSearchComponent } from './components/universal-search/universal-search.component';
import { ClaimsFiltersComponent } from './pages/claims-list/claims/claims-filters/claims-filters.component';
import { ConfigureTableComponent } from './pages/claims-list/claims/configure-table/configure-table.component';
import { LoginPageComponent } from './pages/secure/login-page/login-page.component';
import { OulinedButtonComponent } from './components/outlined-button/outlined-button.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { ClaimsSettingsComponent } from './pages/claims-list/claims-settings/claims-settings.component';
import { OptionComponent } from './pages/claims-list/claims-settings/option/option.component';
import { LinkButtonComponent } from './components/link-button/link-button.component';
import { NewClaimSettingComponent } from './pages/claims-list/claims-settings/new-claim-setting/new-claim-setting.component';
import { UserListComponent } from './pages/user-settings/user-list/user-list.component';
import { StandardTableComponent } from './components/standard-table/standard-table.component';
import { InviteUserComponent } from './pages/user-settings/user-list/invite-user/invite-user.component';
import { InputComponent } from './components/input/input.component';
import { UserEditorComponent } from './pages/user-settings/user-editor/user-editor.component';
import { RoleListComponent } from './pages/user-settings/role-list/role-list.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { RoleItemComponent } from './pages/user-settings/role-list/role-item/role-item.component';
import { RoleEditorComponent } from './pages/user-settings/role-editor/role-editor.component';
import { ClaimsEditorComponent } from './pages/claims-editor/claims-editor.component';
import { MenuComponent } from './pages/claims-list/claims/menu/menu.component';
import { StepOneComponent } from './pages/claims-editor/step-one/step-one.component';
import { StepTwoComponent } from './pages/claims-editor/step-two/step-two.component';
import { StepThreeComponent } from './pages/claims-editor/step-three/step-three.component';
import { DetailsTableComponent } from './pages/claims-editor/details-table/details-table.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { ClaimsViewComponent } from './pages/claims-view/claims-view.component';
import { PanelFilledComponent } from './components/panel-filled/panel-filled.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { BadgeIconComponent } from './components/badge-icon/badge-icon.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { CommentsComponent } from './pages/claims-view/comments/comments.component';
import { UpdateStatusComponent } from './pages/claims-view/update-status/update-status.component';
import { UploadFileTileComponent } from './pages/claims-view/upload-file-tile/upload-file-tile.component';
import { EmailTileComponent } from './pages/claims-view/email-tile/email-tile.component';
import { ClaimsNewEmailComponent } from './pages/claims-new-email/claims-new-email.component';
import { SelectComponent } from './components/select/select.component';
import { EmailRecipientsComponent } from './pages/claims-new-email/email-recipients/email-recipients.component';
import { HttpClientModule } from '@angular/common/http';
import { ToggleGroupComponent } from './components/toggle-group/toggle-group.component';
import { PanelOutlinedComponent } from './components/panel-outlined/panel-outlined.component';
import { PartyPanelComponent } from './pages/claims-view/party-panel/party-panel.component';
import { SubMenuComponent } from './layout/sub-menu/sub-menu.component';
import { CompanyListComponent } from './pages/companies/company-list/company-list.component';
import { CustomerEditorComponent } from './pages/companies/customer-editor/customer-editor.component';
import { AllCompaniesComponent } from './pages/companies/all-companies/all-companies.component';
import { CompanyTableComponent } from './pages/companies/company-table/company-table.component';
import { CarriersListComponent } from './pages/companies/carriers-list/carriers-list.component';
import { CarriersTableComponent } from './pages/companies/carriers-table/carriers-table.component';
import { InsuranceTableComponent } from './pages/companies/insurance-table/insurance-table.component';
import { InsuranceListComponent } from './pages/companies/insurance-list/insurance-list.component';
import { CarrierEditorComponent } from './pages/companies/carrier-editor/carrier-editor.component';
import { InsuranceEditorComponent } from './pages/companies/insurance-editor/insurance-editor.component';
import { OverviewComponent } from './pages/companies/company-editor/overview/overview.component';
import { EditorComponent } from './pages/companies/company-editor/editor/editor.component';
import { ContactsComponent } from './pages/companies/company-editor/contacts/contacts.component';
import { ProductsComponent } from './pages/companies/company-editor/products/products.component';
import { LocationsComponent } from './pages/companies/company-editor/locations/locations.component';
import { ModalContactEditorComponent } from './pages/companies/company-editor/modal-contact-editor/modal-contact-editor.component';
import { ModalProductEditorComponent } from './pages/companies/company-editor/modal-product-editor/modal-product-editor.component';
import { ModalLocationEditorComponent } from './pages/companies/company-editor/modal-location-editor/modal-location-editor.component';
import { NewTaskComponent } from './pages/claims-view/new-task/new-task.component';
import { EmailTemplatesListComponent } from './pages/user-settings/email-templates-list/email-templates-list.component';
import { DocumentTileComponent } from './pages/user-settings/document-tile/document-tile.component';
import { LetterTemplatesListComponent } from './pages/user-settings/letter-templates-list/letter-templates-list.component';
import { EditorInsuranceCompanyComponent } from './pages/companies/insurance/editor-insurance-company/editor-insurance-company.component';
import { OverviewInsuranceCompanyComponent } from './pages/companies/insurance/overview-insurance-company/overview-insurance-company.component';
import { ContactsInsuranceCompanyComponent } from './pages/companies/insurance/contact-insurance-company/contact-insurance-company.component';
import { EditorCarrierCompanyComponent } from './pages/companies/carriers/editor-carrirer-company/editor-insurance-company.component';
import { OverviewCarrierCompanyComponent } from './pages/companies/carriers/overview-carrier-company/overview-carriere-company.component';
import { EmailTemplatesEditorComponent } from './pages/user-settings/email-templates-editor/email-templates-editor.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { LetterTemplatesEditorComponent } from './pages/user-settings/letter-templates-editor/letter-templates-editor.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ContactCarrierCompanyComponent } from './pages/companies/carriers/contact-carrier-company/contact-carrier-company.component';
import { CardsClaimsTotalComponent } from './pages/companies/cards-claims-total/cards-claims-total.component';
import { NotificationsComponent } from './layout/notifications/notifications.component';
import { CorporateAccountsComponent } from './pages/user-settings/corporate-accounts/corporate-accounts.component';
import { ReadOnlyComponent } from './pages/claims-view/read-only/read-only.component';
import { ContactListComponent } from './pages/companies/contact-list/contact-list.component';
import { ContactTableComponent } from './pages/companies/contact-table/contact-table.component';
import { ProductListComponent } from './pages/companies/product-list/product-list.component';
import { ProductTableComponent } from './pages/companies/product-table/product-table.component';
import { LocationListComponent } from './pages/companies/location-list/location-list.component';
import { LocationTableComponent } from './pages/companies/location-table/location-table.component';
import { ImpersonateComponent } from './layout/impersonate/impersonate.component';
import { DocumentCategoryComponent } from './pages/claims-list/claims-settings/document-category/document-category.component';
import { ClaimsNotFiledComponent } from './pages/claims-list/claims-settings/claims-not-filed/claims-not-filed.component';
import { DocumentRequirementComponent } from './pages/claims-list/claims-settings/document-requirement/document-requirement.component';
import { FiledClaimsComponent } from './pages/claims-list/claims-settings/filed-claims/filed-claims.component';
import { ClaimsSettingsSubCardComponent } from './pages/claims-list/claims-settings/claims-settings-sub-card/claims-settings-sub-card.component';
import { ClosedClaimsComponent } from './pages/claims-list/claims-settings/closed-claims/closed-claims.component';
import { AutomationsComponent } from './pages/claims-list/claims-settings/automations/automations.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClaimsListComponent,
    TableComponent,
    LayoutComponent,
    UniversalSearchComponent,
    ClaimsFiltersComponent,
    ConfigureTableComponent,
    LoginPageComponent,
    OulinedButtonComponent,
    PrimaryButtonComponent,
    ClaimsSettingsComponent,
    OptionComponent,
    LinkButtonComponent,
    NewClaimSettingComponent,
    UserListComponent,
    StandardTableComponent,
    InviteUserComponent,
    InputComponent,
    UserEditorComponent,
    RoleListComponent,
    UserSettingsComponent,
    RoleItemComponent,
    RoleEditorComponent,
    ClaimsEditorComponent,
    MenuComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    DetailsTableComponent,
    TopBarComponent,
    ClaimsViewComponent,
    PanelFilledComponent,
    DateInputComponent,
    PanelOutlinedComponent,
    PartyPanelComponent,
    BadgeIconComponent,
    TextAreaComponent,
    CommentsComponent,
    UpdateStatusComponent,
    UploadFileTileComponent,
    EmailTileComponent,
    ClaimsNewEmailComponent,
    SelectComponent,
    EmailRecipientsComponent,
    ToggleGroupComponent,
    SubMenuComponent,
    CompanyListComponent,
    CustomerEditorComponent,
    AllCompaniesComponent,
    CompanyTableComponent,
    CarriersListComponent,
    CarriersTableComponent,
    InsuranceTableComponent,
    InsuranceListComponent,
    CarrierEditorComponent,
    InsuranceEditorComponent,
    OverviewComponent,
    EditorComponent,
    ContactsComponent,
    ProductsComponent,
    LocationsComponent,
    ModalContactEditorComponent,
    ModalProductEditorComponent,
    ModalLocationEditorComponent,
    NewTaskComponent,
    EmailTemplatesListComponent,
    DocumentTileComponent,
    LetterTemplatesListComponent,
    EditorInsuranceCompanyComponent,
    OverviewInsuranceCompanyComponent,
    ContactsInsuranceCompanyComponent,
    EditorCarrierCompanyComponent,
    OverviewCarrierCompanyComponent,
    ContactCarrierCompanyComponent,
    EmailTemplatesEditorComponent,
    TextEditorComponent,
    LetterTemplatesEditorComponent,
    CalendarComponent,
    CardsClaimsTotalComponent,
    NotificationsComponent,
    CorporateAccountsComponent,
    ReadOnlyComponent,
    ImpersonateComponent,
    ContactListComponent,
    ContactTableComponent,
    ProductListComponent,
    ProductTableComponent,
    LocationListComponent,
    LocationTableComponent,
    DocumentCategoryComponent,
    ClaimsNotFiledComponent,
    DocumentRequirementComponent,
    FiledClaimsComponent,
    ClaimsSettingsSubCardComponent,
    ClosedClaimsComponent,
    AutomationsComponent
  ],
  imports: [
    CommonModule,
    NewUiRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatTableModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatChipsModule,

    HttpClientModule,
    AngularEditorModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule
  ]
})
export class NewUiModule { }
