/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onAddFriend = /* GraphQL */ `subscription OnAddFriend($senderId: ID!, $recipientId: ID!) {
  onAddFriend(senderId: $senderId, recipientId: $recipientId) {
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
` as GeneratedSubscription<
  APITypes.OnAddFriendSubscriptionVariables,
  APITypes.OnAddFriendSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $id: ID!
  $firstName: String
  $lastName: String
  $email: String
  $username: String
) {
  onCreateUser(
    id: $id
    firstName: $firstName
    lastName: $lastName
    email: $email
    username: $username
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $id: ID
  $firstName: String
  $lastName: String
  $email: String
  $username: String
) {
  onUpdateUser(
    id: $id
    firstName: $firstName
    lastName: $lastName
    email: $email
    username: $username
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $id: ID
  $firstName: String
  $lastName: String
  $email: String
  $username: String
) {
  onDeleteUser(
    id: $id
    firstName: $firstName
    lastName: $lastName
    email: $email
    username: $username
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
  $id: ID
  $message: String
  $senderId: ID
  $senderName: String
  $postId: ID
) {
  onCreateNotification(
    id: $id
    message: $message
    senderId: $senderId
    senderName: $senderName
    postId: $postId
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
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
  $id: ID
  $message: String
  $senderId: ID
  $senderName: String
  $postId: ID
) {
  onUpdateNotification(
    id: $id
    message: $message
    senderId: $senderId
    senderName: $senderName
    postId: $postId
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
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
  $id: ID
  $message: String
  $senderId: ID
  $senderName: String
  $postId: ID
) {
  onDeleteNotification(
    id: $id
    message: $message
    senderId: $senderId
    senderName: $senderName
    postId: $postId
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
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($id: ID, $content: String, $createdAt: String) {
  onCreateMessage(id: $id, content: $content, createdAt: $createdAt) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($id: ID, $content: String, $createdAt: String) {
  onUpdateMessage(id: $id, content: $content, createdAt: $createdAt) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($id: ID, $content: String, $createdAt: String) {
  onDeleteMessage(id: $id, content: $content, createdAt: $createdAt) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateConversation = /* GraphQL */ `subscription OnCreateConversation($id: ID, $dummyField: String) {
  onCreateConversation(id: $id, dummyField: $dummyField) {
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
` as GeneratedSubscription<
  APITypes.OnCreateConversationSubscriptionVariables,
  APITypes.OnCreateConversationSubscription
>;
export const onUpdateConversation = /* GraphQL */ `subscription OnUpdateConversation($id: ID, $dummyField: String) {
  onUpdateConversation(id: $id, dummyField: $dummyField) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateConversationSubscriptionVariables,
  APITypes.OnUpdateConversationSubscription
>;
export const onDeleteConversation = /* GraphQL */ `subscription OnDeleteConversation($id: ID, $dummyField: String) {
  onDeleteConversation(id: $id, dummyField: $dummyField) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteConversationSubscriptionVariables,
  APITypes.OnDeleteConversationSubscription
>;
export const onRemoveLike = /* GraphQL */ `subscription OnRemoveLike($id: ID) {
  onRemoveLike(id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnRemoveLikeSubscriptionVariables,
  APITypes.OnRemoveLikeSubscription
>;
export const onSendLike = /* GraphQL */ `subscription OnSendLike($id: ID) {
  onSendLike(id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnSendLikeSubscriptionVariables,
  APITypes.OnSendLikeSubscription
>;
