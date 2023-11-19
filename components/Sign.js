import React, { useState } from 'react';
import { Strong, TextInput, Button, Text, Paragraph, toaster } from 'evergreen-ui';
import { useServices } from '../services/ServicesProvider';
import { useRouter } from 'next/router';
import { SignForm, SignField } from '../styles/components/signin';
import { useThemeColors } from '../styles/theme';
import { handleAuthenticationError } from '../services/ServicesHelpers';

function Sign({ theme }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(null);
  const [isCreatingAccount, setIsCreatingAccount] = useState(true);
  const { login, signup } = useServices();
  const { textMuted, background } = useThemeColors(theme);

  const router = useRouter();

  async function submitHandler() {
    setError(null);

    if (!email || !password || (isCreatingAccount && !name)) {
      setError('Please enter valid information.');
      toaster.danger('Please enter valid information.');
      return;
    }

    setIsLoading(true);

    if (!isCreatingAccount) {
      try {
        await login(email, password);
        toaster.success('Login successful!');
        router.push('/i');
      } catch (error) {
        handleAuthenticationError(error, setError);
      } finally {
        setIsLoading(false);
      }

      return;
    }

    try {
      await signup(name, email, password);
      router.push('/i');
      toaster.success('Successfully created account. Please verify your email.');
    } catch (error) {
      handleAuthenticationError(error, setError);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SignForm>
      {isCreatingAccount && (
        <>
          <SignField>
            <Strong color={textMuted}>Name:</Strong>

            <TextInput
              marginTop={3}
              background={background}
              value={name}
              onChange={(e) => setName(e.target.value)}
              name='text-input-name'
              placeholder='Your name'
            />
          </SignField>
        </>
      )}
      <SignField>
        <Strong color={textMuted}>Email Address:</Strong>

        <TextInput
          marginTop={3}
          background={background}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='text-input-name'
          placeholder='Your email address'
        />
      </SignField>
      <SignField>
        <Strong color={textMuted}>Password:</Strong>

        <TextInput
          background={background}
          type='password'
          marginTop={3}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name='text-input-name'
          placeholder='Your account password'
        />
      </SignField>
      <SignField>
        <Button
          marginTop={10}
          marginBottom={!isCreatingAccount ? 20 : ''}
          onClick={submitHandler}
          appearance='primary'
          isLoading={loading}
        >
          <Text size='small' fontWeight='bold' color='#FFF'>
            {isCreatingAccount ? ' Create account' : 'Login'}
          </Text>
        </Button>
      </SignField>

      {isCreatingAccount && (
        <Paragraph
          onClick={() => setIsCreatingAccount(!isCreatingAccount)}
          size={500}
          lineHeight={1.75}
          textAlign='start'
          marginTop={10}
          paddingBottom={10}
          cursor='pointer'
          color={textMuted}
        >
          Already a member? Sign in.
        </Paragraph>
      )}
    </SignForm>
  );
}

export default Sign;
