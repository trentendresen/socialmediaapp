/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const addFriend = /* GraphQL */ `mutation AddFriend($senderId: ID!, $recipientId: ID!) {
  addFriend(senderId: $senderId, recipientId: $recipientId) {
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
` as GeneratedMutation<
  APITypes.AddFriendMutationVariables,
  APITypes.AddFriendMutation
>;
export const removeLike = /* GraphQL */ `mutation RemoveLike(
  $senderId: ID!
  $recipientId: ID!
  $postId: ID!
  $likes: [ID]
) {
  removeLike(
    senderId: $senderId
    recipientId: $recipientId
    postId: $postId
    likes: $likes
  ) {
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
` as GeneratedMutation<
  APITypes.RemoveLikeMutationVariables,
  APITypes.RemoveLikeMutation
>;
export const markMessageAsSeen = /* GraphQL */ `mutation MarkMessageAsSeen($messageId: ID!) {
  markMessageAsSeen(messageId: $messageId) {
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
` as GeneratedMutation<
  APITypes.MarkMessageAsSeenMutationVariables,
  APITypes.MarkMessageAsSeenMutation
>;
export const markNotificationAsSeen = /* GraphQL */ `mutation MarkNotificationAsSeen($notificationId: ID!) {
  markNotificationAsSeen(notificationId: $notificationId) {
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
` as GeneratedMutation<
  APITypes.MarkNotificationAsSeenMutationVariables,
  APITypes.MarkNotificationAsSeenMutation
>;
export const sendFriendRequest = /* GraphQL */ `mutation SendFriendRequest(
  $senderFriendRequest: [ID]
  $recipientFriendRequest: [ID]
  $removeOrSend: String!
  $senderId: ID!
  $recipientId: ID!
) {
  sendFriendRequest(
    senderFriendRequest: $senderFriendRequest
    recipientFriendRequest: $recipientFriendRequest
    removeOrSend: $removeOrSend
    senderId: $senderId
    recipientId: $recipientId
  ) {
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
` as GeneratedMutation<
  APITypes.SendFriendRequestMutationVariables,
  APITypes.SendFriendRequestMutation
>;
export const removeFriendRequest = /* GraphQL */ `mutation RemoveFriendRequest(
  $senderFriendRequest: [ID]
  $recipientFriendRequest: [ID]
  $removeOrSend: String!
  $senderId: ID!
  $recipientId: ID!
) {
  removeFriendRequest(
    senderFriendRequest: $senderFriendRequest
    recipientFriendRequest: $recipientFriendRequest
    removeOrSend: $removeOrSend
    senderId: $senderId
    recipientId: $recipientId
  ) {
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
` as GeneratedMutation<
  APITypes.RemoveFriendRequestMutationVariables,
  APITypes.RemoveFriendRequestMutation
>;
export const removeFriend = /* GraphQL */ `mutation RemoveFriend(
  $senderFriendRequest: [ID]
  $recipientFriendRequest: [ID]
  $removeOrSend: String!
  $senderId: ID!
  $recipientId: ID!
) {
  removeFriend(
    senderFriendRequest: $senderFriendRequest
    recipientFriendRequest: $recipientFriendRequest
    removeOrSend: $removeOrSend
    senderId: $senderId
    recipientId: $recipientId
  ) {
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
` as GeneratedMutation<
  APITypes.RemoveFriendMutationVariables,
  APITypes.RemoveFriendMutation
>;
export const sendMessage = /* GraphQL */ `mutation SendMessage($senderId: ID!, $recipientId: ID!, $message: String!) {
  sendMessage(
    senderId: $senderId
    recipientId: $recipientId
    message: $message
  ) {
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
` as GeneratedMutation<
  APITypes.SendMessageMutationVariables,
  APITypes.SendMessageMutation
>;
export const sendLike = /* GraphQL */ `mutation SendLike($senderId: ID!, $recipientId: ID!, $postId: ID!) {
  sendLike(senderId: $senderId, recipientId: $recipientId, postId: $postId) {
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
` as GeneratedMutation<
  APITypes.SendLikeMutationVariables,
  APITypes.SendLikeMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createNotification = /* GraphQL */ `mutation CreateNotification($input: CreateNotificationInput!) {
  createNotification(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateNotificationMutationVariables,
  APITypes.CreateNotificationMutation
>;
export const updateNotification = /* GraphQL */ `mutation UpdateNotification($input: UpdateNotificationInput!) {
  updateNotification(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateNotificationMutationVariables,
  APITypes.UpdateNotificationMutation
>;
export const deleteNotification = /* GraphQL */ `mutation DeleteNotification($input: DeleteNotificationInput!) {
  deleteNotification(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteNotificationMutationVariables,
  APITypes.DeleteNotificationMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createConversation = /* GraphQL */ `mutation CreateConversation($input: CreateConversationInput!) {
  createConversation(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateConversationMutationVariables,
  APITypes.CreateConversationMutation
>;
export const updateConversation = /* GraphQL */ `mutation UpdateConversation($input: UpdateConversationInput!) {
  updateConversation(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateConversationMutationVariables,
  APITypes.UpdateConversationMutation
>;
export const deleteConversation = /* GraphQL */ `mutation DeleteConversation($input: DeleteConversationInput!) {
  deleteConversation(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteConversationMutationVariables,
  APITypes.DeleteConversationMutation
>;
