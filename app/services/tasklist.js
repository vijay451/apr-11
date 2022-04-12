import Service from '@ember/service';


export default Service.extend({

    data: null,
    init() {
        this._super(...arguments);
        this.set('data', []);
    },
    
    
});