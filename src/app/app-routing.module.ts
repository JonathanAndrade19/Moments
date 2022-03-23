import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirsComponentComponent } from './components/firs-component/firs-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {path:'', component: FirsComponentComponent},
  {path:'list', component: ListRenderComponent},
  {path:'two-way-binding', component: TwoWayBindingComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
