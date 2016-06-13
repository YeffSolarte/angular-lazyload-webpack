'use strict';

import MsgStoreService from '../../../commons/msg-store/msg-store.service';

class MessagesNewController {
   constructor(msgStore) {
      this.text = '';
      this._msgStore = msgStore;
   }

   create() {
      this._msgStore.add(this.text);
      this.text = '';
   }
}

export default angular
   .module('messages.new.controller', [
      MsgStoreService.name
   ])
   .controller('MessagesNewController', MessagesNewController);
