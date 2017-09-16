# react-inspect

## Installation
This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install --save @cloudwalker/react-inspect
```

> This package also depends on `react` and `prop-types`. Please make sure you
> have those installed as well.

## Usage
```javascript
import React from 'react'
import Inspect from 'react-inspect'

const data = {
  und: undefined,
  nil: null,
  num: 666,
  str: 'cawabongaaaa!!',
  fun: (a, b) => a + b,
}

data.arr = Object.values(data)
data.obj = Object.assign({}, data)

const Component = () => {
  return (
    <div>
      <h1>Awesome JS data visualization</h1>
      <Inspect data={data} />
    </div>
  )
}
```
