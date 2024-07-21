# React + TypeScript + Vite + Weather App

## React と TypeScript と Vite を使った都市の天気をお知らせするアプリです。

```
npm run dev

Local: http://localhost:5173/
```

## Jest と ESLint と SonarQube を用いて静的解析も行います。

```
npm test -- --coverage .
eslint **/*.tsx  -f json -o report.json
sonar-scanner

SonarQube
http://localhost:9000/
```

## Docker を用いてコンテナ化したアプリを展開します。

```
npm run build
docker build -t weather-app .
docker run -dit --name weather-app -p 8080:80 weather-app

Weather App
http://localhost:8080/
```

## ReferenceError: fetch is not defined と出た時は

これは fetch がブラウザの API としては存在するが、jest が利用する Node.js の API としては存在しないために起こるので、
テストクラスに cross-fetch ライブラリが提供する cross-fetch/polyfill を import しておく。

```
npm install --save-dev cross-fetch
```

を実行して、

```
import 'cross-fetch/polyfill'
```

を対象のテストファイルに指定する。
