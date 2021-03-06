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
* NewsPage component pulling data from server on mount
*/
export class NewsPage extends React.PureComponent<ConnectedProps & OwnProps> {
  componentDidMount() {}

  render() {
    const { isLoading } = this.props;

    return <StyledContainer>NewsPage</StyledContainer>;
  }
}

const StyledContainer = styled.div`
  text-align: center;
`;

export const StyledPost = styled.div``;

const mapStateToProps: MapStateToProps<{}, OwnProps, {}> = (state: {}) => ({});

export default connect(mapStateToProps, {})(NewsPage);
