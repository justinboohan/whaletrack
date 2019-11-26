import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'sighting', loadChildren: './sighting/sighting.module#SightingPageModule' },
  { path: 'beaching', loadChildren: './beaching/beaching.module#BeachingPageModule' },
  { path: 'reporting', loadChildren: './reporting/reporting.module#ReportingPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'whales', loadChildren: './whales/whales.module#WhalesPageModule' },
  { path: 'whales/:id', loadChildren: './whales/whale/whale.module#WhalePageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
