import consumer from "./consumer"

consumer.subscriptions.create("ProductsChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('Channel connected');
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log('Channel disconnected');
  },

  received(data) {
    console.log('Data received');
    const storeElement = document.querySelector('main.store');
    if (storeElement){
      storeElement.innerHTML = data.html;
    }
  }
});
