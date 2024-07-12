# React + TypeScript + Vite + Weather App

## React と TypeScript と Vite を使った都市の天気をお知らせするアプリです。

```
npm run dev

Local: http://localhost:5173/
```

## Jest と ESLint と SonarQube を用いて静的解析も行います。

```
npm test -- --coverage
eslint **/*.tsx  -f json -o report.json
sonar-scanner

SonarQube
http://localhost:9000/
```
