---
title: CSS文本滚动
date: 2024/09/11
permalinkPattern: css/1726043440880.html
tags:
  - css
categories:
  - css
---


```html
<div class="marquee">
	<span>Lorem ipsum dolor sit amet elit. Animi, aliquid.<span>
</div>
<h3>Resize me using this ↑</h3>
```

```css
.marquee {
	display: flex;
	position: relative;
	overflow: hidden;
	white-space: nowrap;
	width: 200px;
	padding: 2px 4px;
	background-color: salmon;
	resize: horizontal;
	container-type: inline-size;
	
	> * {
		animation: marquee 3s linear infinite both alternate;
	}
}

@keyframes marquee {
	to {
		transform: translateX(min(100cqw - 100%, 0px));
	}
}
```


