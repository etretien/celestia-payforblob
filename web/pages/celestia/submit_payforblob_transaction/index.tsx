import { useState } from 'react';
import styles from '../../../styles/payFormBlob.module.scss';
import Footer from '../../../components/Footer/Footer';
import logoCelestia from '../../../static/img/logoCelestia.svg';
import Image from 'next/image';
import { Button } from '../../../components/Button';
import Generate from './../../../components/Generate/Generate';
import LoadingTransaction from '../../../components/LoadingTransaction/LoadingTransaction';
import TransactionDetails from '../../../components/TransactionDetails/TransactionDetails';
import ErrorTransaction from '../../../components/ErrorTransaction/ErrorTransaction';
import { Loading } from '../../../components/Loading/Loading';

const genRandomHex = (size: number) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');

const isHexadecimal = (str: string) => /^[0-9a-fA-F]+$/.test(str);

const getStrSize = (str: string) => new Blob([str]).size;

const isValidStr = (str: string, size: number) =>
  isHexadecimal(str) && getStrSize(str) === size;

function Index() {
  const [state, setState] = useState<{
    namespaceId: string;
    namespaceIdError: string;
    data: string;
    dataError: string;
  }>({
    namespaceId: '',
    namespaceIdError: '',
    data: '',
    dataError: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Record<string, string> | null>(null);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  const handleChange = (field: string, value: string) => {
    setState(prevState => ({
      ...prevState,
      [field]: value,
      [`${field}Error`]: '',
    }));
  };

  const handleGenerate = (field: string) => {
    setState(prevState => ({
      ...prevState,
      [field]: genRandomHex(field === 'namespaceId' ? 16 : 200),
    }));
  };

  const handleSubmit = () => {
    const namespaceIdError = isValidStr(state.namespaceId, 16)
      ? ''
      : 'Format error: string, 8 byte max and hex-encoded';
    const dataError = isValidStr(state.data, 200)
      ? ''
      : 'Format error: string, 100 byte max and hex-encoded';
    if (namespaceIdError || dataError) {
      setState(prevState => ({ ...prevState, namespaceIdError, dataError }));
      return;
    }

    setIsLoading(true);
    fetch(process.env.NEXT_PUBLIC_API_URL as string, {
      method: 'POST',
      //mode: 'no-cors',
      body: JSON.stringify({
        namespace_id: state.namespaceId,
        data: state.data
      }),
    })
      .then(response => response.json())
      .then(data => setResult(data?.result ?? {}))
      .catch(e => setError(e))
      .finally(() => {
        setIsLoading(false);
        setState({
          namespaceIdError: '',
          dataError: '',
          data: '',
          namespaceId: '',
        });
      });
  };

  const handleRetry = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div>
      <div className={styles.backAccWrapper}>
        <div className={styles.background}>
          <div className={styles.background__inside}></div>
        </div>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.header__logoContainer}>
              <div className={styles.header__subtitle}>
                <div className={styles.header__logoCelestia}>
                  <Image src={logoCelestia} alt="Celestia" width={60} />
                </div>
                <h4>Celestia</h4>
              </div>
            </div>
            <h1 className={styles.header__title}>
              / Submit a PayForBlob transaction
            </h1>
          </header>
          <main className={styles.main}>
            <div className={styles.main__wrapper}>
              {isLoading && <LoadingTransaction />}
              {!isLoading && !!result && <TransactionDetails data={result} />}
              {!isLoading && error && <ErrorTransaction error={error} />}
              {!isLoading && !result && !error && (
                <div className={styles.generateWrapp}>
                  <Generate
                    label="namespace_id"
                    id="namespaceId"
                    value={state.namespaceId}
                    error={state.namespaceIdError}
                    onChange={handleChange}
                    onClick={handleGenerate}
                  />
                  <Generate
                    label="data"
                    id="data"
                    value={state.data}
                    error={state.dataError}
                    onChange={handleChange}
                    onClick={handleGenerate}
                  />
                </div>
              )}
              <hr />
              {!result && !error && (
                <Button
                  text={isLoading ? <Loading /> : 'Send'}
                  size="l"
                  disabled={isLoading}
                  onClick={handleSubmit}
                />
              )}
              {(!!result || !!error) && (
                <Button
                  text={result ? 'Send another transaction' : 'Try again'}
                  size="l"
                  onClick={handleRetry}
                />
              )}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Index;
