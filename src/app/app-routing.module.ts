import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  // 一番初めに表示されるルートモジュールに関しては path: ''で設定
  { path: '', component: SearchComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'result', component: ResultComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
