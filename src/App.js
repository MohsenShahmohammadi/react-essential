import Section06 from "./section06/Section06";
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import Section07 from "./section07/Section07";

library.add(fas, faTwitter, faFontAwesome,far)


function App() {
  return (
    <>
      <div>
        <Section06 />
      </div>
    </>
  );
}

export default App;
