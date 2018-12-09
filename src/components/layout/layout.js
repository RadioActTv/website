// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import Logo from 'assets/svg/logo/logo-small.svg';

import styled from 'styled-components';
import {
  Image,
  Nav,
  NavItem,
  Navbar,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

type Props = {
  children: React.Node
};

const Layout = ({ children, intl }: Props) => (
  <StyledLayout>
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            <Image
              src={Logo}
              rounded
              style={{
                height: '46px',
                marginTop: '-10px'
              }}
            />

            {/* <FormattedMessage id="homepage.title" /> */}
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavDropdown
          eventKey={1}
          title={intl.formatMessage({ id: 'tabs.more' })}
          id="basic-nav-dropdown">
          <MenuItem eventKey={1.1}>
            <FormattedMessage id="tabs.about" />
          </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={1.2}>
            <FormattedMessage id="tabs.contact" />
          </MenuItem>
        </NavDropdown>
        <NavItem eventKey={2} href="/videos">
          <FormattedMessage id="tabs.videos" />
        </NavItem>
        <NavItem eventKey={3} href="/news">
          <FormattedMessage id="tabs.news" />
        </NavItem>
        <NavItem eventKey={4} href="/calendar">
          <FormattedMessage id="tabs.calendar" />
        </NavItem>
      </Nav>
    </Navbar>
    {children}
  </StyledLayout>
);

const StyledLayout = styled.div`
  direction: rtl;
`;

export default connect(() => {}, {})(injectIntl(Layout));
