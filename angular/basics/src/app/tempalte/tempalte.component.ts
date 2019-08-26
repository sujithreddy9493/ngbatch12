import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-tempalte',
  templateUrl: './tempalte.component.html',
  styleUrls: ['./tempalte.component.css']
})
export class TempalteComponent implements OnInit {
  
  title = 'Sujithreddy';
  S = 'by @apple';

  constructor() { }

  ngOnInit() {
  }
  formDetails(d){
   console.log(d);
  }
  

}
