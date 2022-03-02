/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAuctionUserLimitation = /* GraphQL */ `
  query GetAuctionUserLimitation($id: ID!) {
    getAuctionUserLimitation(id: $id) {
      id
      maxUserBidPrice
      limitStatus
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
        bidIncrements {
          nextToken
        }
        auctionUserLimitations {
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
export const listAuctionUserLimitations = /* GraphQL */ `
  query ListAuctionUserLimitations(
    $filter: ModelAuctionUserLimitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuctionUserLimitations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        maxUserBidPrice
        limitStatus
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
          imgUrl
          imgUrls
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
          lotsStatus
          auctionsID
          auctionItemID
          auctionStatus
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
          lotsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bidIncrements {
        items {
          id
          bidIncrementPrice
          auctionsID
          lotsID
          createdAt
          updatedAt
        }
        nextToken
      }
      auctionUserLimitations {
        items {
          id
          maxUserBidPrice
          limitStatus
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
        bidIncrements {
          nextToken
        }
        auctionUserLimitations {
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
      lotsStatus
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
        bidIncrements {
          nextToken
        }
        auctionUserLimitations {
          nextToken
        }
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
        imgUrls
        createdAt
        updatedAt
      }
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          lotsID
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
        lotsStatus
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
        auctionItemID
        auctionItem {
          id
          name
          title
          description
          categoryID
          imgUrl
          imgUrls
          createdAt
          updatedAt
        }
        bidItemHistories {
          nextToken
        }
        auctionStatus
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const lotsSortByLot = /* GraphQL */ `
  query LotsSortByLot(
    $auctionsID: ID!
    $lot: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLotsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lotsSortByLot(
      auctionsID: $auctionsID
      lot: $lot
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        lot
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotsStatus
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
        auctionItemID
        auctionItem {
          id
          name
          title
          description
          categoryID
          imgUrl
          imgUrls
          createdAt
          updatedAt
        }
        bidItemHistories {
          nextToken
        }
        auctionStatus
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
      imgUrl
      imgUrls
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
        imgUrl
        imgUrls
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
        bidIncrements {
          nextToken
        }
        auctionUserLimitations {
          nextToken
        }
        createdAt
        updatedAt
      }
      lotsID
      lots {
        id
        lot
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotsStatus
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
        auctionItemID
        auctionItem {
          id
          name
          title
          description
          categoryID
          imgUrl
          imgUrls
          createdAt
          updatedAt
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
        lotsID
        lots {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotsStatus
          auctionsID
          auctionItemID
          auctionStatus
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
export const bidItemHistorySortByCreatedAt = /* GraphQL */ `
  query BidItemHistorySortByCreatedAt(
    $auctionsID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBidItemHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BidItemHistorySortByCreatedAt(
      auctionsID: $auctionsID
      createdAt: $createdAt
      sortDirection: $sortDirection
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
        lotsID
        lots {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotsStatus
          auctionsID
          auctionItemID
          auctionStatus
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
export const getBidIncrement = /* GraphQL */ `
  query GetBidIncrement($id: ID!) {
    getBidIncrement(id: $id) {
      id
      bidIncrementPrice
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
        bidIncrements {
          nextToken
        }
        auctionUserLimitations {
          nextToken
        }
        createdAt
        updatedAt
      }
      lotsID
      lots {
        id
        lot
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotsStatus
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
        auctionItemID
        auctionItem {
          id
          name
          title
          description
          categoryID
          imgUrl
          imgUrls
          createdAt
          updatedAt
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
    }
  }
`;
export const listBidIncrements = /* GraphQL */ `
  query ListBidIncrements(
    $filter: ModelBidIncrementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBidIncrements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bidIncrementPrice
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
        lotsID
        lots {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotsStatus
          auctionsID
          auctionItemID
          auctionStatus
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
export const bidIncrementSortByBidIncrementPrice = /* GraphQL */ `
  query BidIncrementSortByBidIncrementPrice(
    $auctionsID: ID!
    $bidIncrementPrice: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBidIncrementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BidIncrementSortByBidIncrementPrice(
      auctionsID: $auctionsID
      bidIncrementPrice: $bidIncrementPrice
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bidIncrementPrice
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
        lotsID
        lots {
          id
          lot
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotsStatus
          auctionsID
          auctionItemID
          auctionStatus
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
