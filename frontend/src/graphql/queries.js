/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryName
        auctionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAuctions = /* GraphQL */ `
  query GetAuctions($id: ID!) {
    getAuctions(id: $id) {
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
export const listAuctions = /* GraphQL */ `
  query ListAuctions(
    $filter: ModelAuctionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuctions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLots = /* GraphQL */ `
  query GetLots($id: ID!) {
    getLots(id: $id) {
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
export const listLots = /* GraphQL */ `
  query ListLots(
    $filter: ModelLotsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAuctionItem = /* GraphQL */ `
  query GetAuctionItem($id: ID!) {
    getAuctionItem(id: $id) {
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
export const listAuctionItems = /* GraphQL */ `
  query ListAuctionItems(
    $filter: ModelAuctionItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuctionItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        imgURL
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBidItemHistory = /* GraphQL */ `
  query GetBidItemHistory($id: ID!) {
    getBidItemHistory(id: $id) {
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
export const listBidItemHistories = /* GraphQL */ `
  query ListBidItemHistories(
    $filter: ModelBidItemHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBidItemHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bidPrice
        auctionsID
        auctions {
          id
          company
          description
          auctionStartDate
          auctionEndDate
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
