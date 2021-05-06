import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';
import { ItemInterface } from '../cart-item/cart-item.component';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';

interface CollectionPreviewInterface {
  title: string;
  items: ItemInterface[];
  routeName: string;
}

const CollectionPreview: React.FC<
  CollectionPreviewInterface & RouteComponentProps
> = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
