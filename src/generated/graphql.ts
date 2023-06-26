// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  geo?: Maybe<Geo>;
  street?: Maybe<Scalars['String']['output']>;
  suite?: Maybe<Scalars['String']['output']>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  geo?: InputMaybe<GeoInput>;
  street?: InputMaybe<Scalars['String']['input']>;
  suite?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type Album = {
  __typename?: 'Album';
  id?: Maybe<Scalars['ID']['output']>;
  photos?: Maybe<PhotosPage>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};


export type AlbumPhotosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type AlbumsPage = {
  __typename?: 'AlbumsPage';
  data?: Maybe<Array<Maybe<Album>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Comment = {
  __typename?: 'Comment';
  body?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Post>;
};

export type CommentsPage = {
  __typename?: 'CommentsPage';
  data?: Maybe<Array<Maybe<Comment>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Company = {
  __typename?: 'Company';
  bs?: Maybe<Scalars['String']['output']>;
  catchPhrase?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CompanyInput = {
  bs?: InputMaybe<Scalars['String']['input']>;
  catchPhrase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAlbumInput = {
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateCommentInput = {
  body: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreatePhotoInput = {
  thumbnailUrl: Scalars['String']['input'];
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type CreatePostInput = {
  body: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateTodoInput = {
  completed: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  address?: InputMaybe<AddressInput>;
  company?: InputMaybe<CompanyInput>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type Geo = {
  __typename?: 'Geo';
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type GeoInput = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Int']['output']>;
  createAlbum?: Maybe<Album>;
  createComment?: Maybe<Comment>;
  createPhoto?: Maybe<Photo>;
  createPost?: Maybe<Post>;
  createTodo?: Maybe<Todo>;
  createUser?: Maybe<User>;
  deleteAlbum?: Maybe<Scalars['Boolean']['output']>;
  deleteComment?: Maybe<Scalars['Boolean']['output']>;
  deletePhoto?: Maybe<Scalars['Boolean']['output']>;
  deletePost?: Maybe<Scalars['Boolean']['output']>;
  deleteTodo?: Maybe<Scalars['Boolean']['output']>;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  updateAlbum?: Maybe<Album>;
  updateComment?: Maybe<Comment>;
  updatePhoto?: Maybe<Photo>;
  updatePost?: Maybe<Post>;
  updateTodo?: Maybe<Todo>;
  updateUser?: Maybe<User>;
};


export type MutationCreateAlbumArgs = {
  input: CreateAlbumInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreatePhotoArgs = {
  input: CreatePhotoInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePhotoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAlbumArgs = {
  id: Scalars['ID']['input'];
  input: UpdateAlbumInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCommentInput;
};


export type MutationUpdatePhotoArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePhotoInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePostInput;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTodoInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};

export enum OperatorKindEnum {
  Gte = 'GTE',
  Like = 'LIKE',
  Lte = 'LTE',
  Ne = 'NE'
}

export type OperatorOptions = {
  field?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<OperatorKindEnum>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type PageLimitPair = {
  __typename?: 'PageLimitPair';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
};

export type PageMetadata = {
  __typename?: 'PageMetadata';
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PageQueryOptions = {
  operators?: InputMaybe<Array<InputMaybe<OperatorOptions>>>;
  paginate?: InputMaybe<PaginateOptions>;
  search?: InputMaybe<SearchOptions>;
  slice?: InputMaybe<SliceOptions>;
  sort?: InputMaybe<Array<InputMaybe<SortOptions>>>;
};

export type PaginateOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginationLinks = {
  __typename?: 'PaginationLinks';
  first?: Maybe<PageLimitPair>;
  last?: Maybe<PageLimitPair>;
  next?: Maybe<PageLimitPair>;
  prev?: Maybe<PageLimitPair>;
};

export type Photo = {
  __typename?: 'Photo';
  album?: Maybe<Album>;
  id?: Maybe<Scalars['ID']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PhotosPage = {
  __typename?: 'PhotosPage';
  data?: Maybe<Array<Maybe<Photo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Post = {
  __typename?: 'Post';
  body?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<CommentsPage>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};


export type PostCommentsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type PostsPage = {
  __typename?: 'PostsPage';
  data?: Maybe<Array<Maybe<Post>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Int']['output']>;
  album?: Maybe<Album>;
  albums?: Maybe<AlbumsPage>;
  comment?: Maybe<Comment>;
  comments?: Maybe<CommentsPage>;
  photo?: Maybe<Photo>;
  photos?: Maybe<PhotosPage>;
  post?: Maybe<Post>;
  posts?: Maybe<PostsPage>;
  todo?: Maybe<Todo>;
  todos?: Maybe<TodosPage>;
  user?: Maybe<User>;
  users?: Maybe<UsersPage>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAlbumsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryPhotoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPhotosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryTodoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTodosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type SearchOptions = {
  q?: InputMaybe<Scalars['String']['input']>;
};

export type SliceOptions = {
  end?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type SortOptions = {
  field?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<SortOrderEnum>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Todo = {
  __typename?: 'Todo';
  completed?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type TodosPage = {
  __typename?: 'TodosPage';
  data?: Maybe<Array<Maybe<Todo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type UpdateAlbumInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateCommentInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePhotoInput = {
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTodoInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  address?: InputMaybe<AddressInput>;
  company?: InputMaybe<CompanyInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Address>;
  albums?: Maybe<AlbumsPage>;
  company?: Maybe<Company>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<PostsPage>;
  todos?: Maybe<TodosPage>;
  username?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};


export type UserAlbumsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type UserPostsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type UserTodosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type UsersPage = {
  __typename?: 'UsersPage';
  data?: Maybe<Array<Maybe<User>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type GetPostsQueryVariables = Exact<{
  options?: InputMaybe<PageQueryOptions>;
}>;


export type GetPostsQuery = { __typename?: 'Query', posts?: { __typename?: 'PostsPage', data?: Array<{ __typename?: 'Post', id?: string | null, title?: string | null, body?: string | null } | null> | null, meta?: { __typename?: 'PageMetadata', totalCount?: number | null } | null } | null };

export type GetPostQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id?: string | null, title?: string | null, body?: string | null, user?: { __typename?: 'User', id?: string | null, name?: string | null } | null } | null };

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String']['input'];
  body: Scalars['String']['input'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: { __typename?: 'Post', id?: string | null, title?: string | null, body?: string | null } | null };

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  body: Scalars['String']['input'];
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost?: { __typename?: 'Post', id?: string | null, title?: string | null, body?: string | null } | null };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost?: boolean | null };


export const GetPostsDocument = gql`
    query GetPosts($options: PageQueryOptions) {
  posts(options: $options) {
    data {
      id
      title
      body
    }
    meta {
      totalCount
    }
  }
}
    `;
export const GetPostDocument = gql`
    query GetPost($id: ID!) {
  post(id: $id) {
    id
    title
    body
    user {
      id
      name
    }
  }
}
    `;
export const CreatePostDocument = gql`
    mutation CreatePost($title: String!, $body: String!) {
  createPost(input: {title: $title, body: $body}) {
    id
    title
    body
  }
}
    `;
export const UpdatePostDocument = gql`
    mutation UpdatePost($id: ID!, $title: String!, $body: String!) {
  updatePost(id: $id, input: {title: $title, body: $body}) {
    id
    title
    body
  }
}
    `;
export const DeletePostDocument = gql`
    mutation DeletePost($id: ID!) {
  deletePost(id: $id)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetPostsDocumentString = print(GetPostsDocument);
const GetPostDocumentString = print(GetPostDocument);
const CreatePostDocumentString = print(CreatePostDocument);
const UpdatePostDocumentString = print(UpdatePostDocument);
const DeletePostDocumentString = print(DeletePostDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetPosts(variables?: GetPostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetPostsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetPostsQuery>(GetPostsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPosts', 'query');
    },
    GetPost(variables: GetPostQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetPostQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetPostQuery>(GetPostDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPost', 'query');
    },
    CreatePost(variables: CreatePostMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CreatePostMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreatePostMutation>(CreatePostDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreatePost', 'mutation');
    },
    UpdatePost(variables: UpdatePostMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UpdatePostMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdatePostMutation>(UpdatePostDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdatePost', 'mutation');
    },
    DeletePost(variables: DeletePostMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeletePostMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeletePostMutation>(DeletePostDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeletePost', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;