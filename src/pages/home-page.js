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
* HomePage component pulling data from server on mount
*/
export class HomePage extends React.PureComponent<ConnectedProps & OwnProps> {
  componentDidMount() {}

  render() {
    const { isLoading } = this.props;

    return (
      <StyledContainer>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/live_stream?channel=UCfIhK0xZ5LtP1HGKRcOahGg"
          frameborder="0"
          allowfullscreen
        />
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
`;

export const StyledPost = styled.div``;

const mapStateToProps: MapStateToProps<{}, OwnProps, {}> = (state: {}) => ({});

export default connect(mapStateToProps, {})(HomePage);
