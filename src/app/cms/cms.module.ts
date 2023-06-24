import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CmsRoutingModule } from './cms-routing.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { GridComponent } from './pages/grid/grid.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { TestFormComponent } from './pages/test-form/test-form.component';


@NgModule({
  declarations: [
    TasksComponent,
    GridComponent,
    LayoutComponent,
    TestFormComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CmsModule { }
