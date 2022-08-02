const videoElement = document.getElementById('video');
const button = document.getElementById('button');

const selectMediaStream = async function () {
  try {
    // screen capture api
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();

    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch error here...
  }
};

button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;

  // Start picture in picture
  await videoElement.requestPictureInPicture();

  // Enable button
  button.disable = false;
});

selectMediaStream();
