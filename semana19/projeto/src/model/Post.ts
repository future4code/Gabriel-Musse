export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

export class Post {
  constructor(
    private id: string,

    private photo: string,

    private description: string,

    private type: POST_TYPES,

    private createdAt: Date,

    private authorId: string
  ) {}

  getId() {
    return this.id;
  }

  getPhoto() {
    return this.photo;
  }

  getDescription() {
    return this.description;
  }

  getType() {
    return this.type;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  getAuthorId() {
    return this.authorId;
  }

  setId(id: string) {
    this.id = id;
  }

  setPhoto(photo: string) {
    this.photo = photo;
  }

  setDescription(description: string) {
    this.description = description;
  }

  setType(type: POST_TYPES) {
    this.type = type;
  }

  setCreatedAt(photo: string) {
    this.photo = photo;
  }

  setAuthorId(authorId: string) {
    this.authorId = authorId;
  }

  static toPostModel(post: any): Post {
    return new Post(
      post.id,
      post.photo,
      post.description,
      post.type,
      post.createdAt,
      post.authorId
    );
  }
}

export interface PostInputDTO {
  available: boolean;

  title: string;

  director: string;
}
