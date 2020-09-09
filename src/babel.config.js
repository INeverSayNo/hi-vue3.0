module.exports={
  presets: [
    '@vue/cli-plugin-babel/preset'
],
    plugins: [
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-private-methods",
      "@babel/plugin-syntax-bigint",
      ["import",{
        "libkraryName":"ant-design-vue",
        "style":true
      }]
    ]
  
}