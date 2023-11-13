import React, { useState } from "react";
import {
  Strong,
  TextInput,
  Button,
  Text,
  Paragraph,
  toaster,
} from "evergreen-ui";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { SignForm, SignField } from "../styles/components/signin";

function Sign({ theme }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [address, setAddress] = useState(""); // Set additional fields
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isCreatingAccount, setIsCreatingAccount] = useState(true);
  const { login, signup, currentUser } = useAuth();

  let bw = theme === "light" ? "#FFF" : "#000";

  // TODO: Move this logic
  let textColor = theme === "light" ? "#000" : "#F8FAFF";
  let textMuted = theme === "light" ? "#676f89" : "#8B93A8";

  const router = useRouter();

  async function submitHandler() {
    if (!email || !password) {
      setError("Please enter email and password.");
      toaster.danger("Please enter email and password.");
      return;
    }
    if (!isCreatingAccount) {
      try {
        await login(email, password);
        toaster.success("Successfully logged in.");
        router.push("/i");
      } catch (err) {
        setError("Incorrect email or password.");
        toaster.danger("Incorrect email or password.");
      }

      return;
    }

    await signup(name, email, password); // add address, or any additional fields
    router.push("/i");
    toaster.success("Successfully created account. Please verify your email.");
  }

  return (
    <SignForm>
      {isCreatingAccount && (
        <>
          <SignField>
            <Strong color={textMuted}>Name:</Strong>

            <TextInput
              marginTop={3}
              background={bw}
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="text-input-name"
              placeholder="Your name"
            />
          </SignField>
        </>
      )}
      <SignField>
        <Strong color={textMuted}>Email Address:</Strong>

        <TextInput
          marginTop={3}
          background={bw}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="text-input-name"
          placeholder="Your email address"
        />
      </SignField>
      <SignField>
        <Strong color={textMuted}>Password:</Strong>

        <TextInput
          background={bw}
          type="password"
          marginTop={3}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="text-input-name"
          placeholder="Your account password"
        />
      </SignField>
      <SignField>
        <Button
          marginTop={10}
          marginBottom={!isCreatingAccount ? 20 : ""}
          onClick={submitHandler}
          appearance="primary"
        >
          <Text size="small" fontWeight="bold" color="#FFF">
            {isCreatingAccount ? " Create account" : "Login"}
          </Text>
        </Button>
      </SignField>

      {isCreatingAccount && (
        <Paragraph
          onClick={() => setIsCreatingAccount(!isCreatingAccount)}
          size={500}
          lineHeight={1.75}
          textAlign="start"
          marginTop={10}
          paddingBottom={10}
          cursor="pointer"
          color={textMuted}
        >
          Already a member? Sign in.
        </Paragraph>
      )}
    </SignForm>
  );
}

export default Sign;
