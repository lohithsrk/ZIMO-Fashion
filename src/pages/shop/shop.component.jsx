import React from "react";
import ShopData from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = () => (
  <div className="shop-page">
    {ShopData.map(({ id, ...collectionPreview }) => (
      <CollectionPreview key={id} {...collectionPreview} />
    ))}
  </div>
);

export default ShopPage;
