/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($owner: String) {
    onCreateBlog(owner: $owner) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($owner: String) {
    onUpdateBlog(owner: $owner) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($owner: String) {
    onDeleteBlog(owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateAuctions = /* GraphQL */ `
  subscription OnCreateAuctions {
    onCreateAuctions {
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
export const onUpdateAuctions = /* GraphQL */ `
  subscription OnUpdateAuctions {
    onUpdateAuctions {
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
export const onDeleteAuctions = /* GraphQL */ `
  subscription OnDeleteAuctions {
    onDeleteAuctions {
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
export const onCreateLots = /* GraphQL */ `
  subscription OnCreateLots {
    onCreateLots {
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
export const onUpdateLots = /* GraphQL */ `
  subscription OnUpdateLots {
    onUpdateLots {
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
export const onDeleteLots = /* GraphQL */ `
  subscription OnDeleteLots {
    onDeleteLots {
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
export const onCreateAuctionItem = /* GraphQL */ `
  subscription OnCreateAuctionItem {
    onCreateAuctionItem {
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
export const onUpdateAuctionItem = /* GraphQL */ `
  subscription OnUpdateAuctionItem {
    onUpdateAuctionItem {
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
export const onDeleteAuctionItem = /* GraphQL */ `
  subscription OnDeleteAuctionItem {
    onDeleteAuctionItem {
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
export const onCreateBidItemHistory = /* GraphQL */ `
  subscription OnCreateBidItemHistory($owner: String) {
    onCreateBidItemHistory(owner: $owner) {
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
export const onUpdateBidItemHistory = /* GraphQL */ `
  subscription OnUpdateBidItemHistory($owner: String) {
    onUpdateBidItemHistory(owner: $owner) {
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
export const onDeleteBidItemHistory = /* GraphQL */ `
  subscription OnDeleteBidItemHistory($owner: String) {
    onDeleteBidItemHistory(owner: $owner) {
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
