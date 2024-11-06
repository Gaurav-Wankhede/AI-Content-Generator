"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Templetes from "@/app/(data)/Templetes";
import { TEMPLETE, FORM } from "../../_components/TempleteListSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft} from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { createRoot } from "react-dom/client";

interface PROPS {
  params: {
    "templete-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  // Cast the Templetes array to TEMPLETE[] to ensure type safety
  const selectedTemplete = (Templetes as TEMPLETE[])?.find(
    (item) => item.slug == props.params["templete-slug"]
  );

  const [loading, setLoading]=useState(false);
  const [aiOutput, setAiOutput]= useState<string>('');
  const {user}=useUser();
  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
    const SelectedPrompt=selectedTemplete?.aiPrompt;

    const FinalAiPrompt=JSON.stringify(formData)+", "+SelectedPrompt

    const result=await chatSession.sendMessage(FinalAiPrompt)

    console.log(result.response.text());
    setAiOutput(result?.response.text())
    await SaveInDb(JSON.stringify(formData), selectedTemplete?.slug, result?.response.text());
    setLoading(false);

  };

  const SaveInDb=async (formData:any,slug:any,aiResp:string)=>{
    const result =await db.insert(AIOutput).values({
      formData:formData,
      templeteSlug:slug,
      aiResponse:aiResp,
      createdBy:user?.primaryEmailAddress?.emailAddress || '',
      createdAt:moment().format('DD/MM/yyyy'),
    });

    console.log(result);
  }

  return (
    <div className="p-10">
      <Link href={'/dashboard'}>
        <Button><ArrowLeft/>Back</Button>
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplete={selectedTemplete}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
