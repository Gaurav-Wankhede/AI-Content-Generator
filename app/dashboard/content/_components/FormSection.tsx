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
    <div className="p-3 sm:p-4 md:p-5 shadow-md border bg-white rounded-lg w-full">
      {selectedTemplete?.icon && (
        <div className="flex justify-center sm:justify-start">
          <Image 
            src={selectedTemplete.icon as string} 
            alt="icon" 
            width={50} 
            height={50}
            className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]" 
          />
        </div>
      )}
      <h2 className="font-bold text-xl sm:text-2xl mb-2 text-primary text-center sm:text-left mt-3">{selectedTemplete?.name}</h2>
      <p className="text-gray-500 text-sm sm:text-base text-center sm:text-left">{selectedTemplete?.desc}</p>

      <form className="mt-4 sm:mt-6" onSubmit={onSubmit}>
        {selectedTemplete?.form?.map((item: FORM, index: number) => (
          <div key={index} className="my-2 flex flex-col gap-1.5 sm:gap-2 mb-5 sm:mb-7">
            <label className="font-bold text-sm sm:text-base">{item.label}</label>
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
          className="w-full py-4 sm:py-6 text-sm sm:text-base"
          disabled={loading}
        >
          {loading && <Loader2Icon className="animate-spin mr-2" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
