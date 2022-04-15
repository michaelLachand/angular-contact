import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactManagerComponent} from "./components/contact-manager/contact-manager.component";
import {AddContactComponent} from "./components/add-contact/add-contact.component";
import {EditContactComponent} from "./components/edit-contact/edit-contact.component";
import {DetailsContactComponent} from "./components/details-contact/details-contact.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path:'', redirectTo: 'contacts/admin', pathMatch: 'full' },
  { path: 'contacts/admin', component: ContactManagerComponent },
  { path: 'contacts/add', component: AddContactComponent },
  { path: 'contacts/edit/:contactId', component: EditContactComponent },
  { path: 'contacts/details/:contactId', component: DetailsContactComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
