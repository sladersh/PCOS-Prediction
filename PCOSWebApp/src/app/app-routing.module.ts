import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PredictComponent } from './components/pages/predict/predict.component';
import { ResultComponent } from './components/pages/result/result.component';
import { PeriodsTrackerComponent } from './components/pages/periods-tracker/periods-tracker.component';
import { CalorieTrackerComponent } from './components/pages/calorie-tracker/calorie-tracker.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'predict-pcos', component: PredictComponent },
  { path: 'result', component: ResultComponent },
  { path: 'periods-tracker', component: PeriodsTrackerComponent },
  { path: 'calorie-tracker', component: CalorieTrackerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
