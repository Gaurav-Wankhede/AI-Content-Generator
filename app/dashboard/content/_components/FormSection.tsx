"use client"
import React, { useState } from "react";
import { TEMPLETE, FORM } from "../../_components/TempleteListSection";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplete?: TEMPLETE;
  userFormInput: any;
  loading: boolean;
}

function FormSection({ selectedTemplete, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-md border bg-white rounded-lg">
      {selectedTemplete?.icon && (
        <Image src={selectedTemplete.icon as string} alt="icon" width={70} height={70} />
      )}
      <h2 className="font-bold text-2xl mb-2 text-primary">{selectedTemplete?.name}</h2>
      <p className="text-gray-500 text-sm">{selectedTemplete?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplete?.form?.map((item: FORM, index: number) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field === "input" ? (
              <Input 
                name={item.name} 
                required={item.required}
                onChange={handleInputChange}
              />
            ) : item.field === "textarea" ? (
              <Textarea 
                name={item.name} 
                required={item.required}
                onChange={handleInputChange}
              />
            ) : item.field === "select" && "options" in item ? (
              <select
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select an option</option>
                {Array.isArray(item.options) && item.options.map((option: string, i: number) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : null}
          </div>
        ))}
        <Button 
          type="submit"
          className="w-full py-6"
          disabled={loading}
        >
          {loading && <Loader2Icon className="animate-spin" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
