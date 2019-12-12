import { Component, OnInit } from '@angular/core';
import { Options } from 'src/app/options/options';
import { OptionsService } from 'src/app/options/options.service';
import {Router} from "@angular/router"
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { QuestionService } from '../add-question/add-question.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
 /* title : string = "QUIZZERY";
  questionRef : number;
  optionRef : number;
  
  options : Options = new Options(); 
  

  constructor(private optionsService : OptionsService,private router : Router,private route: ActivatedRoute) { }
  

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.username);
      this.questionRef = params.questionRef;
      this.optionRef = params.optionRef;
    });
  }
 

  saveOptions(){
    this.options.questionRef=this.questionRef;
    this.optionsService.save(this.options).subscribe((res:Options) => {
      this.options = res;
      console.log(this.options);
      this.router.navigate(['/options', this.questionRef]);
    });
      
  }*/

  constructor(private optionsService : OptionsService,public dialogRef: MatDialogRef<OptionsComponent>,private questionService : QuestionService) { }
  
  options : Options = new Options;
  ngOnInit() {
    
    
  }
  

  onSubmit(form:NgForm){
    console.log(form.value)
    this.questionService.options.push(form.value);
    this.dialogRef.close;
  }
  
}