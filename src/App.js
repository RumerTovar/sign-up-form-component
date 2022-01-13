import Form from './components/Form';
import Offers from './components/Offers';

function App() {
 return (
  <>
   <main>
    <section className='title'>
     <h1>Learn to code by watching others</h1>
     <p>
      See how experienced developers solve problems in real-time. Watching
      scripted tutorials is great, but understanding how developers think is
      invaluable.
     </p>
    </section>
    <Offers />
    <Form />
   </main>
  </>
 );
}

export default App;
