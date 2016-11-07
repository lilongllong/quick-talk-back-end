// 定义各种消息接口
exports.bindSocketIO = function (server)
{
    const serviceInstance =  require("./Service").instance;
    const messageCenter = require("socket.io")(server).of("/mx-qq");
    // 建立连接触发事件
    messageCenter.on("connection", function (socket) {
        let userName = "";
        let distance = "";
        serviceInstance.addSocket(socket);
        socket.on("connect", () => {
            // socket interface
            // 调用Service 逻辑实现

        });

        socket.on("change distance",(data) => {
          socket.distance_ = data;
        });

        socket.on("change position",(data) => {
          socket.location_ = data;
        });

        socket.on("post-message", (data) => {
            // 接口定义部分
            const messageObject = serviceInstance.createMessage(data.location, data.id, data.time, data.message);
            serviceInstance.saveMessage(messageObject);
        });

        socket.on("get-message", (location, distance) => {
            const result = serviceInstance.getMessage(location, distance);
            // result = serviceInstance.messageCenter.pop();
            socket.emit("message result", result);
        });

        socket.on("callback test", (data, callback) => {
            callback(data);
        });
        // demo
        socket.on("broadcast message", (data) => {
            socket.broadcast.emit("it is a broadcast message");
        });
        // demo
        socket.on("join someone room", (id) => {
            socket.join("someRoom");
        });
        socket.on("broadcast to someRoom", (message) => {
            socket.broadcast.to("someRoom").emit("broadcast message", message);
        });

    });
}
