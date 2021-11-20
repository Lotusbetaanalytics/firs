import React from "react";
// import * as PusherPushNotifications from "@pusher/push-notifications-web";
// import Pusher from "pusher-js";
// import { useToast } from "@chakra-ui/react";
// import { getlogs } from "../../../redux/actions/logActions";
// import { useDispatch } from "react-redux";
// import io from "socket.io-client";

//const socket = io.connect('http://localhost:4000')
const Push = () => {
  // const dispatch = useDispatch();
  // const toast = useToast();

  // const pusher = new Pusher("f82393c013f75193d268", {
  //   cluster: "mt1",
  // });
  // const channel = pusher.subscribe("my-channel");

  // channel.bind("my-event", function (data) {
  //   const msg = JSON.stringify(data);
  //   const res = JSON.parse(msg);
  //   const info = res.message;
  //   toast({
  //     title: "Guest Notification",
  //     description: info,
  //     status: "success",
  //     duration: 9000,
  //     isClosable: true,
  //   });

  //   var date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  //   dispatch(getlogs(date));
  //   return data;
  // });
  // const beamsClient = new PusherPushNotifications.Client({
  //   instanceId: "83e8d98f-ec55-449a-989d-5ece45a8db14",
  // });
  // beamsClient
  //   .start()
  //   .then(() => beamsClient.addDeviceInterest("hello"))
  //   .then(() => console.log("Successfully registered and subscribed!"))
  //   .catch(console.error);

  return <div></div>;
};

export default Push;
