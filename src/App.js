import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import Section10 from "./section10/Section10";

library.add(fas, faTwitter, faFontAwesome,far)


function App() {
  return (
    <>
      <div>
        <Section10 />
      </div>
    </>
  );
}

export default App;
