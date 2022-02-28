/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
          imgUrl
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
          imgUrl
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
          imgUrl
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
          auctionsID
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
      auctionStatus
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
          auctionsID
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
      auctionStatus
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
          auctionsID
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
      auctionStatus
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
        auctionStatus
        createdAt
        updatedAt
      }
      auctionItemID
      auctionItem {
        id
        name
        title
        description
        categoryID
        category {
          id
          categoryName
          createdAt
          updatedAt
        }
        imgUrl
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
        auctionStatus
        createdAt
        updatedAt
      }
      auctionItemID
      auctionItem {
        id
        name
        title
        description
        categoryID
        category {
          id
          categoryName
          createdAt
          updatedAt
        }
        imgUrl
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
        auctionStatus
        createdAt
        updatedAt
      }
      auctionItemID
      auctionItem {
        id
        name
        title
        description
        categoryID
        category {
          id
          categoryName
          createdAt
          updatedAt
        }
        imgUrl
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
      imgUrl
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
      imgUrl
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
      imgUrl
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
        auctionStatus
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
        auctionStatus
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
        auctionStatus
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
