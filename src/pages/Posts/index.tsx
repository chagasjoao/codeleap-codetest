import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import Modal from "react-modal";

import { Formik } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import {
  Container,
  InsertForm,
  EditForm,
  Post,
  Header,
  LoadingContainer,
  DeleteIcon,
  EditIcon,
  IconButton,
} from "./styles";
import Button from "../../components/Button";
import { RootState } from "../../redux/store";

import api from "../../services/api";

interface Post {
  id: number;
  username: string;
  created_datetime: Date;
  title: string;
  content: string;
}

interface Response {
  count: number;
  results: Post[];
}

function Posts() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);
  const [editInfo, setEditInfo] = useState<Post>();
  const [posts, setPosts] = useState<Post[]>([]);
  const { user } = useSelector((state: RootState) => state);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!user.userName) {
      navigate("/");
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    async function getPosts() {
      const response = await api.get<Response>("/careers/");

      setPosts(response.data.results);
    }

    getPosts();
  }, []);

  const postValidation = Yup.object({
    title: Yup.string().required(),
    content: Yup.string().required(),
  });

  function timeAfterCreated(postDate: Date) {
    const now = new Date();
    const formatedPostDate = new Date(postDate);

    const differenceBetweenDates = Math.abs(
      now.getTime() + now.getTimezoneOffset() - formatedPostDate.getTime()
    );

    const days = Math.ceil(differenceBetweenDates / (1000 * 60 * 60 * 24));
    const hours = Math.ceil(differenceBetweenDates / (1000 * 60 * 60));
    const minutes = Math.ceil(differenceBetweenDates / (1000 * 60));

    if (minutes < 59) {
      if (minutes === 1) {
        return "Less than a minute";
      }
      return `${minutes} minutes ago`;
    }

    if (hours < 23) {
      return `${hours} hours ago`;
    }

    return `${days} days ago`;
  }

  function handleDeletePost(id: number) {
    confirmAlert({
      title: "Attention!",
      message: "Are you sure you want to delete this item?",
      buttons: [
        {
          label: "Ok",
          onClick: async () => {
            await api.delete(`/careers/${id}/`);

            const response = await api.get<Response>("/careers/");

            toast("Post deleted!", {
              type: "warning",
            });

            setPosts(response.data.results);
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

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <ReactLoading type="spin" color="#000" />
        </LoadingContainer>
      ) : (
        <>
          <Header>CodeLeap Network</Header>

          <Formik
            initialValues={{ title: "", content: "" }}
            validationSchema={postValidation}
            onSubmit={async (
              { title, content },
              { setSubmitting, resetForm }
            ) => {
              const post = {
                username: user.userName,
                title,
                content,
              };

              await api.post("/careers/", post);

              const response = await api.get<Response>("/careers/");

              toast("Post created successfully!", {
                type: "success",
              });

              setPosts(response.data.results);

              setSubmitting(false);
              resetForm({
                values: {
                  title: "",
                  content: "",
                },
              });
            }}
          >
            {({ handleSubmit, values, handleChange }) => (
              <InsertForm onSubmit={handleSubmit}>
                <h1>What&apos;s on your mind?</h1>
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

                <Button
                  type="submit"
                  disabled={!values.title || !values.content}
                >
                  Create
                </Button>
              </InsertForm>
            )}
          </Formik>

          <Modal
            isOpen={isOpen}
            style={modalStyle}
            onRequestClose={() => {
              setIsOpen(false);
              setEditInfo(undefined);
            }}
            contentLabel="Example Modal"
          >
            <Formik
              initialValues={{
                title: editInfo?.title,
                content: editInfo?.content,
              }}
              validationSchema={postValidation}
              onSubmit={async ({ title, content }, { setSubmitting }) => {
                const data = {
                  title,
                  content,
                };

                await api.patch(`/careers/${editInfo?.id}/`, data);

                const response = await api.get<Response>("/careers/");

                toast("Post edited successfully!", {
                  type: "info",
                });

                setPosts(response.data.results);

                setSubmitting(false);
                setIsOpen(false);
                setEditInfo(undefined);
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

                  <Button
                    type="submit"
                    disabled={!values.title || !values.content}
                  >
                    Save
                  </Button>
                </EditForm>
              )}
            </Formik>
          </Modal>

          {posts.map((post) => (
            <Post key={post.id}>
              <header>
                <h1>{post.title}</h1>

                {post.username === user.userName && (
                  <>
                    <IconButton onClick={() => handleDeletePost(post.id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setIsOpen(true);
                        setEditInfo(post);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </>
                )}
              </header>

              <div>
                <span>@{post.username}</span>
                <span>{timeAfterCreated(post.created_datetime)}</span>
              </div>

              <p>{post.content}</p>
            </Post>
          ))}
        </>
      )}
    </Container>
  );
}

export default Posts;
