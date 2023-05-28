export const regexes = {
  EMAIL: /^\w+([.]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/,
  // EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*)(+=.<>{}/\\[\]:;'"|~`_-])[A-Za-z\d!@#$%^&*)(+=.<>{}/\\[\]:;'"|~`_-]{12,32}/,
  LINK_PATTERN:
    // eslint-disable-next-line no-useless-escape
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;%=.]+$/,
};

export const CONFIG_CKEDITOR = {
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      'bulletedList',
      'numberedList',
      '|',
      'fontSize',
      'fontColor',
      'fontFamily',
      'highlight',
      'alignment',
      'outdent',
      'indent',
      '|',
      'imageUpload',
      'link',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo',
      'blockQuote',
    ],
    shouldNotGroupWhenFull: true,
  },
  image: {
    toolbar: [
      'imageTextAlternative',
      'imageStyle:full',
      'imageStyle:side',
    ],
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
  },
};