## luscq component library

This is a very basic start of a component library. Nothing Fancy. Just an overview of available React components that you can reuse. Later on i'll seek to integrate Storybook. But for the demo this is not necessary. 

This is based on the Luscq prototypes that can be found here

https://luscq-login-onboarding.netlify.app/

https://luscq-advert-customer.netlify.app/

### Basic usage

Most components have a react component js and an external CSS. Where a component doesn't really make sense (because of the way it will be integrated perhaps in React Native) I will only show the basic HTML (Like for input fields). Of course, there will still be an external CSS that needs to be imported. 

For instance.

``` 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Text from '../components/Text.js'
import Button from '../components/Button.js'
import { Spacer } from '../components/Utilities.js';
import '../components/Formfield.css'; 

```

Most of the styleguide components are in App.js. I intentially kept everything basic and default so not to have to search around for stuff.
So App.js contains most of the component examples.

Everything else falls in either `/components` or `/views`


### Typography

### Buttons

### Input fields
