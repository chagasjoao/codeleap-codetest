import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import { Formik } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Container, InsertForm, Header, LoadingContainer } from "./styles";
import Button from "../../components/Button";
import Post from "../../components/Post";
import { RootState } from "../../redux/store";
import { postList } from "../../redux/postSlice";

import { Response } from "../../interfaces/interfaces";

import api from "../../actions/api";

function Posts() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const { user, postsData } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user.userName) {
      navigate("/");
      return;
    }

    async function getPosts() {
      const response = await api.get<Response>("/careers/");
      dispatch(postList(response.data.results));
    }

    getPosts();

    setIsLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postValidation = Yup.object({
    title: Yup.string().required(),
    content: Yup.string().required(),
  });

  async function handleUpdatePost() {
    setIsUpdating(true);
    const response = await api.get<Response>("/careers/");
    dispatch(postList(response.data.results));
    setIsUpdating(false);
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

              handleUpdatePost();

              toast("Post created successfully!", {
                type: "success",
              });

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

          {isUpdating ? (
            <LoadingContainer>
              <ReactLoading type="spin" color="#000" />
            </LoadingContainer>
          ) : (
            postsData.posts.map((post) => <Post key={post.id} post={post} />)
          )}
        </>
      )}
    </Container>
  );
}

export default Posts;
