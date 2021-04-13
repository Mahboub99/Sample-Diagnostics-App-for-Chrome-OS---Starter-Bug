<div align="center">
<a href="https://github.com/Mahboub99/Sample-Diagnostics-App-for-Chrome-OS---Starter-Bug" rel="noopener">
  
  ![starterBug](https://user-images.githubusercontent.com/43186742/114544881-873fe280-9c5b-11eb-8c82-bea65b375ba1.png)


</div>

<h3 align="center">Sample Diagnostics App for Chrome OS Starter-Bug
</h3>

<div align="center">
  
  [![GitHub contributors](https://img.shields.io/github/contributors/Mahboub99/-portfolio-website)](https://github.com/Mahboub99/Sample-Diagnostics-App-for-Chrome-OS---Starter-Bug/contributors)
  [![GitHub issues](https://img.shields.io/github/issues/Mahboub99/-portfolio-website)](https://github.com/Mahboub99/Sample-Diagnostics-App-for-Chrome-OS---Starter-Bug/issues)
  [![GitHub forks](https://img.shields.io/github/forks/Mahboub99/-portfolio-website)](https://github.com/Mahboub99/Sample-Diagnostics-App-for-Chrome-OS---Starter-Bug/network)
  [![GitHub stars](https://img.shields.io/github/stars/Mahboub99/-portfolio-website)](https://github.com/Mahboub99/Sample-Diagnostics-App-for-Chrome-OS---Starter-Bug/stargazers)
  [![GitHub license](https://img.shields.io/github/license/Mahboub99/-portfolio-website)](https://github.com/Mahboub99/Sample-Diagnostics-App-for-Chrome-OS---Starter-Bug/blob/master/LICENSE)
  <img src="https://img.shields.io/github/languages/count/Mahboub99/Sample-Diagnostics-App-for-Chrome-OS---Starter-Bug" />
  <img src="https://img.shields.io/github/languages/top/Mahboub99/Sample-Diagnostics-App-for-Chrome-OS---Starter-Bug" />
  <img src="https://img.shields.io/github/languages/code-size/Mahboub99/Sample-Diagnostics-App-for-Chrome-OS---Starter-Bug" />
  <img src="https://img.shields.io/github/issues-pr-raw/Mahboub99/Sample-Diagnostics-App-for-Chrome-OS---Starter-Bug" />

</div>

## About
> Sample Diagnostics App for Chrome OS Starter-Bug

### Installation

1. **_Clone the repository_**

```sh
$ git clone https://github.com/Mahboub99/Sample-Diagnostics-App-for-Chrome-OS---Starter-Bug
```
2. **_Install global prequests**
> you need to install node [here](https://nodejs.org/en/download/)
```sh
$ npm install -g @vue/cli
$ npm install http-server -g
```


## Milestone 1: Create a skeleton Telemetry Progressive Web App 


### File structure 

```shell 
|   .browserslistrc
|   .gitignore
|   babel.config.js
|   package-lock.json
|   package.json
|   README.md
|   
+---public
|   |   favicon.ico
|   |   index.html
|   |   robots.txt
|   |   
|   \---img
|       \---icons
|               android-144x144.png
|               android-192x192.png
|               android-36x36.png
|               android-48x48.png
|               android-72x72.png
|               android-96x196.png
|               android-chrome-192x192.png
|               android-chrome-512x512.png
|               android-chrome-maskable-192x192.png
|               android-chrome-maskable-512x512.png
|               apple-touch-icon-120x120.png
|               apple-touch-icon-152x152.png
|               apple-touch-icon-180x180.png
|               apple-touch-icon-60x60.png
|               apple-touch-icon-76x76.png
|               apple-touch-icon.png
|               BadgeLogo.scale-100.png
|               BadgeLogo.scale-125.png
|               BadgeLogo.scale-150.png
|               BadgeLogo.scale-200.png
|               BadgeLogo.scale-400.png
|               favicon-16x16.png
|               favicon-32x32.png
|               msapplication-icon-144x144.png
|               mstile-150x150.png
|               pwa-192x192.png
|               pwa-512x512.png
|               safari-pinned-tab.svg
|               SplashScreen.scale-100.png
|               SplashScreen.scale-125.png
|               SplashScreen.scale-150.png
|               SplashScreen.scale-200.png
|               SplashScreen.scale-400.png
|               Square150x150Logo.scale-100.png
|               Square150x150Logo.scale-125.png
|               Square150x150Logo.scale-150.png
|               Square150x150Logo.scale-200.png
|               Square150x150Logo.scale-400.png
|               Square310x310Logo.scale-100.png
|               Square310x310Logo.scale-125.png
|               Square310x310Logo.scale-150.png
|               Square310x310Logo.scale-200.png
|               Square310x310Logo.scale-400.png
|               Square44x44Logo.scale-100.png
|               Square44x44Logo.scale-125.png
|               Square44x44Logo.scale-150.png
|               Square44x44Logo.scale-200.png
|               Square44x44Logo.scale-400.png
|               Square44x44Logo.targetsize-16.png
|               Square44x44Logo.targetsize-16_altform-unplated.png
|               Square44x44Logo.targetsize-24.png
|               Square44x44Logo.targetsize-24_altform-unplated.png
|               Square44x44Logo.targetsize-256.png
|               Square44x44Logo.targetsize-256_altform-unplated.png
|               Square44x44Logo.targetsize-48.png
|               Square44x44Logo.targetsize-48_altform-unplated.png
|               Square71x71Logo.scale-100.png
|               Square71x71Logo.scale-125.png
|               Square71x71Logo.scale-150.png
|               Square71x71Logo.scale-200.png
|               Square71x71Logo.scale-400.png
|               Store-2400x1200.png
|               Store-358x173.png
|               Store-358x358.png
|               Store-414x180.png
|               Store-414x468.png
|               Store-558x558.png
|               Store-558x756.png
|               Store-846x468.png
|               StoreLogo.scale-100.png
|               StoreLogo.scale-125.png
|               StoreLogo.scale-150.png
|               StoreLogo.scale-200.png
|               StoreLogo.scale-400.png
|               tile150x150.png
|               tile310x150.png
|               tile310x310.png
|               tile70x70.png
|               Wide310x150Logo.scale-100.png
|               Wide310x150Logo.scale-125.png
|               Wide310x150Logo.scale-150.png
|               Wide310x150Logo.scale-200.png
|               Wide310x150Logo.scale-400.png
|               
\---src
    |   App.vue
    |   main.js
    |   registerServiceWorker.js
    |   
    +---assets
    |       logo.png
    |       
    +---components
    +---router
    |       index.js
    |       
    \---views
            SystemData.vue
            SystemManager.vue
            SystemState.vue
            

```

### how to install 
> navigate to `starter-bug-phase1`
```shell
$ npm install 
$ npm run build 
$ http-server dist/
```
> then open `http://127.0.0.1:8080/`



### Screenshots

> First now you have this and you can download from the install icon 

![image](https://user-images.githubusercontent.com/43186742/114531258-06c5b580-9c4c-11eb-89ca-ee7393e06345.png)
<hr/>

> now you have an app 

>Data Page

![image](https://user-images.githubusercontent.com/43186742/114531502-3f658f00-9c4c-11eb-803b-29cd194ae6a5.png)
<hr/>

> Manager Page

![image](https://user-images.githubusercontent.com/43186742/114531690-6ae87980-9c4c-11eb-82d6-9e2e791f98ce.png)
<hr/>

> State Page

![image](https://user-images.githubusercontent.com/43186742/114531934-a3885300-9c4c-11eb-9caa-ee119adcbfe6.png)
<hr/>




## Milestone 2: Create a simple Chrome Extension.

### File structure 

```sell 

|   background.js
|   manifest.json
|   out.txt
|   popup.css
|   popup.html
|   popup.js
|   
\---images
        icon16.png
        icon24.png
        icon32.png
        system.png
```

### How to install 
> go to  [chrome extensions](chrome://extensions/)

> select load unpacked

> navigate to `starter-bug-phase2`

> now you can bin the extention:

![image](https://user-images.githubusercontent.com/43186742/114522357-9d41a900-9c43-11eb-8ed5-d8df1c392be7.png)

### screen shot working 
> you can go to the background page 

![image](https://user-images.githubusercontent.com/43186742/114522989-2bb62a80-9c44-11eb-9a2f-30b6528cd18b.png)
<hr/>

>open console to see fetched information 

![image](https://user-images.githubusercontent.com/43186742/114523297-73d54d00-9c44-11eb-9d48-90a9c7b1efa4.png)
<hr/>

## Milestone 3: Enable the PWA and Chrome Extension to communicate with each other

### How to install 
> for `starter-bug-phase1_extended` same as `phase1`
> for `starter-bug-phase2_extended` same as `pahse2`

### screen shots 


### Contributors
<table>
  <tr>
     <td align="center">
       <a href="https://github.com/Mahboub99">
         <img src="https://avatars3.githubusercontent.com/u/43186742?s=460&v=4" width="150px;" alt=""/>
         <br />
         <sub>
           <b>Ahmed Mahboub</b>
         </sub>
        </a>
       <br/>
    </td>
  </tr>
 </table>

### Licence
[MIT Licence](https://github.com/Sample-Diagnostics-App-for-Chrome-OS---Starter-Bug/blob/main/LICENSE)
