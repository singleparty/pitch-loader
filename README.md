# pitch-loader 

> 暴露loader pitch，用于调整loaders或者根据条件删减部分loader

## 配置

```javascript
{
  loader: 'pitch-loader',
  options: {
    /**
     * 
     * @param {Array} args - pitch原参数
     * @param {Object} ext - 额外补充
     * @param {String} ext.filename - 源文件名
     * @param {Object} ext.context - this
     */
    pitch(args, ext) {
      this.loaders = this.loaders.filter(() => true)
    }
  }
}
```