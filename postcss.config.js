import postcssPxToRem from 'postcss-pxtorem'

export default ({ env }) => {
  const isProd = env === 'production' // Проверка, что env равна строго строке 'production
  const plugins = []

  if (env) {
    plugins.push(
      postcssPxToRem({
        propList: ['*'], // Указываем, что все css-свойства будут переводиться из px в rem
        mediaQuery: true, // Указываем, что дополнительно нужно обрабатывать медиа выражения
      })
    )
  }

  return {
    plugins: plugins,
  }
}