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
* CalendarPage component pulling data from server on mount
*/
export class CalendarPage extends React.PureComponent<
  ConnectedProps & OwnProps
> {
  componentDidMount() {}

  render() {
    const { isLoading } = this.props;

    return (
      <StyledContainer>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=radioact.tv%40gmail.com&ctz=Asia%2FJerusalem"
          style={{ border: 0 }}
          width="100%"
          height="600px"
          frameborder="0"
          scrolling="no"
        />
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  text-align: center;
  margin: 0 20px;
`;

export const StyledPost = styled.div``;

const mapStateToProps: MapStateToProps<{}, OwnProps, {}> = (state: {}) => ({});

export default connect(mapStateToProps, {})(CalendarPage);
