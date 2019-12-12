import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/add-question/add-question';
import { QuestionService } from 'src/app/add-question/add-question.service';
import {Router} from "@angular/router";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OptionsComponent } from '../options/options.component';
import { NgForm } from '@angular/forms';
import { OptionsService } from '../options/options.service';
import { Options } from '../options/options';

@Component({
  selector: 'app-question',
  templateUrl: 'add-question.component.html',
  styleUrls: ['add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  title : string = "QUIZZERY"
  questions: Question[] = [];
  id: number;
  optionId:number;
  questionRef:number;
  question : Question = new Question(); 
  option : Options = new Options();
  questionOptions:[]
  constructor(private questionService : QuestionService,private router : Router,private dialog: MatDialog,private optionService : OptionsService) { }
  
  ngOnInit() {
   
  }
  
 
  /*save(){
    this.questionService.save(this.question).subscribe((res:Question) => {
      this.question = res;
      console.log(this.question.id);
      this.id=this.question.id;
      this.router.navigate(['/options', this.id,this.option1]);
      
    });
  }*/
      
  addOption(optionIndex){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "300px";
    dialogConfig.data = { optionIndex };
    this.dialog.open(OptionsComponent, dialogConfig)
  }
  
  onDeleteOption(i:number){
    this.questionService.options.splice(i,1);
  }

  saveORupdate(form:NgForm){
    this.question = form.value;
    var postdata ={
      id : "",
      ...this.question
      

    }
    console.log(postdata);
    this.questionService.save(postdata).subscribe((res:Question) => {
      this.question = res;
      this.id=this.question.id; 
      this.questionService.options.forEach(element => {
        console.log("option loop::"+element),
        element.questionRef =this.id
        this.optionService.save(element).subscribe((res:Options) => {
          this.option = res;
          console.log("response OPtion"+this.option.optionId);
          
          this.clear()
      },()=>{  console.log("freeing"), this.questionService=null });
      });
    });
         
    }

    clear(){
      console.log("freeing"), this.questionService.options=[];
      this.question.questionContent=""
    }
  
    questionList(){
      this.questionService.getQuestion().subscribe((data : Question[]) => {
        this.questions = data;
        console.log(this.questions);
    })
  }  

  deleteQuestion(questionId:number){
    console.log(questionId);
    this.questionService.deleteQuestion(questionId).subscribe(
      () =>{ console.log("Question Deleted")}
    
    )}
  

}