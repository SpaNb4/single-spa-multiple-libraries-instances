// MFE 2
import * as React from 'react';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';

const messagesInSpanish = {
  myMessage: 'MFE 2 Hoy es {ts, date, ::yyyyMMdd}',
};

const messagesInEnglish = {
  myMessage: 'MFE 2 Today is {ts, date, ::yyyyMMdd}',
};

export default function App() {
  const [locale, setLocale] = React.useState('es');
  const [messages, setMessages] = React.useState(messagesInSpanish);

  React.useEffect(() => {
    if (locale === 'es') {
      setMessages(messagesInSpanish);
    } else {
      setMessages(messagesInEnglish);
    }
  }, [locale]);

  return (
    <IntlProvider messages={messages} locale={locale}>
      <div style={{ border: '1px solid blue', padding: '10px' }}>
        <p>
          MFE 2:
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
              setLocale(locale === 'es' ? 'en' : 'es');
            }}
          >
            Change locale
          </button>
        </p>
      </div>
    </IntlProvider>
  );
}
