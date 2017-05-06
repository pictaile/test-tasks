import { Component, OnInit } from '@angular/core';
import {MainComponent} from "../../admin/main/main.component";
import { LocationComponent } from "../../general/location/location.component"
import { LocationService } from "../../general/location/service/location.service";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
  providers: [LocationService]
})
export class PaginatorComponent extends MainComponent  {

  /**
   *
   * @type {{id: string, page: number, limit: number}}
   */
  protected request:any = {
    sorttype:'asc',
    sortby: 0,
    id: '',
    page: 1,
    limit: 15
  };

  /**
   *
   * @type {number}
   */
  protected currentPage:number = 1;

  /**
   *
   * @type {number}
   */
  protected itemsPerPage:number = 15;

  /**
   *
   * @type {number}
   */
  protected totalItems:number = 0;

  /**
   *
   * @type {number}
   */
  protected pageSize:number = 15;

  /**
   *
   * @type {string}
   */
  protected noOrderMessage:string = "Данные для отображения в таблице отсутствуют.";

  /**
   *
   * @param locationService
   */
  constructor(locationService:LocationService) {
    super(locationService);
  }

  /**
   * @method changePage
   * @param val
   * @returns {void}
   */
  protected changePage(val) {
    this.itemsPerPage = val;
    this.request.limit = this.itemsPerPage;
    this.request.page = this.currentPage;
    this.getData();
  }

  /**
   *
   * @param item
   * @returns {void}
   */
  next(item) {
    this.currentPage = item;
    this.request.page = item;
    this.getData();
  }

  /**
   *
   * @param data
   * @param type
   * @returns {void}
   */
  changeFilter(data, type) {
    this.request[type] = data.id;
    this.message = '';
    this.request.page = 1;
    this.currentPage = 1;
    this.getData();
  }

  sort(val) {

    this.request.sorttype = this.request.sortby == val && this.request.sorttype == 'asc' ? 'desc' : 'asc';

    this.changeFilter({id: val}, 'sortby');
  }


}