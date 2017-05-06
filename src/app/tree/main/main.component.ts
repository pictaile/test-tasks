import { Component, OnInit } from '@angular/core';
import {TreeService} from "./service/tree.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [TreeService]
})
export class MainComponent implements OnInit {

  protected tree:any = null;
  protected layout:any = null;
  protected error:any = null;

  constructor(private treeService:TreeService) { }

  ngOnInit() {
    this.getData();
  }


  getData() {
    if(!this.tree) {
      this.geTree();
    }
    if(!this.layout) {
      this.getOddsLayout();
    }
  }

  geTree() {
    var self = this;
    this.treeService.getTree().subscribe(
            res => self.tree = res.data,
            err =>  self.error =  typeof err == 'object' ? err : JSON.parse(err || '{}'));
  }

  getOddsLayout () {
    var self = this;
      this.treeService.getLayout().subscribe(
          res =>self.layout = res,
          err =>  self.error =  typeof err == 'object' ? err : JSON.parse(err || '{}'));
  }


  selectedItem(data) {

  }

}
