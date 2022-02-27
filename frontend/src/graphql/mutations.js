/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
      owner
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
      owner
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
      owner
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
        owner
      }
      content
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
        owner
      }
      content
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
        owner
      }
      content
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      categoryName
      auctionItems {
        items {
          id
          name
          title
          description
          categoryID
          imgURL
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      categoryName
      auctionItems {
        items {
          id
          name
          title
          description
          categoryID
          imgURL
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      categoryName
      auctionItems {
        items {
          id
          name
          title
          description
          categoryID
          imgURL
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAuctions = /* GraphQL */ `
  mutation CreateAuctions(
    $input: CreateAuctionsInput!
    $condition: ModelAuctionsConditionInput
  ) {
    createAuctions(input: $input, condition: $condition) {
      id
      company
      description
      auctionStartDate
      auctionEndDate
      lots {
        items {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          status
          auctionItemID
          createdAt
          updatedAt
        }
        nextToken
      }
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAuctions = /* GraphQL */ `
  mutation UpdateAuctions(
    $input: UpdateAuctionsInput!
    $condition: ModelAuctionsConditionInput
  ) {
    updateAuctions(input: $input, condition: $condition) {
      id
      company
      description
      auctionStartDate
      auctionEndDate
      lots {
        items {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          status
          auctionItemID
          createdAt
          updatedAt
        }
        nextToken
      }
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAuctions = /* GraphQL */ `
  mutation DeleteAuctions(
    $input: DeleteAuctionsInput!
    $condition: ModelAuctionsConditionInput
  ) {
    deleteAuctions(input: $input, condition: $condition) {
      id
      company
      description
      auctionStartDate
      auctionEndDate
      lots {
        items {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          status
          auctionItemID
          createdAt
          updatedAt
        }
        nextToken
      }
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLots = /* GraphQL */ `
  mutation CreateLots(
    $input: CreateLotsInput!
    $condition: ModelLotsConditionInput
  ) {
    createLots(input: $input, condition: $condition) {
      id
      lot
      startingPrice
      estimatedPriceMin
      estimatedPriceMax
      status
      auctionItemID
      auctionItem {
        id
        lot
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        status
        auctionItemID
        auctionItem {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          status
          auctionItemID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLots = /* GraphQL */ `
  mutation UpdateLots(
    $input: UpdateLotsInput!
    $condition: ModelLotsConditionInput
  ) {
    updateLots(input: $input, condition: $condition) {
      id
      lot
      startingPrice
      estimatedPriceMin
      estimatedPriceMax
      status
      auctionItemID
      auctionItem {
        id
        lot
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        status
        auctionItemID
        auctionItem {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          status
          auctionItemID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLots = /* GraphQL */ `
  mutation DeleteLots(
    $input: DeleteLotsInput!
    $condition: ModelLotsConditionInput
  ) {
    deleteLots(input: $input, condition: $condition) {
      id
      lot
      startingPrice
      estimatedPriceMin
      estimatedPriceMax
      status
      auctionItemID
      auctionItem {
        id
        lot
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        status
        auctionItemID
        auctionItem {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          status
          auctionItemID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAuctionItem = /* GraphQL */ `
  mutation CreateAuctionItem(
    $input: CreateAuctionItemInput!
    $condition: ModelAuctionItemConditionInput
  ) {
    createAuctionItem(input: $input, condition: $condition) {
      id
      name
      title
      description
      categoryID
      category {
        id
        categoryName
        auctionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      imgURL
      createdAt
      updatedAt
    }
  }
`;
export const updateAuctionItem = /* GraphQL */ `
  mutation UpdateAuctionItem(
    $input: UpdateAuctionItemInput!
    $condition: ModelAuctionItemConditionInput
  ) {
    updateAuctionItem(input: $input, condition: $condition) {
      id
      name
      title
      description
      categoryID
      category {
        id
        categoryName
        auctionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      imgURL
      createdAt
      updatedAt
    }
  }
`;
export const deleteAuctionItem = /* GraphQL */ `
  mutation DeleteAuctionItem(
    $input: DeleteAuctionItemInput!
    $condition: ModelAuctionItemConditionInput
  ) {
    deleteAuctionItem(input: $input, condition: $condition) {
      id
      name
      title
      description
      categoryID
      category {
        id
        categoryName
        auctionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      imgURL
      createdAt
      updatedAt
    }
  }
`;
export const createBidItemHistory = /* GraphQL */ `
  mutation CreateBidItemHistory(
    $input: CreateBidItemHistoryInput!
    $condition: ModelBidItemHistoryConditionInput
  ) {
    createBidItemHistory(input: $input, condition: $condition) {
      id
      bidPrice
      auctionsID
      auctions {
        id
        company
        description
        auctionStartDate
        auctionEndDate
        lots {
          nextToken
        }
        bidItemHistories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBidItemHistory = /* GraphQL */ `
  mutation UpdateBidItemHistory(
    $input: UpdateBidItemHistoryInput!
    $condition: ModelBidItemHistoryConditionInput
  ) {
    updateBidItemHistory(input: $input, condition: $condition) {
      id
      bidPrice
      auctionsID
      auctions {
        id
        company
        description
        auctionStartDate
        auctionEndDate
        lots {
          nextToken
        }
        bidItemHistories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBidItemHistory = /* GraphQL */ `
  mutation DeleteBidItemHistory(
    $input: DeleteBidItemHistoryInput!
    $condition: ModelBidItemHistoryConditionInput
  ) {
    deleteBidItemHistory(input: $input, condition: $condition) {
      id
      bidPrice
      auctionsID
      auctions {
        id
        company
        description
        auctionStartDate
        auctionEndDate
        lots {
          nextToken
        }
        bidItemHistories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
