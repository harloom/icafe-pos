const  tailwind =  require('tailwindcss');

module.exports = {
  plugins:[
    require('autoprefixer'),
    tailwind("./tailwind.config.js"),
    process.env.NODE_ENV == 'production' ? 
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.js','./public/index.html'],
        defaultExtractor : (content)=>
          content.match(/[A-Za-z0-9-_:/]+/g) ||[]
      }) 
    :''
  ]
}
