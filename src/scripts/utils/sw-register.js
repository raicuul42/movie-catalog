const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service Worker registered');
  } catch (error) {
    console.log('Failed to register servoce worker', error);
  }
};

export default swRegister;
