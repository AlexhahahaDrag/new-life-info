module.exports = {
  '*.{js,jsx,ts,tsx,vue}': [
    'eslint --fix',
    'prettier --write',
  ],
  '*.{css,less,scss,html,md}': [
    'prettier --write',
  ],
}