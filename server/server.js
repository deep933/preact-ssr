require("@babel/register")({
    "presets": ["@babel/preset-env"],
    "plugins": [
        ["@babel/plugin-transform-react-jsx", {
          "pragma": "h"
        }]
      ]
})

require('./app')