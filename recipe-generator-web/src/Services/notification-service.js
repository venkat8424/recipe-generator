export const NOTIF_RECIPELIST_CHANGED = "notif_recipelist_changed";

let observers = {};
let instance = null;

class NotificationService {
    constructor(){
        if(!instance){
            instance = this;
        }
        return instance;
    }
    
    addObserver = (notifName, observer, callBack) => {
        var obs = observers[notifName];
        if(!obs){
            observers[notifName] = [];
        }
        observers[notifName].push({observer:observer, callBack:callBack});
    }
    
    postNotification = (notifName, data) => {
        var obs = observers[notifName];
        for(var index=0; index<obs.length; index++){
            obs[index].callBack(data);
        }
    }
}

export default NotificationService;