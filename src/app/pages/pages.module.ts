import { NgModule } from '@angular/core';
import {NbButtonModule, NbCardModule, NbMenuModule, NbStepperModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbButtonModule,
    NbCardModule,
    NbStepperModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
