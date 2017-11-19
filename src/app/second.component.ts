import { Component } from '@angular/core';


class schooltudents{
  id:number;
  name:string;
  school:string;
  age:number
}

@Component({
  selector: 'my-second',
  templateUrl: './second.component.html',

})
export class SecondComponent {
  value1="";
  value2="";
  title = 'app';
  name='mani';
  age='23';
  school='LKMS';
  result=0;
  calculate(){
    alert('10');
    this.result=parseInt(this.value1)+parseInt(this.value2)
  }
  students=[
    {id:1,name:"mani",school:"lon",age:24},
    {id:2,name:"mani1",school:"lon1",age:23},
    {id:3,name:"mani2",school:"lon2",age:24}
  ]
  cars=["audi","BMW","Ferrari"];
  inputName:string="";
  list:string[]=[];
  createList(){
    this.list.push(this.inputName);
    this.inputName="";
  }
  // student1:schooltudents;
  selectedSudent:string=null;
  selectStudent(){
    console.log(this.selectedSudent)
  };
  
}
