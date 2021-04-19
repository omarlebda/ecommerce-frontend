import Header from './Components/Header'
import Footer from './Components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path="/products/:id" component={ProductScreen} />
        </Container>
      </main>

      <Footer/>
    </Router>
  );
}

export default App;
