import Form from './components/Form';
import Offers from './components/Offers';

function App() {
 return (
  <>
   <main>
    <section className='title'>
     <h1>Learn to code by watching others</h1>
     <p className='description'>
      See how experienced developers solve problems in real-time. Watching
      scripted tutorials is great, but understanding how developers think is
      invaluable.
     </p>
    </section>
    <section className='form'>
     <Offers />
     <Form />
    </section>
   </main>
  </>
 );
}

export default App;
