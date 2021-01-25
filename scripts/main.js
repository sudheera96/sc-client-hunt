window.addEventListener('load', (main) => {
    console.log('page is fully loaded');
  });
//var locText = await getLocation();
locationElement.addEventListener('click', locationHandler);
locationElement.addEventListener('touch', locationHandler);