import { Component, OnInit } from '@angular/core';
import {TreeService} from "./service/tree.service";
import * as moment from "moment";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [TreeService]
})
export class MainComponent implements OnInit {

  protected tree:any = null;
  protected layout:any = null;
  protected matches:any = null;
  protected error:any = null;
  protected selectedLeague:any = null;
  showData:any;


  constructor(private treeService:TreeService) { }

  ngOnInit() {
    this.geTree();
    this.getOddsLayout();
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
          res =>self.layout = res.data,
          err =>  self.error =  typeof err == 'object' ? err : JSON.parse(err || '{}'));
  }


  getGrid(id) {
    var self = this;
    this.treeService.getMatches(id).subscribe(
        res =>self.converterRes(res),
        err =>  self.error =  typeof err == 'object' ? err : JSON.parse(err || '{}'));
  }

  selectedItem(data) {
    this.getGrid(data.id);
  }


  converterRes(res){
    this.matches = res.data;

    for(var i in this.matches) {
      this.matches[i].data = this.generateDataByMatch(this.matches[i]);
    }
  }

  private generateDataByMatch(match){
    var data = {};
      for(var j in this.layout) {
        if(match.odds[this.layout[j].index]) {
          if(this.layout[j].index == 'drawNoBet') {
            data['01'] = match.odds[this.layout[j].index][0];
            data['02'] = match.odds[this.layout[j].index][1];
          } else {
            data  =  Object.assign(this.getKeyInArray(this.layout[j].odds, match.odds[this.layout[j].index]), data);
          }

        }

      }
    return data;
  };

  getKeyInArray(source, arr) {
    var result = {};
    for(var i in source) {
      result[source[i].name] = arr.find(function (item) {
        return item.name.toLowerCase() == source[i].name.toLowerCase()
      });
    }
    return result;
  }
}
