import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'outlined-button',
  templateUrl: './outlined-button.component.html',
  styleUrls: ['./outlined-button.component.scss']
})
export class OulinedButtonComponent {
  
  @Input() color ?:  'primary' ;
  @Input() text :  string  = "";
  @Input() toggleable: boolean = true;
  //@Output() click = new  EventEmitter<boolean>();
  public active: boolean = false;

  handleClick(){
    this.active = !this.active;
    //this.click.emit(this.active);
  }

}
