/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPostsByUser = /* GraphQL */ `query GetPostsByUser($authorId: ID!) {
  getPostsByUser(authorId: $authorId) {
    id
    content
    author {
      id
      firstName
      lastName
      email
      username
      posts
      photoUrl
      friends
      friendRequests
      createdAt
      updatedAt
      __typename
    }
    likes
    authorId
    comments {
      id
      content
      author {
        id
        firstName
        lastName
        email
        username
        posts
        photoUrl
        friends
        friendRequests
        createdAt
        updatedAt
        __typename
      }
      postId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPostsByUserQueryVariables,
  APITypes.GetPostsByUserQuery
>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    content
    author {
      id
      firstName
      lastName
      email
      username
      posts
      photoUrl
      friends
      friendRequests
      createdAt
      updatedAt
      __typename
    }
    likes
    authorId
    comments {
      id
      content
      author {
        id
        firstName
        lastName
        email
        username
        posts
        photoUrl
        friends
        friendRequests
        createdAt
        updatedAt
        __typename
      }
      postId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      author {
        id
        firstName
        lastName
        email
        username
        posts
        photoUrl
        friends
        friendRequests
        createdAt
        updatedAt
        __typename
      }
      likes
      authorId
      comments {
        id
        content
        author {
          id
          firstName
          lastName
          email
          username
          posts
          photoUrl
          friends
          friendRequests
          createdAt
          updatedAt
          __typename
        }
        postId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    author {
      id
      firstName
      lastName
      email
      username
      posts
      photoUrl
      friends
      friendRequests
      createdAt
      updatedAt
      __typename
    }
    postId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      author {
        id
        firstName
        lastName
        email
        username
        posts
        photoUrl
        friends
        friendRequests
        createdAt
        updatedAt
        __typename
      }
      postId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    firstName
    lastName
    email
    username
    posts
    photoUrl
    friends
    friendRequests
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: TableUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      username
      posts
      photoUrl
      friends
      friendRequests
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
    id
    recipientId
    type
    message
    senderId
    senderName
    postId
    createdAt
    seen
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNotificationQueryVariables,
  APITypes.GetNotificationQuery
>;
export const getNotificationsByUser = /* GraphQL */ `query GetNotificationsByUser($id: ID!) {
  getNotificationsByUser(id: $id) {
    id
    recipientId
    type
    message
    senderId
    senderName
    postId
    createdAt
    seen
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNotificationsByUserQueryVariables,
  APITypes.GetNotificationsByUserQuery
>;
export const listNotifications = /* GraphQL */ `query ListNotifications(
  $filter: TableNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      recipientId
      type
      message
      senderId
      senderName
      postId
      createdAt
      seen
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationsQueryVariables,
  APITypes.ListNotificationsQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    conversationId
    id
    sender {
      id
      firstName
      lastName
      email
      username
      posts
      photoUrl
      friends
      friendRequests
      createdAt
      updatedAt
      __typename
    }
    recipient {
      id
      firstName
      lastName
      email
      username
      posts
      photoUrl
      friends
      friendRequests
      createdAt
      updatedAt
      __typename
    }
    content
    createdAt
    seen
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: TableMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      conversationId
      id
      sender {
        id
        firstName
        lastName
        email
        username
        posts
        photoUrl
        friends
        friendRequests
        createdAt
        updatedAt
        __typename
      }
      recipient {
        id
        firstName
        lastName
        email
        username
        posts
        photoUrl
        friends
        friendRequests
        createdAt
        updatedAt
        __typename
      }
      content
      createdAt
      seen
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const getConversation = /* GraphQL */ `query GetConversation($id: ID!) {
  getConversation(id: $id) {
    id
    participants {
      id
      firstName
      lastName
      email
      username
      posts
      photoUrl
      friends
      friendRequests
      createdAt
      updatedAt
      __typename
    }
    messages {
      conversationId
      id
      sender {
        id
        firstName
        lastName
        email
        username
        posts
        photoUrl
        friends
        friendRequests
        createdAt
        updatedAt
        __typename
      }
      recipient {
        id
        firstName
        lastName
        email
        username
        posts
        photoUrl
        friends
        friendRequests
        createdAt
        updatedAt
        __typename
      }
      content
      createdAt
      seen
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetConversationQueryVariables,
  APITypes.GetConversationQuery
>;
export const listConversations = /* GraphQL */ `query ListConversations(
  $filter: TableConversationFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      participants {
        id
        firstName
        lastName
        email
        username
        posts
        photoUrl
        friends
        friendRequests
        createdAt
        updatedAt
        __typename
      }
      messages {
        conversationId
        id
        sender {
          id
          firstName
          lastName
          email
          username
          posts
          photoUrl
          friends
          friendRequests
          createdAt
          updatedAt
          __typename
        }
        recipient {
          id
          firstName
          lastName
          email
          username
          posts
          photoUrl
          friends
          friendRequests
          createdAt
          updatedAt
          __typename
        }
        content
        createdAt
        seen
        __typename
      }
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConversationsQueryVariables,
  APITypes.ListConversationsQuery
>;
