'use strict';

import MsgStoreService from '../../../commons/msg-store/msg-store.service';


class MessagesAllController {
  constructor(msgStore) {
    this.msgs = msgStore.all();
  }
}

export default angular
  .module('messages.all.controller', [
     MsgStoreService.name
  ])
  .controller('MessagesAllController', MessagesAllController);
