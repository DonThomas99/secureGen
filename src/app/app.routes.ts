import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';

export const routes: Routes = [
    {path:'',component:PasswordGeneratorComponent}
];
