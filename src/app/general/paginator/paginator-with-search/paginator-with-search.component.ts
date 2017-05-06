import { Component, OnInit } from '@angular/core';
import {PaginatorComponent} from "../paginator.component";
import { LocationService } from "../../location/service/location.service";
import { SearchModelService } from "../../search/model/search-model.service";

@Component({
    selector: 'app-paginator-with-search',
    templateUrl: './paginator-with-search.component.html',
    styleUrls: ['./paginator-with-search.component.css'],
    providers: [LocationService]
})
export class PaginatorWithSearchComponent extends PaginatorComponent {

    /**
     *
     * @type {boolean}
     */
    protected emptySearch:boolean;

    /**
     *
     * @type {{search_param: string}}
     */
    protected searchOptions:any = {
        search_param: '',
        searchCount: 0
    };

    protected onProccess:any;
    protected onReset:any;
    protected onSearch:any;

    /**
     *
     * @type {Array}
     */
    protected collection:any = [];

    /**
     *
     * @param locationService
     * @param searchModelService
     */
    constructor(
                locationService:LocationService,
                protected searchModelService:SearchModelService) {
        super(locationService);
    }

    /**
     * @method searchSubscribes
     * @returns {void}
     */
    protected searchSubscribes() {
        this.processSubscribe();
        this.resetSubscribe();
        this.searchSubscribe();
    }

    /**
     * @method searchSubscribe
     * @returns {PaginatorWithSearchComponent}
     */
    private searchSubscribe() {
        let self = this;

        this.onSearch = this.searchModelService
            .onSearch
            .subscribe((res) => self.onSearchHandler(res));

        return this;
    };

    /**
     * @method onSearchHandler
     * @param res
     * @returns {void}
     */
    private onSearchHandler(res) {
        let self = this;
        self.searchOptions = JSON.parse(JSON.stringify(res.options));


        if (res.res.count > 0) {
            self.searchOptions.searchCount = res.res.count;
            self.emptySearch = false;
            self.successHandler(res.res);
        } else {
            self.collection = [];
            self.emptySearch = true;
        }
    };

    /**
     * @method resetSubscribe
     * @returns {PaginatorWithSearchComponent}
     */
    private resetSubscribe() {
        let self = this;

        this.onReset = this.searchModelService.onReset.subscribe(() => {
            self.setDefaultSearch();
            self.getData()
        });

        return this;
    };

    /**
     * @method processSubscribe
     * @returns {PaginatorWithSearchComponent}
     */
    private processSubscribe() {
        let self = this;
        this.setDefaultSearch();
       this.onProccess =  this.searchModelService.onProccess.subscribe(res => self.loader = res);
        return this;
    }

    /**
     * @method setDefaultSearch
     * @returns {void}
     */
    setDefaultSearch() {
        this.emptySearch = false;
        this.searchOptions.search_param = '';
        this.searchOptions.searchCount = 0;
    }

    /**
     *
     * @param data
     * @param type
     * @returns {void}
     */
    changeFilter(data, type) {
        this.setDefaultSearch();
        super.changeFilter(data, type)
    }

    /**
     * @method unscriber
     * @returns {void}
     */
    uncsriber() {

        this.onProccess.unsubscribe();
        this.onReset.unsubscribe();
        this.onSearch.unsubscribe();
    }

    setExceptionsKeys(keys) {
        this.searchModelService.setExeptionKeys(keys);
    }

    /**
     * @method successHandler
     * @param arr
     * @returns {void}
     */
    protected successHandler(arr):void {};

}
