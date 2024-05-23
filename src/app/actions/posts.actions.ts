import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Post } from 'src/API';

export const PostsActions = createActionGroup({
  source: 'Posts',
  events: {
    'Add User Posts': props<{ userPosts: Post[] }>(),
    'Append User Posts': props<{ userPost: Post }>(),
    'Add Friends Post': props<{ friendsPost: Post[] }>(),
    'Enter Liked Post': props<{ userPost: Post }>(),
    'Append Friends Post': props<{ friendsPost: Post }>(),
  },
});
