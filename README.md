I'm no longer maintainig this wrapper, so use [this](https://github.com/DeLaGuardo/ss-jsx) wrapper instead.



# React (js) wrapper for SocketStream 0.3

Allows you to use React files (.jsx) in your SocketStream project.


### Instructions

Add `ss-react` to your application's `package.json` file and then add this line to app.js:

``` javascript
ss.client.formatters.add(require('ss-react'));
```
