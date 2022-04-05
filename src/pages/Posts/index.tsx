import React from "react";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { Container, Form, Post, Header } from "./styles";

function Posts() {
  return (
    <Container>
      <Header>CodeLeap Network</Header>

      <Form>
        <h1>What&apos;s on your mind?</h1>
        <p>Title</p>
        <input placeholder="Hello world" type="text" />

        <p>Content</p>
        <textarea placeholder="Content here..." />
      </Form>

      <Post>
        <header>
          <h1>My First Post at Codelap Network!</h1>

          <FiTrash2 size={28} />
          <FiEdit size={28} />
        </header>

        <div>
          <span>@Victor</span>
          <span>25 minutes ago</span>
        </div>

        <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat.
          <br />
          <br />
          Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa
          imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue
          blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam.
          Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </Post>

      <Post>
        <header>
          <h1>My First Post at Codelap Network!</h1>

          <FiTrash2 size={28} />
          <FiEdit size={28} />
        </header>

        <div>
          <span>@Victor</span>
          <span>25 minutes ago</span>
        </div>

        <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat.
          <br />
          <br />
          Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa
          imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue
          blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam.
          Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </Post>

      <Post>
        <header>
          <h1>My First Post at Codelap Network!</h1>

          <FiTrash2 size={28} />
          <FiEdit size={28} />
        </header>

        <div>
          <span>@Victor</span>
          <span>25 minutes ago</span>
        </div>

        <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat.
          <br />
          <br />
          Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa
          imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue
          blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam.
          Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </Post>
    </Container>
  );
}

export default Posts;
