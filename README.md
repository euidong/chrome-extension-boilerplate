# chrome extension boiler plate

<div align="center">

[![nodeJS](https://img.shields.io/badge/nodeJS-14.16.0-brightgreen)](https://nodejs.org/en/blog/release/v14.16.0/)
[![ReactJS](https://img.shields.io/badge/ReactJS-17.0.2-green)](https://github.com/facebook/react/blob/master/CHANGELOG.md#16131-march-19-2020)
[![Webpack](https://img.shields.io/badge/WebPack-5.28.0-orange)](https://webpack.js.org/)
[![Typescript](https://img.shields.io/badge/Typescript-4.2.3-blue)](https://www.typescriptlang.org/)
[![chromeExtension](https://img.shields.io/badge/manifest-2-lightgrey)](https://developer.chrome.com/docs/extensions/mv2/intro/)
[![LICENSE](https://img.shields.io/badge/License-MIT-blueviolet)](https://ko.wikipedia.org/wiki/MIT_%ED%97%88%EA%B0%80%EC%84%9C)

</div>

<p align="center">
  
<img width="80%" src="https://user-images.githubusercontent.com/48043626/113408518-7638db00-93ea-11eb-831f-151c9c3dce48.png" />

</p>

This is chrome extension boiler plate with React, Webpack, Typescript.

### 구현내용

chrome 확장앱을 구성하는 다음 요소를 포함합니다.

- contents script => typescript
- background => typescript
- popup view => react + typescript
- option view => react + typescript

### 주의사항

Google 에서 배포 시에 더 이상 manifest version 2를 지원하지 않습니다. 
따라서, version3에 대한 내용을 추가합니다.
또한, 기존 version2 code는 manifest-v2 branch로 옮겼습니다.

### 참고사이트 

- [개인 블로그](https://justlog.tistory.com/12)
- [공식 홈페이지](https://developer.chrome.com/docs/extensions/)
