import { SettingComponent } from './setting/setting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './form/editor/editor.component';
import { FormComponent } from './form/form/form.component';

import { FirstpageComponent } from './firstpage/firstpage.component';
import { EntitiesComponent } from './entities/entities.component';


import { TemplatesComponent } from './templates/templates.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'', redirectTo:'dash',pathMatch:'full'},
  { path: "dash", component: FirstpageComponent, data: { title: 'Dashboard' } },
  { path: "entity/:id", component: EntitiesComponent, data: { title: 'Entity' } },
  { path: 'login', component: LoginComponent },
  { path: "form", component: FormComponent, data: { title: 'ADD Data ' } },
  { path: "editor", component: EditorComponent },
  { path: "settings", component: SettingComponent , data: { title: 'Settings' }}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
