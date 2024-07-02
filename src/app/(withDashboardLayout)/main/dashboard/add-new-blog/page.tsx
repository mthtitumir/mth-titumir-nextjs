"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Headline from "@/components/dashboard/Headline";
import { useRouter } from "next/navigation";

type BlogFormInputs = {
  title: string;
  shortDesc: string;
  longDesc?: string;
  content: string;
};

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  shortDesc: yup.string().required("Short description is required"),
  longDesc: yup.string(),
  content: yup.string().required("Content is required"),
});

const PostBlogForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogFormInputs>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const token = localStorage.getItem("token");
  const onSubmit = async (data: BlogFormInputs) => {
    console.log(data);

    try {
      await axios.post("/api/blog", data, {
        headers: {
          Authorization: token,
        },
      });
      router.push('/'); // Redirect to the homepage or blogs page after successful submission
    } catch (error) {
      console.error("Failed to submit blog post", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 rounded-md bg-inherit">
      <Headline text="Post A New Blog" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-md font-medium ">
            Title
          </label>
          <input
            id="title"
            placeholder="Write the title of the blog"
            {...register("title")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.title ? "border-red-500" : ""
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="shortDesc" className="block text-md font-medium">
            Short Description
          </label>
          <input
            id="shortDesc"
            placeholder="Write long description"
            {...register("shortDesc")}
            className={`mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm ${
              errors.shortDesc ? "border-red-500" : ""
            }`}
          />
          {errors.shortDesc && (
            <p className="text-red-500 text-sm">{errors.shortDesc.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="longDesc" className="block text-md font-medium">
            Long Description
          </label>
          <textarea
            id="longDesc"
            placeholder="Write long description"
            {...register("longDesc")}
            className="mt-1 px-3 py-2 block w-full bg-inherit border-main rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-md font-medium">
            Content
          </label>
          <textarea
            id="content"
            placeholder="Write full content"
            {...register("content")}
            className={`bg-inherit border-main mt-1 px-3 py-2 block w-full rounded-md shadow-sm${
              errors.content ? "border-red-500" : ""
            }`}
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostBlogForm;
