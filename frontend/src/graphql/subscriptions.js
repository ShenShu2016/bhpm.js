/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLot = /* GraphQL */ `
  subscription OnCreateLot {
    onCreateLot {
      id
      lotOrder
      startingPrice
      estimatedPriceMin
      estimatedPriceMax
      lotStatus
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
          userNumber
          bidHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          auctionBidHistoriesId
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
      auctionLotId
      lotAuctionItemId
    }
  }
`;
export const onUpdateLot = /* GraphQL */ `
  subscription OnUpdateLot {
    onUpdateLot {
      id
      lotOrder
      startingPrice
      estimatedPriceMin
      estimatedPriceMax
      lotStatus
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
          userNumber
          bidHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          auctionBidHistoriesId
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
      auctionLotId
      lotAuctionItemId
    }
  }
`;
export const onDeleteLot = /* GraphQL */ `
  subscription OnDeleteLot {
    onDeleteLot {
      id
      lotOrder
      startingPrice
      estimatedPriceMin
      estimatedPriceMax
      lotStatus
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
          userNumber
          bidHistoryStatus
          bidForm
          createdAt
          updatedAt
          owner
          auctionBidHistoriesId
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
      auctionLotId
      lotAuctionItemId
    }
  }
`;
export const onCreateBidHistory = /* GraphQL */ `
  subscription OnCreateBidHistory($owner: String) {
    onCreateBidHistory(owner: $owner) {
      id
      bidPrice
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
        auctionLotId
        lotAuctionItemId
      }
      userNumber
      bidHistoryStatus
      bidForm
      createdAt
      updatedAt
      owner
      auctionBidHistoriesId
      lotBidHistoriesId
    }
  }
`;
export const onUpdateBidHistory = /* GraphQL */ `
  subscription OnUpdateBidHistory($owner: String) {
    onUpdateBidHistory(owner: $owner) {
      id
      bidPrice
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
        auctionLotId
        lotAuctionItemId
      }
      userNumber
      bidHistoryStatus
      bidForm
      createdAt
      updatedAt
      owner
      auctionBidHistoriesId
      lotBidHistoriesId
    }
  }
`;
export const onDeleteBidHistory = /* GraphQL */ `
  subscription OnDeleteBidHistory($owner: String) {
    onDeleteBidHistory(owner: $owner) {
      id
      bidPrice
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
        auctionLotId
        lotAuctionItemId
      }
      userNumber
      bidHistoryStatus
      bidForm
      createdAt
      updatedAt
      owner
      auctionBidHistoriesId
      lotBidHistoriesId
    }
  }
`;
export const onCreateAuctionUserLimitation = /* GraphQL */ `
  subscription OnCreateAuctionUserLimitation($owner: String) {
    onCreateAuctionUserLimitation(owner: $owner) {
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
export const onUpdateAuctionUserLimitation = /* GraphQL */ `
  subscription OnUpdateAuctionUserLimitation($owner: String) {
    onUpdateAuctionUserLimitation(owner: $owner) {
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
export const onDeleteAuctionUserLimitation = /* GraphQL */ `
  subscription OnDeleteAuctionUserLimitation($owner: String) {
    onDeleteAuctionUserLimitation(owner: $owner) {
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
export const onCreateMySucceedBid = /* GraphQL */ `
  subscription OnCreateMySucceedBid($owner: String) {
    onCreateMySucceedBid(owner: $owner) {
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
          createdAt
          updatedAt
          auctionLotId
          lotAuctionItemId
        }
        userNumber
        bidHistoryStatus
        bidForm
        createdAt
        updatedAt
        owner
        auctionBidHistoriesId
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
export const onUpdateMySucceedBid = /* GraphQL */ `
  subscription OnUpdateMySucceedBid($owner: String) {
    onUpdateMySucceedBid(owner: $owner) {
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
          createdAt
          updatedAt
          auctionLotId
          lotAuctionItemId
        }
        userNumber
        bidHistoryStatus
        bidForm
        createdAt
        updatedAt
        owner
        auctionBidHistoriesId
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
export const onDeleteMySucceedBid = /* GraphQL */ `
  subscription OnDeleteMySucceedBid($owner: String) {
    onDeleteMySucceedBid(owner: $owner) {
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
          createdAt
          updatedAt
          auctionLotId
          lotAuctionItemId
        }
        userNumber
        bidHistoryStatus
        bidForm
        createdAt
        updatedAt
        owner
        auctionBidHistoriesId
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
export const onCreateAuctionUserNumber = /* GraphQL */ `
  subscription OnCreateAuctionUserNumber($owner: String) {
    onCreateAuctionUserNumber(owner: $owner) {
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
export const onUpdateAuctionUserNumber = /* GraphQL */ `
  subscription OnUpdateAuctionUserNumber($owner: String) {
    onUpdateAuctionUserNumber(owner: $owner) {
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
export const onDeleteAuctionUserNumber = /* GraphQL */ `
  subscription OnDeleteAuctionUserNumber($owner: String) {
    onDeleteAuctionUserNumber(owner: $owner) {
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
