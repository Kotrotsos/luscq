import React from 'react';

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Text from '../components/Text.js'
import Button from '../components/Button.js'
import { Spacer } from '../components/Utilities.js';
import '../components/Formfield.css';
function App() {
  return (
    <div className="App">
      <div className="App-container stacked">
        <Text type="headline">LUSCQ Styleguide. </Text>
        <Text type="body">
          This is a basic rundown of most of the styles and components for Luscq.
          It's not meant as an official styleguide but as an intermediate solution
          until we have setup Storybook
        </Text>
        <Text type="headline">Single components (AKA Elements) </Text>
        <Spacer></Spacer>
        <Text class="title">
          Typography
        </Text>
        <pre>
          {`<Text class="title|body|headline>  
  Text goes here...  
</Text>`}
        </pre>
        <p className="unstack">
          <Text type="headline">
            This is a headline
          </Text>
          <Text type="title">
            Lorem ipsum doler.
          </Text>
          <Text type="body">
            Note that the development build is not optimized.
            To create a production build, use yarn build.
          </Text>
          <Text type="byline">
            Note that the development build is not optimized.
            To create a production build, use yarn build.
          </Text>
          <Spacer></Spacer>
          
          <Text type="title">
            Buttons
          </Text>
          <pre>
            {
`// Buttons
// Type="secondary|outline|transparent|as-link"
// Label=String
// Flow="inline|block"
// Position="center"

<Button label="Default"></Button>
<Button type="secondary"  label="Secondary" position="center"></Button>
<Button type="outline" label="Outline"></Button>
<Button type="transparent" flow="block" label="Transparent flow=block"></Button>
<Button type="transparent as-link" flow="block" label="Transparent as-link"></Button>`}
          </pre>
          
          <Spacer></Spacer>
           
          <Button label="Default"></Button>
          <Button type="secondary" label="Secondary" position="center"></Button>
          <Button type="outline" label="Outline"></Button>
          <Button type="transparent" flow="block" label="Transparent flow=block"></Button>
          <Button type="transparent as-link" flow="block" label="Transparent as-link"></Button>
           
          <Text type="title">
            Form fields
          </Text>

<pre> {`

<div class="formField has-icon centered">
  <i class="icon"><FontAwesomeIcon icon={faCoffee} /></i>
  <input class="inputField" placeholder="First name"></input>
</div>

<div class="formField">
  <input class="inputField" placeholder="First name"></input>
</div>

<div class="formField has-error">
  <input class="inputField" value="Error" placeholder="First name"></input>
  <div class="formField errorMessage">Please this and that.</div>
</div>

<div class="formField">
  <input class="inputField" placeholder="First name"></input>
</div>`}</pre>
          <Spacer></Spacer>
          <div class="formField has-icon centered">
            <i class="icon"><FontAwesomeIcon icon={faCoffee} /></i>
            <input class="inputField" placeholder="First name"></input>
          </div>
          <div class="formField has-icon ">
            <i class="icon"><FontAwesomeIcon icon={faCoffee} /></i>
            <input class="inputField" placeholder="First name"></input>
          </div>
          <div class="formField">
            <input class="inputField" placeholder="First name"></input>
          </div>

          <div class="formField has-error">
            <input class="inputField" value="Error" placeholder="First name"></input>
            <div class="formField errorMessage">Please this and that.</div>
          </div>

        <Spacer></Spacer>
        
        <Text type="title">
          Toggle switches
        </Text>
            <pre>{`
//Use the toggle switch from React Native
<Switch 
trackColor={{ false: "#1e2732", true: "#1e2732" }}
thumbColor={isEnabled ? "#f55265" : "#fff"}
ios_backgroundColor="#3e3e3e"
onValueChange={toggleSwitch}
value={isEnabled}
                />
            `}</pre>
            <a class="button" as-link href="https://reactnative.dev/docs/switch.html" type="transparent">https://reactnative.dev/docs/switch.html</a>
        </p>
      </div>
    </div>
  );
}

export default App;
