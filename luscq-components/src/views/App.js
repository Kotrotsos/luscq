import React from 'react';

import './App.css';
import Text from '../components/Text.js'

// import Button from '../components/Button.js'
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
    </p>
        
       
      
      </div>
    </div>
  );
}

export default App;
