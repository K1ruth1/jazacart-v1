import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

function ItemCard({ product }) {
  const {
    product_name: title,
    unit_price: price,
    product_full_image: image,
    product_description: description,
    ranking,
  } = product;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
    }).format(value);
  };

  const [isHovering, setIsHovering] = useState(false);

  return (
<<<<<<< HEAD
    <div className="item-card">
      <div
        className="product-images"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img src={image} alt={title} />
        {isHovering && <div className="description-popup">{description}</div>}
      </div>
      <div className="grid-meta">
        <div className="pro_content">
          <div className="top_content">
            <h5>
              <a href="/collections/all/products/black-hame-bag">{title}</a>
            </h5>
            <ul className="grid-colorlist"></ul>
          </div>
          <div className="bottom_content">
            <p>
              <span className="normal-price">
                <span className="money">{formatCurrency(price)}</span>
              </span>
            </p>
            <Button
              onClick={() => alert('Add to cart clicked')}
              content="Primary"
              color="blue"
            >
              Add to Cart
            </Button>
          </div>
=======
    <Card className="ui column">
      {image && <Image src={image} wrapped ui={false} />}
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{category}</Card.Meta>
        <Card.Description>{title}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>
          <span>Price: ${price}</span>
          <Button color="blue" floated="right">
            Add to Cart
          </Button>
>>>>>>> a641d4d (updated ItemDisplay component)
        </div>
      </div>
    </div>
  );
}

export default ItemCard;

/////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';

// function ItemCard({ product, addToCart }) {
//   const {
//     product_name: title,
//     unit_price: price,
//     product_full_image: image,
//     product_description: description,
//     ranking,
//     inCart,
//   } = product;

//   const [isHovering, setIsHovering] = useState(false);

//   const formatCurrency = (value) => {
//     return new Intl.NumberFormat('en-KE', {
//       style: 'currency',
//       currency: 'KES',
//     }).format(value);
//   };

//   const handleMouseOver = () => {
//     setIsHovering(true);
//   };

//   const handleMouseOut = () => {
//     setIsHovering(false);
//   };

//   const handleAddToCart = () => {
//     addToCart(product);
//   };

//   return (
//     <div className="item-card">
//       <div className="product-images">
//         <img src={image} alt={title} />
//         <div>
//           <div
//             onMouseOver={handleMouseOver}
//             onMouseOut={handleMouseOut}
//             style={{ cursor: 'pointer' }}
//           >
//             {title}
//           </div>
//           {isHovering && (
//             <div className="description-popup">
//               <p>{description}</p>
//             </div>
//           )}
//         </div>
//         {ranking > 3 && (
//           <div className="badge_outer">
//             <span>new</span>
//           </div>
//         )}
//       </div>
//       <div className="grid-meta">
//         <div className="pro_content">
//           <div className="top_content">
//             <h5>
//               <a href="/collections/all/products/black-hame-bag">{title}</a>
//             </h5>
//             <ul className="grid-colorlist"></ul>
//           </div>
//           <div className="bottom_content">
//             <p>
//               <span className="normal-price">
//                 <span className="money">{formatCurrency(price)}</span>
//               </span>
//             </p>
//             <button
//               className={`button ${inCart ? 'button-disabled' : ''}`}
//               onClick={handleAddToCart}
//               disabled={inCart}
//             >
//               {inCart ? 'Item in a cart' : 'Add to cart'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ItemCard;
