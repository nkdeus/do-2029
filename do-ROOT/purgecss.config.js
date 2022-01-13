// define extractor class


module.exports = {
    content: ['do-ROOT/index.html','do-ROOT/**/*.php'],
    css: ['do-ROOT/css/style.css'],
    keyframe: true,
    output: 'do-ROOT/css/style-purge.css',
    rejected: true,
    variables:true,
    safelist: {
      standard: [/^do-bg-/,/^video/,/^ifram/,/^slick/,/^do-auto-/,/^do-trans-/,/^html/],
      deep: [],
      greedy: [],
      keyframes: [],
      variables: [/^color-/]
    },
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
   
  }