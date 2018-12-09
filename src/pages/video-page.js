// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash/fp';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

type ConnectedProps = {
  isLoading: boolean
};

type OwnProps = {};

/* 
* VideoPage component pulling data from server on mount
*/
export class VideoPage extends React.PureComponent<ConnectedProps & OwnProps> {
  componentDidMount() {}

  render() {
    const { isLoading } = this.props;

    return (
      <StyledContainer>
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/videoseries?list=PLFSsTI7gnZUSj8N4vxwSCsAE7b3sXr54_"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  text-align: center;
`;

export const StyledPost = styled.div``;

const mapStateToProps: MapStateToProps<{}, OwnProps, {}> = (state: {}) => ({});

export default connect(mapStateToProps, {})(VideoPage);
