import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

interface MenuItemInterface {
  title: string;
  imageUrl: string;
  size: string;
  linkUrl: string;
}

const MenuItem: React.FC<MenuItemInterface & RouteComponentProps> = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
