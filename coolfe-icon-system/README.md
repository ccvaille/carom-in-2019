### SVG

- 直接 img/background/inline svg 引用的时候，hover 效果设置不了

### Define
- 先复制出 `svg` 代码， 把多余代码删掉，例如，`xmlns` `width` `height` `fill`；
- `svg` 标签修改成 `symbol`
- 上面加上 `defs`
- 上面加上 `svg`
- 为每个 `symbol` 添加 `id` 区分唯一
- 定义多个即在 `defs` 添加多个 `symbol`   

```html
<svg style="display: none">
    <defs>
        <symbol id="accessibility" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
        </symbol>
    </defs>
</svg>
```
### Usage
```html
<svg class="accessibility">
    <use xlink:href="#accessibility"></use>
</svg>
```


### Futher reading
- https://css-tricks.com/icon-fonts-vs-svg/
- https://css-tricks.com/svg-use-external-source/
