import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PredictComponent } from './components/pages/predict/predict.component';
import { ResultComponent } from './components/pages/result/result.component';
import { PeriodsTrackerComponent } from './components/pages/periods-tracker/periods-tracker.component';
import { CalorieTrackerComponent } from './components/pages/calorie-tracker/calorie-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PredictComponent,
    ResultComponent,
    PeriodsTrackerComponent,
    CalorieTrackerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
