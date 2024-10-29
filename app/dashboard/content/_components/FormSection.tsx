"use client"
import React, { useState } from "react";
import { TEMPLETE } from "../../_components/TempleteListSection";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplete?: TEMPLETE;
  userFormInput:any;
  loading:boolean
}

function FormSection({ selectedTemplete, userFormInput, loading }: PROPS) {

    const [formData, setFormData]=useState<any>();
    const handleInputChange=(event:any)=>{
        const {name,value}=event.target;
        setFormData({...formData, [name]:value})
    }

    const onSubmit=(e:any) =>{
        e.preventDefault();
        userFormInput(formData)
    }

  return (
    <div className="p-5 shadow-md border bg-white rounded-lg">
      {selectedTemplete?.icon && (
        <Image src={selectedTemplete.icon as string} alt="icon" width={70} height={70} />
      )}
      <h2 className="font-bold text-2xl mb-2 text-primary">{selectedTemplete?.name}</h2>
      <p className="text-gray-500 text-sm">{selectedTemplete?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplete?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input name={item.name} required={item.required}
              onChange={handleInputChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea name={item.name} required={item.required}
              onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button type="submit"
        className="w-full py-6"
        disabled={loading}>
            {loading&&<Loader2Icon className="animate-spin" />}
            Generate Content</Button>
      </form>
    </div>
  );
}

export default FormSection;
function userFormInput(formData: any) {
    throw new Error("Function not implemented.");
}

