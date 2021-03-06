import { BusinessHours } from './business-hours';

export class StoreInfo {
    constructor(
        public address?: string,
        public description?: string,
        public userId?: string,
        public mobileNumber?: string,
        public name?: string,
        public regNumber?: string,
        public tags?: Array<string>,
        public imageUrl?: string,
        public businessHours?: Array<BusinessHours>){}
}
