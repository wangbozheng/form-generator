let myCss = `.colBorder {
  height: 50px;
  margin-right: -1px;
  margin-bottom: -1px;
  border: 1px solid #c1d6ff;
}
.colUser {
  height: 247px;
  margin-right: -1px;
  margin-bottom: -1px;
  border: 1px solid #c1d6ff;
}
.colEndBorder {
  height: 50px;
  margin-right: -1px;
  margin-bottom: -1px;
  border: 1px solid #c1d6ff;
}
.noBorderLeft {
  border-left: 0px;
 }

.el-input {
  margin-left: 5px;
  margin-right: 5px;
}
.el-range-editor {
  margin-left: 5px;
  margin-right: 5px;
}
.spanUser{
  font-size: 16px;
  margin-left:5px
}
span.xrequired:before {
  content: "* ";
  color: red;
}
span {
  font-size: 16px;
}`

const styles = {
  'el-rate': '.el-rate{display: inline-block; vertical-align: text-top;}',
  'el-upload': '.el-upload__tip{line-height: 1.2;}',
  'el-input': myCss
}

function addCss(cssList, el) {
  const css = styles[el.__config__.tag]
  css && cssList.indexOf(css) === -1 && cssList.push(css)
  if (el.__config__.children) {
    el.__config__.children.forEach(el2 => addCss(cssList, el2))
  }
}

export function makeUpCss(conf) {
  const cssList = []
  conf.fields.forEach(el => addCss(cssList, el))
  return cssList.join('\n')
}
