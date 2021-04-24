import Header from './Components/Header'
import Footer from './Components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path="/products/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Container>
      </main>

      <Footer/>
    </Router>
  );
}

export default App;
