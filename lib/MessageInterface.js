// 定义各种消息接口
exports.bindSocketIO = function (server)
{
    const serviceInstance =  require("./Service").instance;
    const messageCenter = require("socket.io")(server).of("/mx-qq");
    // 建立连接触发事件
    messageCenter.on("connection", function (socket) {
        let userName = "";
        socket.on("connect", () => {
            // socket interface
            // 调用Service 逻辑实现
        });

        socket.on("post-message", (data) => {
            // 接口定义部分
            const messageObject = serviceInstance.createMessage(data.location, data.id, data.time, data.message);
            serviceInstance.saveMessage(messageObject);
        });

        socket.on("get-message", (location) => {
            const result = serviceInstance.getMessage(location);
            socket.emit("message result", result);
        });

    });
}
