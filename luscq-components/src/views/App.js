import React from 'react';

import './App.css';
import Text from '../components/Text.js'
import Button from '../components/Button.js'
import { Spacer } from '../components/Utilities.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
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

        {/* 
        
        */}
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


          {/* 
        
        */}

          <Spacer></Spacer>
          <Text type="title">
            Buttons
          </Text>
        
          <pre>
          {`<Button label="Default"></Button>
<Button type="secondary"  label="Secondary"></Button>
<Button type="outline" label="Outline"></Button>
<Button type="transparent" flow="block" label="Transparent flow=block"></Button>
<Button type="transparent as-link" flow="block" label="Transparent as-link"></Button>`}
        </pre>

        <Spacer></Spacer>
          <Button label="Default"></Button>
          <Button type="secondary"  label="Secondary"></Button>
          <Button type="outline" label="Outline"></Button>
          <Button type="transparent" flow="block" label="Transparent flow=block"></Button>
          <Button type="transparent as-link" flow="block" label="Transparent as-link"></Button>



          <Text type="title">
            Form fields
          </Text>

          <div class="formField has-icon">
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
          </div>

        </p>



      </div>
    </div>
  );
}

export default App;
