document.addEventListener ('DOMContentLoaded', function () {
  const styledUmbrellaImg = document.querySelector ('.styled-umbrella-img');
  const customizerContainer = document.querySelector ('.customizer-container');
  const blueColorWrapper = document.querySelector ('.blue-color-wrapper');
  const yellowColorWrapper = document.querySelector ('.yellow-color-wrapper');
  const pinkColorWrapper = document.querySelector ('.pink-color-wrapper');
  const uploadButton = document.querySelector ('.upload-button');
  const blueColor = document.querySelector ('.blue-color');
  const yellowColor = document.querySelector ('.yellow-color');
  const pinkColor = document.querySelector ('.pink-color');
  const uploadButtonId = document.getElementById ('uploadButton');
  const logoUpload = document.getElementById ('logoUpload');
  const uploadedImage = document.getElementById ('uploadedImage');
  const uploadButtonText = document.querySelector ('.upload-button-text');
  const uploadIcon = document.querySelector ('.svg-icon');

  let logoUploaded = false;

  function resetColorStyles () {
    blueColor.style.width = '32px';
    blueColor.style.height = '32px';
    yellowColor.style.width = '32px';
    yellowColor.style.height = '32px';
    pinkColor.style.width = '32px';
    pinkColor.style.height = '32px';
  }

  function changeUmbrellaImage (imageSrc) {
    styledUmbrellaImg.src = imageSrc;
  }

  function showLoader () {
    const loaderIcon = document.createElement ('img');
    loaderIcon.src = './assets/loader_icon.svg';
    loaderIcon.classList.add ('loader-icon');
    loaderIcon.style.width = '80px';
    loaderIcon.style.height = '80px';
    styledUmbrellaImg.style.display = 'none';
    uploadedImage.style.display = 'none';
    styledUmbrellaImg.parentNode.insertBefore (loaderIcon, styledUmbrellaImg);
    loaderIcon.style.display = 'block';
    return loaderIcon;
  }

  function hideLoader (loaderIcon) {
    loaderIcon.style.display = 'none';
    styledUmbrellaImg.style.display = 'block';
    uploadedImage.style.display = 'block';
    uploadIcon.style.display = 'block';
  }

  blueColorWrapper.addEventListener ('click', function () {
    resetColorStyles ();
    changeUmbrellaImage ('./assets/Blue umbrella.png');
    customizerContainer.style.backgroundColor = '#e6f6fc';
    uploadButton.style.backgroundColor = '#22a3e0';
    blueColor.style.width = '28px';
    blueColor.style.height = '28px';
    if (logoUploaded) {
      const loaderIcon = showLoader ();
      setTimeout (function () {
        hideLoader (loaderIcon);
        uploadedImage.style.display = 'block';
      }, 6000);
    }
  });

  yellowColorWrapper.addEventListener ('click', function () {
    resetColorStyles ();
    changeUmbrellaImage ('./assets/Yello umbrella.png');
    customizerContainer.style.backgroundColor = '#fffaee';
    uploadButton.style.backgroundColor = '#fdd141';
    yellowColor.style.width = '28px';
    yellowColor.style.height = '28px';
    if (logoUploaded) {
      const loaderIcon = showLoader ();
      setTimeout (function () {
        hideLoader (loaderIcon);
        uploadedImage.style.display = 'block';
      }, 6000);
    }
  });

  pinkColorWrapper.addEventListener ('click', function () {
    resetColorStyles ();
    changeUmbrellaImage ('./assets/Pink umbrella.png');
    customizerContainer.style.backgroundColor = '#f2e5eb';
    uploadButton.style.backgroundColor = '#d0006f';
    pinkColor.style.width = '28px';
    pinkColor.style.height = '28px';
    if (logoUploaded) {
      const loaderIcon = showLoader ();
      setTimeout (function () {
        hideLoader (loaderIcon);
        uploadedImage.style.display = 'block';
      }, 6000);
    }
  });

  uploadButtonId.addEventListener ('click', function () {
    logoUpload.click();
  });

  logoUpload.addEventListener ('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      const loaderIcon = showLoader ();
      uploadedImage.style.display = 'none';
      setTimeout (function () {
        const reader = new FileReader ();
        reader.onload = function () {
          uploadedImage.src = reader.result;
          uploadButtonText.textContent = file.name;
          logoUploaded = true;
          hideLoader (loaderIcon);
          uploadedImage.style.display = 'block';
        };
        reader.readAsDataURL (file);
      }, 6000);
    }
  });
});
