import { Http,  Headers, URLSearchParams, RequestOptions } from '@angular/http';


export class DeterminationErrorService {

    /**
     * error field
     * @type {{}}
     */
    private error:any = {};

    private isJSON(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    /**
     * method parse error._body to json
     * @param error
     */
    private parseBody(error) {
        if (error.status) this.error.status = error.status;

        if (this.isJSON(error._body)) {
            this.error.body = JSON.parse(error._body || '{}');
        } else if (error.statusText) {
            this.error.body = {
                message: error.statusText,
                status: error.status
            }
        } else if (error && Object.keys(error).length > 0) {
            this.error = {
                body: (typeof error == 'string' ? JSON.parse((error && Object.keys(error).length > 0 ? error : '{}')) : error)
            };
        }
        this.error.message = '';
    }


    /**
     * method invalidate  http status
     * @returns {void}
     */
    private invalidHttp400() {
        if (this.error.message == '' && this.error.status == 400) {
            this.error.message = 'http error 400';
        }
    }

    /**
     * method invelidate default
     * @returns {void}
     */
    private invalid() {
        if (this.error.message == '') {
            this.error.message = 'Unexpected error';
        }
    }

    /**
     * parse and translate to rus error messages
     * @returns {void}
     */
    private parse() {
        if (this.error.body) {
            this.invalidHttp400();
            this.invalid();
        }
    }

    /**
     * method get full error
     * @param error
     * @returns {Object}
     */
    public getError(error) {

        this.parseBody(error);
        this.parse();

        return this.error;
    }

    /**
     * method get message error
     * @param error
     * @returns {string}
     */
    public getErrorMessage(error) {

        this.parseBody(error);
        this.parse();

        return this.error.message;
    }
}