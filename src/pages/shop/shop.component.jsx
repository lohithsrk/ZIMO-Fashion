import React, { Component } from 'react';
import ShopData from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor() {
        super()
        this.state = {
            shopData: ShopData
        }
    }
    render() {
        return (
            <div className="shop-page">
                {
                    this.state.shopData.map(({ id, ...collectionPreview }) => (
                        <CollectionPreview key={id} {...collectionPreview} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage