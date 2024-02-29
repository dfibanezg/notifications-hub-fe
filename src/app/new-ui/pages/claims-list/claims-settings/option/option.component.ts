import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'claims-settings-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit{
  
  public componentId: string = '';
  @Input() text: string = '';

  @Input() checked: boolean = false;

  @Input() showEditButtons: boolean = false;
  @Input() showColorSelect: boolean = true;

  public colors = ['text-green-200','text-purple-200','text-red-200','text-blue-200'];
  public selectedColor: string = 'text-green-200';

  ngOnInit(): void {
    
  }
}

