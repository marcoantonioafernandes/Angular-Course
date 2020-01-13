import { Component, Input } from '@angular/core';

@Component({
    //É interessante sempre prefixar os componentes, colocar o nome da empresa, etc.
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent{
  @Input() description = "";
  @Input() url = "";
}