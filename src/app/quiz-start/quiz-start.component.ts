import { Component, OnInit } from '@angular/core';
import { Question } from '../add-question/add-question';
import { Options } from '../options/options';
import { QuestionService } from '../add-question/add-question.service';
import { OptionsService } from '../options/options.service';
import { Quizmodel } from './quiz-start';
import { tick } from '@angular/core/testing';



@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css']
})
export class QuizStartComponent implements OnInit {
  optionRef: Options;

  constructor(private questionService : QuestionService,private optionService : OptionsService) { }

  id : number;
  questions: Question[] = [];
  choices: Options[] =[];
  choice : Options;
  quizModel : Quizmodel[] =[];
  optQuestionId : number;
  questionRefId : number;
  i: number = 0;
quizlength: number; 
question: String="";
selectedvalue: String;
option: Options[]=[];
selectedlanques: any[];
  ngOnInit() {
  }

  prepareQuiz() {
    
    this.questionService.getQuestion().subscribe((data : Question[]) => {
       this.questions = data;
   
      for (let entry of this.questions) {
        this.optionService.getChoices(entry.id).subscribe((data) => {
          data.forEach(choice => {
            this.choices.push(choice)
            var quizModel ={
              ID : entry.id,
              question : entry.questionContent,
              choiceList : this.choices
            }
            
            this.quizModel.push(quizModel);
            
              
            
          })
        })
    }
      })
      
    }

    next() {   
      ++this.i;
      this.question = this.quizModel[this.i].question;
      if (this.quizModel[this.i].ID==this.quizModel[this.i].choiceList[this.i].questionRef) {
        this.option = this.quizModel[this.i].choiceList;
      }
     
    }
    previous() {
      --this.i;
      this.question = this.quizModel[this.i].question;
      if (this.quizModel[this.i].ID===this.quizModel[this.i].choiceList[this.i].questionRef) {
        this.option = this.quizModel[this.i].choiceList;
      }
    }




    }

  
