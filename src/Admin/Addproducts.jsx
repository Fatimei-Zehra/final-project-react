import React, { useState } from 'react';
import { storage, db } from '../firebase/firebase';
import AddCss from '../Admin/Add.module.css';
import { HiMenu, HiX } from 'react-icons/hi';
import { SidebarData } from '../Server/Sidebar';
import { addDoc, collection } from 'firebase/firestore';

const AddProducts = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const types = ['image/png', 'image/jpeg']; 

    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    
    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('');
        } else {
            setProductImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    };

    
    const addProduct = async (e) => {
        e.preventDefault();

       
        if (!productName || !productPrice || !productImg) {
            setError('Please fill in all fields');
            return;
        }

        try {
            
            const storageRef = storage.ref(`product-images/${productImg.name}`);
            const uploadTask = storageRef.put(productImg);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                    setError(error.message); 
                },
                () => {
                    
                    storageRef.getDownloadURL().then((url) => {
                        
                        addDoc(collection(db, 'products'), {
                            productName: productName,
                            productPrice: Number(productPrice),
                            productImg: url,
                        })
                            .then(() => {
                                
                                setProductName('');
                                setProductPrice('');
                                setProductImg(null);
                                setError('');
                                document.getElementById('file').value = ''; 
                                alert('Product added successfully!');
                            })
                            .catch((err) => setError(err.message));
                    });
                }
            );
        } catch (error) {
            console.error('Error adding product:', error);
            setError('Failed to add product');
        }
    };

    return (
        <div className='container' style={{ display: 'flex', marginTop: '30px' }}>
            <div className={AddCss.dropMenu}>
                <HiMenu className={AddCss.menuIcon} onClick={toggleMenu} />

                <div className={`${AddCss.sidebar} ${isOpen ? AddCss.open : ''}`}>
                    <div className={AddCss.sidebarHeader}>
                        <HiX className={AddCss.closeIcon} onClick={closeMenu} />
                    </div>
                    {SidebarData.map((category, index) => (
                        <div key={index} className={AddCss.category}>
                            <h2>{category.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <div style={{ width: '100%' }}>
                <h2>ADD PRODUCTS</h2>
                <hr />
                <form autoComplete='off' className={AddCss.formGroup} onSubmit={addProduct}>
                    <div className={AddCss.inputForProduct}>
                        <label htmlFor='product-name'>Product Name:</label>
                        <input
                            type='text'
                            className={AddCss.formControl}
                            required
                            onChange={(e) => setProductName(e.target.value)}
                            value={productName}
                        />
                    </div>

                    <br />

                    <div className={AddCss.inputForProduct}>
                        <label htmlFor='product-price'>Product Price</label>
                        <input
                            type='number'
                            className={AddCss.formControl}
                            required
                            onChange={(e) => setProductPrice(e.target.value)}
                            value={productPrice}
                        />
                    </div>

                    <br />

                    <div className={AddCss.inputForProduct}>
                        <label htmlFor='product-img'>Product Image</label>
                        <input
                            type='file'
                            className={AddCss.formControl}
                            id='file'
                            required
                            onChange={productImgHandler}
                        />
                    </div>

                    <br />
                    <button type='submit' className={AddCss.buttonAdd}>
                        ADD
                    </button>
                </form>
                {error && <span className='error-msg'>{error}</span>}
            </div>
        </div>
    );
};

export default AddProducts;


