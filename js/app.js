if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

const sendButton = document.querySelector('#notif');

const registration =  navigator.serviceWorker.getRegistration();
console.log(registration);
const sendNotification = async () => {
  if(Notification.permission === 'granted') {
    showNotification();

  }
  else {
    if(Notification.permission !== 'denied') {
      const permission =  Notification.requestPermission();
  
      if(permission === 'granted') {
        showNotification();
      }
    }
  }
  };
  
  const showNotification = body => {
  const title = 'Custom Notification';
  
 // const payload = "Hello World";
  if('showNotification' in registration) {
    console.log("Jeevan");
    registration.showNotification(title,{body:'Notification from serviceWorker showNotification'});
  }
  else {
    new Notification(title,{body:'Hello Jeevan'});
  }
};

sendButton.addEventListener('click', sendNotification)




