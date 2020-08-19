const Fontmin = require('fontmin');
// const rename = require('gulp-rename');

const text = ''
    + '天地玄黄    宇宙洪荒    日月盈昃    辰宿列张'
    + '寒来暑往    秋收冬藏    闰馀成岁    律吕调阳'
    + '云腾致雨    露结为霜    金生丽水    玉出昆冈'
    + '剑号巨阙    珠称夜光    果珍李柰    菜重芥姜';

const fontmin = new Fontmin()
  .src('fonts/hanyi-senty-joy.ttf')
  .use(Fontmin.otf2ttf({
    text
  }))
  .use(Fontmin.glyph({
    text
  }))
  .use(Fontmin.ttf2eot())
  .use(Fontmin.ttf2woff({ deflate: true }))
  .use(Fontmin.ttf2woff2())
  .use(Fontmin.ttf2svg())
  .use(Fontmin.css({
    glyph: false,
    base64: false,
    fontPath: '/fonts/',
    local: true,
    fontFamily(font, ttf) {
      return `${ttf.name.fontFamily} - Transformed`;
    }
  }))
  .dest('./dist');

fontmin.run((err, files) => {
  if (err) {
    console.log(err);
    process.exit(-1);
  }

  console.log(files);
});
