import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {EditorComponent} from './editor/editor.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'edit',
        component: EditorComponent
      }
    ])
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
