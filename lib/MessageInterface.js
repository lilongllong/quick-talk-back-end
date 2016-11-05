// 定义各种消息接口
exports.bindSocketIO = function (server)
{
    const messageCenter = require("socket.io")(server).of("/mx-qq");
    // 建立连接触发事件
    messageCenter.on("connection", function (socket) {
        let userName = "";
        socket.on("connect", () => {
            // socket interface
            // 调用Service 逻辑实现
        });

        socket.on("message", (message) => {
            // 接口定义部分
        });

    });
}
