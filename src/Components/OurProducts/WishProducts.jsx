// import React, { useState } from 'react';
// import { CiHeart } from "react-icons/ci";
// import { IoMdHeart } from "react-icons/io";
// import OurProductsStyle from "../OurProducts/OurProducts.module.css"




// const HeartIconToggle = () => {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(!isClicked);
//   };


//   return (
//     <div>
//       {isClicked ? (
//         <IoMdHeart
//           onClick={handleClick}
//           color="red"
//           size={30}
//           style={{ cursor: 'pointer' }}
//           className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`} />
//       ) : (
//         <CiHeart
//           onClick={handleClick}
//           color="black"
//           size={30}
//           fontWeight={700}
//           style={{ cursor: 'pointer' }}
//           className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`} />
//       )}
//     </div>
//   );
// };


// export default HeartIconToggle;



// import React, { useState } from 'react';
// import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'; // Import heart icons
// import {db} from "../../firebase/firebase"
// import OurProductsStyle from "./OurProducts.module.css"

// const HeartIconToggle = ({ productId }) => {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleToggleFavorite = async () => {
//     try {
//       const favoritesRef = db.collection('Wishlist');
//       const snapshot = await favoritesRef.where('productId', '==', productId).get();

//       if (snapshot.empty) {
//         // If product is not in favorites, add it
//         await favoritesRef.add({ productId });
//         setIsClicked(true);
//         alert('Added to favorites!');
//       } else {
//         // If product is in favorites, remove it
//         snapshot.forEach(doc => {
//           favoritesRef.doc(doc.id).delete();
//           setIsClicked(false);
//           alert('Removed from favorites!');
//         });
//       }
//     } catch (error) {
//       console.error('Error toggling favorite: ', error);
//       alert('Failed to toggle favorite. Please try again.');
//     }
//   };

//   return (
//     <div>
//       {isClicked ? (
//         <IoMdHeart
//           onClick={handleToggleFavorite}
//           color="red"
//           size={30}
//           style={{ cursor: 'pointer' }}
//           className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`}
//         />
//       ) : (
//         <IoMdHeartEmpty
//           onClick={handleToggleFavorite}
//           color="black"
//           size={30}
//           fontWeight={700}
//           style={{ cursor: 'pointer' }}
//           className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`}
//         />
//       )}
//     </div>
//   );
// };

// export default HeartIconToggle;


import React, { useState, useEffect } from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { db } from "../../firebase/firebase";
import OurProductsStyle from "./OurProducts.module.css";
import products from "../../Server/Products";

const HeartIconToggle = ({ productId }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {

    checkFavoriteStatus();
  }, [productId]);

 

  const checkFavoriteStatus = async () => {
    try {
      const favoritesRef = db.collection('Wishlist');
      const snapshot = await favoritesRef.where('productId', '==', productId).get();

      setIsClicked(!snapshot.empty);
    } catch (error) {
      console.error('Favori durumu kontrol edilirken hata oluştu:', error);
    }
  };


  const handleToggleFavorite = async () => {
    try {
      const favoritesRef = db.collection('Wishlist');
      const snapshot = await favoritesRef.where('productId', '==', productId).get();
     
      if (snapshot.empty) {

        await favoritesRef.add({ productId });
        setIsClicked(true);
        setAlertMessage('wisgliste elave olundu!');
      } else {

        snapshot.forEach(doc => {
          favoritesRef.doc(doc.id).delete();
          setIsClicked(false);
          setAlertMessage('wishlistden silindi!');
        });
      }
    } catch (error) {
      console.error('wishliste elave edemmedin', error);
      setAlertMessage('elave olunmadi');
    }
  };


  const showAlert = () => {
    alert(alertMessage);
  };

  return (
    <div>
      {isClicked ? (
        <IoMdHeart
          onClick={() => { handleToggleFavorite(); showAlert(); }}
          color="red"
          size={30}
          style={{ cursor: 'pointer' }}
          className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`}
        />
      ) : (
        <IoMdHeartEmpty
          onClick={() => { handleToggleFavorite(); showAlert(); }}
          color="black"
          size={30}
          fontWeight={700}
          style={{ cursor: 'pointer' }}
          className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`}
        />
      )}
    </div>
  );
};

export default HeartIconToggle;

