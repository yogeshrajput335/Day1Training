import { Component } from "@angular/core";

@Component({
  selector: 'app-myhead',
  templateUrl: './myhead.component.html'
})
export class MyHeadComponent {
  headText = "ABC Compony pvt ltd"

  onChne(){
    if(this.headText === "New Company"){
      this.headText = "Other Company"
    } else{
      this.headText = "New Company"
    }
  }

  v:string =""
  addItem(newItem: string) {
    this.v =newItem;
  }

}
