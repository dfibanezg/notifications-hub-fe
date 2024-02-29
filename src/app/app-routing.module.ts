import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'new-ui',
    loadChildren: () => import('./new-ui/new-ui.module').then(m => m.NewUiModule)
  },
  {
    path:'**', redirectTo: 'new-ui'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
