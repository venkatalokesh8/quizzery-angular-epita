import { Options } from '../options/options';

export class Quizmodel {

    ID :number;
    question:String;
    choiceList:Options[];
    
   
    constructor(  ID :number, question:String,
    choiceList:Options[]) {
    this.ID=ID;
    this.choiceList=choiceList;
    }
   }