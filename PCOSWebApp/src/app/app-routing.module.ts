import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictComponent } from './components/sub-components/predict/predict.component';
import { ResultComponent } from './components/sub-components/result/result.component';

const routes: Routes = [
  { path: '', redirectTo: '/predict', pathMatch: 'full' },
  { path: 'predict', component: PredictComponent },
  { path: 'result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
