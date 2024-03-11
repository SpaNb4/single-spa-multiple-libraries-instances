import * as React from 'react';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
  myMessage: 'Бунжур, {ts, date, ::yyyyMMdd}',
  test: 'Тест',
};

export default function App() {
  return (
    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
      <p>
        <FormattedMessage id="myMessage" defaultMessage="Today is {ts, date, ::yyyyMMdd}" values={{ ts: Date.now() }} />
        <br />
        <FormattedNumber value={19} style="currency" currency="EUR" />
        <br />
        <FormattedMessage id="test" defaultMessage="Test" />
      </p>
    </IntlProvider>
  );
}
