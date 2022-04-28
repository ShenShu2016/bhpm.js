/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($id: ID!) {
    getUserInfo(id: $id) {
      id
      email
      userName
      createdAt
      updatedAt
    }
  }
`;
export const listUserInfos = /* GraphQL */ `
  query ListUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        userName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
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
      owner
      createdAt
      updatedAt
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
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHomePageCarouse = /* GraphQL */ `
  query GetHomePageCarouse($id: ID!) {
    getHomePageCarouse(id: $id) {
      id
      title
      titleEng
      sourceUrl
      description
      descriptionEng
      sourceType
      auction {
        id
        active
        company
        description
        auctionStartDate
        auctionEndDate
        lot {
          nextToken
        }
        bidHistories {
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
      homePageCarouseAuctionId
    }
  }
`;
export const listHomePageCarouses = /* GraphQL */ `
  query ListHomePageCarouses(
    $filter: ModelHomePageCarouseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomePageCarouses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        titleEng
        sourceUrl
        description
        descriptionEng
        sourceType
        auction {
          id
          active
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
        homePageCarouseAuctionId
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
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
          categoryAuctionItemsId
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
export const getAuction = /* GraphQL */ `
  query GetAuction($id: ID!) {
    getAuction(id: $id) {
      id
      active
      company
      description
      auctionStartDate
      auctionEndDate
      lot {
        items {
          id
          lotOrder
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotStatus
          auctionLotId
          createdAt
          updatedAt
          lotAuctionItemId
        }
        nextToken
      }
      bidHistories {
        items {
          id
          bidPrice
          auctionBidHistoriesId
          userNumber
          bidHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          lotBidHistoriesId
        }
        nextToken
      }
      bidIncrementPriceList
      auctionUserLimitations {
        items {
          id
          maxUserBidPrice
          limitStatus
          createdAt
          updatedAt
          owner
          auctionAuctionUserLimitationsId
        }
        nextToken
      }
      auctionUserNumbers {
        items {
          id
          number
          createdAt
          updatedAt
          owner
          auctionAuctionUserNumbersId
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
    $filter: ModelAuctionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuctions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        active
        company
        description
        auctionStartDate
        auctionEndDate
        lot {
          nextToken
        }
        bidHistories {
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
export const getMyFavorite = /* GraphQL */ `
  query GetMyFavorite($id: ID!) {
    getMyFavorite(id: $id) {
      id
      lot {
        id
        lotOrder
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotStatus
        auctionLotId
        auction {
          id
          active
          company
          description
          auctionStartDate
          auctionEndDate
          bidIncrementPriceList
          createdAt
          updatedAt
        }
        auctionItem {
          id
          name
          title
          description
          titleEng
          descriptionEng
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
          categoryAuctionItemsId
        }
        bidHistories {
          nextToken
        }
        createdAt
        updatedAt
        myFavorites {
          nextToken
        }
        lotAuctionItemId
      }
      createdAt
      updatedAt
      owner
      lotMyFavoritesId
    }
  }
`;
export const listMyFavorites = /* GraphQL */ `
  query ListMyFavorites(
    $filter: ModelMyFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lot {
          id
          lotOrder
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotStatus
          auctionLotId
          createdAt
          updatedAt
          lotAuctionItemId
        }
        createdAt
        updatedAt
        owner
        lotMyFavoritesId
      }
      nextToken
    }
  }
`;
export const getLot = /* GraphQL */ `
  query GetLot($id: ID!) {
    getLot(id: $id) {
      id
      lotOrder
      startingPrice
      estimatedPriceMin
      estimatedPriceMax
      lotStatus
      auctionLotId
      auction {
        id
        active
        company
        description
        auctionStartDate
        auctionEndDate
        lot {
          nextToken
        }
        bidHistories {
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
      auctionItem {
        id
        name
        title
        description
        titleEng
        descriptionEng
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
        categoryAuctionItemsId
      }
      bidHistories {
        items {
          id
          bidPrice
          auctionBidHistoriesId
          userNumber
          bidHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          lotBidHistoriesId
        }
        nextToken
      }
      createdAt
      updatedAt
      myFavorites {
        items {
          id
          createdAt
          updatedAt
          owner
          lotMyFavoritesId
        }
        nextToken
      }
      lotAuctionItemId
    }
  }
`;
export const listLots = /* GraphQL */ `
  query ListLots(
    $filter: ModelLotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lotOrder
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotStatus
        auctionLotId
        auction {
          id
          active
          company
          description
          auctionStartDate
          auctionEndDate
          bidIncrementPriceList
          createdAt
          updatedAt
        }
        auctionItem {
          id
          name
          title
          description
          titleEng
          descriptionEng
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
          categoryAuctionItemsId
        }
        bidHistories {
          nextToken
        }
        createdAt
        updatedAt
        myFavorites {
          nextToken
        }
        lotAuctionItemId
      }
      nextToken
    }
  }
`;
export const lotSortByLotOrder = /* GraphQL */ `
  query LotSortByLotOrder(
    $auctionLotId: ID!
    $lotOrder: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lotSortByLotOrder(
      auctionLotId: $auctionLotId
      lotOrder: $lotOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        lotOrder
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotStatus
        auctionLotId
        auction {
          id
          active
          company
          description
          auctionStartDate
          auctionEndDate
          bidIncrementPriceList
          createdAt
          updatedAt
        }
        auctionItem {
          id
          name
          title
          description
          titleEng
          descriptionEng
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
          categoryAuctionItemsId
        }
        bidHistories {
          nextToken
        }
        createdAt
        updatedAt
        myFavorites {
          nextToken
        }
        lotAuctionItemId
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
      categoryAuctionItemsId
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
        categoryAuctionItemsId
      }
      nextToken
    }
  }
`;
export const getBidHistory = /* GraphQL */ `
  query GetBidHistory($id: ID!) {
    getBidHistory(id: $id) {
      id
      bidPrice
      auctionBidHistoriesId
      auction {
        id
        active
        company
        description
        auctionStartDate
        auctionEndDate
        lot {
          nextToken
        }
        bidHistories {
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
      lot {
        id
        lotOrder
        startingPrice
        estimatedPriceMin
        estimatedPriceMax
        lotStatus
        auctionLotId
        auction {
          id
          active
          company
          description
          auctionStartDate
          auctionEndDate
          bidIncrementPriceList
          createdAt
          updatedAt
        }
        auctionItem {
          id
          name
          title
          description
          titleEng
          descriptionEng
          imgUrls
          condition
          provenance
          createdAt
          updatedAt
          categoryAuctionItemsId
        }
        bidHistories {
          nextToken
        }
        createdAt
        updatedAt
        myFavorites {
          nextToken
        }
        lotAuctionItemId
      }
      userNumber
      bidHistoryStatus
      bidForm
      createdAt
      updatedAt
      owner
      lotBidHistoriesId
    }
  }
`;
export const listBidHistories = /* GraphQL */ `
  query ListBidHistories(
    $filter: ModelBidHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBidHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bidPrice
        auctionBidHistoriesId
        auction {
          id
          active
          company
          description
          auctionStartDate
          auctionEndDate
          bidIncrementPriceList
          createdAt
          updatedAt
        }
        lot {
          id
          lotOrder
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotStatus
          auctionLotId
          createdAt
          updatedAt
          lotAuctionItemId
        }
        userNumber
        bidHistoryStatus
        bidForm
        createdAt
        updatedAt
        owner
        lotBidHistoriesId
      }
      nextToken
    }
  }
`;
export const bidHistorySortByCreatedAt = /* GraphQL */ `
  query BidHistorySortByCreatedAt(
    $auctionBidHistoriesId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBidHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BidHistorySortByCreatedAt(
      auctionBidHistoriesId: $auctionBidHistoriesId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bidPrice
        auctionBidHistoriesId
        auction {
          id
          active
          company
          description
          auctionStartDate
          auctionEndDate
          bidIncrementPriceList
          createdAt
          updatedAt
        }
        lot {
          id
          lotOrder
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotStatus
          auctionLotId
          createdAt
          updatedAt
          lotAuctionItemId
        }
        userNumber
        bidHistoryStatus
        bidForm
        createdAt
        updatedAt
        owner
        lotBidHistoriesId
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
      auction {
        id
        active
        company
        description
        auctionStartDate
        auctionEndDate
        lot {
          nextToken
        }
        bidHistories {
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
      auctionAuctionUserLimitationsId
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
        auction {
          id
          active
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
        auctionAuctionUserLimitationsId
      }
      nextToken
    }
  }
`;
export const getMySucceedBid = /* GraphQL */ `
  query GetMySucceedBid($id: ID!) {
    getMySucceedBid(id: $id) {
      id
      auction {
        id
        active
        company
        description
        auctionStartDate
        auctionEndDate
        lot {
          nextToken
        }
        bidHistories {
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
      bidHistory {
        id
        bidPrice
        auctionBidHistoriesId
        auction {
          id
          active
          company
          description
          auctionStartDate
          auctionEndDate
          bidIncrementPriceList
          createdAt
          updatedAt
        }
        lot {
          id
          lotOrder
          startingPrice
          estimatedPriceMin
          estimatedPriceMax
          lotStatus
          auctionLotId
          createdAt
          updatedAt
          lotAuctionItemId
        }
        userNumber
        bidHistoryStatus
        bidForm
        createdAt
        updatedAt
        owner
        lotBidHistoriesId
      }
      createdAt
      updatedAt
      owner
      mySucceedBidAuctionId
      mySucceedBidBidHistoryId
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
        auction {
          id
          active
          company
          description
          auctionStartDate
          auctionEndDate
          bidIncrementPriceList
          createdAt
          updatedAt
        }
        bidHistory {
          id
          bidPrice
          auctionBidHistoriesId
          userNumber
          bidHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          lotBidHistoriesId
        }
        createdAt
        updatedAt
        owner
        mySucceedBidAuctionId
        mySucceedBidBidHistoryId
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
      auction {
        id
        active
        company
        description
        auctionStartDate
        auctionEndDate
        lot {
          nextToken
        }
        bidHistories {
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
      auctionAuctionUserNumbersId
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
        auction {
          id
          active
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
        auctionAuctionUserNumbersId
      }
      nextToken
    }
  }
`;
