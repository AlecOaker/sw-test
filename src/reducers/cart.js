const initialState = {
    cartItems: [
         {
    "id": 3,
    "title": "Apollo Running Short",
    "image": "/images/Image4.png",
    "price": "50.00",
    "category": "women",
    "description": "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
    "size": {
      "XS": {
        "grey": "3",
        "black": "3",
        "green": "2"
      },
      "S": {
        "grey": "2",
        "black": "10",
        "green": "2"
      },
      "M": {
        "grey": "2",
        "black": "4",
        "green": "6"
      },
      "L": {
        "grey": "7",
        "black": "5",
        "green": "3"
      }
    }
  },
  {
    "id": 4,
    "title": "Apollo Running Short",
    "image": "/images/Image5.png",
    "price": "50.00",
    "category": "women",
    "description": "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
    "size": {
      "XS": {
        "grey": "1",
        "black": "1",
        "green": "1"
      },
      "S": {
        "grey": "1",
        "black": "1",
        "green": "1"
      },
      "M": {
        "grey": "1",
        "black": "1",
        "green": "1"
      },
      "L": {
        "grey": "1",
        "black": "1",
        "green": "1"
      }
    }
  },
    ],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.payload
                ]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(o => o.id !== action.payload)
            }
        default:
            return state;
    }
}