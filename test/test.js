const socket = io.connect('http://localhost:8080/mx-qq');

$(document).ready(() => {
    // socket.emit("post-message", {time: "2016 test", id: "test", message: "it is  a test", location: "Nanjing", distance: 200});
    // socket.emit("get-message", "Nanjing");
    // socket.on("message result", (data) => {
    //     console.log("接受到消息结果");
    //     console.log(data);
    // });
    // socket.emit("callback test", "callback message" , (data) => {
    //
    //     console.log("接受callback测试数据: " + data);
    // });
    socket.emit("change distance",10);
    socket.emit("change location",{lat:112.02345,lng:30.8764});
    socket.on("update message",(data) => {
      console.log(data);
    });
});
