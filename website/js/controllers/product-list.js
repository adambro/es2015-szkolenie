class ProductListController {
  constructor(view, models) {
    this.cartModel = models.cart
    this.productModel = models.product
    this.productListView = view
    view.addProductToCart = this.addProductToCart.bind(this)
  }

  initialize() {
    this.loadProducts();
  }

  loadProducts() {
    this.productListView.render()
    this.productModel.getAllProducts((err, products) => {
      if (err) {
        console.error(err)
        return 
      }
  
      this.productListView.render(products)
    })    
  }

  addProductToCart(product) {
    this.cartModel.add(product);
  }
}
