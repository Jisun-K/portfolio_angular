import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  // { path: '**', component: PageNotFoundComponent },

  // {path: 'hero/:id', component: HeroDetailComponent},
  // {
  //   path: 'first-component',
  //   title: 'First component',
  //   component: FirstComponent,  // this is the component with the <router-outlet> in the template
  //   children: [
  //     {
  //       path: 'child-a',  // child route path
  //       title: resolvedChildATitle,
  //       component: ChildAComponent,  // child route component that the router renders
  //     },
  //   ],
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
