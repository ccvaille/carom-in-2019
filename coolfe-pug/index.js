const fs = require('fs');
const pug = require('pug');

// compile
// const compiledFunction = pug.compileFile('./test/template.pug');
// console.log(compiledFunction({ name: 'coolfe-compile' }));

const res = pug.renderFile('./test/template.pug', { name: 'coolfe-render' });

// console.log(res)

// test
fs.readFile('./test/index.html', 'utf-8', (err, data) => {
    if (err) {
        throw new Error('文件不存在！');
    }

    const result = data.replace(/{{PUG_EXPORT}}/g, res);

    fs.writeFile('./test/index.html', result, 'utf-8', (err) => {
        if (err) {
            throw new Error('文件写入失败');
        }
        console.log('Export Success!');
    })
})