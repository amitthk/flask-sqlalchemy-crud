import { BaseRequestOptions} from '@angular/http';

export class AuthRequestOptions extends BaseRequestOptions{
    constructor(customOptions?: any){
        super();
        this.headers.append('Content-Type','application/json');
    }
}