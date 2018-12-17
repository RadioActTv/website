// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash/fp';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Banner from 'assets/jpg/banner-il.jpeg';
import FB from 'assets/jpg/fb.jpeg';
import YT from 'assets/jpg/youtube.jpeg';

import { Image } from 'react-bootstrap';

type ConnectedProps = {
  isLoading: boolean
};

type OwnProps = {};

/* 
* HomePage component pulling data from server on mount
*/
export class BannerPage extends React.PureComponent<ConnectedProps & OwnProps> {
  componentDidMount() {}

  render() {
    const { isLoading } = this.props;

    return (
      <StyledContainer>
        <Image
          src={Banner}
          align="left"
          rounded
          style={{
            height: 'calc(100vh - 72px)',
            width: '100vw'
          }}
        />
        <ButtonsContainer>
          <a
            target="blank"
            href="https://www.facebook.com/RadioActTv-478985722585631/?referrer=whatsapp">
            <Image
              src={FB}
              rounded
              style={{
                height: '43px',
                width: '60px',
                cursor: 'pointer'
              }}
            />
          </a>
          <a
            target="blank"
            href="https://www.youtube.com/channel/UCfIhK0xZ5LtP1HGKRcOahGg">
            <Image
              src={YT}
              rounded
              style={{
                height: '43px',
                width: '60px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            />
          </a>
        </ButtonsContainer>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  text-align: center;
  direction: rtl;
  font-size: 16px;
  padding: 0 20px;
  line-height: 27px;
  background: url(/assets/jpg/banner-il.jpeg);
`;
const ButtonsContainer = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 10px;
  left: 20px;

  img:hover {
    border: 1px solid gray;
  }
`;

export const StyledPost = styled.div``;

const mapStateToProps: MapStateToProps<{}, OwnProps, {}> = (state: {}) => ({});

export default connect(mapStateToProps, {})(BannerPage);
