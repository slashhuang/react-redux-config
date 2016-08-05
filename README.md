# react-redux-config

> a module to fasten the building of react+readux project

## features
1. one config file to build the react + redux + `react-redux` project

## usage
```
    npm install 'react-redux-config';
    
```

#### single reducer 

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

#### multiple reducer 

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

#### multiple reducer  with middlewares

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


