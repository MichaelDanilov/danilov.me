import * as React from 'react';
import styled from 'styled-components';

import data from '../../data/contacts';

import { ENGLISH } from '../../constants/languages';

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

const Contacts: React.SFC<Props> = ({ lang = ENGLISH }) => (
  <StyledContacts>
    <StyledList>
      {
        data.content[lang].list.map((item: any) => (
          <StyledItem>
            {
              item.text
                ? (
                  <React.Fragment>
                    <span>{item.type}</span> - <a href={item.link}>{item.text}</a>
                  </React.Fragment>
                  )
                : <a href={item.link}>{item.type}</a>
            }
          </StyledItem>
        ))
      }
    </StyledList>
  </StyledContacts>
);

interface Props {
  lang: string,
};

export default Contacts;
