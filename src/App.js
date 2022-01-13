import Form from './components/Form';
import Offers from './components/Offers';

function App() {
 return (
  <>
   <main>
    <h1>Leran to code by watching others</h1>
    <p>
     See how experienced developers solve problems in real-time. Watching
     scripted tutorials is great, but understanding how developers think is
     invaluable.
    </p>
    <Offers />
    <Form />
    <p>By clicking the button, you are agreeing to our Terms and Services</p>
   </main>
  </>
 );
}

export default App;
