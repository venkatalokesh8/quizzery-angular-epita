import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionsComponent } from './options/options.component'
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuizStartComponent } from './quiz-start/quiz-start.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


const routes: Routes =  [

{path:'',component:LoginComponent},
{path:'start',component:QuizStartComponent}, 
{path:'options',component:OptionsComponent}, 
{path:'questions',children:[
  {path:'',component:AddQuestionComponent},  
  {path:'edit/:id',component:AddQuestionComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
