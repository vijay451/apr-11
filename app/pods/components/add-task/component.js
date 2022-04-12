import Component from "@ember/component";
import {inject as service} from '@ember/service';

export default Component.extend({
    newDue: "",
    newDescription: "",
    store: service(),
    tasklist: service(),  
  
    init() {
        this._super(...arguments);
    },

    actions: {
        addBtn() {
          const userData = this.store.createRecord("post", {
            due: this.get("newDue"),
            description: this.get("newDescription"),
          });
          this.tasklist.get("data").pushObject(userData);
          document.getElementById("due").value = null;
          document.getElementById("description").value = null;
        },
    
        dueChange(e) {
            this.set("newDue", e.target.value);
          },
      
          descriptionChange(e) {
            this.set("newDescription", e.target.value);
          },
        }
        
});