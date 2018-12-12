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
    <Navbar inverse collapseOnSelect>
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
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {/* <NavDropdown
            eventKey={1}
            title={intl.formatMessage({ id: 'tabs.more' })}
            id="basic-nav-dropdown">
            <MenuItem eventKey={1.1} href="/about">
              <FormattedMessage id="tabs.about" />
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.2}>
              <FormattedMessage id="tabs.contact" />
            </MenuItem>
          </NavDropdown> */}
          {/* <NavItem eventKey={1} href="/contact">
            <FormattedMessage id="tabs.contact" />
          </NavItem> */}
          {/* <NavItem eventKey={2} href="/news">
            <FormattedMessage id="tabs.news" />
          </NavItem> */}
          <NavItem eventKey={3} href="/about">
            <FormattedMessage id="tabs.about" />
          </NavItem>
          <NavItem eventKey={4} href="/videos">
            <FormattedMessage id="tabs.videos" />
          </NavItem>
          <NavItem eventKey={5} href="/calendar">
            <FormattedMessage id="tabs.calendar" />
          </NavItem>
          <NavItem eventKey={6} href="/">
            <FormattedMessage id="tabs.live" />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {children}
  </StyledLayout>
);

const StyledLayout = styled.div``;

export default connect(() => {}, {})(injectIntl(Layout));
