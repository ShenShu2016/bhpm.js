/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      name
      companyName
      address
      fax
      idPassport
      title
      phone
      phone2
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        companyName
        address
        fax
        idPassport
        title
        phone
        phone2
        email
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
          titleEng
          descriptionEng
          categoryID
          imgUrls
          condition
          provenance
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
          userNumber
          bidItemHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bidIncrementPriceList
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
      auctionUserNumbers {
        items {
          id
          number
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
        bidIncrementPriceList
        auctionUserLimitations {
          nextToken
        }
        auctionUserNumbers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMyCollection = /* GraphQL */ `
  query GetMyCollection($id: ID!) {
    getMyCollection(id: $id) {
      id
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
          bidIncrementPriceList
          createdAt
          updatedAt
        }
        auctionItemID
        auctionItem {
          id
          name
          title
          description
          titleEng
          descriptionEng
          categoryID
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
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
export const listMyCollections = /* GraphQL */ `
  query ListMyCollections(
    $filter: ModelMyCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        bidIncrementPriceList
        auctionUserLimitations {
          nextToken
        }
        auctionUserNumbers {
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
        titleEng
        descriptionEng
        categoryID
        category {
          id
          categoryName
          createdAt
          updatedAt
        }
        imgUrls
        condition
        provenance
        createdAt
        updatedAt
      }
      bidItemHistories {
        items {
          id
          bidPrice
          auctionsID
          lotsID
          userNumber
          bidItemHistoryStatus
          bidForm
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
          bidIncrementPriceList
          createdAt
          updatedAt
        }
        auctionItemID
        auctionItem {
          id
          name
          title
          description
          titleEng
          descriptionEng
          categoryID
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
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
          bidIncrementPriceList
          createdAt
          updatedAt
        }
        auctionItemID
        auctionItem {
          id
          name
          title
          description
          titleEng
          descriptionEng
          categoryID
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
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
export const getAuctionItem = /* GraphQL */ `
  query GetAuctionItem($id: ID!) {
    getAuctionItem(id: $id) {
      id
      name
      title
      description
      titleEng
      descriptionEng
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
      imgUrls
      condition
      provenance
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
        titleEng
        descriptionEng
        categoryID
        category {
          id
          categoryName
          createdAt
          updatedAt
        }
        imgUrls
        condition
        provenance
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
        bidIncrementPriceList
        auctionUserLimitations {
          nextToken
        }
        auctionUserNumbers {
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
          bidIncrementPriceList
          createdAt
          updatedAt
        }
        auctionItemID
        auctionItem {
          id
          name
          title
          description
          titleEng
          descriptionEng
          categoryID
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
        }
        bidItemHistories {
          nextToken
        }
        createdAt
        updatedAt
      }
      userNumber
      bidItemHistoryStatus
      bidForm
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
          bidIncrementPriceList
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
          createdAt
          updatedAt
        }
        userNumber
        bidItemHistoryStatus
        bidForm
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
          bidIncrementPriceList
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
          createdAt
          updatedAt
        }
        userNumber
        bidItemHistoryStatus
        bidForm
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
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
        bidIncrementPriceList
        auctionUserLimitations {
          nextToken
        }
        auctionUserNumbers {
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
          bidIncrementPriceList
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
export const getMySucceedBid = /* GraphQL */ `
  query GetMySucceedBid($id: ID!) {
    getMySucceedBid(id: $id) {
      id
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
        bidIncrementPriceList
        auctionUserLimitations {
          nextToken
        }
        auctionUserNumbers {
          nextToken
        }
        createdAt
        updatedAt
      }
      bidItemHistoryID
      bidItemHistory {
        id
        bidPrice
        auctionsID
        auctions {
          id
          company
          description
          auctionStartDate
          auctionEndDate
          bidIncrementPriceList
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
          createdAt
          updatedAt
        }
        userNumber
        bidItemHistoryStatus
        bidForm
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMySucceedBids = /* GraphQL */ `
  query ListMySucceedBids(
    $filter: ModelMySucceedBidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMySucceedBids(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        auctionsID
        auctions {
          id
          company
          description
          auctionStartDate
          auctionEndDate
          bidIncrementPriceList
          createdAt
          updatedAt
        }
        bidItemHistoryID
        bidItemHistory {
          id
          bidPrice
          auctionsID
          lotsID
          userNumber
          bidItemHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAuctionUserNumber = /* GraphQL */ `
  query GetAuctionUserNumber($id: ID!) {
    getAuctionUserNumber(id: $id) {
      id
      number
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
        bidIncrementPriceList
        auctionUserLimitations {
          nextToken
        }
        auctionUserNumbers {
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
export const listAuctionUserNumbers = /* GraphQL */ `
  query ListAuctionUserNumbers(
    $filter: ModelAuctionUserNumberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuctionUserNumbers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        number
        auctionsID
        auctions {
          id
          company
          description
          auctionStartDate
          auctionEndDate
          bidIncrementPriceList
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
