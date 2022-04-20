import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { toast } from "react-toastify";
import Modal from "react-modal";
import { Formik } from "formik";
import * as Yup from "yup";

import timeAfterCreated from "../../utils/timeAfterCreated";

import Button from "../Button/index";

import {
  DeleteIcon,
  EditForm,
  EditIcon,
  IconButton,
  LikeButton,
  Post,
} from "./styles";

import api from "../../actions/api";
import { postList } from "../../redux/postSlice";
import { RootState } from "../../redux/store";

import { IPost, Response } from "../../interfaces/interfaces";

interface Props {
  post: IPost;
}

export default function PostsComponent(props: Props) {
  const { post } = props;
  const { user } = useSelector((state: RootState) => state);
  const [isOpen, setIsOpen] = useState(false);
  const [likes, setLikes] = useState(0);

  const dispatch = useDispatch();

  async function handleUpdatePost() {
    const response = await api.get<Response>("/careers/");
    dispatch(postList(response.data.results));
  }

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      background: "#777777CC",
    },
  };

  function handleDeletePost(id: number) {
    confirmAlert({
      title: "Attention!",
      message: "Are you sure you want to delete this item?",
      buttons: [
        {
          label: "Ok",
          onClick: async () => {
            await api.delete(`/careers/${id}/`);

            handleUpdatePost();

            toast("Post deleted!", {
              type: "warning",
            });
          },
        },
        {
          label: "Cancel",
          onClick: () => {
            return null;
          },
        },
      ],
    });
  }

  const postValidation = Yup.object({
    title: Yup.string().required(),
    content: Yup.string().required(),
  });

  return (
    <>
      <Modal
        isOpen={isOpen}
        style={modalStyle}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        contentLabel="Modal"
      >
        <Formik
          initialValues={{
            title: post.title,
            content: post.content,
          }}
          validationSchema={postValidation}
          onSubmit={async ({ title, content }, { setSubmitting }) => {
            const data = {
              title,
              content,
            };

            await api.patch(`/careers/${post.id}/`, data);

            handleUpdatePost();

            toast("Post edited successfully!", {
              type: "info",
            });

            setSubmitting(false);
            setIsOpen(false);
          }}
        >
          {({ handleSubmit, values, handleChange }) => (
            <EditForm onSubmit={handleSubmit}>
              <h1>Edit item</h1>
              <span>@{user.userName}</span>

              <label htmlFor="title">Title</label>
              <input
                id="title"
                placeholder="Hello world"
                type="text"
                value={values.title}
                onChange={handleChange}
              />

              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                value={values.content}
                placeholder="Content here..."
                onChange={handleChange}
              />

              <Button type="submit" disabled={!values.title || !values.content}>
                Save
              </Button>
            </EditForm>
          )}
        </Formik>
      </Modal>
      <Post>
        <header>
          <h1>{post.title}</h1>

          {post.username === user.userName && (
            <div>
              <IconButton onClick={() => handleDeletePost(post.id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={() => setIsOpen(true)}>
                <EditIcon />
              </IconButton>
            </div>
          )}
        </header>

        <div>
          <span>@{post.username}</span>
          <span>{timeAfterCreated(post.created_datetime)}</span>
        </div>

        <p>{post.content}</p>

        <IconButton
          onClick={() => {
            setLikes(likes + 1);
          }}
        >
          {likes}
          <LikeButton />
        </IconButton>
      </Post>
    </>
  );
}
