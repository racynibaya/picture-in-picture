const videoElement = document.getElementById('video');
const buttonStart = document.getElementById('button-start');
const buttonShare = document.getElementById('button-share');

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

buttonStart.addEventListener('click', async () => {
  // Disable button
  buttonStart.disabled = true;

  // Start picture in picture
  await videoElement.requestPictureInPicture();

  // Enable button
  buttonStart.disable = false;
});

buttonShare.addEventListener('click', selectMediaStream);
