import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import Section08 from "./section08/Section08";

library.add(fas, faTwitter, faFontAwesome,far)


function App() {
  return (
    <>
      <div>
        <Section08 />
      </div>
    </>
  );
}

export default App;
