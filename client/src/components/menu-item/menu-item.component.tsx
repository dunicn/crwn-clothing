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
  size?: any; // why not string?
  linkUrl: string;
  key?: any;
  id?: any;
}

const MenuItem: React.FC<MenuItemInterface & RouteComponentProps> = (props) => (
  <MenuItemContainer
    size={props.size}
    onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={props.imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{props.title!.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
