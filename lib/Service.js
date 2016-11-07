// 提供有关聊天的逻辑实现
'use strict'
class Service {
    constructor() {
        this.messageCenter = new Array();
        this.clients = new Array();
    }

    static getInstance() {
        if (!Service._instance)
        {
            Service._instance = new Service();
        }
        return Service._instance;
    }

    saveMessage(message)
    {
        this.messageCenter.push(message);
        // 暂定容量10000条
        while(this.messageCenter.length > 10000)
        {
            this.messageCenter.shift();
        }
    }

    getMessage(location, distance)
    {
        // method waits to be completed;
        return {
            id: "test",
            time: "2016.11.7  8:01:00 ",
            message: "it is a test"
        };
    }

    createMessage(location, id, time, message)
    {
        return { location, id, time, message };
    }

    addSocket(socket){
      this.clients.push(socket);
    }

    removeSocket(socket){
      this.clients.remove(this.clients.indexOf(socket));
    }
}

exports.instance = Service.getInstance();
