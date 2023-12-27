'use client';

import {
  HiPaperAirplane,
  HiPhoto,
  HiFaceSmile
} from "react-icons/hi2";
import MessageInput from "./MessageInput";
import {
  FieldValues,
  SubmitHandler,
  useForm
} from "react-hook-form";
import Picker, { EmojiClickData } from "emoji-picker-react";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import useConversation from "@/app/hooks/useConversation";
import { useState } from "react";
import { DataEmoji } from "emoji-picker-react/dist/dataUtils/DataTypes";

const Form = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      message: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue('message', '', { shouldValidate: true });
    axios.post('/api/messages', {
      ...data,
      conversationId: conversationId
    })
  }
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    const currentMessage = getValues('message');
    setValue('message', currentMessage  + emojiObject.emoji, { shouldValidate: true });
   
  }

  const handleUpload = (result: any) => {
    axios.post('/api/messages', {
      image: result.info.secure_url,
      conversationId: conversationId
    })
  }


  return (
    <div
      className="
        py-4 
        px-4 
        bg-white 
        border-t 
        flex 
        items-center 
        gap-2 
        lg:gap-4 
        w-full
      "
    >
      
        <HiFaceSmile size={30} className="text-sky-500" onClick={handleEmojiPickerHideShow} />
        {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} className="!absolute !bottom-[65px] lg:!h-[450px] lg:!w-[350px] md:!h-[350px] md:!w-[250px]"/>}
      
      <CldUploadButton
        options={{ maxFiles: 5 }}
        onUpload={handleUpload}
        uploadPreset="ducmr935"
      >
        <HiPhoto size={30} className="text-sky-500" />
      </CldUploadButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message"
        />
        <button
          type="submit"
          className="
            rounded-full 
            p-2 
            bg-sky-500 
            cursor-pointer 
            hover:bg-sky-600 
            transition
          "
        >
          <HiPaperAirplane
            size={18}
            className="text-white"
          />
        </button>
      </form>
    </div>
  );
}

export default Form;