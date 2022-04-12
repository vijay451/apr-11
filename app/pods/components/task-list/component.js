import Component from "@ember/component";
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default Component.extend({
    tasklist: service(),
    num: null,
    store: service(),

    values: computed('tasklist.data', function() {  
        const data = this.get('tasklist.data');
        
        return data;
      }),

    init() {
        this._super(...arguments);
        
        const values = [
          {
            id:1,
            due:"563",
            description: "vishal"
          },
          {
            id:2,
            due:"563",
            description: "vishal"
          },
          {
            id:3,
            due:"563",
            description: "vishal"
          },
        ];
        values.forEach((value) => {
            const userData = this.store.createRecord("post", value);
            this.get('tasklist.data').pushObject(userData);
        });
      },

      actions:{
        removeClick(val){
            const filterData = this.values.filter((value) => {
                return value.id !==val;
            });

            this.set('tasklist.data', filterData);            
        }
      }

      
})