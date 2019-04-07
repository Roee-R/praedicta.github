import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Praedicta';
  isltr = true;
  options = [
    {id: 1, name: 'Yosi', isNew:''},
    {id: 2, name: 'Shelley', isNew:''},
    {id: 3, name: 'Igor', isNew:''}
  ];
  
  Switch() {
    if(this.isltr){
      document.body.style.direction='rtl';
      this.isltr=!this.isltr;
    }
    else{
      document.body.style.direction='ltr';
      this.isltr=!this.isltr;
    }
  }

  newText(text){
     const textExist = this.options.filter((textObj)=>textObj.name.toLowerCase()===text.toLowerCase())
    if(textExist.length>0){
      this.options = this.options.map((option)=>{
        if(option.name.toLowerCase()===text.toLowerCase() && option.isNew==='חדש')
          return {...option, isNew:""}
        else
          return option  
      })
    }
    else if(text.length>0 && textExist.length===0){
      const size = this.options.length+1;
      this.options.unshift({id:size, name:text, isNew:'חדש'});
    }
  }

  openTab($event){
    if($event===1){
      let e = <HTMLElement>document.querySelector('.main');
      e.style.display="flex";
    }
    else{
      let e = <HTMLElement>document.querySelector('.main');
      e.style.display="none";
    }
  }

}
