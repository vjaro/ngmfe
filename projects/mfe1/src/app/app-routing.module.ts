import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'functions',
    loadChildren: () => import('./functions/functions.module')
      .then(m => m.FunctionsModule)
  },
  { path: '', redirectTo: 'functions', pathMatch: 'full' },
  { path: '**', redirectTo: 'functions' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
