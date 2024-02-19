import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../utils/StateContext";

const Form = () => {
  const {
    title,
    description,
    handleSubmit,
    movieItem,
    setTitle,
    setDescription,
  } = useStateContext();
  return (
    <section className="flex-start flex-col sm:w-1/2 m-auto">
      <h3 className="head_text text-left">
        <span className="blue_gradient">Create a new PlayList</span>
      </h3>
      <p className="desc text-left max-w-md">Add existing videos to playlist</p>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-white-700">
            Title
          </span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title...."
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-white-700">
            Description
          </span>
          <textarea
            value={description}
            //onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your Description"
            required
            className="form_textarea"
          />
        </label>

        <div className=" flex  justify-end  items-center mx-3 mb-5 gap-4">
          <Link href="/" className="text-white text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={movieItem?.length !== 0 ? false : true}
            className="px-5 py-1.5 text-sm  bg-primary-orange  rounded-full text-white disabled:opacity-75 "
          >
            Create
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
