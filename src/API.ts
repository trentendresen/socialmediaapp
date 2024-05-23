/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type User = {
  __typename: "User",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  posts: Array< string >,
  photoUrl: string,
  friends: Array< string >,
  friendRequests: Array< string >,
  createdAt: string,
  updatedAt: string,
};

export type Post = {
  __typename: "Post",
  id: string,
  content: string,
  author: User,
  likes: Array< string >,
  authorId: string,
  comments:  Array<Comment >,
  createdAt: string,
  updatedAt: string,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content: string,
  author: User,
  postId: string,
  createdAt: string,
  updatedAt: string,
};

export type Message = {
  __typename: "Message",
  conversationId: string,
  id: string,
  sender: User,
  recipient: User,
  content: string,
  createdAt: string,
  seen: boolean,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  recipientId: string,
  type: NotificationType,
  message?: string | null,
  senderId: string,
  senderName: string,
  postId?: string | null,
  createdAt: string,
  seen: boolean,
};

export enum NotificationType {
  MESSAGE = "MESSAGE",
  LIKE = "LIKE",
  FRIEND_REQUEST = "FRIEND_REQUEST",
}


export type CreatePostInput = {
  userId: string,
  content: string,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  postId: string,
  content: string,
  userId: string,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  postCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateUserInput = {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  photoUrl: string,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  username?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateNotificationInput = {
  message?: string | null,
  senderId: string,
  senderName: string,
  postId?: string | null,
  recipientId: string,
  type: NotificationType,
};

export type UpdateNotificationInput = {
  id: string,
  message?: string | null,
  senderId?: string | null,
  senderName?: string | null,
  postId?: string | null,
  createdAt?: string | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type CreateMessageInput = {
  content: string,
  createdAt: string,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  createdAt?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateConversationInput = {
  senderId: string,
  recipientId: string,
};

export type Conversation = {
  __typename: "Conversation",
  id: string,
  participants:  Array<User >,
  messages:  Array<Message >,
};

export type UpdateConversationInput = {
  id: string,
  dummyField?: string | null,
};

export type DeleteConversationInput = {
  id: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type TableUserFilterInput = {
  id?: TableIDFilterInput | null,
  firstName?: TableStringFilterInput | null,
  lastName?: TableStringFilterInput | null,
  email?: TableStringFilterInput | null,
  username?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type UserConnection = {
  __typename: "UserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type TableNotificationFilterInput = {
  id?: TableIDFilterInput | null,
  message?: TableStringFilterInput | null,
  senderId?: TableIDFilterInput | null,
  senderName?: TableStringFilterInput | null,
  postId?: TableIDFilterInput | null,
  createdAt?: TableStringFilterInput | null,
};

export type NotificationConnection = {
  __typename: "NotificationConnection",
  items?:  Array<Notification | null > | null,
  nextToken?: string | null,
};

export type TableMessageFilterInput = {
  id?: TableIDFilterInput | null,
  content?: TableStringFilterInput | null,
  createdAt?: TableStringFilterInput | null,
};

export type MessageConnection = {
  __typename: "MessageConnection",
  items?:  Array<Message | null > | null,
  nextToken?: string | null,
};

export type TableConversationFilterInput = {
  id?: TableIDFilterInput | null,
  dummyField?: TableStringFilterInput | null,
};

export type ConversationConnection = {
  __typename: "ConversationConnection",
  items?:  Array<Conversation | null > | null,
  nextToken?: string | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type AddFriendMutationVariables = {
  senderId: string,
  recipientId: string,
};

export type AddFriendMutation = {
  addFriend:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    posts: Array< string >,
    photoUrl: string,
    friends: Array< string >,
    friendRequests: Array< string >,
    createdAt: string,
    updatedAt: string,
  },
};

export type RemoveLikeMutationVariables = {
  senderId: string,
  recipientId: string,
  postId: string,
  likes?: Array< string | null > | null,
};

export type RemoveLikeMutation = {
  removeLike:  Array< {
    __typename: "Post",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    likes: Array< string >,
    authorId: string,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null >,
};

export type MarkMessageAsSeenMutationVariables = {
  messageId: string,
};

export type MarkMessageAsSeenMutation = {
  markMessageAsSeen:  {
    __typename: "Message",
    conversationId: string,
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    recipient:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    seen: boolean,
  },
};

export type MarkNotificationAsSeenMutationVariables = {
  notificationId: string,
};

export type MarkNotificationAsSeenMutation = {
  markNotificationAsSeen:  {
    __typename: "Notification",
    id: string,
    recipientId: string,
    type: NotificationType,
    message?: string | null,
    senderId: string,
    senderName: string,
    postId?: string | null,
    createdAt: string,
    seen: boolean,
  },
};

export type SendFriendRequestMutationVariables = {
  senderFriendRequest?: Array< string | null > | null,
  recipientFriendRequest?: Array< string | null > | null,
  removeOrSend: string,
  senderId: string,
  recipientId: string,
};

export type SendFriendRequestMutation = {
  sendFriendRequest:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    posts: Array< string >,
    photoUrl: string,
    friends: Array< string >,
    friendRequests: Array< string >,
    createdAt: string,
    updatedAt: string,
  },
};

export type RemoveFriendRequestMutationVariables = {
  senderFriendRequest?: Array< string | null > | null,
  recipientFriendRequest?: Array< string | null > | null,
  removeOrSend: string,
  senderId: string,
  recipientId: string,
};

export type RemoveFriendRequestMutation = {
  removeFriendRequest:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    posts: Array< string >,
    photoUrl: string,
    friends: Array< string >,
    friendRequests: Array< string >,
    createdAt: string,
    updatedAt: string,
  },
};

export type RemoveFriendMutationVariables = {
  senderFriendRequest?: Array< string | null > | null,
  recipientFriendRequest?: Array< string | null > | null,
  removeOrSend: string,
  senderId: string,
  recipientId: string,
};

export type RemoveFriendMutation = {
  removeFriend:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    posts: Array< string >,
    photoUrl: string,
    friends: Array< string >,
    friendRequests: Array< string >,
    createdAt: string,
    updatedAt: string,
  },
};

export type SendMessageMutationVariables = {
  senderId: string,
  recipientId: string,
  message: string,
};

export type SendMessageMutation = {
  sendMessage:  {
    __typename: "Notification",
    id: string,
    recipientId: string,
    type: NotificationType,
    message?: string | null,
    senderId: string,
    senderName: string,
    postId?: string | null,
    createdAt: string,
    seen: boolean,
  },
};

export type SendLikeMutationVariables = {
  senderId: string,
  recipientId: string,
  postId: string,
};

export type SendLikeMutation = {
  sendLike:  Array< {
    __typename: "Post",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    likes: Array< string >,
    authorId: string,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null >,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    likes: Array< string >,
    authorId: string,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    likes: Array< string >,
    authorId: string,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    likes: Array< string >,
    authorId: string,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  Array< {
    __typename: "Post",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    likes: Array< string >,
    authorId: string,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null > | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    postId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    postId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    posts: Array< string >,
    photoUrl: string,
    friends: Array< string >,
    friendRequests: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    posts: Array< string >,
    photoUrl: string,
    friends: Array< string >,
    friendRequests: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    posts: Array< string >,
    photoUrl: string,
    friends: Array< string >,
    friendRequests: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    recipientId: string,
    type: NotificationType,
    message?: string | null,
    senderId: string,
    senderName: string,
    postId?: string | null,
    createdAt: string,
    seen: boolean,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    recipientId: string,
    type: NotificationType,
    message?: string | null,
    senderId: string,
    senderName: string,
    postId?: string | null,
    createdAt: string,
    seen: boolean,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    recipientId: string,
    type: NotificationType,
    message?: string | null,
    senderId: string,
    senderName: string,
    postId?: string | null,
    createdAt: string,
    seen: boolean,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    conversationId: string,
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    recipient:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    seen: boolean,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    conversationId: string,
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    recipient:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    seen: boolean,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    conversationId: string,
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    recipient:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    seen: boolean,
  } | null,
};

export type CreateConversationMutationVariables = {
  input: CreateConversationInput,
};

export type CreateConversationMutation = {
  createConversation?:  {
    __typename: "Conversation",
    id: string,
    participants:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    } >,
    messages:  Array< {
      __typename: "Message",
      conversationId: string,
      id: string,
      sender:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      recipient:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      content: string,
      createdAt: string,
      seen: boolean,
    } >,
  } | null,
};

export type UpdateConversationMutationVariables = {
  input: UpdateConversationInput,
};

export type UpdateConversationMutation = {
  updateConversation?:  {
    __typename: "Conversation",
    id: string,
    participants:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    } >,
    messages:  Array< {
      __typename: "Message",
      conversationId: string,
      id: string,
      sender:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      recipient:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      content: string,
      createdAt: string,
      seen: boolean,
    } >,
  } | null,
};

export type DeleteConversationMutationVariables = {
  input: DeleteConversationInput,
};

export type DeleteConversationMutation = {
  deleteConversation?:  {
    __typename: "Conversation",
    id: string,
    participants:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    } >,
    messages:  Array< {
      __typename: "Message",
      conversationId: string,
      id: string,
      sender:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      recipient:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      content: string,
      createdAt: string,
      seen: boolean,
    } >,
  } | null,
};

export type GetPostsByUserQueryVariables = {
  authorId: string,
};

export type GetPostsByUserQuery = {
  getPostsByUser?:  Array< {
    __typename: "Post",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    likes: Array< string >,
    authorId: string,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null > | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    likes: Array< string >,
    authorId: string,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      likes: Array< string >,
      authorId: string,
      comments:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        author:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          username: string,
          posts: Array< string >,
          photoUrl: string,
          friends: Array< string >,
          friendRequests: Array< string >,
          createdAt: string,
          updatedAt: string,
        },
        postId: string,
        createdAt: string,
        updatedAt: string,
      } >,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    postId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    posts: Array< string >,
    photoUrl: string,
    friends: Array< string >,
    friendRequests: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: TableUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "UserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    recipientId: string,
    type: NotificationType,
    message?: string | null,
    senderId: string,
    senderName: string,
    postId?: string | null,
    createdAt: string,
    seen: boolean,
  } | null,
};

export type GetNotificationsByUserQueryVariables = {
  id: string,
};

export type GetNotificationsByUserQuery = {
  getNotificationsByUser?:  Array< {
    __typename: "Notification",
    id: string,
    recipientId: string,
    type: NotificationType,
    message?: string | null,
    senderId: string,
    senderName: string,
    postId?: string | null,
    createdAt: string,
    seen: boolean,
  } | null > | null,
};

export type ListNotificationsQueryVariables = {
  filter?: TableNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "NotificationConnection",
    items?:  Array< {
      __typename: "Notification",
      id: string,
      recipientId: string,
      type: NotificationType,
      message?: string | null,
      senderId: string,
      senderName: string,
      postId?: string | null,
      createdAt: string,
      seen: boolean,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    conversationId: string,
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    recipient:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    seen: boolean,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: TableMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "MessageConnection",
    items?:  Array< {
      __typename: "Message",
      conversationId: string,
      id: string,
      sender:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      recipient:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      content: string,
      createdAt: string,
      seen: boolean,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetConversationQueryVariables = {
  id: string,
};

export type GetConversationQuery = {
  getConversation?:  {
    __typename: "Conversation",
    id: string,
    participants:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    } >,
    messages:  Array< {
      __typename: "Message",
      conversationId: string,
      id: string,
      sender:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      recipient:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      content: string,
      createdAt: string,
      seen: boolean,
    } >,
  } | null,
};

export type ListConversationsQueryVariables = {
  filter?: TableConversationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationsQuery = {
  listConversations?:  {
    __typename: "ConversationConnection",
    items?:  Array< {
      __typename: "Conversation",
      id: string,
      participants:  Array< {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      } >,
      messages:  Array< {
        __typename: "Message",
        conversationId: string,
        id: string,
        sender:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          username: string,
          posts: Array< string >,
          photoUrl: string,
          friends: Array< string >,
          friendRequests: Array< string >,
          createdAt: string,
          updatedAt: string,
        },
        recipient:  {
          __typename: "User",
          id: string,
          firstName: string,
          lastName: string,
          email: string,
          username: string,
          posts: Array< string >,
          photoUrl: string,
          friends: Array< string >,
          friendRequests: Array< string >,
          createdAt: string,
          updatedAt: string,
        },
        content: string,
        createdAt: string,
        seen: boolean,
      } >,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnAddFriendSubscriptionVariables = {
  senderId: string,
  recipientId: string,
};

export type OnAddFriendSubscription = {
  onAddFriend:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    posts: Array< string >,
    photoUrl: string,
    friends: Array< string >,
    friendRequests: Array< string >,
    createdAt: string,
    updatedAt: string,
  },
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    likes: Array< string >,
    authorId: string,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    likes: Array< string >,
    authorId: string,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    likes: Array< string >,
    authorId: string,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  Array< {
    __typename: "Post",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    likes: Array< string >,
    authorId: string,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null > | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    postId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    postId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  username?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    posts: Array< string >,
    photoUrl: string,
    friends: Array< string >,
    friendRequests: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  username?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    posts: Array< string >,
    photoUrl: string,
    friends: Array< string >,
    friendRequests: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  username?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    posts: Array< string >,
    photoUrl: string,
    friends: Array< string >,
    friendRequests: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNotificationSubscriptionVariables = {
  id?: string | null,
  message?: string | null,
  senderId?: string | null,
  senderName?: string | null,
  postId?: string | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    recipientId: string,
    type: NotificationType,
    message?: string | null,
    senderId: string,
    senderName: string,
    postId?: string | null,
    createdAt: string,
    seen: boolean,
  } | null,
};

export type OnUpdateNotificationSubscriptionVariables = {
  id?: string | null,
  message?: string | null,
  senderId?: string | null,
  senderName?: string | null,
  postId?: string | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    recipientId: string,
    type: NotificationType,
    message?: string | null,
    senderId: string,
    senderName: string,
    postId?: string | null,
    createdAt: string,
    seen: boolean,
  } | null,
};

export type OnDeleteNotificationSubscriptionVariables = {
  id?: string | null,
  message?: string | null,
  senderId?: string | null,
  senderName?: string | null,
  postId?: string | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    recipientId: string,
    type: NotificationType,
    message?: string | null,
    senderId: string,
    senderName: string,
    postId?: string | null,
    createdAt: string,
    seen: boolean,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  id?: string | null,
  content?: string | null,
  createdAt?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    conversationId: string,
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    recipient:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    seen: boolean,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  id?: string | null,
  content?: string | null,
  createdAt?: string | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    conversationId: string,
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    recipient:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    seen: boolean,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  id?: string | null,
  content?: string | null,
  createdAt?: string | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    conversationId: string,
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    recipient:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    seen: boolean,
  } | null,
};

export type OnCreateConversationSubscriptionVariables = {
  id?: string | null,
  dummyField?: string | null,
};

export type OnCreateConversationSubscription = {
  onCreateConversation?:  {
    __typename: "Conversation",
    id: string,
    participants:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    } >,
    messages:  Array< {
      __typename: "Message",
      conversationId: string,
      id: string,
      sender:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      recipient:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      content: string,
      createdAt: string,
      seen: boolean,
    } >,
  } | null,
};

export type OnUpdateConversationSubscriptionVariables = {
  id?: string | null,
  dummyField?: string | null,
};

export type OnUpdateConversationSubscription = {
  onUpdateConversation?:  {
    __typename: "Conversation",
    id: string,
    participants:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    } >,
    messages:  Array< {
      __typename: "Message",
      conversationId: string,
      id: string,
      sender:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      recipient:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      content: string,
      createdAt: string,
      seen: boolean,
    } >,
  } | null,
};

export type OnDeleteConversationSubscriptionVariables = {
  id?: string | null,
  dummyField?: string | null,
};

export type OnDeleteConversationSubscription = {
  onDeleteConversation?:  {
    __typename: "Conversation",
    id: string,
    participants:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    } >,
    messages:  Array< {
      __typename: "Message",
      conversationId: string,
      id: string,
      sender:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      recipient:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      content: string,
      createdAt: string,
      seen: boolean,
    } >,
  } | null,
};

export type OnRemoveLikeSubscriptionVariables = {
  id?: string | null,
};

export type OnRemoveLikeSubscription = {
  onRemoveLike?:  Array< {
    __typename: "Post",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    likes: Array< string >,
    authorId: string,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null > | null,
};

export type OnSendLikeSubscriptionVariables = {
  id?: string | null,
};

export type OnSendLikeSubscription = {
  onSendLike?:  Array< {
    __typename: "Post",
    id: string,
    content: string,
    author:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      posts: Array< string >,
      photoUrl: string,
      friends: Array< string >,
      friendRequests: Array< string >,
      createdAt: string,
      updatedAt: string,
    },
    likes: Array< string >,
    authorId: string,
    comments:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      author:  {
        __typename: "User",
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        posts: Array< string >,
        photoUrl: string,
        friends: Array< string >,
        friendRequests: Array< string >,
        createdAt: string,
        updatedAt: string,
      },
      postId: string,
      createdAt: string,
      updatedAt: string,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null > | null,
};
