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
* AboutPage component pulling data from server on mount
*/
export class AboutPage extends React.PureComponent<ConnectedProps & OwnProps> {
  componentDidMount() {}

  render() {
    const { isLoading } = this.props;

    return (
      <StyledContainer>
        לאור התעוררות הציבור וגדילת הצמא לידע בקרב העם, הוקם ערוץ תקשורת בלתי
        תלוי ונקי ממניעים חיצוניים. חלק מהנושאים המונגשים בערוץ אינם נושאים
        הקלים לעיסוק, אך עקב ניתוק מוסדות המדינה והתקשורת מצורכי הציבור פועל
        הערוץ להציג לקהל תמונה מקיפה של המציאות. ערוץ RadioAct.tv יפעל בצורה
        שקופה הנקייה מאינטרסים חסויים ויספק אמת רחבה, נקיה ועמוקה לציבור.
        ייחודנו בכך שאנו מספקים מידע ישיר וברור המקנה לציבור ידע שאיתו יבוא הכוח
        לפעול ולשנות. בכדי לאפשר לערוץ RadioAct.tv לפעול על פי ייעודו בצורה
        חופשית ושקופה, אנו קוראים קריאה לכול מי שרוצה להצטרף בכל שלב, לתת יד,
        להשמיע קול, למסור מידע, להשלים ולתקן מידע, לחשוף ידיעות, להזדהות ולתמוך,
        לאהוב ולהתחבר. ערוץ " RadioAct.tv " מגייס: את כולם. כשהסמכות תפסיק להיות
        האמת, והאמת תהיה הסמכות היחידה, לא נצטרך עוד את " RadioAct.tv"
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

export default connect(mapStateToProps, {})(AboutPage);
