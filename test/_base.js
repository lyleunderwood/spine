require({
  baseUrl: '.',

  // set the paths to our library packages
  packages: [
    {
      name: 'spine',
      location: '..',
      main: './spine',
      lib: 'lib/'
    }
  ],

  // set the path for the require plugins—text, i18n, etc.
  // paths: {
  //   require: 'requirejs-0.24.0/require'
  // }
}, ['main']);
