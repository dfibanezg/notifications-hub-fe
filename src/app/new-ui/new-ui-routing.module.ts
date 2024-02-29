import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutComponent } from "./layout/layout/layout.component";
import { ClaimsListComponent } from "./pages/claims-list/claims/claims-list/claims-list.component";
import { LoginPageComponent } from "./pages/secure/login-page/login-page.component";
import { ClaimsSettingsComponent } from "./pages/claims-list/claims-settings/claims-settings.component";
import { UserSettingsComponent } from "./pages/user-settings/user-settings.component";
import { RoleEditorComponent } from "./pages/user-settings/role-editor/role-editor.component";
import { ClaimsEditorComponent } from "./pages/claims-editor/claims-editor.component";
import { ClaimsViewComponent } from "./pages/claims-view/claims-view.component";
import { ClaimsNewEmailComponent } from "./pages/claims-new-email/claims-new-email.component";
import { CompanyListComponent } from "./pages/companies/company-list/company-list.component";
import { CustomerEditorComponent } from "./pages/companies/customer-editor/customer-editor.component";
import { AllCompaniesComponent } from "./pages/companies/all-companies/all-companies.component";
import { CarriersListComponent } from "./pages/companies/carriers-list/carriers-list.component";
import { InsuranceListComponent } from "./pages/companies/insurance-list/insurance-list.component";
import { CarrierEditorComponent } from './pages/companies/carrier-editor/carrier-editor.component';
import { InsuranceEditorComponent } from "./pages/companies/insurance-editor/insurance-editor.component";
import { EditorComponent } from "./pages/companies/company-editor/editor/editor.component";
import { EditorInsuranceCompanyComponent } from "./pages/companies/insurance/editor-insurance-company/editor-insurance-company.component";
import { EditorCarrierCompanyComponent } from "./pages/companies/carriers/editor-carrirer-company/editor-insurance-company.component";
import { EmailTemplatesEditorComponent } from "./pages/user-settings/email-templates-editor/email-templates-editor.component";
import { LetterTemplatesEditorComponent } from "./pages/user-settings/letter-templates-editor/letter-templates-editor.component";
import { ReadOnlyComponent } from "./pages/claims-view/read-only/read-only.component";
import { ContactListComponent } from "./pages/companies/contact-list/contact-list.component";
import { ProductListComponent } from "./pages/companies/product-list/product-list.component";
import { LocationListComponent } from "./pages/companies/location-list/location-list.component";



const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "claims", redirectTo: 'claims/claims-list' },
      { path: "claims/claims-list", component: ClaimsListComponent },
      { path: "claims/claims-editor", component: ClaimsEditorComponent },
      { path: "claims/claims-view", component: ClaimsViewComponent },
      { path: "claims/claims-view/read-only", component: ReadOnlyComponent },
      { path: "claims/claims-settings", component: ClaimsSettingsComponent },
      { path: "claims/claims-new-email", component: ClaimsNewEmailComponent },
      { path: "user-settings/email-template-editor", component: EmailTemplatesEditorComponent },
      { path: "user-settings/letter-template-editor", component: LetterTemplatesEditorComponent },
      { path: "user-settings", component: UserSettingsComponent },
      { path: "user-settings/role-editor", component: RoleEditorComponent },
      { path: 'company-list', component: CompanyListComponent },
      { path: 'customer-editor', component: CustomerEditorComponent },
      { path: 'all-companies', component: AllCompaniesComponent },
      { path: 'carrier-list', component: CarriersListComponent },
      { path: 'insurance-list', component: InsuranceListComponent },
      { path: 'carrier-editor', component: CarrierEditorComponent },
      { path: 'insurance-editor', component: InsuranceEditorComponent },
      { path: 'company/editor', component: EditorComponent },
      { path: 'company/insurance-editor', component: EditorInsuranceCompanyComponent},
      { path: 'company/carrier-editor', component: EditorCarrierCompanyComponent },
      { path: 'company/contact-list', component: ContactListComponent },
      { path: 'company/product-list', component: ProductListComponent },
      { path: 'company/location-list', component: LocationListComponent },
      // { path: "**", redirectTo: "claims-list" },

    ],
  },
  {
    path: "auth",
    children: [
      { path: "login", component: LoginPageComponent },
      { path: "recover-password", component: LoginPageComponent },
      { path: "**", redirectTo: "login" },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class NewUiRoutingModule { }
