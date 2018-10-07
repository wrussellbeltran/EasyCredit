import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent} from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailRequestsComponent } from './components/requests/detail-requests/detail-requests.component';
import { CreateRequestsComponent } from './components/requests/create-requests/create-requests.component';
import { CreditHistoryComponent } from './components/credit-history/credit-history.component';

const appRoutes: Routes = [
	{path: '', component: RegisterComponent},
	{path: 'home', component: HomeComponent},
	{path: 'logout/:sure', component: RegisterComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'profile', component: ProfileComponent},
	{path: 'requests', component: DetailRequestsComponent},
	{path: 'create-request', component: CreateRequestsComponent},
	{path: 'credit-history', component: CreditHistoryComponent},
	{path: '**', component: RegisterComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);