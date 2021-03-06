import React from 'react';
import styled from 'styled-components';

import data from '../../data/contacts';

import Languages from '../../constants/languages';

const StyledContacts = styled.div`
  margin: 0;
  padding: 0;
`;

const StyledList = styled.ul`
  margin: 1em 0;
  padding: 0;
  list-style: none;
`;

const StyledItem = styled.li`
  margin: 0;
  padding: 0;
`;

const renderTypedListItem = (item: IItemProps) => (
  <>
    {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
    <span>{item.type}</span> - <a href={item.link}>{item.text}</a>
  </>
);

const renderListItem = (item: IItemProps, index: number) => (
  <StyledItem key={index}>
    {item.text ? (
      renderTypedListItem(item)
    ) : (
      <a href={item.link}>{item.type}</a>
    )}
  </StyledItem>
);

const Contacts: React.FC<IProps> = ({ lang = Languages.english }) => (
  <StyledContacts>
    <StyledList>{data.content[lang].list.map(renderListItem)}</StyledList>
  </StyledContacts>
);

interface IProps {
  lang: Languages;
}

interface IItemProps {
  link: string;
  text?: string;
  type: string;
}

export default Contacts;
