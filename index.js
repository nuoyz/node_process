const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const arr = new Array(800).fill(1);
console.log("__dirname", __dirname)
arr.forEach((item, index) => {
    imagemin([`${__dirname}/tt.png`], {
      destination: 'build/images',
        plugins: [
          imageminPngquant({
              //quality: [0.6, 0.8]
          })
        ]
    }).then(data => {console.log(data)}).catch(err=>{});
});