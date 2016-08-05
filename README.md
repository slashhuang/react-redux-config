# react-redux-config

> a module to fasten the building of react+readux project

## features
> a config file to build the react + redux + `react-redux` project

## download
```
    npm install 'react-redux-config';

```
## demo

> check the demo file in``` example/index.js```

### single reducer 

```
    import  _render from 'react-redux-config';
    let configFile={
        react:{
            root:document.getElementById('root'),
            Container:Container
        },
        redux:{
            reducers:reducer,
            actions:{
              action
            }
        }
    };
    _render(configFile)

```

### multiple reducer 

```
    import  _render from 'react-redux-config';
    let configFile={
        react:{
            root:document.getElementById('root'),
            Container:Container
        },
        redux:{
            reducers:{
                reducer1,
                reducer2
            },
            actions:{
              action
            }
        }
    };
    _render(configFile)

```

### multiple reducer  with middlewares

```
    import  _render from 'react-redux-config';
    let configFile={
        react:{
            root:document.getElementById('root'),
            Container:Container
        },
        redux:{
            reducers:{
                reducer1,
                reducer2
            },
            actions:{
              action
            },
            middleware:[logger]
        }
    };
    _render(configFile)

```


