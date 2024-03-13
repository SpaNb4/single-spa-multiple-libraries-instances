// MFE 1
import * as React from 'react';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';

const messagesInRussian = {
  myMessage: 'MFE 1 Сегодня {ts, date, ::yyyyMMdd}',
};

const messagesInEnglish = {
  myMessage: 'MFE 1 Today is {ts, date, ::yyyyMMdd}',
};

export default function App() {
  const [locale, setLocale] = React.useState('ru');
  const [messages, setMessages] = React.useState(messagesInRussian);

  React.useEffect(() => {
    if (locale === 'ru') {
      setMessages(messagesInRussian);
    } else {
      setMessages(messagesInEnglish);
    }
  }, [locale]);

  return (
    <IntlProvider messages={messages} locale={locale}>
      <div style={{ border: '1px solid red', padding: '10px' }}>
        <p>
          MFE 1:
          <FormattedMessage
            id="myMessage"
            defaultMessage="Today is {ts, date, ::yyyyMMdd}"
            values={{ ts: Date.now() }}
          />
          <br />
          <FormattedNumber value={19} style="currency" currency="EUR" />
          <br />
          <button
            onClick={() => {
              setLocale(locale === 'ru' ? 'en' : 'ru');
            }}
          >
            Change locale
          </button>
        </p>
      </div>
    </IntlProvider>
  );
}
