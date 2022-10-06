import { Card } from "./Components/Card";
import Footer1 from "./Components/Footer/Footer1";
import { About } from "./Components/AdditionalComponents/About";
import { Messagebox } from "./Components/AdditionalComponents/Messagebox";
import { MyNavbar } from "./Components/NavbarComponents/MyNavbar";
import firebase from "firebase";
import QNA from "./Components/QNA/QNA";
import MainPage from "./Components/MainPage/MainPage";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
    this.db
      .collection("products")
      .orderBy("price")
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          return "";
        });

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({
          products: products,
          loading: false,
        });
      });
  }

  // handle Increase Quantity
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .catch((error) => {
        console.log("Error : " + error);
      });
  };
  // handle Decarese Quantity
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection("products").doc(products[index].id);
    if (products[index].qty === 0) {
      return;
    }

    docRef
      .update({
        qty: products[index].qty - 1,
      })
      .catch((error) => {
        console.log("Error : " + error);
      });
  };
  handleDelete = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({
        qty: 0,
      })
      .catch((error) => {
        console.log("Error : " + error);
      });
  };

  // OTHER EVENT HANDLERS
  handleStar = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .update({
        rating: product.rating,
      })
      .catch((error) => {
        console.log("Error : " + error);
      });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
      return "";
    });
    return cartTotal;
  };
  handleClose = () => {
    document.getElementById("close").addEventListener("click", () => {
      var ele = document.getElementById("alert");
      ele.style.display = "none";
    });
  };
  Show = () => {
    const navList = document.getElementById("nav-lists");
    navList.classList.add("_Menus-show");
  };

  Hide = () => {
    const navList = document.getElementById("nav-lists");
    navList.classList.remove("_Menus-show");
  };

  // RENDERING PART STARTS HERE
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App" style={{ position: "relative" }}>
        <Router>
          {/* SHOWING NAVIGATION BAR */}
          <MyNavbar
            Show={this.Show}
            Hide={this.Hide}
            totalCount={this.getCartCount()}
          />
          <Switch>
            <Route exact path="/">
              <div style={{ minHeight: "80vh" }}>
                <MainPage />
              </div>
            </Route>
            <Route
              exact
              path="/cart"
              render={() => {
                return (
                  <div>
                    <div className="cartTotal">
                      Total: &#x20B9; {this.getCartTotal()}
                    </div>
                    <Messagebox onClose={this.handleClose} />
                    <Card
                      products={products}
                      onIncreaseQuantity={this.handleIncreaseQuantity}
                      onDecreaseQuantity={this.handleDecreaseQuantity}
                      onDelete={this.handleDelete}
                      rating={null}
                    />
                    {loading && (
                      <h3
                        style={{
                          position: "relative",
                          justifyContent: "center",
                          textAlign: "center",
                          fontSize: "2rem",
                        }}
                      >
                        Loading products ...
                      </h3>
                    )}
                  </div>
                );
              }}
            ></Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/qna">
              <QNA />
            </Route>
          </Switch>
          {/* FOOTER */}
          <Footer1 />
        </Router>
      </div>
    );
  }
}

export default App;
