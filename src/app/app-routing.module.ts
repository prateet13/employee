import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:"home",
    loadChildren:()=>import("./listing/listing.module").then(m => m.ListingModule)
  },
  {
    path:"user",
    loadChildren:()=>import("./user/user.module").then(m => m.UserModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
