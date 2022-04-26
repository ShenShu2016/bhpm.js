/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBidItemHistory = /* GraphQL */ `
  subscription OnCreateBidItemHistory($owner: String) {
    onCreateBidItemHistory(owner: $owner) {
      id
      bidPrice
      auctionsID
      auctions {
        id
        active
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
          active
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
        myFavorites {
          nextToken
        }
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
export const onUpdateBidItemHistory = /* GraphQL */ `
  subscription OnUpdateBidItemHistory($owner: String) {
    onUpdateBidItemHistory(owner: $owner) {
      id
      bidPrice
      auctionsID
      auctions {
        id
        active
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
          active
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
        myFavorites {
          nextToken
        }
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
export const onDeleteBidItemHistory = /* GraphQL */ `
  subscription OnDeleteBidItemHistory($owner: String) {
    onDeleteBidItemHistory(owner: $owner) {
      id
      bidPrice
      auctionsID
      auctions {
        id
        active
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
          active
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
        myFavorites {
          nextToken
        }
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
export const onCreateAuctionUserLimitation = /* GraphQL */ `
  subscription OnCreateAuctionUserLimitation($owner: String) {
    onCreateAuctionUserLimitation(owner: $owner) {
      id
      maxUserBidPrice
      limitStatus
      auctionsID
      auctions {
        id
        active
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
export const onUpdateAuctionUserLimitation = /* GraphQL */ `
  subscription OnUpdateAuctionUserLimitation($owner: String) {
    onUpdateAuctionUserLimitation(owner: $owner) {
      id
      maxUserBidPrice
      limitStatus
      auctionsID
      auctions {
        id
        active
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
export const onDeleteAuctionUserLimitation = /* GraphQL */ `
  subscription OnDeleteAuctionUserLimitation($owner: String) {
    onDeleteAuctionUserLimitation(owner: $owner) {
      id
      maxUserBidPrice
      limitStatus
      auctionsID
      auctions {
        id
        active
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
export const onCreateMySucceedBid = /* GraphQL */ `
  subscription OnCreateMySucceedBid($owner: String) {
    onCreateMySucceedBid(owner: $owner) {
      id
      auctionsID
      auctions {
        id
        active
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
          active
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
export const onUpdateMySucceedBid = /* GraphQL */ `
  subscription OnUpdateMySucceedBid($owner: String) {
    onUpdateMySucceedBid(owner: $owner) {
      id
      auctionsID
      auctions {
        id
        active
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
          active
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
export const onDeleteMySucceedBid = /* GraphQL */ `
  subscription OnDeleteMySucceedBid($owner: String) {
    onDeleteMySucceedBid(owner: $owner) {
      id
      auctionsID
      auctions {
        id
        active
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
          active
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
export const onCreateAuctionUserNumber = /* GraphQL */ `
  subscription OnCreateAuctionUserNumber($owner: String) {
    onCreateAuctionUserNumber(owner: $owner) {
      id
      number
      auctionsID
      auctions {
        id
        active
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
export const onUpdateAuctionUserNumber = /* GraphQL */ `
  subscription OnUpdateAuctionUserNumber($owner: String) {
    onUpdateAuctionUserNumber(owner: $owner) {
      id
      number
      auctionsID
      auctions {
        id
        active
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
export const onDeleteAuctionUserNumber = /* GraphQL */ `
  subscription OnDeleteAuctionUserNumber($owner: String) {
    onDeleteAuctionUserNumber(owner: $owner) {
      id
      number
      auctionsID
      auctions {
        id
        active
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
