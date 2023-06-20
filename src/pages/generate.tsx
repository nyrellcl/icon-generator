import React, { useState } from "react";
import Head from "next/head";
import { Input } from "~/components/Input";
import { FormGroup } from "~/components/FormGroup";
import { api } from "~/utils/api";

function GeneratePage() {
  const [form, setForm] = useState({
    prompt: "",
  });

  //factory function
  function updateForm(key: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };
  }
const generateIcon = api.generate.generateIcon.useMutation({
    onSuccess(data){
        console.log("mutation finised", data)
    }
})

  function handleFormSubmit(e: React.FormEvent){
    e.preventDefault();
    //TODO submit form data to backend
    generateIcon.mutate({
        prompt: form.prompt
    })
  }
  return (
    <>
      <Head>
        <title>Generate Page</title>
        <meta name="description" content="Generate Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <form className="flex flex-col gap-4" 
        onSubmit={handleFormSubmit}>
          <FormGroup>
            <label>Prompt</label>
            <Input value={form.prompt} onChange={updateForm("prompt")}></Input>
          </FormGroup>
          <button type="submit" className="rounded px-4 py-2">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default GeneratePage;
