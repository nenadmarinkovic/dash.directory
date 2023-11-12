import React, { useState } from "react";
import { Strong, TextInput, Button, Paragraph, toaster } from "evergreen-ui";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

function Sign({ theme }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isCreatingAccount, setIsCreatingAccount] = useState(true);
  const { login, signup, currentUser } = useAuth();

  let bw = theme === "light" ? "#FFF" : "#000";

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
        router.push("/dashboard");
      } catch (err) {
        setError("Incorrect email or password.");
        toaster.danger("Incorrect email or password.");
      }

      return;
    }

    await signup(name, email, password);
    router.push("/dashboard");
    toaster.success("Successfully created account. Please verify your email.");
  }

  return (
    <>
      <div>
        {isCreatingAccount && (
          <>
            <Strong>Your name:</Strong>
            <br />
            <TextInput
              marginTop={3}
              background={bw}
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="text-input-name"
              placeholder="Your name"
            />
            <br />
            <br />
          </>
        )}
        <Strong>Email address:</Strong>
        <br />
        <TextInput
          marginTop={3}
          background={bw}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="text-input-name"
          placeholder="Email Address"
        />
        <br />
        <br />
        <Strong>Password:</Strong>
        <br />
        <TextInput
          background={bw}
          type="password"
          marginTop={3}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="text-input-name"
          placeholder="Password"
        />

        <br />

        <Button
          marginTop={20}
          marginBottom={!isCreatingAccount ? 20 : ""}
          onClick={submitHandler}
          marginRight={16}
          appearance="primary"
        >
          {isCreatingAccount ? " Create account" : "Login"}
        </Button>

        {isCreatingAccount && (
          <Paragraph
            onClick={() => setIsCreatingAccount(!isCreatingAccount)}
            size={500}
            lineHeight={1.75}
            textAlign="start"
            marginTop={20}
            paddingBottom={20}
            cursor="pointer"
          >
            Already a member? Sign in.
          </Paragraph>
        )}
      </div>
    </>
  );
}

export default Sign;
