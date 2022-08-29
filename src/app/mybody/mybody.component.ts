import { Component } from "@angular/core";

@Component({
  selector: 'app-mybody',
  templateUrl: './mybody.component.html'
})
export class MyBodyComponent {
  v:string =""
  addItem(newItem: string) {
    this.v =newItem;
  }
}
