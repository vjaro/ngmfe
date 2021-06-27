import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: "home",
    component: MainComponent
  },
  {
    path: 'mfe1',
        loadChildren: () =>
            loadRemoteModule({
                remoteEntry: 'http://localhost:4300/remoteEntry.js',
                remoteName: 'mfe1',
                exposedModule: './Module'
            })
            .then(m => m.FunctionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
