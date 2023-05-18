import React, { useState } from 'react';

function App () {
  const [subscribed, setSubscribed] = useState(false);
  console.log('Subscribed status:', subscribed);

  return (
    <section>
      <p>Please click to subscribe to my updates!</p>

      <button onClick={() => setSubscribed(!subscribed)}>
        {subscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </section>
  );
}

export default App;
