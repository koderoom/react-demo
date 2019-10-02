import React from 'react';
import ReactDom from 'react-dom';

import {Welcome} from './Welcome';
import {Hello} from './Hello';

const element = <h1>Hello World!!</h1>;


ReactDom.render(<Hello />, document.getElementById('root'));